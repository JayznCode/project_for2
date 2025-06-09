// 간단 달력 표시 (오늘 날짜 표시)
const calendarDiv = document.getElementById('calendar');
const today = new Date();
calendarDiv.textContent = today.toLocaleDateString();

// 팝업 관련 요소
const calendarCard = document.getElementById('calendarCard');
const calendarPopup = document.getElementById('calendarPopup');
const closeBtn = document.getElementById('closeCalendarBtn');
const fullCalendarDiv = document.getElementById('fullCalendar');

// 카드 클릭하면 팝업 열기
calendarCard.addEventListener('click', () => {
  calendarPopup.style.display = 'block';
  
  // 여기에서 fullCalendarDiv에 달력 내용을 그리면 됨
  // 간단히 오늘 날짜 출력 예시:
  fullCalendarDiv.textContent = `오늘은 ${today.toLocaleDateString()} 입니다. (달력 구현 예정)`;
});

// 닫기 버튼 클릭하면 팝업 닫기
closeBtn.addEventListener('click', () => {
  calendarPopup.style.display = 'none';
  fullCalendarDiv.textContent = ''; // 내용 초기화
});






// 채팅 입력 이벤트 (샘플)
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatInput.addEventListener('keydown', e => {
  if(e.key === 'Enter' && chatInput.value.trim() !== '') {
    const msg = document.createElement('div');
    msg.textContent = chatInput.value;
    msg.style.padding = '5px 10px';
    msg.style.marginBottom = '8px';
    msg.style.background = '#3f51b5';
    msg.style.color = 'white';
    msg.style.borderRadius = '15px';
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = '';
  }
});

