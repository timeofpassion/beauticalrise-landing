"use client";

import Image from "next/image";
import OrbitRings from "./OrbitRings";

const highlights = [
  {
    icon: "🏥",
    value: "5개 지점",
    label: "서울 주요 거점 네트워크",
    desc: "강북본점 · 신사점 · 천호점 · 영등포점 · 공덕점",
  },
  {
    icon: "👨‍⚕️",
    value: "전원 전문의",
    label: "피부과 전문의 운영",
    desc: "모든 지점 보건복지부 인증 피부과 전문의가 직접 진료·운영",
  },
  {
    icon: "🌏",
    value: "중국 현지 지점",
    label: "글로벌 브랜드 인지도",
    desc: "중국 현지 지점 운영 및 스컬트라·리투오 중국 의사 교육 진행",
  },
];

export default function ClientShowcase() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-36 relative">
        <OrbitRings
          ringCount={2}
          className="w-[1200px] h-[1200px] opacity-[0.08] -z-[1]"
          sensitivity={10}
        />

        {/* 독점 에이전시 강조 배너 */}
        <div className="relative z-10 mb-12 md:mb-14">
          <div className="bg-gradient-to-r from-brand-500/20 via-brand-500/10 to-brand-500/20 border border-brand-500/30 rounded-lg p-5 md:p-8 max-w-3xl mx-auto text-center backdrop-blur-xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="inline-block w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
              <span className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-brand-500 font-bold">
                Exclusive Agency
              </span>
              <span className="inline-block w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
            </div>
            <p className="text-base md:text-xl font-extrabold mb-2 leading-snug">
              뷰티컬라이즈는 멜로우피부과의
              <br />
              <span className="text-brand-500">독점(Exclusive)</span>
              <br className="sm:hidden" />
              <span className="text-brand-500"> 해외 마케팅 에이전시</span>입니다.
            </p>
            <p className="text-xs md:text-sm text-white/50 leading-relaxed">
              멜로우피부과의 모든 해외 마케팅 채널을
              <br className="md:hidden" />
              {" "}단독으로 운영하며,
              <br className="hidden md:block" />
              중국·일본·대만·영미권 환자 유치 전략을
              <br className="md:hidden" />
              {" "}총괄하고 있습니다.
            </p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight leading-snug">
          뷰티컬라이즈가 전담하는 병원,
          <br />
          멜로우피부과의원
        </h2>
        <p className="text-sm md:text-base text-white/50 text-center mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed px-2">
          뷰티컬라이즈는 대한민국 대표 피부과 네트워크
          <br className="md:hidden" />
          {" "}&lsquo;멜로우피부과&rsquo;의
          해외 마케팅을 독점 전담 운영하고 있습니다.
          <br />
          전문의 네트워크 병원의 해외 환자 유치,
          <br className="md:hidden" />
          {" "}그 결과가 곧 우리의 실력입니다.
        </p>

        {/* Doctors Photo */}
        <div className="relative z-10 mb-12 md:mb-16 flex justify-center">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-lg">
            <Image
              src="/mellow-doctors.png"
              alt="멜로우피부과 피부과 전문의 의료진 - 뷰티컬라이즈 해외 마케팅 전담 클라이언트"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 md:bottom-4 left-0 w-full text-center">
              <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/70">
                멜로우피부과 피부과 전문의 의료진
              </span>
            </div>
          </div>
        </div>

        {/* Exclusive Partner Badge */}
        <div className="relative z-10 mb-12 md:mb-16">
          <div className="bg-brand-500/10 border border-brand-500/30 rounded-lg p-5 md:p-8 max-w-3xl mx-auto text-center backdrop-blur-xl">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
              <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-500 rounded-full animate-pulse" />
              <span className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-brand-500 font-bold">
                Exclusive Marketing Partner
              </span>
              <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-500 rounded-full animate-pulse" />
            </div>
            <p className="text-base md:text-xl font-bold mb-2">
              멜로우피부과 × 뷰티컬라이즈
            </p>
            <p className="text-xs md:text-sm text-white/60 leading-relaxed">
              서울 5개 지점, 피부과 전문의 전원 운영,
              <br className="md:hidden" />
              {" "}중국 현지 지점까지 보유한
              <br />
              프리미엄 피부과 네트워크의
              <br className="md:hidden" />
              {" "}해외 마케팅을 책임지고 있습니다.
            </p>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 relative z-10 mb-16 md:mb-20">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="bg-white/[0.03] border border-white/10 p-5 md:p-6 backdrop-blur-sm group hover:border-brand-500 hover:bg-brand-500/5 hover:-translate-y-1 transition-all duration-500"
            >
              <span className="text-2xl mb-3 md:mb-4 block">{h.icon}</span>
              <div className="text-lg md:text-xl font-extrabold text-brand-500 mb-1">
                {h.value}
              </div>
              <div className="text-[10px] md:text-xs tracking-wider text-white/60 uppercase mb-2 md:mb-3">
                {h.label}
              </div>
              <p className="text-xs md:text-sm text-white/50 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Why This Matters */}
        <div className="relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 leading-snug">
              왜 멜로우피부과가
              <br />
              뷰티컬라이즈를 선택했을까?
            </h3>
            <p className="text-xs md:text-sm text-white/40 max-w-xl mx-auto leading-relaxed px-2">
              중국 현지 지점까지 운영하는 글로벌 병원이
              <br className="md:hidden" />
              {" "}직접 검증하고 선택한 파트너,
              그 기준은 남다릅니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                num: "01",
                title: "이미 중국 현지 경험을 보유한 병원이 선택한 파트너",
                desc: "멜로우피부과는 이미 중국 현지 지점을 운영하고, 스컬트라·리투오 등 글로벌 브랜드의 중국 의사 교육까지 직접 진행하는 병원입니다. 중국 시장을 누구보다 잘 아는 병원이 선택한 마케팅 파트너가 뷰티컬라이즈입니다.",
                highlight: "중국을 아는 병원이 인정한 실력",
              },
              {
                num: "02",
                title: "채널 소유권 100% 병원 귀속",
                desc: "대행사를 바꿔도 샤오홍슈·위챗 등 모든 채널 자산이 병원에 남습니다. 팔로워, 콘텐츠, 데이터까지 온전히 병원의 것. 멜로우피부과가 뷰티컬라이즈를 장기 파트너로 신뢰하는 핵심 이유입니다.",
                highlight: "대행사가 바뀌어도 자산은 병원에",
              },
              {
                num: "03",
                title: "노출이 아닌 내원 전환까지 책임",
                desc: "\"노출 100만 회 달성\"이 아닌, 문의 → 상담 → 내원 → 재방문까지의 전체 퍼널을 설계합니다. 노션 대시보드로 전환율을 실시간 공유하고, 데이터로 성과를 증명합니다.",
                highlight: "성과를 숫자로 증명하는 구조",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white/[0.03] border border-white/10 p-6 md:p-10 backdrop-blur-sm hover:border-brand-500 hover:bg-brand-500/[0.06] hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                <div className="w-10 h-10 border border-brand-500 rounded-full flex items-center justify-center mb-5 md:mb-6 text-brand-500 text-xs font-bold">
                  {item.num}
                </div>
                <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed mb-5 md:mb-6 flex-grow">
                  {item.desc}
                </p>
                <div className="pt-4 md:pt-5 border-t border-white/10">
                  <span className="text-xs md:text-sm font-semibold text-brand-500">
                    {item.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
