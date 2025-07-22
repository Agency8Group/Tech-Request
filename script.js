// 실제 데이터 연동을 고려한 구조
let requests = [];

// 번역 데이터(내장)
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
  },
  zh_CN: {
    'title-text': 'EIBE 技术请求查看器',
    'sub-title': '技术请求查看器',
    'main-title': 'EIBE 计算机开发技术请求查看器',
    'main-desc': '供同类开发公司参考',
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
  },
  zh_TW: {
    'title-text': 'EIBE 技術請求檢視器',
    'sub-title': '技術請求檢視器',
    'main-title': 'EIBE 電腦開發技術請求檢視器',
    'main-desc': '供同業開發公司參考',
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
    'contact3-name': '池允煥 課長',
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
    'detail-requester-req_3': '池允煥',
    'detail-title-txt-req_3': '儀表板改善請求',
    'detail-details-req_3': '請求放大主畫面按鈕尺寸並更改顏色',
    'detail-date-req_3': '2024-06-02',
    'list-requester-req_1': '朴孝珍',
    'list-title-req_1': '增加感測器數據自動收集功能',
    'list-date-req_1': '2024-06-01',
    'list-requester-req_2': '朴珉燦',
    'list-title-req_2': 'UI 改善請求',
    'list-date-req_2': '2024-06-02',
    'list-requester-req_3': '池允煥',
    'list-title-req_3': '儀表板改善請求',
    'list-date-req_3': '2024-06-02',
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  Object.keys(dict).forEach(id => {
    // 요청자 이름(목록, 상세)과 고객센터 담당자 이름은 항상 한글로
    if (
      id.startsWith('list-requester-') ||
      id.startsWith('detail-requester-') ||
      id === 'contact1-name' ||
      id === 'contact2-name' ||
      id === 'contact3-name'
    ) {
      // 한글 값만 적용
      const el = document.getElementById(id);
      if (el && translations.ko[id]) {
        el.textContent = translations.ko[id];
      }
    } else {
      const el = document.getElementById(id);
      if (el) el.textContent = dict[id];
    }
  });
  // 요청서 상세 내용도 번역
  const detailSection = document.getElementById('request-detail-section');
  if (!detailSection.classList.contains('hidden')) {
    const requesterEl = document.getElementById('detail-requester');
    if (requesterEl && requesterEl.dataset.reqId) {
      const reqId = requesterEl.dataset.reqId;
      // 요청자 이름은 한글로 고정
      const el = document.getElementById('detail-requester');
      if (el && translations.ko[`detail-requester-${reqId}`]) {
        el.textContent = translations.ko[`detail-requester-${reqId}`];
      }
      ['detail-title-txt', 'detail-details', 'detail-date'].forEach(baseId => {
        const el = document.getElementById(baseId);
        if (el && translations[lang][`${baseId}-${reqId}`]) {
          el.textContent = translations[lang][`${baseId}-${reqId}`];
        }
      });
    }
  }
  // 요청서 목록(리스트)도 번역
  if (typeof requests !== 'undefined') {
    requests.forEach(req => {
      // 요청자 이름은 한글로 고정
      const el = document.getElementById(`list-requester-${req.id}`);
      if (el && translations.ko[`list-requester-${req.id}`]) {
        el.textContent = translations.ko[`list-requester-${req.id}`];
      }
      ['list-title', 'list-date'].forEach(type => {
        const el = document.getElementById(`${type}-${req.id}`);
        if (el && translations[lang][`${type}-${req.id}`]) {
          el.textContent = translations[lang][`${type}-${req.id}`];
        }
      });
    });
  }
}

