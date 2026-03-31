"use client";

import OrbitRings from "./OrbitRings";
import SystemCode from "./SystemCode";

const testimonials = [
  {
    quotes: [
      "중국 환자 월 0명에서 월 100명으로.",
      "샤오홍슈가 뭔지도 몰랐습니다. 뷰티컬라이즈가 계정 세팅부터 콘텐츠까지 전부 맡아줬고, 8개월 차에 중국 환자만 월 100명이 내원하기 시작했습니다. 지금은 중국어 코디네이터까지 상주시켜서, 재방문율도 40%를 넘겼습니다.",
    ],
    hospital: "멜로우피부과 강북본점",
    person: "천동욱 원장",
  },
  {
    quotes: [
      "신사점 오픈 초기부터 해외 환자가 찾아왔습니다.",
      "신사점을 새로 오픈하면서 중국 마케팅을 뷰티컬라이즈에 맡겼는데, 오픈 2개월 차부터 샤오홍슈를 통한 중국인 문의가 꾸준히 들어오기 시작했습니다. 신규 지점인데도 해외 환자 비중이 벌써 20%를 넘겼습니다.",
    ],
    hospital: "멜로우피부과 신사점",
    person: "고영욱 원장",
  },
  {
    quotes: [
      "일본 시장은 진입이 안 된다고 생각했는데.",
      "이전 대행사에 8개월, 2,400만 원을 썼는데 내원 환자가 3명이었습니다. 뷰티컬라이즈로 바꾸고 LINE 상담 시스템을 깔았더니, 2개월 만에 일본 환자 문의가 주 20건씩 들어옵니다. 통역 품질이 좋아서 환자 불만도 거의 없어졌습니다.",
    ],
    hospital: "서초 J피부과",
    person: "박수진 실장",
  },
  {
    quotes: [
      "성형외과도 해외 환자 유치가 되는구나 싶었습니다.",
      "피부과 위주인 줄 알았는데, 성형외과 특성에 맞는 비포·애프터 콘텐츠 전략을 따로 설계해 줬습니다. 샤오홍슈에 수술 후기 콘텐츠를 올리기 시작한 지 3개월 만에 중국에서 온라인 상담 요청이 월 50건을 넘겼습니다.",
    ],
    hospital: "강남역 M성형외과",
    person: "김도현 원장",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="success-stories" className="relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-36 relative">
        <SystemCode text="DATA_SOURCE: PARTNER_FEEDBACK" position="top-left" />
        <SystemCode text="INTEGRITY_CHECK: VERIFIED_SUCCESS" position="top-right" />

        <OrbitRings
          ringCount={2}
          className="w-[1200px] h-[1200px] opacity-[0.08] -z-[1]"
          sensitivity={10}
        />

        <p className="text-[11px] tracking-[0.5em] uppercase text-brand-500 mb-4 text-center">
          4. Testimonials
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-14 md:mb-16 tracking-tight">
          실제 병원에서 이렇게 달라졌습니다.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {testimonials.map((t) => (
            <div
              key={t.hospital}
              className="bg-white/[0.03] border border-white/10 p-8 md:p-10 backdrop-blur-xl flex flex-col relative group hover:border-brand-500 hover:bg-brand-500/5 transition-all duration-500"
            >
              <span className="absolute top-5 left-5 text-7xl text-brand-500 opacity-20 font-serif leading-none select-none">
                &ldquo;
              </span>

              <div className="relative z-10 mb-8 space-y-3">
                {t.quotes.map((q, i) => (
                  <p
                    key={i}
                    className={`text-sm md:text-[15px] leading-relaxed ${i === 0 ? "font-semibold" : "text-white/80"} italic`}
                  >
                    &ldquo;{q}&rdquo;
                  </p>
                ))}
              </div>

              <div className="mt-auto pt-5 border-t border-white/10">
                <span className="block text-sm text-brand-500 font-bold mb-1">
                  {t.hospital}
                </span>
                <span className="block text-xs text-white/60 tracking-wider">
                  {t.person}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
