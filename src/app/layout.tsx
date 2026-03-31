import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "뷰티컬라이즈 | 해외 환자 유치 마케팅",
  description:
    "중국·일본·대만 환자, 병원으로 직접 데려옵니다. 현지 채널 운영부터 통역, 내원 전환까지.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-brand-900 text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
