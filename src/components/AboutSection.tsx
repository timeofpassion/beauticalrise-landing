"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-32 relative">
        <div className="flex flex-col items-center text-center">
          {/* 로고 */}
          <div className="mb-8 md:mb-10">
            <Image
              src="/logo-icon.png"
              alt="뷰티컬라이즈"
              width={148}
              height={152}
              className="h-16 md:h-20 w-auto brightness-0 invert"
            />
          </div>

          {/* 브랜드명 + 의미 */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-5">
              BEAUTICALRISE
            </h2>
            <div className="flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base text-white/60">
              <span className="text-brand-500 font-bold">Beauty</span>
              <span className="text-white/20">+</span>
              <span className="text-brand-500 font-bold">Rise</span>
            </div>
          </div>

          {/* 설명 */}
          <p className="text-sm md:text-lg text-white/50 leading-relaxed max-w-2xl mb-8 md:mb-10 px-2">
            <span className="text-white/80 font-semibold">Beauty</span>
            <span className="text-white/30">,</span>{" "}
            아름다움의 가치.
            <br />
            <span className="text-white/80 font-semibold">Rise</span>
            <span className="text-white/30">,</span>{" "}
            한국 뷰티의 위상을 높이다.
          </p>

          <div className="w-12 border-t border-brand-500/40 mb-8 md:mb-10" />

          <p className="text-xs md:text-base text-white/40 leading-relaxed max-w-2xl px-2">
            뷰티컬라이즈는 한국 의료의 아름다움을 세계에 알리고,
            <br className="hidden md:block" />
            그 가치를 높이기 위해 탄생한 해외 마케팅 전문 기업입니다.
            <br />
            <br className="md:hidden" />
            중국·일본·대만·영미권,
            <br className="md:hidden" />
            {" "}각 국가에 최적화된 현지 마케팅 전략으로
            <br className="hidden md:block" />
            해외 환자가 직접 찾아오는 구조를 만듭니다.
          </p>
        </div>
      </div>
    </section>
  );
}
