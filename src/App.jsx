import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import MenuList from './components/MenuList'
import Navbar from './components/Navbar'
import CartPanel from './components/CartPanel'


export default function App(){
  const [user, setUser] = useState(()=>{ try { return JSON.parse(localStorage.getItem('pop_user'))||null } catch { return null }})
  const [cart, setCart] = useState(()=>JSON.parse(localStorage.getItem('pop_cart')||'[]'))
  const [showCart, setShowCart] = useState(false)

  useEffect(()=>localStorage.setItem('pop_cart', JSON.stringify(cart)), [cart])

  function addToCart(item){
    setCart(prev=>{
      const found = prev.find(p=>p.id===item.id)
      if(found) return prev.map(p=>p.id===item.id? {...p, qty: p.qty+1}: p)
      return [...prev, {...item, qty:1}]
    })
  }

  function inc(item){ setCart(prev=>prev.map(p=>p.id===item.id? {...p, qty: p.qty+1}: p)) }
  function dec(item){ setCart(prev=>prev.flatMap(p=> p.id===item.id? (p.qty>1? [{...p, qty: p.qty-1}]:[]) : [p])) }
  function removeItem(item){ setCart(prev=>prev.filter(p=>p.id!==item.id)) }
  function checkout(){ alert('สั่งซื้อเรียบร้อย'); setCart([]) }

  function logout(){ localStorage.removeItem('pop_user'); setUser(null) }

  if(!user) return <Login onLogin={u=>setUser(u)} />

  return (
    <div>
      <Navbar user={user} cartCount={cart.reduce((s,i)=>s+i.qty,0)} onLogout={logout} onOpenCart={()=>setShowCart(true)} />
      <div className="container">
        <div className="layout">
          <div>
            <MenuList onAdd={addToCart} />
          </div>
          <div>
            <CartPanel cart={cart} onInc={inc} onDec={dec} onRemove={removeItem} onCheckout={checkout} />
          </div>
        </div>
       
      </div>
      
      {showCart && <div style={{position:'fixed',right:12,top:80}}><CartPanel cart={cart} onInc={inc} onDec={dec} onRemove={removeItem} onCheckout={checkout} /></div>}
    </div>
  )
}
