/**
 * EIBE 기술요청서 뷰어
 * 다국어 지원 아코디언 방식 기술요청서 관리 시스템
 */

// 전역 변수
let requests = [];
let currentLanguage = 'zh_CN'; // 기본 언어

// 번역 데이터
const translations = {
  ko: {
    'title-text': 'EIBE 기술요청서 뷰어 - 技术请求查看器',
    'sub-title': 'Technical Request Viewer',
    'main-title': 'EIBE 전산개발 기술요청서 뷰어',
    'main-desc': '동수 개발사 참고용',
    'dev-ref': '개발 참고용',
    'tech-request': '기술 요청서',
    'collab-tool': '협업 도구',
    'list-title': '요청서 목록',
    'list-desc': '등록된 기술 요청사항을 확인하세요',
    'total-label': '총',
    'count-unit': '건',
    'th-num': '번호',
    'th-requester': '요청자',
    'th-content': '요청사항',
    'th-date': '등록일',
    'th-detail': '상세보기',
    'detail-title': '요청서 상세',
    'detail-desc': '요청사항의 자세한 내용을 확인하세요',
    'back-btn-label': '목록으로',
    'contact-title': '담당자 연락처',
    'contact-title-en': 'Contact Information',
    'contact1-name': '박효진 대리',
    'contact1-en': 'HyoJin Park',
    'contact1-team': '영업본부 SCM팀 (PM)',
    'contact1-hq': '본사',
    'contact1-hq-addr': '(05637) 서울특별시 송파구 위례성대로12길5 아이베빌딩 2층',
    'contact1-wh': '제1물류센터',
    'contact1-wh-addr': '(12021) 경기도 남양주시 진접읍 경복대로 512번길 7-1',
    'contact2-name': '박민찬 주임',
    'contact2-en': 'MINCHAN PARK',
    'contact2-team': '브랜드사업부 SCM팀 (기술)',
    'contact2-hq': '본사',
    'contact2-hq-addr': '(05637) 서울특별시 송파구 위례성대로12길5 아이베빌딩 4층',
    'contact2-wh': '제1물류센터',
    'contact2-wh-addr': '(12021) 경기도 남양주시 진접읍 경복대로 512번길 7-1',
    'contact2-wh2': '제2물류센터',
    'contact2-wh2-addr': '(17090) 경기도 용인시 처인구 삼가동 146-15',
    'contact3-name': '지윤환 과장',
    'contact3-en': 'Jiyunhwan',
    'contact3-team': '전략기획실 (Support)',
    'contact3-hq': '본사',
    'contact3-hq-addr': '서울특별시 송파구 위례성대로12길5 아이베빌딩 2F',
    'detail-requester-req_1': '박효진',
    'detail-title-txt-req_1': '센서 데이터 자동수집 기능 추가',
    'detail-details-req_1': '센서에서 발생하는 데이터를 자동으로 수집하여 엑셀로 저장하는 기능 요청',
    'detail-date-req_1': '2024-06-01',
    'detail-requester-req_2': '박민찬',
    'detail-title-txt-req_2': 'UI 개선 요청',
    'detail-details-req_2': '메인화면 버튼 크기 확대 및 색상 변경 요청',
    'detail-date-req_2': '2024-06-02',
    'detail-requester-req_3': '지윤환',
    'detail-title-txt-req_3': '대시보드 개선 요청',
    'detail-details-req_3': '메인화면 버튼 크기 확대 및 색상 변경 요청',
    'detail-date-req_3': '2024-06-02',
    'list-requester-req_1': '박효진',
    'list-title-req_1': '센서 데이터 자동수집 기능 추가',
    'list-date-req_1': '2024-06-01',
    'list-requester-req_2': '박민찬',
    'list-title-req_2': 'UI 개선 요청',
    'list-date-req_2': '2024-06-02',
    'list-requester-req_3': '지윤환',
    'list-title-req_3': '대시보드 개선 요청',
    'list-date-req_3': '2024-06-02',
    'detail-requester-label': '요청자',
    'detail-title-label': '요청사항',
    'detail-details-label': '세부사항',
    'detail-date-label': '등록일',
    'detail-excel-label': '첨부파일',
    'detail-photo-label': '사진',
    'view-btn-text': '보기',
    'close-btn-text': '접기',
  },
  zh_CN: {
    'title-text': 'EIBE 技术请求查看器',
    'sub-title': '技术请求查看器',
    'main-title': 'EIBE 计算机开发技术请求查看器',
    'main-desc': '类开发公司参考',
    'dev-ref': '开发参考用',
    'tech-request': '技术请求书',
    'collab-tool': '协作工具',
    'list-title': '请求列表',
    'list-desc': '请确认已登记的技术请求事项',
    'total-label': '共',
    'count-unit': '件',
    'th-num': '编号',
    'th-requester': '请求人',
    'th-content': '请求事项',
    'th-date': '登记日',
    'th-detail': '详细',
    'detail-title': '请求详情',
    'detail-desc': '请确认请求事项的详细内容',
    'back-btn-label': '返回列表',
    'contact-title': '负责人联系方式',
    'contact-title-en': '联系方式',
    'contact1-name': '朴孝珍 代理',
    'contact1-en': 'HyoJin Park',
    'contact1-team': '营业本部 SCM组 (PM)',
    'contact1-hq': '本社',
    'contact1-hq-addr': '(05637) 首尔市松坡区卫礼城大路12街5 EIBE大厦 2层',
    'contact1-wh': '第1物流中心',
    'contact1-wh-addr': '(12021) 京畿道南杨州市真接邑京福大路512号街7-1',
    'contact2-name': '朴珉灿 主任',
    'contact2-en': 'MINCHAN PARK',
    'contact2-team': '品牌事业部 SCM组 (技术)',
    'contact2-hq': '本社',
    'contact2-hq-addr': '(05637) 首尔市松坡区卫礼城大路12街5 EIBE大厦 4层',
    'contact2-wh': '第1物流中心',
    'contact2-wh-addr': '(12021) 京畿道南杨州市真接邑京福大路512号街7-1',
    'contact2-wh2': '第2物流中心',
    'contact2-wh2-addr': '(17090) 京畿道龙仁市处仁区三家洞146-15',
    'contact3-name': '池允焕 课长',
    'contact3-en': 'Jiyunhwan',
    'contact3-team': '战略企划室 (Support)',
    'contact3-hq': '本社',
    'contact3-hq-addr': '首尔市松坡区卫礼城大路12街5 EIBE大厦 2F',
    'detail-requester-req_1': '朴孝珍',
    'detail-title-txt-req_1': '增加传感器数据自动收集功能',
    'detail-details-req_1': '请求自动收集传感器产生的数据并保存为Excel的功能',
    'detail-date-req_1': '2024-06-01',
    'detail-requester-req_2': '朴珉灿',
    'detail-title-txt-req_2': 'UI 改善请求',
    'detail-details-req_2': '请求放大主画面按钮尺寸并更改颜色',
    'detail-date-req_2': '2024-06-02',
    'detail-requester-req_3': '池允焕',
    'detail-title-txt-req_3': '仪表盘改善请求',
    'detail-details-req_3': '请求放大主画面按钮尺寸并更改颜色',
    'detail-date-req_3': '2024-06-02',
    'list-requester-req_1': '朴孝珍',
    'list-title-req_1': '增加传感器数据自动收集功能',
    'list-date-req_1': '2024-06-01',
    'list-requester-req_2': '朴珉灿',
    'list-title-req_2': 'UI 改善请求',
    'list-date-req_2': '2024-06-02',
    'list-requester-req_3': '池允焕',
    'list-title-req_3': '仪表盘改善请求',
    'list-date-req_3': '2024-06-02',
    'detail-requester-label': '请求人',
    'detail-title-label': '请求事项',
    'detail-details-label': '详细内容',
    'detail-date-label': '登记日',
    'detail-excel-label': '附件',
    'detail-photo-label': '照片',
    'view-btn-text': '查看',
    'close-btn-text': '收起',
  },
  zh_TW: {
    'title-text': 'EIBE 技術請求檢視器',
    'sub-title': '技術請求檢視器',
    'main-title': 'EIBE 電腦開發技術請求檢視器',
    'main-desc': '業開發公司參考',
    'dev-ref': '開發參考用',
    'tech-request': '技術請求書',
    'collab-tool': '協作工具',
    'list-title': '請求列表',
    'list-desc': '請確認已登記的技術請求事項',
    'total-label': '共',
    'count-unit': '件',
    'th-num': '編號',
    'th-requester': '請求人',
    'th-content': '請求事項',
    'th-date': '登記日',
    'th-detail': '詳細',
    'detail-title': '請求詳情',
    'detail-desc': '請確認請求事項的詳細內容',
    'back-btn-label': '返回列表',
    'contact-title': '負責人聯絡方式',
    'contact-title-en': '聯絡資訊',
    'contact1-name': '朴孝珍 代理',
    'contact1-en': 'HyoJin Park',
    'contact1-team': '營業本部 SCM組 (PM)',
    'contact1-hq': '本社',
    'contact1-hq-addr': '(05637) 首爾市松坡區衛禮城大路12街5 EIBE大廈 2樓',
    'contact1-wh': '第1物流中心',
    'contact1-wh-addr': '(12021) 京畿道南楊州市真接邑京福大路512號街7-1',
    'contact2-name': '朴珉燦 主任',
    'contact2-en': 'MINCHAN PARK',
    'contact2-team': '品牌事業部 SCM組 (技術)',
    'contact2-hq': '本社',
    'contact2-hq-addr': '(05637) 首爾市松坡區衛禮城大路12街5 EIBE大廈 4樓',
    'contact2-wh': '第1物流中心',
    'contact2-wh-addr': '(12021) 京畿道南楊州市真接邑京福大路512號街7-1',
    'contact2-wh2': '第2物流中心',
    'contact2-wh2-addr': '(17090) 京畿道龍仁市處仁區三家洞146-15',
    'contact3-name': '池胤奐 課長',
    'contact3-en': 'Jiyunhwan',
    'contact3-team': '戰略企劃室 (Support)',
    'contact3-hq': '本社',
    'contact3-hq-addr': '首爾市松坡區衛禮城大路12街5 EIBE大廈 2F',
    'detail-requester-req_1': '朴孝珍',
    'detail-title-txt-req_1': '增加感測器數據自動收集功能',
    'detail-details-req_1': '請求自動收集感測器產生的數據並保存為Excel的功能',
    'detail-date-req_1': '2024-06-01',
    'detail-requester-req_2': '朴珉燦',
    'detail-title-txt-req_2': 'UI 改善請求',
    'detail-details-req_2': '請求放大主畫面按鈕尺寸並更改顏色',
    'detail-date-req_2': '2024-06-02',
    'detail-requester-req_3': '池胤奐',
    'detail-title-txt-req_3': '儀表板改善請求',
    'detail-details-req_3': '請求放大主畫面按鈕尺寸並更改顏色',
    'detail-date-req_3': '2024-06-02',
    'list-requester-req_1': '朴孝珍',
    'list-title-req_1': '增加感測器數據自動收集功能',
    'list-date-req_1': '2024-06-01',
    'list-requester-req_2': '朴珉燦',
    'list-title-req_2': 'UI 改善請求',
    'list-date-req_2': '2024-06-02',
    'list-requester-req_3': '池胤奐',
    'list-title-req_3': '儀表板改善請求',
    'list-date-req_3': '2024-06-02',
    'detail-requester-label': '請求人',
    'detail-title-label': '請求事項',
    'detail-details-label': '詳細內容',
    'detail-date-label': '登記日',
    'detail-excel-label': '附件',
    'detail-photo-label': '照片',
    'view-btn-text': '檢視',
    'close-btn-text': '收起',
  }
};