// 실제 데이터 연동 시 이 함수만 수정하면 됨
function fetchData() {
  // 2개의 샘플 데이터 반환
  return Promise.resolve([
    {
      id: 'req_1',
      requester: '박효진',
      title: '센서 데이터 자동수집 기능 추가',
      details: '센서에서 발생하는 데이터를 자동으로 수집하여 엑셀로 저장하는 기능 요청',
      excelName: 'sensor_data.xlsx',
      photoName: 'sensor.jpg',
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

const listSection = document.getElementById('request-list-section');
const detailSection = document.getElementById('request-detail-section');
const requestListTbody = document.querySelector('#request-list tbody');
const detailDiv = document.getElementById('request-detail');
const backBtn = document.getElementById('back-btn');

function renderList() {
  requestListTbody.innerHTML = '';
  requests.forEach((req, idx) => {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border-b border-gray-100';
    tr.innerHTML = `
      <td class="px-6 py-5 text-center align-middle font-medium text-gray-700">${idx + 1}</td>
      <td class="px-6 py-5 text-center align-middle font-medium text-gray-700" id="list-requester-${req.id}">${req.requester}</td>
      <td class="px-6 py-5 text-center align-middle font-medium text-gray-700" id="list-title-${req.id}">${req.title}</td>
      <td class="px-6 py-5 text-center align-middle font-medium text-gray-600" id="list-date-${req.id}">${req.date}</td>
      <td class="px-6 py-5 text-center align-middle">
        <button onclick="showDetail('${req.id}')" class="group relative bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 text-white border-none px-6 py-2.5 rounded-2xl cursor-pointer font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:scale-102 transition-all duration-300 ease-out overflow-hidden">
          <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span class="relative flex items-center gap-1.5">
            <span class="material-icons text-sm notranslate">visibility</span>
            보기
          </span>
        </button>
      </td>
    `;
    requestListTbody.appendChild(tr);
  });
  
  // 요청서 개수 업데이트
  const requestCount = document.getElementById('request-count');
  if (requestCount) {
    requestCount.textContent = requests.length;
  }
}
function showList() {
  detailSection.classList.remove('opacity-100', 'translate-y-0');
  detailSection.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
  setTimeout(() => {
    detailSection.classList.add('hidden');
    listSection.classList.remove('hidden');
    // 리스트 섹션도 부드럽게 나타나도록
    setTimeout(() => {
      listSection.classList.add('opacity-100', 'translate-y-0');
      listSection.classList.remove('opacity-0', 'translate-y-10');
    }, 50);
    renderList();
  }, 450);
}
function showDetail(id) {
  listSection.classList.add('opacity-0', 'translate-y-10');
  listSection.classList.remove('opacity-100', 'translate-y-0');
  setTimeout(() => {
    listSection.classList.add('hidden');
    detailSection.classList.remove('hidden');
    detailSection.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
    detailSection.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
  }, 300);
  const req = requests.find(r => r.id === id);
  const requesterEl = document.getElementById('detail-requester');
  const titleEl = document.getElementById('detail-title-txt');
  const detailsEl = document.getElementById('detail-details');
  const dateEl = document.getElementById('detail-date');
  if (requesterEl) {
    requesterEl.textContent = req.requester;
    requesterEl.dataset.reqId = id;
  }
  if (titleEl) {
    titleEl.textContent = req.title;
    titleEl.dataset.reqId = id;
  }
  if (detailsEl) {
    detailsEl.textContent = req.details;
    detailsEl.dataset.reqId = id;
  }
  if (dateEl) {
    dateEl.textContent = req.date;
    dateEl.dataset.reqId = id;
  }
  // 첨부파일
  if (req.excelName) {
    document.getElementById('detail-excel-block').style.display = '';
    document.getElementById('detail-excel').href = req.excelName;
    document.getElementById('detail-excel-name').textContent = req.excelName;
  } else {
    document.getElementById('detail-excel-block').style.display = 'none';
  }
  // 사진
  if (req.photoName) {
    document.getElementById('detail-photo-block').style.display = '';
    document.getElementById('detail-photo').src = req.photoName;
  } else {
    document.getElementById('detail-photo-block').style.display = 'none';
  }
}
backBtn.onclick = () => showList();

// 담당자 연락처 봇 기능
const contactBotBtn = document.getElementById('contact-bot-btn');
const contactPopup = document.getElementById('contact-popup');
const closeContact = document.getElementById('close-contact');

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

contactBotBtn.addEventListener('click', toggleContactPopup);
closeContact.addEventListener('click', toggleContactPopup);

// 팝업 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
  if (!contactBotBtn.contains(e.target) && !contactPopup.contains(e.target)) {
    contactPopup.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0', 'scale-100');
    contactPopup.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4', 'scale-95');
  }
});

// 초기화: fetchData로 데이터 받아와서 렌더링
fetchData().then(data => {
  requests = data;
  showList();
});

// 콘솔에서 직접 데이터 추가/수정/삭제할 수 있는 함수
// addRequest({id, requester, title, details, excelName, photoName, date})
function addRequest(newReq) {
  requests.push(newReq);
  renderList();
}
// updateRequest('req_1', {title: '수정된 제목'})
function updateRequest(id, updatedReq) {
  const idx = requests.findIndex(r => r.id === id);
  if (idx !== -1) {
    requests[idx] = { ...requests[idx], ...updatedReq };
    renderList();
  }
}
// deleteRequest('req_1')
function deleteRequest(id) {
  requests = requests.filter(r => r.id !== id);
  renderList();
} 