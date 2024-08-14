// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// const usernameInput = document.getElementById('username');
// const passwordInput = document.getElementById('password');

// function App() {
//   const [count, setCount] = useState(0)

//   const image = {
//     imgPicture: "image/view.jpg",
//     imgPicture: "image/logo.jpg"
//   }
//   return (
//     <>
//       <img src="image/view.jpg" width="100%" height="80%" />
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';
import './App.css'; // ไฟล์ CSS สำหรับจัดรูปแบบ

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // ตรวจสอบข้อมูลการเข้าสู่ระบบ (ในที่นี้ สมมติว่าส่งข้อมูลไปยัง API)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="app-container">
      <div className="login-box">
        <div className="user-icon">
          <img src="image/logo.jpg" ></img>
        </div>
        <h2 >สำนักงานตำรวจแห่งชาติ</h2>
        <p>SMART TICKET</p>

        <div className="input-group">
          <label htmlFor="username">ชื่อผู้ใช้:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">รหัสผ่าน:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin}>เข้าสู่ระบบ</button>
      </div>
    </div>
  );
}

export default App;