import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ".//ItemDetailContainer.css"
import { useParams } from 'react-router-dom'
import {collection, getDocs , getFirestore } from "firebase/firestore"
import Loader from '../loader/Loader'


const ItemDetailContainer = () => {

  const [items, setItems] = useState([])
  const { idItem } = useParams()
  const [loading, setLoading] = useState(false)

 
  useEffect(() =>{
     
    setLoading(true)


    const db = getFirestore()
    
    const refcollectionProductos = collection(db , "productos" ) //referencia al documento
    
    getDocs(refcollectionProductos).then((res) => {
    
    let limpios = res.docs

   
    
    limpios = limpios.map((producto)=>{
        
    return ({id: producto.id, ...producto.data() })
       
    })
  

    let completos = limpios.filter((producto)=>{
        return producto})
        

    limpios = limpios.filter((producto)=>{
        return producto.idItem === idItem
    } )

    
    if (idItem){
        setItems(limpios)
        setLoading(false)


    }else{
        setItems(completos)
        setLoading(falsea)

        
    }
    
    
    })
    


},[idItem])

if(loading){
    return <Loader />
}
else{


return (
  <div className='idc'>
  <ItemDetail  producto={items}  />
  </div>

  

)
}
}

export default ItemDetailContainer

