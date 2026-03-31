"use client";

import Image from "next/image";

const links = ["Network", "Solutions", "Success Stories", "Contact"];

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full px-6 md:px-15 py-8 md:py-10 flex justify-between items-center z-50">
      <div className="flex items-center gap-2.5">
        <Image
          src="/logo-icon.png"
          alt="뷰티컬라이즈"
          width={74}
          height={76}
          className="h-7 md:h-8 w-auto brightness-0 invert"
          priority
        />
        <span className="font-extrabold text-sm md:text-base tracking-[0.2em] uppercase text-white">
          BEAUTICALRISE
        </span>
      </div>
      <div className="hidden md:flex gap-8 lg:gap-10">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/ /g, "-")}`}
            className="text-white/60 text-xs tracking-[0.15em] uppercase hover:text-white transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
