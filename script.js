// 실제 데이터 연동을 고려한 구조
let requests = [];

// 번역 기능
function translateToSimplifiedChinese() {
  // 크롬 번역 API를 사용하여 간체 중국어로 번역
  if (window.google && window.google.translate) {
    window.google.translate.TranslateElement.getInstance().translatePage('zh-CN');
  } else {
    // 크롬 번역 확장프로그램이 없는 경우 안내
    showTranslationGuide('간체 중국어');
  }
}

function translateToTraditionalChinese() {
  // 크롬 번역 API를 사용하여 번체 중국어로 번역
  if (window.google && window.google.translate) {
    window.google.translate.TranslateElement.getInstance().translatePage('zh-TW');
  } else {
    // 크롬 번역 확장프로그램이 없는 경우 안내
    showTranslationGuide('번체 중국어');
  }
}

function translateToKorean() {
  // 한국어로 되돌리기
  if (window.google && window.google.translate) {
    window.google.translate.TranslateElement.getInstance().translatePage('ko');
  } else {
    // 크롬 번역 확장프로그램이 없는 경우 안내
    showTranslationGuide('한국어');
  }
}

function showTranslationGuide(targetLanguage) {
  let message = '';
  
  if (targetLanguage.includes('중국어') || targetLanguage.includes('简体') || targetLanguage.includes('繁體')) {
    message = `
🇨🇳 中国开发团队专用 - 翻译指南

📝 翻译方法 (번역 방법):

1️⃣ 自动翻译 (자동 번역):
   • 点击上方按钮 (위 버튼 클릭)
   • 或右键点击页面 → "翻译成中文" (또는 우클릭 → "한국어로 번역")

2️⃣ 浏览器翻译 (브라우저 번역):
   • 地址栏旁边的翻译图标 (주소창 옆 번역 아이콘)
   • 选择目标语言: 简体中文 或 繁體中文 (목표 언어 선택)

3️⃣ 推荐安装 (권장 설치):
   • Chrome 翻译扩展程序 (크롬 번역 확장프로그램)

✅ 翻译完成后，页面将显示为 ${targetLanguage}
✅ 번역이 완료되면 페이지가 ${targetLanguage}로 표시됩니다

💡 提示: 如果翻译不准确，请使用浏览器自带的翻译功能
💡 팁: 번역이 부정확하면 브라우저 자체 번역 기능을 사용하세요
    `;
  } else {
    message = `
🇰🇷 한국어 복원 안내

1. 브라우저 우클릭 → "한국어로 번역" 선택
2. 또는 주소창 옆 번역 아이콘 클릭
3. 크롬 번역 확장프로그램 설치 권장

번역이 완료되면 페이지가 한국어로 표시됩니다.
    `;
  }
  
  alert(message);
}

// 실제 데이터 연동 시 이 함수만 수정하면 됨
function fetchData() {
  // 2개의 샘플 데이터 반환
  return Promise.resolve([
    {
      id: 'req_1',
      requester: '홍길동',
      title: '센서 데이터 자동수집 기능 추가',
      details: '센서에서 발생하는 데이터를 자동으로 수집하여 엑셀로 저장하는 기능 요청',
      excelName: 'sensor_data.xlsx',
      photoName: 'sensor.jpg',
      date: '2024-06-01'
    },
    {
      id: 'req_2',
      requester: '김영희',
      title: 'UI 개선 요청',
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
      <td class="px-6 py-5 text-center align-middle font-medium text-gray-700">${req.requester}</td>
      <td class="px-6 py-5 text-center align-middle font-medium text-gray-700">${req.title}</td>
      <td class="px-6 py-5 text-center align-middle font-medium text-gray-600">${req.date}</td>
      <td class="px-6 py-5 text-center align-middle">
        <button onclick="showDetail('${req.id}')" class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none px-6 py-2.5 rounded-xl cursor-pointer font-bold shadow-lg hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300">
          보기
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
    renderList();
  }, 450);
}
function showDetail(id) {
  listSection.classList.add('hidden');
  detailSection.classList.remove('hidden');
  detailSection.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
  detailSection.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
  
  const req = requests.find(r => r.id === id);
  let html = `
    <div class="space-y-6">
      <div class="flex items-start gap-3">
        <span class="material-icons text-blue-500 mt-1 notranslate">person</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">요청자</h3>
          <p class="text-gray-700">${req.requester}</p>
        </div>
      </div>
      
      <div class="flex items-start gap-3">
        <span class="material-icons text-blue-500 mt-1 notranslate">description</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">요청사항</h3>
          <p class="text-gray-700">${req.title}</p>
        </div>
      </div>
      
      <div class="flex items-start gap-3">
        <span class="material-icons text-blue-500 mt-1 notranslate">info</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">세부사항</h3>
          <pre class="whitespace-pre-wrap text-gray-700 bg-white/50 p-4 rounded-lg border border-gray-200">${req.details}</pre>
        </div>
      </div>
      
      <div class="flex items-start gap-3">
        <span class="material-icons text-blue-500 mt-1 notranslate">calendar_today</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">등록일</h3>
          <p class="text-gray-700">${req.date}</p>
        </div>
      </div>`;
      
  if (req.excelName) {
    html += `
      <div class="flex items-start gap-3">
        <span class="material-icons text-green-500 mt-1 notranslate">file_download</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">첨부파일</h3>
          <a href="${req.excelName}" download class="text-blue-600 hover:text-blue-800 underline font-medium flex items-center gap-2">
            <span class="material-icons text-sm notranslate">download</span>
            ${req.excelName}
          </a>
        </div>
      </div>`;
  }
  
  if (req.photoName) {
    html += `
      <div class="flex items-start gap-3">
        <span class="material-icons text-purple-500 mt-1 notranslate">image</span>
        <div>
          <h3 class="font-bold text-gray-900 mb-1">사진</h3>
          <img src="${req.photoName}" class="max-w-64 max-h-48 rounded-xl border border-gray-300 shadow-lg mt-2">
        </div>
      </div>`;
  }
  
  html += '</div>';
  detailDiv.innerHTML = html;
}
backBtn.onclick = () => showList();
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