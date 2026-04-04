import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATA_SOURCE_ID = "f0410bae-e72c-4a88-b999-84e216df2fcf";

// ── 타입 ──
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  keywords: string;
  thumbnail: string;
  author: string;
  date: string;
  published: boolean;
}

// ── 프로퍼티 헬퍼 ──
/* eslint-disable @typescript-eslint/no-explicit-any */
function text(prop: any): string {
  if (!prop) return "";
  if (prop.type === "title") return prop.title.map((t: any) => t.plain_text).join("");
  if (prop.type === "rich_text") return prop.rich_text.map((t: any) => t.plain_text).join("");
  return "";
}

function pageToPost(page: any): BlogPost {
  const p = page.properties;
  return {
    id: page.id,
    title: text(p["제목"]),
    slug: text(p["슬러그"]),
    description: text(p["설명"]),
    category: p["카테고리"]?.select?.name ?? "",
    keywords: text(p["키워드"]),
    thumbnail: p["썸네일"]?.url ?? "",
    author: text(p["작성자"]),
    date: p["작성일"]?.date?.start ?? "",
    published: p["공개여부"]?.checkbox ?? false,
  };
}

// ── 페이지의 첫 번째 이미지 블록 URL 추출 ──
async function getFirstImageUrl(pageId: string): Promise<string> {
  try {
    const res = await notion.blocks.children.list({ block_id: pageId, page_size: 10 });
    for (const block of res.results as any[]) {
      if (block.type === "image") {
        const img = block.image;
        if (img.type === "file") return img.file.url;
        if (img.type === "external") return img.external?.url ?? "";
      }
    }
  } catch { /* ignore */ }
  return "";
}

// ── 페이지 커버 이미지 URL 추출 ──
function getCoverUrl(page: any): string {
  if (!page.cover) return "";
  if (page.cover.type === "file") return page.cover.file.url;
  if (page.cover.type === "external") return page.cover.external?.url ?? "";
  return "";
}

// ── 썸네일 결정: 썸네일 속성 > 커버 이미지 > 첫 번째 이미지 블록 ──
async function resolveThumbnail(page: any): Promise<string> {
  const propUrl = page.properties["썸네일"]?.url;
  if (propUrl) return propUrl;
  const cover = getCoverUrl(page);
  if (cover) return cover;
  return getFirstImageUrl(page.id);
}

// ── 공개 포스트 목록 ──
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const res = await (notion as any).dataSources.query({
    data_source_id: DATA_SOURCE_ID,
    filter: { property: "공개여부", checkbox: { equals: true } },
    sorts: [{ property: "작성일", direction: "descending" }],
  });
  const posts = await Promise.all(
    res.results.map(async (page: any) => {
      const post = pageToPost(page);
      if (!post.thumbnail) post.thumbnail = await resolveThumbnail(page);
      return post;
    })
  );
  return posts;
}

// ── 슬러그로 포스트 조회 ──
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const res = await (notion as any).dataSources.query({
    data_source_id: DATA_SOURCE_ID,
    filter: {
      and: [
        { property: "슬러그", rich_text: { equals: slug } },
        { property: "공개여부", checkbox: { equals: true } },
      ],
    },
  });
  const page = res.results[0];
  if (!page) return null;
  const post = pageToPost(page);
  if (!post.thumbnail) post.thumbnail = await resolveThumbnail(page);
  return post;
}

// ── 블록(본문) → HTML 변환 ──
function richTextToHtml(richTexts: any[]): string {
  if (!richTexts) return "";
  return richTexts
    .map((t: any) => {
      let html = (t.plain_text || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      if (t.annotations?.bold) html = `<strong>${html}</strong>`;
      if (t.annotations?.italic) html = `<em>${html}</em>`;
      if (t.annotations?.strikethrough) html = `<del>${html}</del>`;
      if (t.annotations?.code) html = `<code class="bg-white/10 px-1.5 py-0.5 rounded text-brand-500 text-sm">${html}</code>`;
      if (t.href) html = `<a href="${t.href}" target="_blank" rel="noopener noreferrer" class="text-brand-500 underline underline-offset-2 hover:text-brand-400">${html}</a>`;
      return html;
    })
    .join("");
}

export async function getPostContent(pageId: string): Promise<string> {
  const blocks: any[] = [];
  let cursor: string | undefined;

  do {
    const res = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });
    blocks.push(...res.results);
    cursor = res.has_more ? (res.next_cursor ?? undefined) : undefined;
  } while (cursor);

  return blocks.map(blockToHtml).join("\n");
}

function blockToHtml(block: any): string {
  const type = block.type;
  const data = block[type];
  if (!data) return "";

  switch (type) {
    case "paragraph":
      return `<p class="mb-5 leading-relaxed">${richTextToHtml(data.rich_text)}</p>`;
    case "heading_1":
      return `<h1 class="text-2xl md:text-3xl font-bold mt-10 mb-4">${richTextToHtml(data.rich_text)}</h1>`;
    case "heading_2":
      return `<h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">${richTextToHtml(data.rich_text)}</h2>`;
    case "heading_3":
      return `<h3 class="text-lg md:text-xl font-semibold mt-6 mb-2">${richTextToHtml(data.rich_text)}</h3>`;
    case "bulleted_list_item":
      return `<li class="ml-5 mb-1.5 list-disc leading-relaxed">${richTextToHtml(data.rich_text)}</li>`;
    case "numbered_list_item":
      return `<li class="ml-5 mb-1.5 list-decimal leading-relaxed">${richTextToHtml(data.rich_text)}</li>`;
    case "quote":
      return `<blockquote class="border-l-4 border-brand-500 pl-4 py-2 my-4 text-white/70 italic">${richTextToHtml(data.rich_text)}</blockquote>`;
    case "divider":
      return `<hr class="border-white/10 my-8" />`;
    case "image": {
      const url = data.type === "file" ? data.file.url : data.external?.url ?? "";
      const caption = data.caption?.length ? richTextToHtml(data.caption) : "";
      return `<figure class="my-6"><img src="${url}" alt="${caption}" class="w-full rounded-lg" />${caption ? `<figcaption class="text-sm text-white/40 mt-2 text-center">${caption}</figcaption>` : ""}</figure>`;
    }
    case "callout":
      return `<div class="bg-white/[0.04] border border-white/10 rounded-lg p-4 my-4 flex gap-3"><span class="text-xl">${data.icon?.type === "emoji" ? data.icon.emoji : "💡"}</span><div>${richTextToHtml(data.rich_text)}</div></div>`;
    default:
      return "";
  }
}
