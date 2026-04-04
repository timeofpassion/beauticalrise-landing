"use client";

import OrbitRings from "./OrbitRings";

const problems = [
  {
    num: "01",
    title: "해외마케팅…\n뭘 해야 할지 모르겠다",
    desc: "중국은 샤오홍슈, 일본 트위터X, 대만 인스타 또 다릅니다. 국가별 플랫폼이 제각각이라, 한국식 마케팅으론 문의 1건도 어렵습니다.",
    statValue: "11",
    statUnit: "%",
    statLabel: "Booking Conversion Rate",
  },
  {
    num: "02",
    title: "문의는 오는데\n내원율이 5% 이하다",
    desc: "외국어 상담 인력이 없으면, 문의 100건 중 95건은 그냥 사라집니다. 응답 속도가 30분만 늦어도 경쟁 병원에 환자를 뺏깁니다.",
    statValue: "4",
    statUnit: "/10",
    statLabel: "Asset Dispute Rate",
  },
  {
    num: "03",
    title: "대행사에 맡겨봤지만\n돈만 날렸다",
    desc: "\"노출 100만 회 달성했습니다\"라는 보고서만 받고, 실제 내원 환자는 0명. 이런 경험, 한두 번이 아니시죠?",
    statValue: "18",
    statUnit: "%",
    statLabel: "Conversion Tracking",
  },
];

export default function ProblemSection() {
  return (
    <section id="solutions" className="relative">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,#003a8c_0%,#000F29_60%)] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-40 relative">
        <OrbitRings
          ringCount={2}
          className="w-[1000px] h-[1000px] opacity-15 -z-[1]"
          sensitivity={10}
        />

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20 tracking-tight leading-snug">
          원장님, 이런 고민
          <br />
          하고 계시죠?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 relative z-10">
          {problems.map((p) => (
            <div
              key={p.num}
              className="bg-white/[0.03] border border-white/10 p-6 md:p-10 backdrop-blur-sm flex flex-col group hover:border-brand-500 hover:bg-brand-500/5 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 border border-brand-500 rounded-full flex items-center justify-center mb-6 md:mb-8 text-brand-500 text-xs font-bold">
                {p.num}
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-4 md:mb-5 leading-relaxed whitespace-pre-line">
                {p.title}
              </h3>
              <p className="text-xs md:text-[15px] text-white/60 leading-relaxed mb-6 md:mb-8 flex-grow">
                {p.desc}
              </p>
              <div className="pt-5 md:pt-6 border-t border-white/10">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-500 mb-1 flex items-baseline gap-1">
                  {p.statValue}
                  <small className="text-xs md:text-sm font-normal">{p.statUnit}</small>
                </div>
                <div className="text-[10px] md:text-[11px] text-white/60 uppercase tracking-wider">
                  {p.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs md:text-sm text-white/50 text-center mt-10 md:mt-12 max-w-3xl mx-auto leading-relaxed px-2">
          주식회사 뷰티컬라이즈는 멜로우피부과를 전담으로 맡는 회사로
          <br className="md:hidden" />
          {" "}확실한 책임 퍼포먼스를 보여드립니다.
        </p>
      </div>
    </section>
  );
}
