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
          해외환자 유치,
          <br />
          어디서부터 시작해야 할지
          <br className="sm:hidden" />
          {" "}모르겠다면
        </h2>

        <p className="max-w-2xl mx-auto text-white/60 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 px-2">
          30분 무료 진단으로 우리 병원에 맞는
          <br className="md:hidden" />
          {" "}국가·채널·예산을 잡아드립니다.
          <br />
          상담 후 진행 여부는 부담 없이 결정하세요.
        </p>

        <div className="bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-lg mb-10 md:mb-14 backdrop-blur-xl">
          <p className="text-xs md:text-base leading-relaxed">
            뷰티컬라이즈가{" "}
            <b className="text-brand-500 font-bold">무료 30분 컨설팅</b>을 통해
            <br className="md:hidden" />
            {" "}원장님 병원의 해외 마케팅 현황을 진단해 드립니다.
            <br />
            어느 국가 마케팅부터 시작해야 할지,
            <br className="md:hidden" />
            {" "}어떤 채널이 가장 효율적일지
            데이터로 증명해 드립니다.
          </p>
        </div>

        <a
          href="http://pf.kakao.com/_xhfxlMX/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-500 text-white px-10 md:px-16 py-4 md:py-6 rounded-full text-sm md:text-lg font-bold shadow-[0_0_30px_var(--color-brand-glow)] hover:-translate-y-1 hover:shadow-[0_0_50px_var(--color-brand-glow)] hover:bg-brand-400 transition-all mb-6 md:mb-8"
        >
          무료 마케팅 진단 신청하기
        </a>

        <p className="text-xs md:text-sm text-white/60 leading-relaxed px-2">
          * 상담 가능 시간: 평일 10:00 ~ 18:00
          <br />
          카카오톡: @beauticalrise
          <br />
          * 강압적인 영업은 절대 하지 않습니다.
          <br className="md:hidden" />
          {" "}오직 원장님 병원을 위한 객관적인 진단서만 제공합니다.
        </p>
      </div>
    </section>
  );
}
