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
        href="https://onedrive.live.com/personal/124a30372c7c31a3/_layouts/15/Doc.aspx?sourcedoc=%7B95ff2bb5-0cdd-40c7-8c8a-c9489e132b50%7D&action=default&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvYy8xMjRhMzAzNzJjN2MzMWEzL0lRQzFLXy1WM1F6SFFJeUt5VWllRXl0UUFjWGdtclFWWkxBcFBDUWVEblFXVmVjP2U9Q2VTM0d0&slrid=855c05a2-d0dc-c000-7d97-88e8eda1ee70&originalPath=aHR0cHM6Ly9vbmVkcml2ZS5saXZlLmNvbS86cDovZy9wZXJzb25hbC8xMjRhMzAzNzJjN2MzMWEzL0lRQzFLXy1WM1F6SFFJeUt5VWllRXl0UUFjWGdtclFWWkxBcFBDUWVEblFXVmVjP3J0aW1lPTZvcjk0aGFQM2tnJnJlZGVlbT1hSFIwY0hNNkx5OHhaSEoyTG0xekwzQXZZeTh4TWpSaE16QXpOekpqTjJNek1XRXpMMGxSUXpGTFh5MVdNMUY2U0ZGSmVVdDVWV2xsUlhsMFVVRmpXR2R0Y2xGV1dreEJjRkJEVVdWRWJsRlhWbVZqUDJVOVEyVlRNMGQw&CID=7ab56aa5-4df3-40fe-8ec8-2b51d364fabd&_SRM=0%3AG%3A57&file=%5BProposal%5D%20%EB%A9%9C%EB%A1%9C%EC%9A%B0%ED%94%BC%EB%B6%80%EA%B3%BC%20%ED%95%B4%EC%99%B8%20%EC%97%90%EC%9D%B4%EC%A0%84%EC%8B%9C%20%EB%8C%80%EC%83%81%20%EC%A0%9C%EC%95%88%EC%84%9C%20%EC%B5%9C%EC%A2%85%EB%B3%B8.pptx"
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
