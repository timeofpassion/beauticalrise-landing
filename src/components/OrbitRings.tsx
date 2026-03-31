"use client";

import { useEffect, useRef } from "react";

interface OrbitRingsProps {
  ringCount?: number;
  className?: string;
  sensitivity?: number;
}

export default function OrbitRings({
  ringCount = 3,
  className = "",
  sensitivity = 10,
}: OrbitRingsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * sensitivity;
      const y = (e.clientY / window.innerHeight - 0.5) * sensitivity;
      const rings = containerRef.current.querySelectorAll<HTMLDivElement>(".orbit-ring");
      rings.forEach((ring, index) => {
        const baseY = index === 0 ? 15 : index === 1 ? -15 : 0;
        ring.style.transform = `translate(-50%, -50%) rotateX(${75 + y}deg) rotateY(${baseY + x}deg)`;
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [sensitivity]);

  const sizes = ["100%", "75%", "50%"];

  return (
    <div
      ref={containerRef}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${className}`}
    >
      {Array.from({ length: ringCount }).map((_, i) => (
        <div
          key={i}
          className="orbit-ring absolute top-1/2 left-1/2 border border-brand-500 rounded-full"
          style={{
            width: sizes[i] || "50%",
            height: sizes[i] || "50%",
            transform: `translate(-50%, -50%) rotateX(75deg) rotateY(${i === 0 ? 15 : i === 1 ? -15 : 0}deg)`,
          }}
        />
      ))}
    </div>
  );
}
