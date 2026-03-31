"use client";

import { useEffect, useRef } from "react";
import SystemCode from "./SystemCode";

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

  const nodes = [
    { label: "Mainland China", className: "top-[20%] left-[5%] md:left-[15%]" },
    { label: "Japan", className: "top-[15%] right-[5%] md:right-[20%]" },
    { label: "Taiwan", className: "bottom-[25%] left-[5%] md:left-[10%]" },
    { label: "Global", className: "bottom-[20%] right-[5%] md:right-[15%]" },
  ];

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center px-5"
    >
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#003a8c_0%,#000F29_70%)] -z-10" />

      <SystemCode text="LAT: 37.5665° N / LON: 126.9780° E" position="top-left" />
      <SystemCode text="CONNECTION_STATUS: ACTIVE_SYNC" position="bottom-right" />

      {/* Orbit rings */}
      <div
        ref={containerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-[1]"
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

        {/* Market nodes */}
        <div className="absolute inset-0">
          {nodes.map((node) => (
            <div
              key={node.label}
              className={`absolute flex flex-col items-center gap-2 ${node.className}`}
            >
              <span className="text-[10px] tracking-[0.2em] uppercase bg-white/5 px-3 py-1 rounded-full backdrop-blur border border-white/10">
                {node.label}
              </span>
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full shadow-[0_0_15px_var(--color-brand-500)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <p className="text-[11px] tracking-[0.5em] uppercase text-brand-500 mb-6 opacity-80">
        The Future of Medical Tourism Marketing
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight max-w-4xl mb-6">
        <b className="block font-bold">중국·일본·대만 환자,</b>
        병원으로 직접 데려옵니다.
      </h1>
      <p className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed mb-10 font-light">
        현지 채널 / 플랫폼 운영부터 통역, 내원 전환까지 한 번에.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="http://pf.kakao.com/_xhfxlMX/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-500 text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-400 hover:shadow-[0_0_30px_var(--color-brand-glow)] hover:-translate-y-0.5 transition-all inline-block"
        >
          무료 해외마케팅 진단 받기
        </a>
        <button className="border border-white/20 text-white px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:border-white hover:bg-white/5 transition-all">
          View Case Studies
        </button>
      </div>

      {/* Bottom stats */}
      <div className="absolute bottom-8 md:bottom-10 left-0 w-full flex justify-center gap-10 md:gap-20">
        {[
          { value: "500M+", label: "Market Impressions" },
          { value: "120+", label: "Certified Hospitals" },
          { value: "4.9/5", label: "Patient Satisfaction" },
        ].map((stat) => (
          <div key={stat.label} className="text-left">
            <div className="text-lg md:text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-[10px] tracking-[0.1em] text-white/60 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
