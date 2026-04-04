import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts, getPostBySlug, getPostContent } from "@/lib/notion";

export const revalidate = 600;

// ── 동적 메타데이터 ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "포스트를 찾을 수 없습니다" };

  const keywords = post.keywords
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

  return {
    title: post.title,
    description: post.description,
    keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://beauticalrise.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.thumbnail
        ? [{ url: post.thumbnail, width: 1200, height: 630 }]
        : [{ url: "https://beauticalrise.com/og-image.png", width: 1200, height: 630 }],
    },
  };
}

// ── 정적 경로 생성 ──
export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

// ── 페이지 ──
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-brand-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 mb-4">포스트를 찾을 수 없습니다.</p>
          <Link href="/blog" className="text-brand-500 hover:underline text-sm">
            ← 블로그로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  const content = await getPostContent(post.id);

  // JSON-LD 구조화 데이터
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: post.author || "뷰티컬라이즈" },
    publisher: {
      "@type": "Organization",
      name: "뷰티컬라이즈",
      url: "https://beauticalrise.com",
    },
    datePublished: post.date,
    url: `https://beauticalrise.com/blog/${post.slug}`,
    image: post.thumbnail || "https://beauticalrise.com/og-image.png",
    mainEntityOfPage: `https://beauticalrise.com/blog/${post.slug}`,
    keywords: post.keywords,
  };

  return (
    <main className="min-h-screen bg-brand-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-20 md:pb-32">
        {/* 네비게이션 */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors mb-8"
        >
          ← 블로그
        </Link>

        {/* 헤더 */}
        <header className="mb-10 md:mb-14">
          {post.category && (
            <span className="inline-block text-[11px] tracking-wider text-brand-500/80 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20 mb-4">
              {post.category}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug mb-4">
            {post.title}
          </h1>
          <p className="text-sm md:text-base text-white/40 leading-relaxed mb-5">
            {post.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-white/25">
            <span>{post.author || "뷰티컬라이즈"}</span>
            <span>·</span>
            <time>{post.date}</time>
          </div>
        </header>

        {/* 본문 */}
        <div
          className="text-sm md:text-base text-white/80 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* CTA */}
        <div className="mt-14 md:mt-20 bg-white/[0.03] border border-white/10 rounded-lg p-6 md:p-8 text-center">
          <p className="text-sm md:text-base mb-4">
            해외 마케팅, 어디서부터 시작해야 할지 모르겠다면?
          </p>
          <a
            href="http://pf.kakao.com/_xhfxlMX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-500 text-white px-8 py-3 rounded-full text-sm font-bold hover:-translate-y-0.5 hover:bg-brand-400 transition-all"
          >
            무료 마케팅 진단 신청하기
          </a>
        </div>
      </article>
    </main>
  );
}
