import React from 'react'
import "./Item.css"
import {Link} from 'react-router-dom'

export default function Item({product}) {

  return (
            <div className='card'>

                <Link to={`/Item/${product.idItem}`}><img src={product.imagen} alt="img" /></Link> 
                <h3>{product.titulo}</h3>
                <p>{product.nombre}</p>
                <Link to={`/Item/${product.idItem}`}><button>Comprar $ {product.precio}</button></Link>

            </div>
  )
}
