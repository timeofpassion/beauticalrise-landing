"use client";

import OrbitRings from "./OrbitRings";

const partners = [
  {
    icon: "🏥",
    title: "해외 환자 유치를 원하는 병·의원",
    desc: "중국·일본·대만·영미권 환자를 유치하고 싶지만, 어디서부터 시작해야 할지 모르는 피부과·성형외과·치과·안과 등 모든 의료기관",
    tags: ["피부과", "성형외과", "치과", "안과", "종합병원"],
  },
  {
    icon: "🤝",
    title: "멜로우피부과에 고객을 유치하고자 하는 해외 에이전시 파트너스",
    desc: "중국·일본·대만·동남아 등 해외 현지에서 한국 의료관광 고객을 보유하고 있거나, 멜로우피부과와의 협업을 원하는 에이전시·브로커·코디네이터",
    tags: ["중국 에이전시", "일본 에이전시", "대만 에이전시", "의료관광 브로커"],
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
          뷰티컬라이즈는
          <br />
          다음과 같은 파트너를 찾습니다.
        </h2>
        <p className="text-xs md:text-base text-white/50 text-center mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed px-2">
          해외 환자 유치의 모든 과정을
          <br className="md:hidden" />
          {" "}함께할 파트너를 찾고 있습니다.
          <br />
          병원이든 해외 에이전시든,
          <br className="md:hidden" />
          {" "}뷰티컬라이즈와 함께 성장하세요.
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
        <div className="text-center mt-10 md:mt-12">
          <a
            href="http://pf.kakao.com/_xhfxlMX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-500/15 border border-brand-500/30 text-brand-500 px-6 md:px-8 py-3 md:py-3.5 rounded-full text-xs md:text-sm font-bold hover:bg-brand-500/25 hover:-translate-y-0.5 transition-all"
          >
            파트너십 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
