"use client";

import OrbitRings from "./OrbitRings";

export default function CtaSection() {
  return (
    <section id="contact" className="relative flex-1">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_80%,#003a8c_0%,#000F29_70%)] -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 py-20 md:py-40 relative text-center">
        <OrbitRings
          ringCount={3}
          className="w-[1400px] h-[1400px] opacity-15 -z-[1] !top-[60%]"
          sensitivity={8}
        />

        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-8 md:mb-10 tracking-tight leading-snug">
          멜로우피부과와 함께
          <br />
          해외 환자를 유치할
          <br className="sm:hidden" />
          {" "}파트너를 찾습니다
        </h2>

        <p className="max-w-2xl mx-auto text-white/60 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 px-2">
          해외 에이전시, 의료관광 브로커, 협업 병원 등
          <br className="md:hidden" />
          {" "}멜로우 브랜드와 함께 성장할
          <br />
          파트너라면 지금 바로 연락주세요.
        </p>

        <div className="bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-lg mb-10 md:mb-14 backdrop-blur-xl">
          <p className="text-xs md:text-base leading-relaxed">
            뷰티컬라이즈는 멜로우피부과의{" "}
            <b className="text-brand-500 font-bold">독점 해외 마케팅 에이전시</b>로서,
            <br className="md:hidden" />
            {" "}멜로우피부과에 해외 환자를 유치할 파트너를 모집하고 있습니다.
            <br />
            중국·일본·대만·동남아·영미권 현지 네트워크를 보유한
            <br className="md:hidden" />
            {" "}파트너와의 협업을 기다립니다.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 md:mb-8">
          <a
            href="http://pf.kakao.com/_xhfxlMX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-500 text-white px-10 md:px-16 py-4 md:py-6 rounded-full text-sm md:text-lg font-bold shadow-[0_0_30px_var(--color-brand-glow)] hover:-translate-y-1 hover:shadow-[0_0_50px_var(--color-brand-glow)] hover:bg-brand-400 transition-all"
          >
            파트너 협업 문의하기
          </a>
          <a
            href="https://drive.google.com/file/d/19SqBLcXCTPnfdz4eK9LGt6WlSBFIBH-d/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/30 text-white/80 px-8 md:px-12 py-4 md:py-6 rounded-full text-sm md:text-lg font-bold hover:border-white hover:text-white hover:-translate-y-1 transition-all"
          >
            협업 소개서 보기
          </a>
        </div>

        <p className="text-xs md:text-sm text-white/60 leading-relaxed px-2">
          * 상담 가능 시간: 평일 10:00 ~ 18:00
          <br />
          카카오톡: @beauticalrise
          <br />
          * 파트너십 문의는 부담 없이 연락주세요.
          <br className="md:hidden" />
          {" "}함께 성장할 수 있는 구조를 제안드립니다.
        </p>
      </div>
    </section>
  );
}
