import React, { useState, useEffect } from 'react'
import MENU from '../data/menu'
import MenuCard from './MenuCard'
import MenuDetailModal from './MenuDetailModal'

export default function MenuList({ onAdd }) {
  const [items] = useState(MENU)
  const [selected, setSelected] = useState(null)
  const [fav, setFav] = useState(()=>JSON.parse(localStorage.getItem('pop_fav')||'[]'))

  useEffect(()=>localStorage.setItem('pop_fav', JSON.stringify(fav)), [fav])

  const toggleFav = item => setFav(prev => (prev.find(p=>p.id===item.id)? prev.filter(p=>p.id!==item.id) : [...prev, item]))

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
        <h2 style={{margin:0}}>เมนูแนะนำ</h2>
        <div className="badge">ยอดฮิต</div>
      </div>

      <div className="cards">
        {items.map(i => (
          <MenuCard key={i.id} item={i} onOpen={()=>setSelected(i)} onAdd={()=>onAdd(i)} onFav={()=>toggleFav(i)} fav={fav.some(f=>f.id===i.id)} />
        ))}
      </div>

      {selected && <MenuDetailModal item={selected} onClose={()=>setSelected(null)} onAdd={()=>{onAdd(selected); setSelected(null)}} />}
    </div>
  )
}
