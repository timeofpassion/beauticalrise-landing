import Link from "next/link";
import { getPublishedPosts, type BlogPost } from "@/lib/notion";

const categoryColor: Record<string, string> = {
  해외마케팅: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  중국마케팅: "bg-red-500/15 text-red-400 border-red-500/30",
  일본마케팅: "bg-pink-500/15 text-pink-400 border-pink-500/30",
  대만마케팅: "bg-green-500/15 text-green-400 border-green-500/30",
  영미권마케팅: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  의료관광: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  성공사례: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
};

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white/[0.03] border border-white/10 rounded-lg overflow-hidden hover:border-brand-500/50 hover:bg-brand-500/[0.04] hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {post.thumbnail ? (
        <div className="aspect-[16/9] overflow-hidden bg-white/[0.02]">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gradient-to-br from-brand-500/10 to-brand-500/5 flex items-center justify-center">
          <span className="text-3xl opacity-30">📝</span>
        </div>
      )}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        {post.category && (
          <span
            className={`inline-block w-fit text-[10px] md:text-[11px] tracking-wider px-2.5 py-1 rounded-full border mb-3 ${categoryColor[post.category] ?? "bg-white/10 text-white/60 border-white/20"}`}
          >
            {post.category}
          </span>
        )}
        <h3 className="text-sm md:text-base font-bold mb-2 leading-snug group-hover:text-brand-500 transition-colors">
          {post.title}
        </h3>
        <p className="text-xs text-white/40 leading-relaxed line-clamp-2 mb-4 flex-grow">
          {post.description}
        </p>
        <time className="text-[11px] text-white/25">{post.date}</time>
      </div>
    </Link>
  );
}

export default async function BlogPreviewSection() {
  const posts = await getPublishedPosts();

  if (posts.length === 0) return null;

  const displayPosts = posts.slice(0, 3);

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight leading-snug">
          블로그 · 인사이트
        </h2>
        <p className="text-xs md:text-base text-white/50 text-center mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed px-2">
          해외 환자 유치 마케팅에 대한
          <br className="md:hidden" />
          {" "}실전 전략과 노하우를 공유합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {displayPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link
            href="/blog"
            className="inline-block bg-brand-500/15 border border-brand-500/30 text-brand-500 px-6 md:px-8 py-3 md:py-3.5 rounded-full text-xs md:text-sm font-bold hover:bg-brand-500/25 hover:-translate-y-0.5 transition-all"
          >
            블로그 전체 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
