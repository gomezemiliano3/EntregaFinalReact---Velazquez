import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import "./Itemcount.css"

const ItemCount = ({stock , onAdd , prenda}) => {

  const [count ,setCount] = useState(0)
  const [hay , setHay]= useState(true)

useEffect (()=>{

  if(stock === 0){
    setHay(false)
  }


})

 const handleCounter = ()=>{
    setCount(count + 1)
   if(count === stock){
    setCount(stock)
   }
   
 }
const handleLessCounter =()=>{
    setCount(count -1)
    
}


  return (
    <div className='contador'>

      {
        hay ? <>  <h4>Unidades</h4>
      
        <div className='contadorBox'>
  
        <button className='b1' disabled={count === 0} onClick={handleLessCounter}>-</button>
          <div>{count}</div>
          <button className='b1' onClick={handleCounter}>+</button>
        </div>
        <div className='boxAgregar'>
            <button disabled={count === 0} onClick={()=>onAdd(count)} className='aCarrito'>Agregar al carrito</button>
        </div>
        </>
        : <p>Producto Sin Stock</p>
      }

    
      
  
        
    </div>
  )
}

export default ItemCount