"use client";

import OrbitRings from "./OrbitRings";

const partners = [
  {
    icon: "🌏",
    title: "멜로우피부과에 해외 환자를 유치할 해외 에이전시",
    desc: "중국·일본·대만·동남아 등 해외 현지에서 한국 의료관광 고객을 보유하고 있거나, 멜로우피부과와의 환자 연결을 원하는 에이전시·브로커·코디네이터",
    tags: ["중국 에이전시", "일본 에이전시", "대만 에이전시", "의료관광 브로커", "코디네이터"],
  },
  {
    icon: "🤝",
    title: "멜로우 브랜드와 함께 성장할 협업 파트너",
    desc: "멜로우피부과 해외 환자의 연계 시술, 공동 마케팅, 현지 네트워크 확장 등 멜로우 브랜드 생태계 안에서 함께 성장할 수 있는 파트너",
    tags: ["성형외과", "치과", "안과", "현지 클리닉", "공동 마케팅"],
  },
];

export default function PartnerSection() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-36 relative">
        <OrbitRings
          ringCount={2}
          className="w-[1000px] h-[1000px] opacity-10 -z-[1]"
          sensitivity={12}
        />

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight leading-snug">
          멜로우피부과와 함께할
          <br />
          파트너를 찾습니다.
        </h2>
        <p className="text-xs md:text-base text-white/50 text-center mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed px-2">
          뷰티컬라이즈는 멜로우 브랜드 전담 에이전시로서,
          <br className="md:hidden" />
          {" "}멜로우피부과의 해외 매출을 함께 만들어갈
          <br />
          파트너를 찾고 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 relative z-10 max-w-4xl mx-auto">
          {partners.map((p, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/10 p-6 md:p-10 backdrop-blur-sm flex flex-col group hover:border-brand-500 hover:bg-brand-500/[0.06] hover:-translate-y-2 transition-all duration-500"
            >
              <span className="text-2xl md:text-3xl mb-4 md:mb-5">{p.icon}</span>
              <h3 className="text-base md:text-xl font-bold mb-3 md:mb-4 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-5 md:mb-6 flex-grow">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] md:text-[11px] tracking-wider text-brand-500/80 bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="http://pf.kakao.com/_xhfxlMX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-500/15 border border-brand-500/30 text-brand-500 px-6 md:px-8 py-3 md:py-3.5 rounded-full text-xs md:text-sm font-bold hover:bg-brand-500/25 hover:-translate-y-0.5 transition-all"
          >
            파트너 협업 문의하기
          </a>
          <a
            href="https://drive.google.com/file/d/19SqBLcXCTPnfdz4eK9LGt6WlSBFIBH-d/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/20 text-white/70 px-6 md:px-8 py-3 md:py-3.5 rounded-full text-xs md:text-sm font-bold hover:border-white hover:text-white hover:-translate-y-0.5 transition-all"
          >
            협업 소개서 보기
          </a>
        </div>
      </div>
    </section>
  );
}
