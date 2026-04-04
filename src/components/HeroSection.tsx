"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      const rings = containerRef.current.querySelectorAll<HTMLDivElement>(".hero-ring");
      rings.forEach((ring, index) => {
        const depth = (index + 1) * 0.2;
        ring.style.transform = `rotateZ(-15deg) rotateX(${60 + y * depth}deg) rotateY(${10 + x * depth}deg)`;
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-28 md:py-0"
    >
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#003a8c_0%,#000F29_70%)] -z-10" />

      {/* Orbit rings - PC만 표시 */}
      <div
        ref={containerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-[1] hidden md:block"
        style={{ perspective: "1200px" }}
      >
        {[
          { w: 400, h: 700, border: "border-brand-500/30", shadow: true, anim: true },
          { w: 600, h: 1000, border: "border-white/10", opacity: 0.4 },
          { w: 900, h: 1400, border: "border-white/10", opacity: 0.2 },
        ].map((ring, i) => (
          <div
            key={i}
            className={`hero-ring absolute top-1/2 left-1/2 rounded-full ${ring.border} ${ring.anim ? "animate-pulse" : ""}`}
            style={{
              width: ring.w,
              height: ring.h,
              marginTop: -ring.h / 2,
              marginLeft: -ring.w / 2,
              transform: `rotateZ(-15deg) rotateX(${60 + i * 5}deg) rotateY(${10 + i * 5}deg)`,
              opacity: ring.opacity ?? 1,
              boxShadow: ring.shadow ? "0 0 50px rgba(75,111,165,0.4)" : undefined,
              transformStyle: "preserve-3d",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight max-w-4xl mb-5 md:mb-6">
        <b className="block font-bold">
          중국 · 대만 · 일본 · 영미권 고객
        </b>
        병원으로 직접 데려옵니다.
      </h1>
      <p className="text-sm md:text-lg text-white/60 max-w-xl leading-relaxed mb-8 md:mb-10 font-light px-2">
        현지 플랫폼 운영부터 의료 통역,
        <br className="md:hidden" />
        {" "}내원 전환까지 한 번에.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto px-4 sm:px-0">
        <a
          href="http://pf.kakao.com/_xhfxlMX/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-500 text-white w-full sm:w-auto text-center px-8 sm:px-10 py-4 text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-brand-400 hover:shadow-[0_0_30px_var(--color-brand-glow)] hover:-translate-y-0.5 transition-all"
        >
          무료 해외마케팅 진단 받기
        </a>
        <a
          href="https://onedrive.live.com/personal/124a30372c7c31a3/_layouts/15/Doc.aspx?sourcedoc=%7B95ff2bb5-0cdd-40c7-8c8a-c9489e132b50%7D&action=default&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8xMjRhMzAzNzJjN2MzMWEzL0lRQzFLXy1WM1F6SFFJeUt5VWllRXl0UUFjWGdtclFWWkxBcFBDUWVEblFXVmVjP2U9Q2VTM0d0&slrid=855c05a2-d0dc-c000-7d97-88e8eda1ee70&originalPath=aHR0cHM6Ly9vbmVkcml2ZS5saXZlLmNvbS86cDovZy9wZXJzb25hbC8xMjRhMzAzNzJjN2MzMWEzL0lRQzFLXy1WM1F6SFFJeUt5VWllRXl0UUFjWGdtclFWWkxBcFBDUWVEblFXVmVjP3J0aW1lPTZvcjk0aGFQM2tnJnJlZGVlbT1hSFIwY0hNNkx5OHhaSEoyTG0xekwzQXZZeTh4TWpSaE16QXpOekpqTjJNek1XRXpMMGxSUXpGTFh5MVdNMUY2U0ZGSmVVdDVWV2xsUlhsMFVVRmpXR2R0Y2xGV1dreEJjRkJEVVdWRWJsRlhWbVZqUDJVOVEyVlRNMGQw&CID=7ab56aa5-4df3-40fe-8ec8-2b51d364fabd&_SRM=0%3AG%3A57&file=%5BProposal%5D%20%EB%A9%9C%EB%A1%9C%EC%9A%B0%ED%94%BC%EB%B6%80%EA%B3%BC%20%ED%95%B4%EC%99%B8%20%EC%97%90%EC%9D%B4%EC%A0%84%EC%8B%9C%20%EB%8C%80%EC%83%81%20%EC%A0%9C%EC%95%88%EC%84%9C%20%EC%B5%9C%EC%A2%85%EB%B3%B8.pptx"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 text-white w-full sm:w-auto text-center px-8 sm:px-10 py-4 text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:border-white hover:bg-white/5 transition-all"
        >
          멜로우피부과 협업 소개서
        </a>
      </div>

      {/* Bottom stats */}
      <div className="mt-12 md:mt-0 md:absolute md:bottom-10 left-0 w-full flex justify-center gap-8 md:gap-20">
        {[
          { value: "500M+", label: "Market Impressions" },
          { value: "120+", label: "Certified Hospitals" },
          { value: "4.9/5", label: "Satisfaction" },
        ].map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <div className="text-lg md:text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-[9px] md:text-[10px] tracking-[0.1em] text-white/60 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
