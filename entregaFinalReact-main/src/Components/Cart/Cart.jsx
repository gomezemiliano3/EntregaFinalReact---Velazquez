import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import "./Cart.css"
import { Link } from 'react-router-dom'

const Cart = () => {

 const cartContext = useContext(CartContext)
  const{cart,deleteCartById ,cerrar, precioTotal } = cartContext
  const {deleteCart}  = cartContext
  

 const vaciarCarrito = () =>{
    deleteCart()
    cerrar()
 }


 
  return (

    <div className='carritoPrincipal'>
        <div className='carrito'>

          <div className='tituloCarrito'>
                <h2>Tu Carrito</h2>
            </div>
            <div className='prendasCarrito'>

                <h4>Tus prendas <br/> total $ {precioTotal()} </h4>
                
            </div>
            <div>
              
            </div>
            <div className='productosCarrito'>

                {cart.map((producto)=>{
                    const eliminarUno = () =>{
                        deleteCartById(producto.id)
                    }
                  
                    const total = producto.precio * producto.cantidad

                    return(
                        <div key={producto.id} className='cartCarrito'>
                          <div className='unitario'>
                            <img src={producto.imagen} alt={producto.nombre} />
                            <div className='unitarioInfo'>
                            <h3>{producto.nombre}</h3>
                            <p>${total}</p>
                            <p>Unidades : { producto.cantidad}</p>
                            </div>
                            <button onClick={eliminarUno}  className='buttonUnitario'>X</button>

                          </div>
                        
                        </div>
                    )
                })
                }   
                <div className='botonesFinales'>
                <button  onClick={vaciarCarrito} className='vaciarCarrito'>Vaciar Carrito</button> 
                <Link to="/Checkout"> <button onClick={cerrar} className='vaciarCarrito'>finalizar Compra</button></Link>
                </div>
                      
            </div>
            


        </div>
    </div>

  )
}

export default Cart