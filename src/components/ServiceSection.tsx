"use client";

import OrbitRings from "./OrbitRings";


const services = [
  {
    icon: "📡",
    title: "현지 플랫폼 마케팅",
    quote:
      "샤오홍슈·바이두·LINE·위챗 등 국가별 맞춤 채널 운영. 콘텐츠 기획부터 광고 집행까지.",
    items: [
      "영상 기반 콘텐츠 기획 및 제작",
      "샤오홍슈 채널 전문 매니지먼트",
      "KOL/KOC 인플루언서 시딩",
      "바이두/언론사 기자단 마케팅",
      "멀티 채널 최적화 운영",
      "META 타겟 광고 및 성과 추적",
      "공식 계정 소유권 100% 보장",
    ],
    stat: "평균 3개월 내 해외 문의량 280% 증가",
  },
  {
    icon: "🗣️",
    title: "의료 전문 통역·코디",
    quote:
      "중국어·일본어 의료 통역사가 첫 상담부터 시술 당일까지 동행. 환자가 이탈할 틈을 없앱니다.",
    items: [
      "중국어·일본어 전문 의료 통역",
      "첫 상담부터 시술 당일까지 동행",
      "환자 커뮤니케이션 전담 관리",
      "예약·결제·후속 관리 일괄 대응",
      "현지 타겟 기반 상담 프로세스",
      "환자 만족도 모니터링 리포트",
    ],
    stat: "통역 배치 후 내원 전환율 5% → 23%",
  },
  {
    icon: "📋",
    title: "환자 유치업 등록 대행",
    quote:
      "외국인환자 유치업 등록, 의료광고 심의, 결제 시스템까지 원스톱 세팅.",
    items: [
      "외국인환자 유치업 등록 대행",
      "의료광고 심의 컨설팅",
      "해외 결제 시스템 세팅",
      "법률·규정 준수 자문",
      "글로벌 커뮤니케이션 전담 PM",
      "등록 완료까지 원스톱 관리",
    ],
    stat: "등록 소요 기간 평균 14일 단축",
  },
];

export default function ServiceSection() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-36 relative">
        <OrbitRings
          ringCount={2}
          className="w-[1200px] h-[1200px] opacity-10 -z-[1]"
          sensitivity={15}
        />

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-14 md:mb-16 tracking-tight">
          우리가 하는 일은<br />딱 3가지입니다.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white/[0.03] border border-white/10 p-8 backdrop-blur-xl flex flex-col group hover:border-brand-500 hover:bg-brand-500/[0.08] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
              </div>

              <div className="bg-brand-500/15 border-l-2 border-brand-500 px-4 py-3 text-sm leading-relaxed mb-6 italic">
                {s.quote}
              </div>

              <ul className="mb-8 flex-grow space-y-2.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-white/60 flex items-start gap-2.5"
                  >
                    <span className="text-brand-500 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10 flex justify-between items-baseline">
                <span className="text-[10px] uppercase tracking-wider text-white/60">
                  Result
                </span>
                <span className="text-sm font-bold text-brand-500">{s.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
