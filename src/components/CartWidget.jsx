
import React from 'react';
import carrito from '../imagenes/carrito.png';

function CartWidget({items}) {
  return (
    <div className='carrito-container' >
        <img src={carrito} alt="carrito" className='carrito-imagen' />
        <p className='text-items'>{items}</p>
    </div>

  )
}

export default CartWidget