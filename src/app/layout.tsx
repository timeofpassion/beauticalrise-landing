import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  // 기본 메타
  title: {
    default: "뷰티컬라이즈 | 중국·일본·대만·영미권 해외 마케팅 전문 대행사",
    template: "%s | 뷰티컬라이즈 BEAUTICALRISE",
  },
  description:
    "뷰티컬라이즈는 피부과·성형외과 해외 환자 유치 마케팅 전문 기업입니다. 중국 마케팅(샤오홍슈·바이두·더우인·위챗), 일본 마케팅, 대만 마케팅, 중화권 마케팅, 영미권 마케팅까지. 현지 플랫폼 운영, 의료 통역, 환자 유치업 등록 대행을 원스톱으로 제공합니다. 해외 마케팅 무료 진단 상담 가능.",
  keywords: [
    // === 브랜드 키워드 ===
    "뷰티컬라이즈",
    "BEAUTICALRISE",
    "beauticalrise",
    "뷰티컬라이즈 마케팅",

    // === 핵심 서비스 키워드 ===
    "해외마케팅",
    "해외마케팅 대행",
    "해외마케팅 대행사",
    "해외마케팅 전문",
    "해외마케팅 업체",
    "해외마케팅 회사",
    "해외 환자 유치",
    "해외환자유치 마케팅",
    "해외환자유치 대행",

    // === 중국 마케팅 ===
    "중국마케팅",
    "중국 마케팅",
    "중국마케팅 대행",
    "중국마케팅 대행사",
    "중국마케팅 업체",
    "중국마케팅 전문",
    "중국 의료관광",
    "중국 의료관광 마케팅",
    "중국 환자 유치",
    "중국 SNS 마케팅",
    "샤오홍슈 마케팅",
    "샤오홍슈 대행",
    "바이두 마케팅",
    "더우인 마케팅",
    "위챗 마케팅",
    "웨이보 마케팅",
    "중국 인플루언서 마케팅",
    "KOL 마케팅",
    "KOC 마케팅",

    // === 일본 마케팅 ===
    "일본마케팅",
    "일본 마케팅",
    "일본마케팅 대행",
    "일본마케팅 대행사",
    "일본 의료관광",
    "일본 환자 유치",
    "일본 SNS 마케팅",

    // === 대만 마케팅 ===
    "대만마케팅",
    "대만 마케팅",
    "대만마케팅 대행",
    "대만마케팅 대행사",
    "대만 의료관광",
    "대만 환자 유치",

    // === 중화권 마케팅 ===
    "중화권마케팅",
    "중화권 마케팅",
    "중화권 마케팅 대행",
    "중화권 마케팅 대행사",
    "중화권 의료관광",
    "중화권 환자 유치",

    // === 영미권 마케팅 ===
    "영미권마케팅",
    "영미권 마케팅",
    "영미권 마케팅 대행",
    "영미권 마케팅 대행사",
    "글로벌 마케팅",
    "글로벌 의료관광",
    "영어권 마케팅",

    // === 병원·의료 마케팅 ===
    "병원 해외마케팅",
    "피부과 마케팅",
    "피부과 해외 마케팅",
    "성형외과 마케팅",
    "성형외과 해외 마케팅",
    "의료관광",
    "의료관광 마케팅",
    "메디컬 투어리즘",
    "medical tourism marketing",
    "medical tourism Korea",

    // === 서비스 키워드 ===
    "의료 통역",
    "의료 코디네이터",
    "환자 유치업 등록",
    "외국인 환자 유치업",
    "해외 환자 유치업 등록 대행",

    // === 연관 키워드 ===
    "병원 중국 마케팅",
    "클리닉 해외 마케팅",
    "한국 의료관광",
    "K-뷰티 의료관광",
    "멜로우피부과",
  ],

  // 정규 URL
  metadataBase: new URL("https://beauticalrise.com"),
  alternates: {
    canonical: "/",
  },

  // 검색엔진 지시
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    title: "뷰티컬라이즈 | 중국·일본·대만·영미권 해외 마케팅 전문 대행사",
    description:
      "중국 마케팅, 일본 마케팅, 대만 마케팅, 중화권 마케팅, 영미권 마케팅. 해외 환자 유치 마케팅 전문 대행사 뷰티컬라이즈. 샤오홍슈·바이두·더우인 현지 플랫폼 운영부터 의료 통역, 내원 전환까지.",
    url: "https://beauticalrise.com",
    siteName: "뷰티컬라이즈 BEAUTICALRISE",
    images: [
      {
        url: "https://beauticalrise.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "뷰티컬라이즈 - 해외 환자 유치 마케팅 전문 기업",
      },
    ],
    type: "website",
    locale: "ko_KR",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "뷰티컬라이즈 | 해외 환자 유치 마케팅 전문",
    description:
      "중국·일본·대만 환자, 병원으로 직접 데려옵니다. 현지 채널 운영부터 통역, 내원 전환까지.",
    images: ["https://beauticalrise.com/og-image.png"],
  },

  // 기타
  category: "medical marketing",
  creator: "BEAUTICALRISE",
  publisher: "BEAUTICALRISE",
};

