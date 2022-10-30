import React from 'react'
import Item from '../Item/Item'
import ItemUnico from '../ItemUnico/ItemUnico'

export default function ItemDetail({producto}) {


  return (
    <div className='ItemDetail'>
      {producto.map(product =><ItemUnico key={product.id} prenda = {product} />)}
    </div>
  )
}
