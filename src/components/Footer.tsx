export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-900">
      {/* SEO 풋터 - 회사 정보 & 서비스 키워드 */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mb-12">
          {/* 회사 소개 */}
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase mb-4 text-white/80">
              뷰티컬라이즈 BEAUTICALRISE
            </h2>
            <p className="text-xs text-white/40 leading-relaxed">
              주식회사 뷰티컬라이즈는 중국 마케팅, 일본 마케팅, 대만 마케팅,
              중화권 마케팅, 영미권 마케팅을 전문으로 하는 해외 마케팅
              대행사입니다. 피부과, 성형외과 등 의료기관의 해외 환자 유치를 위한
              통합 마케팅 솔루션을 제공합니다.
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-4 text-white/80">
              해외 마케팅 서비스
            </h3>
            <ul className="space-y-2 text-xs text-white/40">
              <li>
                <span className="text-white/50">중국 마케팅</span> — 샤오홍슈,
                바이두, 더우인, 위챗, 웨이보
              </li>
              <li>
                <span className="text-white/50">일본 마케팅</span> — X(Twitter),
                LINE, Instagram
              </li>
              <li>
                <span className="text-white/50">대만 마케팅</span> — Instagram,
                Facebook, LINE
              </li>
              <li>
                <span className="text-white/50">중화권 마케팅</span> — 중국·대만·홍콩
                통합 전략
              </li>
              <li>
                <span className="text-white/50">영미권 마케팅</span> — Google,
                YouTube, Instagram
              </li>
              <li>
                <span className="text-white/50">의료 통역·코디</span> — 중국어,
                일본어, 영어
              </li>
              <li>
                <span className="text-white/50">환자 유치업 등록</span> — 등록
                대행, 의료광고 심의
              </li>
            </ul>
          </div>

          {/* 대상 고객 */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase mb-4 text-white/80">
              대상 의료기관
            </h3>
            <ul className="space-y-2 text-xs text-white/40">
              <li>피부과 해외 마케팅</li>
              <li>성형외과 해외 마케팅</li>
              <li>치과 해외 마케팅</li>
              <li>안과 해외 마케팅</li>
              <li>종합병원 해외 환자 유치</li>
              <li>의료관광 · 메디컬 투어리즘</li>
              <li>K-뷰티 · K-메디컬</li>
            </ul>
          </div>
        </div>

        {/* 키워드 태그 클라우드 (검색엔진용) */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <p className="text-[10px] text-white/20 leading-loose">
            해외마케팅 | 해외마케팅 대행 | 해외마케팅 대행사 | 해외마케팅 전문 |
            해외마케팅 업체 | 중국마케팅 | 중국 마케팅 대행 | 중국 마케팅 대행사
            | 중국 마케팅 업체 | 일본마케팅 | 일본 마케팅 대행 | 일본 마케팅
            대행사 | 대만마케팅 | 대만 마케팅 대행 | 대만 마케팅 대행사 |
            중화권마케팅 | 중화권 마케팅 대행 | 영미권마케팅 | 영미권 마케팅 대행
            | 글로벌 마케팅 | 해외 환자 유치 | 의료관광 마케팅 | 메디컬 투어리즘
            | medical tourism marketing | 샤오홍슈 마케팅 | 바이두 마케팅 |
            더우인 마케팅 | 위챗 마케팅 | 웨이보 마케팅 | KOL 마케팅 | KOC 마케팅
            | 피부과 마케팅 | 성형외과 마케팅 | 병원 해외마케팅 | 클리닉
            해외마케팅 | 의료 통역 | 의료 코디네이터 | 환자 유치업 등록 | 뷰티컬라이즈 | BEAUTICALRISE
          </p>
        </div>

        {/* 저작권 */}
        <div className="text-center text-[11px] tracking-wider text-white/30 uppercase">
          <p>© 2026 주식회사 뷰티컬라이즈 (BEAUTICALRISE Inc.) | beauticalrise.com</p>
          <p className="mt-1">해외 마케팅 전문 대행사 · 중국 마케팅 · 일본 마케팅 · 대만 마케팅 · 중화권 마케팅 · 영미권 마케팅</p>
        </div>
      </div>
    </footer>
  );
}
