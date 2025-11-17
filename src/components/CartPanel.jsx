import React from 'react'

export default function CartPanel({ cart, onInc, onDec, onRemove, onCheckout }) {
  const totalPrice = cart.reduce((s,i)=>s + i.price * i.qty, 0)
  const totalCalories = cart.reduce((s,i)=>s + i.calories * i.qty, 0)

  return (
    <div className="side">
      <h3>Cart</h3>
      {cart.length === 0 ? <div className="small">ไม่มีสินค้าในตะกร้า</div> : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt="" />
              <div style={{flex:1}}>
                <div style={{fontWeight:600}}>{item.name}</div>
                <div className="small">{item.calories} kcal • ฿{item.price}</div>
              </div>
              <div className="qty">
                <button className="icon-btn" onClick={()=>onDec(item)}>-</button>
                <div style={{minWidth:24,textAlign:'center'}}>{item.qty}</div>
                <button className="icon-btn" onClick={()=>onInc(item)}>+</button>
                <button className="icon-btn" onClick={()=>onRemove(item)}>🗑</button>
              </div>
            </div>
          ))}
          <div style={{marginTop:12}}>
            <div style={{display:'flex',justifyContent:'space-between'}}><div className="small">Total calories</div><div>{totalCalories} kcal</div></div>
            <div style={{display:'flex',justifyContent:'space-between',fontWeight:700,marginTop:6}}><div>Total</div><div>฿{totalPrice}</div></div>
            <div style={{marginTop:12}}>
              <button onClick={onCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
