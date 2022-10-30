import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {collection,updateDoc,doc, addDoc , getFirestore } from "firebase/firestore"
import "./Checkout.css"
import Cart from '../Cart/Cart'

const Checkout = () => {
    const cartContext = useContext(CartContext)
    const{cart , deleteCart , cerrar} = cartContext
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [apellido , setApellido] = useState('')
    const [direccion , setDireccion] = useState('')
    const [ tel  , setTel] = useState('')
    const [idCompra , setIdCompra] = useState('')
    const [compraRealizada , setCompraRealizada] = useState(false)
    
 

    const terminarCompra = () =>{

      const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      const regexPhone = /^[0-9]+$/
  
      if (email === '' || tel === '' || name === '' || apellido === '') {
        Swal.fire({
          title: 'Error!',
          text: 'Complete todo el formulario por favor',
          icon: 'error',
          confirmButtonText: 'Continue',
        })
        return
      }

      if (tel !== '' && !regexPhone.test(tel)) {
        Swal.fire({
          title: 'Error!',
          text: 'Ingrese un telefono valido',
          icon: 'error',
          confirmButtonText: 'Continue',
        })
        return
      }

      if (email !== '' && !regexEmail.test(email)) {
        Swal.fire({
          title: 'Error!',
          text: 'Por favor ingrese un e-mail valido',
          icon: 'error',
          confirmButtonText: 'Continue',
        })
        return
      }

      if (cart.length === 0) {
        Swal.fire({
          title: 'Error!',
          text: 'Necesita agregar por lo menos 1 item al carrito',
          icon: 'error',
          confirmButtonText: 'Continue',
        })
        return
      }
  
      Swal.fire({
        title: 'Success!',
        text: 'Compra realizada con exito',
        icon: 'success',
        confirmButtonText: 'Continue',
      })
        
        const order = {buyer:{name,apellido,tel,email},items:{cart}}        
        const db = getFirestore()
        const refcollectionOrders = collection(db , "orders" ) 
        addDoc(refcollectionOrders , order).then((res) => {
            setIdCompra(res.id)})
            cart.forEach((product) =>
            updateDoc(doc(db, 'productos', product.id), {
              stock: product.stock - product.cantidad,
            }),
          )
            deleteCart()
            setCompraRealizada(true)
            cerrar()

   }

  return (
    <>
    <div className='ContenedorPrincipalForm'>
    {
      compraRealizada ? <div className='agradecimiento'>
                         <h1 >Gracias por su compra <br/> nos comunicaremos a la brevedad<br/></h1>
                         <h3>su id de compra es: {idCompra}</h3>
                        </div>
      : (
        
      
    <div className='formContainer'>

    <h3>Estas por finalizar tu compra! te pedimos q completes el formulario<br/> para poder cargar el pedido</h3>
        
        <form className='form'>
            <div className='form-group'>
                <label htmlFor='nombre'>Nombre</label>
                <input type='text' className='form-control' id='nombre' placeholder='Nombre' value={name}onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='apellido'>Apellido</label>
                <input type='text' className='form-control' id='apellido' placeholder='Apellido'  value={apellido}onChange={(e)=>setApellido(e.target.value)} />
            </div>
          
            <div className='form-group'>
                <label htmlFor='Telefono'>Telefono</label>
                <input type='text' className='form-control' id='tel' placeholder='Telefono' value={tel}onChange={(e)=>setTel(e.target.value)} /> 
            </div>
            <div className='form-group'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' className='form-control' id='email' placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
                
            </div>
               
         </form>
            <button onClick={terminarCompra}>Terminar Compra</button>
            
     </div>
     )
    }
  </div>
     <div className='cartVisible'>
      <Cart />
     </div>

    
  </>
  )
}

export default Checkout