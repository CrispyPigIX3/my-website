import React from 'react'

export default function Navbar({ user, cartCount, onLogout, onOpenCart }) {
  return (
    <div className="topbar">
      <div className="title">
        <img src="/icons/logo-pop.png" alt="POP" />
        <div>
          <div style={{fontSize:14,fontWeight:700}}>POP</div>
          <div style={{fontSize:12,color:'#6b6b6b'}}>Healthy meals</div>
        </div>
      </div>

      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div className="small">สวัสดี, {user.name}</div>
        <button className="icon-btn" onClick={onOpenCart}>Cart ({cartCount})</button>
        <button className="secondary" onClick={onLogout}>Logout</button>
      </div>
    </div>
  )
}
