"use client";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[999] flex flex-col items-end gap-2 md:gap-3">
      {/* 카카오톡 상담 */}
      <a
        href="http://pf.kakao.com/_xhfxlMX/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#FEE500] text-[#3C1E1E] px-4 py-2.5 md:px-5 md:py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#3C1E1E" className="md:w-5 md:h-5 shrink-0">
          <path d="M12 3C6.5 3 2 6.58 2 11c0 2.83 1.87 5.32 4.69 6.72l-.52 3.82c-.04.29.25.52.52.37L10.8 19.4c.39.04.79.06 1.2.06 5.5 0 10-3.58 10-8s-4.5-8-10-8z" />
        </svg>
        <span className="text-xs md:text-sm font-bold">카카오톡 상담</span>
      </a>

      {/* 멜로우피부과 협업 소개서 */}
      <a
        href="https://drive.google.com/file/d/19SqBLcXCTPnfdz4eK9LGt6WlSBFIBH-d/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white text-brand-900 px-4 py-2.5 md:px-5 md:py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[18px] md:h-[18px] shrink-0">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="12" y1="18" x2="12" y2="12" />
          <polyline points="9 15 12 18 15 15" />
        </svg>
        <span className="text-xs md:text-sm font-bold">협업 소개서</span>
      </a>
    </div>
  );
}