// DOM 요소 참조
const listSection = document.getElementById('request-list-section');
const requestListTbody = document.querySelector('#request-list-desktop tbody');
const requestListMobile = document.getElementById('request-list-mobile');

/**
 * 언어 설정 함수
 * @param {string} lang - 언어 코드 (ko, zh_CN, zh_TW)
 */
function setLanguage(lang) {
  currentLanguage = lang;
  const dict = translations[lang];
  if (!dict) return;
  
  // 기본 UI 요소 번역
  Object.keys(dict).forEach(id => {
    // 요청자 이름은 항상 한글로 고정
    if (
      id.startsWith('list-requester-') ||
      id.startsWith('detail-requester-') ||
      id === 'contact1-name' ||
      id === 'contact2-name' ||
      id === 'contact3-name'
    ) {
      const el = document.getElementById(id);
      if (el && translations.ko[id]) {
        el.textContent = translations.ko[id];
      }
    } else {
      const el = document.getElementById(id);
      if (el) el.textContent = dict[id];
    }
  });
  
  // 아코디언 내용 및 버튼 번역
  requests.forEach(req => {
    const accordionContent = document.getElementById(`accordion-content-${req.id}`);
    if (accordionContent) {
      updateAccordionContent(req.id, lang);
    }
    
    // 버튼 텍스트 번역
    const viewBtnText = document.getElementById(`view-btn-text-${req.id}`);
    const mobileViewBtnText = document.getElementById(`mobile-view-btn-text-${req.id}`);
    if (viewBtnText) {
      viewBtnText.textContent = dict['view-btn-text'] || '보기';
    }
    if (mobileViewBtnText) {
      mobileViewBtnText.textContent = dict['view-btn-text'] || '보기';
    }
  });
}

