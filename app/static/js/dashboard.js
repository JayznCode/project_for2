// 간단 달력 표시 (오늘 날짜 표시)
const calendarDiv = document.getElementById('calendar');
const today = new Date();
calendarDiv.textContent = today.toLocaleDateString();

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

