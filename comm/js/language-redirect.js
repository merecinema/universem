/**
 * 브라우저 언어에 따라 해당 언어 페이지로 자동 리다이렉트하는 스크립트
 * 사용법: <script src="comm/js/language-redirect.js"></script>
 */

(function() {
    'use strict';
    
    // 이미 리다이렉트되었는지 확인 (무한 루프 방지)
    if (sessionStorage.getItem('languageRedirected')) {
        return;
    }
    
    // 사용자가 수동으로 언어를 선택한 경우는 리다이렉트하지 않음
    // (localStorage에 preferredLanguage가 있으면 사용자가 이미 언어를 선택한 것)
    if (localStorage.getItem('preferredLanguage')) {
        return;
    }
    
    // 브라우저 언어 감지
    const browserLang = navigator.language || navigator.userLanguage || 'en';
    const langCode = browserLang.toLowerCase().split('-')[0];
    
    // 현재 페이지 경로 확인
    const currentPath = window.location.pathname;
    const fileName = currentPath.split('/').pop() || 'index.html';
    const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
    
	// 지원하는 언어 목록
	const supportedLanguages = ['en', 'ko', 'ja', 'zh', 'fr', 'it', 'vi'];
	
	// 언어 매핑 (일부 변형 처리)
	const languageMap = {
		'ko': 'ko',      // 한국어
		'en': 'en',      // 영어
		'ja': 'ja',      // 일본어
		'zh': 'zh',      // 중국어
		'fr': 'fr',      // 프랑스어
		'it': 'it',      // 이탈리아어
		'vi': 'vi'       // 베트남어
	};
    
    // 감지된 언어 코드
    const detectedLang = languageMap[langCode] || 'en';
    
    // 기본 페이지(index.html)인 경우
    if (fileName === 'index.html' || fileName === '' || fileName === '/') {
        // 영어가 아닌 경우에만 처리 (영어가 기본 페이지이므로)
        // 현재 구현은 index.html에서 동적 번역을 사용하므로 리다이렉트하지 않음
        // 필요시 아래 주석을 해제하여 사용
        /*
        if (detectedLang !== 'en' && supportedLanguages.includes(detectedLang)) {
            // index-ko.html 같은 별도 파일이 있다면
            const redirectUrl = `index-${detectedLang}.html`;
            if (redirectUrl !== fileName) {
                window.location.href = basePath + redirectUrl;
                sessionStorage.setItem('languageRedirected', 'true');
            }
        }
        */
        return;
    }
    
    // 다른 페이지들에 대한 리다이렉트 처리
    // 파일명 패턴: [파일명]-[언어코드].html (예: privacy-policy-en.html)
    const filePattern = fileName.match(/^(.+?)-([a-z]{2})\.html$/);
    
    if (filePattern) {
        const baseName = filePattern[1];      // 예: privacy-policy
        const currentLang = filePattern[2];   // 예: en
        
        // 현재 페이지 언어와 브라우저 언어가 다르고, 지원하는 언어인 경우 리다이렉트
        if (currentLang !== detectedLang && supportedLanguages.includes(detectedLang)) {
            const redirectUrl = `${baseName}-${detectedLang}.html`;
            
            // 리다이렉트 실행
            window.location.href = basePath + redirectUrl;
            sessionStorage.setItem('languageRedirected', 'true');
        }
    }
})();