/**
 * 데이터 가져오기 함수 (실제 연동 시 수정)
 * @returns {Promise<Array>} 요청서 데이터 배열
 */
function fetchData() {
  return Promise.resolve([
    {
      id: 'req_1',
      requester: '박효진',
      title: '센서 데이터 자동수집 기능 추가',
      details: '센서에서 발생하는 데이터를 자동으로 수집하여 엑셀로 저장하는 기능 요청',
      excelName: 'xlsx/sample.xlsx',
      photoName: 'img/sample.png',
      date: '2024-06-01'
    },
    {
      id: 'req_2',
      requester: '박민찬',
      title: 'UI 개선 요청',
      details: '메인화면 버튼 크기 확대 및 색상 변경 요청',
      excelName: 'ui_design.xlsx',
      photoName: 'ui_sample.png',
      date: '2024-06-02'
    },
    {
      id: 'req_3',
      requester: '지윤환',
      title: '대시보드 개선 요청',
      details: '메인화면 버튼 크기 확대 및 색상 변경 요청',
      excelName: 'ui_design.xlsx',
      photoName: 'ui_sample.png',
      date: '2024-06-02'
    }
  ]);
}

/**
 * 목록 렌더링 함수
 */
function renderList() {
  // 데스크톱 테이블 렌더링만 남김
  if (requestListTbody) {
    requestListTbody.innerHTML = '';
    requests.forEach((req, idx) => {
      const tr = document.createElement('tr');
      tr.className = 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border-b border-gray-100';
      tr.innerHTML = `
        <td class="px-6 py-5 text-center align-middle font-medium text-gray-700">${idx + 1}</td>
        <td class="px-6 py-5 text-center align-middle font-medium text-gray-700" id="list-requester-${req.id}">${translations.ko[`list-requester-${req.id}`] || req.requester}</td>
        <td class="px-6 py-5 text-center align-middle font-medium text-gray-700" id="list-title-${req.id}">${translations[currentLanguage][`list-title-${req.id}`] || req.title}</td>
        <td class="px-6 py-5 text-center align-middle font-medium text-gray-600" id="list-date-${req.id}">${translations[currentLanguage][`list-date-${req.id}`] || req.date}</td>
        <td class="px-6 py-5 text-center align-middle">
          <button onclick="toggleAccordion('${req.id}')" class="group relative bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 text-white border-none px-6 py-2.5 rounded-2xl cursor-pointer font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:scale-102 transition-all duration-300 ease-out overflow-hidden">
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="relative flex items-center gap-1.5">
              <span class="material-icons text-sm notranslate accordion-icon-${req.id}">expand_more</span>
              <span id="view-btn-text-${req.id}">${translations[currentLanguage]['view-btn-text'] || '보기'}</span>
            </span>
          </button>
        </td>
      `;
      requestListTbody.appendChild(tr);
      
      // 아코디언 행 추가
      const accordionRow = document.createElement('tr');
      accordionRow.id = `accordion-row-${req.id}`;
      accordionRow.className = 'hidden';
      accordionRow.innerHTML = `
        <td colspan="5" class="px-0 py-0">
          <div id="accordion-content-${req.id}" class="bg-gradient-to-br from-gray-50 to-blue-50 p-6 border-t border-gray-200">
            <!-- 아코디언 내용은 toggleAccordion에서 생성 -->
          </div>
        </td>
      `;
      requestListTbody.appendChild(accordionRow);
    });
  }
  // 요청서 개수 업데이트
  const requestCount = document.getElementById('request-count');
  if (requestCount) {
    requestCount.textContent = requests.length;
  }
}

