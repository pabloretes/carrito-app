import React, { useState } from 'react'

function ItemCount() {
    const [contador, setContador] = useState(0)
    return (
    <div>

      <h1>Cantidad: {contador}</h1>

      <button onClick={() => {setContador(contador + 1)}}>SUMAR</button>
      <button onClick={() => {setContador(contador - 1)}}>RESTAR</button>
    
    </div>
  )
  
}

export default ItemCount



