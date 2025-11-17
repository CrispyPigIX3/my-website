import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [mode, setMode] = useState('login'); // or 'register'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister(e) {
    e.preventDefault();
    if (!username.trim() || !password) return alert('กรุณากรอก username และ password');
    const users = JSON.parse(localStorage.getItem('pop_users') || '{}');
    if (users[username]) return alert('ชื่อผู้ใช้นี้มีอยู่แล้ว');
    users[username] = { password };
    localStorage.setItem('pop_users', JSON.stringify(users));
    alert('สมัครเรียบร้อย กรุณาเข้าสู่ระบบ');
    setMode('login');
  }

  function handleLogin(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('pop_users') || '{}');
    if (!users[username] || users[username].password !== password) return alert('username หรือ password ไม่ถูกต้อง');
    localStorage.setItem('pop_user', JSON.stringify({ name: username }));
    onLogin({ name: username });
  }

  return (
    <div className="login-wrap">
      <div className="login-card">
        <h2>POP</h2>
        {mode === 'login' ? (
          <form onSubmit={handleLogin}>
            <div className="form-row">
              <label className="small">Username</label>
              <input className="input" value={username} onChange={e=>setUsername(e.target.value)} />
            </div>
            <div className="form-row">
              <label className="small">Password</label>
              <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            </div>
            <div style={{display:'flex',gap:8}}>
              <button type="submit">Login</button>
              <button type="button" className="secondary" onClick={()=>setMode('register')}>Register</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <div className="form-row">
              <label className="small">Choose Username</label>
              <input className="input" value={username} onChange={e=>setUsername(e.target.value)} />
            </div>
            <div className="form-row">
              <label className="small">Choose Password</label>
              <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            </div>
            <div style={{display:'flex',gap:8}}>
              <button type="submit">Create Account</button>
              <button type="button" className="secondary" onClick={()=>setMode('login')}>Back to Login</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