/**
 * 데스크톱 아코디언 토글 함수
 * @param {string} id - 요청서 ID
 */
function toggleAccordion(id) {
  const accordionRow = document.getElementById(`accordion-row-${id}`);
  const accordionIcon = document.querySelector(`.accordion-icon-${id}`);
  const viewBtnText = document.getElementById(`view-btn-text-${id}`);
  
  if (accordionRow.classList.contains('hidden')) {
    // 열기
    accordionRow.classList.remove('hidden');
    accordionIcon.textContent = 'expand_less';
    viewBtnText.textContent = translations[currentLanguage]['close-btn-text'] || '접기';
    
    // 아코디언 내용 생성
    const accordionContent = document.getElementById(`accordion-content-${id}`);
    if (accordionContent && !accordionContent.hasChildNodes()) {
      updateAccordionContent(id, currentLanguage);
    }
  } else {
    // 닫기
    accordionRow.classList.add('hidden');
    accordionIcon.textContent = 'expand_more';
    viewBtnText.textContent = translations[currentLanguage]['view-btn-text'] || '보기';
  }
}

/**
 * 모바일 아코디언 토글 함수
 * @param {string} id - 요청서 ID
 */
function toggleMobileAccordion(id) {
  const accordionContent = document.getElementById(`mobile-accordion-content-${id}`);
  const accordionIcon = document.querySelector(`.mobile-accordion-icon-${id}`);
  const viewBtnText = document.getElementById(`mobile-view-btn-text-${id}`);
  
  if (accordionContent.classList.contains('hidden')) {
    // 열기
    accordionContent.classList.remove('hidden');
    accordionIcon.textContent = 'expand_less';
    viewBtnText.textContent = translations[currentLanguage]['close-btn-text'] || '접기';
    
    // 아코디언 내용 생성
    if (!accordionContent.hasChildNodes()) {
      updateMobileAccordionContent(id, currentLanguage);
    }
  } else {
    // 닫기
    accordionContent.classList.add('hidden');
    accordionIcon.textContent = 'expand_more';
    viewBtnText.textContent = translations[currentLanguage]['view-btn-text'] || '보기';
  }
}

