import React from 'react'

export default function MenuDetailModal({ item, onClose, onAdd }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <img src={item.img} alt="" />
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <div>Calories: {item.calories} kcal</div>
        <div>Price: ฿{item.price}</div>
        <div>Ingredients:
          <ul>{item.ingredients.map((ing,i)=>(<li key={i}>{ing}</li>))}</ul>
        </div>
        <div className="modal-actions" style={{display:'flex',gap:8,marginTop:12}}>
          <button onClick={onAdd}>Add to cart</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}
