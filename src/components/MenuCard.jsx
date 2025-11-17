import React from 'react'

export default function MenuCard({ item, onOpen, onAdd, onFav, fav }) {
  return (
    <div className="card">
      <img src={item.img} alt={item.name} onClick={onOpen} />
      <div className="card-body">
        <h4>{item.name}</h4>
        <div className="meta">{item.calories} kcal • ฿{item.price}</div>
        <div className="card-actions">
          <button onClick={onAdd}>Add</button>
          <button onClick={onFav}>{fav ? '♥' : '♡'}</button>
          <button onClick={onOpen}>Details</button>
        </div>
      </div>
    </div>
  )
}