/**
 * 데스크톱 아코디언 내용 업데이트
 * @param {string} id - 요청서 ID
 * @param {string} lang - 언어 코드
 */
function updateAccordionContent(id, lang) {
  const req = requests.find(r => r.id === id);
  const accordionContent = document.getElementById(`accordion-content-${id}`);
  
  if (!req || !accordionContent) return;
  
  accordionContent.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-start gap-3">
        <span class="material-icons text-blue-500 mt-1 notranslate">person</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">${translations[lang]['detail-requester-label'] || '요청자'}</h3>
          <p class="text-gray-700">${translations.ko[`detail-requester-${id}`] || req.requester}</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <span class="material-icons text-blue-500 mt-1 notranslate">description</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">${translations[lang]['detail-title-label'] || '요청사항'}</h3>
          <p class="text-gray-700">${translations[lang][`detail-title-txt-${id}`] || req.title}</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <span class="material-icons text-blue-500 mt-1 notranslate">info</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">${translations[lang]['detail-details-label'] || '세부사항'}</h3>
          <div class="whitespace-pre-wrap text-gray-700 bg-white/50 p-4 rounded-lg border border-gray-200">${translations[lang][`detail-details-${id}`] || req.details}</div>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <span class="material-icons text-blue-500 mt-1 notranslate">calendar_today</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">${translations[lang]['detail-date-label'] || '등록일'}</h3>
          <p class="text-gray-700">${translations[lang][`detail-date-${id}`] || req.date}</p>
        </div>
      </div>
      ${req.excelName ? `
      <div class="flex items-start gap-3">
        <span class="material-icons text-green-500 mt-1 notranslate">file_download</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">${translations[lang]['detail-excel-label'] || '첨부파일'}</h3>
          <a href="${req.excelName}" download class="text-blue-600 hover:text-blue-800 underline font-medium flex items-center gap-2">
            <span class="material-icons text-sm notranslate">download</span>
            <span>${req.excelName}</span>
          </a>
        </div>
      </div>
      ` : ''}
      ${req.photoName ? `
      <div class="flex items-start gap-3">
        <span class="material-icons text-purple-500 mt-1 notranslate">image</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">${translations[lang]['detail-photo-label'] || '사진'}</h3>
          <img src="${req.photoName}" onclick="openImageModal('${req.photoName}')" class="max-w-64 max-h-48 rounded-xl border border-gray-300 shadow-lg mt-2 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300" title="클릭하여 크게 보기">
        </div>
      </div>
      ` : ''}
    </div>
  `;
}

/**
 * 모바일 아코디언 내용 업데이트
 * @param {string} id - 요청서 ID
 * @param {string} lang - 언어 코드
 */
function updateMobileAccordionContent(id, lang) {
  const req = requests.find(r => r.id === id);
  const accordionContent = document.getElementById(`mobile-accordion-content-${id}`);
  
  if (!req || !accordionContent) return;
  
  accordionContent.innerHTML = `
    <div class="space-y-4 pt-4 border-t border-gray-200">
      <div class="flex items-start gap-3">
        <span class="material-icons text-blue-500 mt-1 notranslate text-sm">person</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1 text-sm">${translations[lang]['detail-requester-label'] || '요청자'}</h3>
          <p class="text-gray-700 text-sm">${translations.ko[`detail-requester-${id}`] || req.requester}</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <span class="material-icons text-blue-500 mt-1 notranslate text-sm">description</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1 text-sm">${translations[lang]['detail-title-label'] || '요청사항'}</h3>
          <p class="text-gray-700 text-sm">${translations[lang][`detail-title-txt-${id}`] || req.title}</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <span class="material-icons text-blue-500 mt-1 notranslate text-sm">info</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1 text-sm">${translations[lang]['detail-details-label'] || '세부사항'}</h3>
          <div class="whitespace-pre-wrap text-gray-700 bg-white/50 p-3 rounded-lg border border-gray-200 text-sm">${translations[lang][`detail-details-${id}`] || req.details}</div>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <span class="material-icons text-blue-500 mt-1 notranslate text-sm">calendar_today</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1 text-sm">${translations[lang]['detail-date-label'] || '등록일'}</h3>
          <p class="text-gray-700 text-sm">${translations[lang][`detail-date-${id}`] || req.date}</p>
        </div>
      </div>
      ${req.excelName ? `
      <div class="flex items-start gap-3">
        <span class="material-icons text-green-500 mt-1 notranslate text-sm">file_download</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1 text-sm">${translations[lang]['detail-excel-label'] || '첨부파일'}</h3>
          <a href="${req.excelName}" download class="text-blue-600 hover:text-blue-800 underline font-medium flex items-center gap-2 text-sm">
            <span class="material-icons text-sm notranslate">download</span>
            <span>${req.excelName}</span>
          </a>
        </div>
      </div>
      ` : ''}
      ${req.photoName ? `
      <div class="flex items-start gap-3">
        <span class="material-icons text-purple-500 mt-1 notranslate text-sm">image</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1 text-sm">${translations[lang]['detail-photo-label'] || '사진'}</h3>
          <img src="${req.photoName}" onclick="openImageModal('${req.photoName}')" class="w-full max-w-48 rounded-xl border border-gray-300 shadow-lg mt-2 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300" title="클릭하여 크게 보기">
        </div>
      </div>
      ` : ''}
    </div>
  `;
}

// 연락처 봇 기능
const contactBotBtn = document.getElementById('contact-bot-btn');
const contactPopup = document.getElementById('contact-popup');
const closeContact = document.getElementById('close-contact');

// 이미지 모달 기능
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeImageModal = document.getElementById('close-image-modal');
const downloadImageBtn = document.getElementById('download-image-btn');
const openImageNewtabBtn = document.getElementById('open-image-newtab-btn');

/**
 * 연락처 팝업 토글 함수
 */
function toggleContactPopup() {
  const isOpen = contactPopup.classList.contains('opacity-100');
  
  if (isOpen) {
    // 닫기
    contactPopup.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0', 'scale-100');
    contactPopup.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4', 'scale-95');
  } else {
    // 열기
    contactPopup.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4', 'scale-95');
    contactPopup.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0', 'scale-100');
  }
}

/**
 * 이미지 모달 열기 함수
 * @param {string} imageSrc - 이미지 경로
 */
function openImageModal(imageSrc) {
  modalImage.src = imageSrc;
  imageModal.classList.remove('opacity-0', 'pointer-events-none');
  imageModal.classList.add('opacity-100', 'pointer-events-auto');
  if (downloadImageBtn) downloadImageBtn.href = imageSrc;
  if (openImageNewtabBtn) openImageNewtabBtn.href = imageSrc;
}

/**
 * 이미지 모달 닫기 함수
 */
function closeImageModalFunc() {
  imageModal.classList.remove('opacity-100', 'pointer-events-auto');
  imageModal.classList.add('opacity-0', 'pointer-events-none');
}

// 이벤트 리스너 등록
contactBotBtn.addEventListener('click', toggleContactPopup);
closeContact.addEventListener('click', toggleContactPopup);
closeImageModal.addEventListener('click', closeImageModalFunc);

// 팝업 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
  if (!contactBotBtn.contains(e.target) && !contactPopup.contains(e.target)) {
    contactPopup.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0', 'scale-100');
    contactPopup.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4', 'scale-95');
  }
  
  // 이미지 모달 외부 클릭 시 닫기
  if (imageModal.contains(e.target) && !modalImage.contains(e.target) && !closeImageModal.contains(e.target)) {
    closeImageModalFunc();
  }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeImageModalFunc();
  }
});

// 초기화
fetchData().then(data => {
  requests = data;
  renderList();
  setLanguage('zh_CN'); // 첫 진입시 중국어(간체)로 고정
});

// 개발용 유틸리티 함수들
/**
 * 새 요청서 추가 (개발용)
 * @param {Object} newReq - 새 요청서 객체
 */
function addRequest(newReq) {
  requests.push(newReq);
  renderList();
}

/**
 * 요청서 수정 (개발용)
 * @param {string} id - 요청서 ID
 * @param {Object} updatedReq - 수정할 내용
 */
function updateRequest(id, updatedReq) {
  const idx = requests.findIndex(r => r.id === id);
  if (idx !== -1) {
    requests[idx] = { ...requests[idx], ...updatedReq };
    renderList();
  }
}

/**
 * 요청서 삭제 (개발용)
 * @param {string} id - 요청서 ID
 */
function deleteRequest(id) {
  requests = requests.filter(r => r.id !== id);
  renderList();
} 