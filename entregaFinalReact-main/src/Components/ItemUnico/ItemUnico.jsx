import React from 'react'
import { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemUnico.css"
import { CartContext } from '../../context/CartContext'


export default function ItemUnico({prenda}) {

    const cartContext = useContext(CartContext)

    const{addToCart,abrir,precioTotal} = cartContext

    const onAdd = (cantidad) =>{
      addToCart(prenda ,cantidad)
      abrir()
      precioTotal()
    }
     
   
  return (
    <div className='contenedorPrincipalDetallada'>
    <div className="cardDetallada">
        <div className="imagenDetallada">
              <img src={prenda.imagen} alt="" />
        </div>
     
        <div className='info'>
          <div className='infoContenedor'>

          <h1>{prenda.nombre}</h1>
            <p>El costo de la prenda es de ${prenda.precio}</p>
            <ItemCount inicial={1} stock={prenda.stock} onAdd={onAdd} prenda={prenda}/>
        </div>
          </div>

        
    </div>
</div>
  )
}
