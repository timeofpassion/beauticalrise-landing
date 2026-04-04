import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "@/lib/notion";

export const revalidate = 600; // 10분마다 재검증

export const metadata: Metadata = {
  title: "블로그 — 해외 마케팅 인사이트",
  description:
    "중국 마케팅, 일본 마케팅, 대만 마케팅, 영미권 마케팅 등 해외 환자 유치 마케팅 인사이트와 전략을 공유합니다.",
  alternates: { canonical: "/blog" },
};

const categoryColor: Record<string, string> = {
  해외마케팅: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  중국마케팅: "bg-red-500/15 text-red-400 border-red-500/30",
  일본마케팅: "bg-pink-500/15 text-pink-400 border-pink-500/30",
  대만마케팅: "bg-green-500/15 text-green-400 border-green-500/30",
  영미권마케팅: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  의료관광: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  성공사례: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main className="min-h-screen bg-brand-900">
      {/* 헤더 */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-6 md:px-10 max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors mb-8"
        >
          ← 홈으로
        </Link>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          블로그
        </h1>
        <p className="text-white/50 text-sm md:text-base max-w-2xl leading-relaxed">
          해외 환자 유치 마케팅에 대한 인사이트와 실전 전략을 공유합니다.
        </p>
      </section>

      {/* 포스트 목록 */}
      <section className="px-6 md:px-10 pb-20 md:pb-32 max-w-5xl mx-auto">
        {posts.length === 0 ? (
          <p className="text-white/30 text-center py-20">
            아직 게시된 글이 없습니다.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white/[0.03] border border-white/10 rounded-lg overflow-hidden hover:border-brand-500/50 hover:bg-brand-500/[0.04] hover:-translate-y-1 transition-all duration-300"
              >
                {post.thumbnail && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-5 md:p-6">
                  {post.category && (
                    <span
                      className={`inline-block text-[10px] md:text-[11px] tracking-wider px-2.5 py-1 rounded-full border mb-3 ${categoryColor[post.category] ?? "bg-white/10 text-white/60 border-white/20"}`}
                    >
                      {post.category}
                    </span>
                  )}
                  <h2 className="text-base md:text-lg font-bold mb-2 leading-snug group-hover:text-brand-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-xs md:text-sm text-white/40 leading-relaxed line-clamp-2 mb-4">
                    {post.description}
                  </p>
                  <time className="text-[11px] text-white/25">
                    {post.date}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
