import React, { useEffect, useState } from 'react';

function App() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/data')  // Flask API 호출
      .then(response => response.json())
      .then(data => {
        setApiMessage(data.message);  // API에서 받은 메시지를 상태에 저장
      })
      .catch(err => {
        console.error('Error fetching API:', err);
      });
  }, []);

  return (
    <div>
      <h1>React + Flask Demo</h1>
      <p>API message: {apiMessage}</p>  {/* API에서 받은 메시지 출력 */}
    </div>
  );
}

export default App;