// JSON-LD 구조화 데이터
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://beauticalrise.com/#organization",
      name: "뷰티컬라이즈",
      alternateName: [
        "BEAUTICALRISE",
        "주식회사 뷰티컬라이즈",
        "뷰티컬라이즈 해외마케팅",
        "뷰티컬라이즈 중국마케팅",
      ],
      url: "https://beauticalrise.com",
      logo: {
        "@type": "ImageObject",
        url: "https://beauticalrise.com/logo.png",
        width: 512,
        height: 512,
      },
      image: "https://beauticalrise.com/og-image.png",
      description:
        "뷰티컬라이즈는 중국 마케팅, 일본 마케팅, 대만 마케팅, 중화권 마케팅, 영미권 마케팅을 전문으로 하는 해외 마케팅 대행사입니다. 피부과·성형외과 등 의료기관의 해외 환자 유치를 위한 현지 플랫폼 마케팅(샤오홍슈, 바이두, 더우인, 위챗, 웨이보), 의료 전문 통역·코디네이터, 환자 유치업 등록 대행 서비스를 제공합니다.",
      foundingDate: "2024",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["Korean", "Chinese", "Japanese", "English"],
          url: "http://pf.kakao.com/_xhfxlMX/chat",
        },
      ],
      sameAs: ["http://pf.kakao.com/_xhfxlMX"],
      areaServed: [
        { "@type": "Country", name: "China" },
        { "@type": "Country", name: "Japan" },
        { "@type": "Country", name: "Taiwan" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "South Korea" },
      ],
      knowsAbout: [
        "해외 마케팅",
        "해외 마케팅 대행",
        "중국 마케팅",
        "중국 마케팅 대행사",
        "일본 마케팅",
        "일본 마케팅 대행사",
        "대만 마케팅",
        "대만 마케팅 대행사",
        "중화권 마케팅",
        "영미권 마케팅",
        "해외 환자 유치 마케팅",
        "의료관광 마케팅",
        "중국 의료관광",
        "피부과 해외 마케팅",
        "성형외과 해외 마케팅",
        "샤오홍슈 마케팅",
        "바이두 마케팅",
        "더우인 마케팅",
        "위챗 마케팅",
        "웨이보 마케팅",
        "KOL 마케팅",
        "KOC 인플루언서 마케팅",
        "메디컬 투어리즘",
        "Medical Tourism Marketing",
      ],
      slogan: "중국·일본·대만 환자, 병원으로 직접 데려옵니다",
    },
    {
      "@type": "WebSite",
      "@id": "https://beauticalrise.com/#website",
      url: "https://beauticalrise.com",
      name: "뷰티컬라이즈 BEAUTICALRISE - 해외 마케팅 전문 대행사",
      publisher: { "@id": "https://beauticalrise.com/#organization" },
      inLanguage: "ko-KR",
      description:
        "중국 마케팅, 일본 마케팅, 대만 마케팅, 중화권 마케팅, 영미권 마케팅 전문 대행사. 해외 환자 유치 마케팅의 모든 것.",
    },
    {
      "@type": "Blog",
      "@id": "https://beauticalrise.com/blog/#blog",
      url: "https://beauticalrise.com/blog",
      name: "뷰티컬라이즈 블로그 — 해외 마케팅 인사이트",
      description:
        "중국 마케팅, 일본 마케팅, 대만 마케팅, 영미권 마케팅 등 해외 환자 유치 마케팅 인사이트와 실전 전략을 공유합니다.",
      publisher: { "@id": "https://beauticalrise.com/#organization" },
      isPartOf: { "@id": "https://beauticalrise.com/#website" },
      inLanguage: "ko-KR",
    },
    {
      "@type": "WebPage",
      "@id": "https://beauticalrise.com/#webpage",
      url: "https://beauticalrise.com",
      name: "뷰티컬라이즈 | 중국·일본·대만·영미권 해외 마케팅 전문 대행사",
      isPartOf: { "@id": "https://beauticalrise.com/#website" },
      about: { "@id": "https://beauticalrise.com/#organization" },
      description:
        "뷰티컬라이즈 - 해외 마케팅 대행사. 중국 마케팅, 일본 마케팅, 대만 마케팅, 중화권 마케팅, 영미권 마케팅. 샤오홍슈·바이두·더우인 현지 플랫폼 운영부터 의료 통역, 내원 전환까지.",
      inLanguage: "ko-KR",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://beauticalrise.com/og-image.png",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://beauticalrise.com/#service-main",
      name: "뷰티컬라이즈 해외 마케팅 서비스",
      provider: { "@id": "https://beauticalrise.com/#organization" },
      serviceType: "해외 마케팅 대행",
      areaServed: [
        { "@type": "Country", name: "China" },
        { "@type": "Country", name: "Japan" },
        { "@type": "Country", name: "Taiwan" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      description:
        "중국 마케팅, 일본 마케팅, 대만 마케팅, 중화권 마케팅, 영미권 마케팅을 포함한 해외 환자 유치 마케팅 통합 서비스",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "해외 마케팅 서비스",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "중국 마케팅 - 현지 플랫폼 마케팅",
              description:
                "샤오홍슈(小红书) 채널 운영, 바이두(百度) SEO 마케팅, 더우인(抖音/TikTok) 숏폼 마케팅, 위챗(WeChat) 공식계정 운영, 웨이보(Weibo) 마케팅, 중국 KOL/KOC 인플루언서 시딩, META 타겟 광고. 채널 소유권 100% 병원 귀속.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "일본 마케팅 - 현지 채널 운영",
              description:
                "일본 SNS 마케팅(X/Twitter, Instagram, LINE), 일본 의료관광 포털 등록, 일본어 콘텐츠 제작 및 현지 채널 최적화.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "대만 마케팅 - 중화권 확장",
              description:
                "대만 SNS 마케팅(Instagram, Facebook, LINE), 대만 의료관광 마케팅, 중화권 통합 마케팅 전략.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "영미권 마케팅 - 글로벌 확장",
              description:
                "영미권 마케팅(Google Ads, Instagram, YouTube), 영어권 의료관광 마케팅, 글로벌 브랜딩.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "의료 전문 통역·코디네이터",
              description:
                "중국어·일본어·영어 의료 전문 통역사 배치. 첫 상담부터 시술 당일까지 동행. 예약·결제·후속 관리 일괄 대응. 환자 만족도 모니터링.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "환자 유치업 등록 대행",
              description:
                "외국인 환자 유치업 등록 대행, 보건복지부 신고, 의료광고 심의 컨설팅, 해외 결제 시스템 세팅, 법률·규정 준수 자문까지 원스톱 관리.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "뷰티컬라이즈는 어떤 회사인가요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "뷰티컬라이즈(BEAUTICALRISE)는 중국 마케팅, 일본 마케팅, 대만 마케팅, 중화권 마케팅, 영미권 마케팅을 전문으로 하는 해외 마케팅 대행사입니다. 피부과·성형외과 등 의료기관의 해외 환자 유치를 위한 현지 플랫폼 마케팅, 의료 통역, 환자 유치업 등록 대행 서비스를 제공합니다.",
          },
        },
        {
          "@type": "Question",
          name: "중국 마케팅은 어떤 플랫폼으로 진행하나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "샤오홍슈(小红书), 바이두(百度), 더우인(抖音), 위챗(WeChat), 웨이보(Weibo) 등 중국 주요 플랫폼을 활용합니다. KOL/KOC 인플루언서 마케팅과 콘텐츠 기획, 채널 운영을 포함하며, 모든 채널 소유권은 100% 병원에 귀속됩니다.",
          },
        },
        {
          "@type": "Question",
          name: "해외 환자 유치업 등록은 어떻게 진행되나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "뷰티컬라이즈가 외국인 환자 유치업 등록부터 보건복지부 신고, 의료광고 심의, 해외 결제 시스템 세팅까지 원스톱으로 대행합니다. 평균 등록 소요 기간을 14일 단축해 드립니다.",
          },
        },
        {
          "@type": "Question",
          name: "일본, 대만, 영미권 마케팅도 가능한가요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "네. 뷰티컬라이즈는 중국뿐 아니라 일본 마케팅(X/Twitter, LINE), 대만 마케팅(Instagram, Facebook), 영미권 마케팅(Google, YouTube, Instagram)까지 국가별 맞춤 전략으로 진행합니다.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 네이버 사이트 소유 확인 */}
        <meta name="naver-site-verification" content="19a9eb74fa656d2aacc815279bfaaaa641f56384" />
        {/* 구글 사이트 소유 확인 */}
        <meta name="google-site-verification" content="IPePytaDlY45dOcug_-HKyHuoSm8G1nQoldLSP9PMto" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-900 text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
