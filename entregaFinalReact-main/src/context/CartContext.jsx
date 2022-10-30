import React, { children, createContext, useContext, useEffect, useState } from 'react'
export const CartContext = createContext(null)

function CartProvider({children}) {

    const [cart , setCart] = useState([]) 
    const [mCarrito ,setMcarrito] = useState(false)
    const [storage , setStorage] = useState([])

    useEffect(() => {
      if (JSON.parse(localStorage.getItem('cart'))) {
        setCart(JSON.parse(localStorage.getItem('cart')))
      }
    }, [])

    const addToCart = (producto , cantidad)=>{ 

      if (cart.some(el => el.id === producto.id)){
        let index =cart.findIndex(el => el.id === producto.id)
        let prod=cart[index]
        prod.cantidad = cantidad
        const newCart = [...cart]
        newCart.splice(index, 1 , prod)
        setCart([...newCart])
        setStorage(localStorage.setItem(
          "cart", JSON.stringify([
            ...newCart])))
       
      }else{
        let prod = {...producto , cantidad }
        setCart([...cart , prod])
        setStorage(localStorage.setItem(
          "cart", JSON.stringify([...cart , prod])))
        
      }  
     
    }

    const deleteCartById = (id)=>{  
            let newCart = cart.filter(el => el.id !== id)
            setCart([...newCart]) 
            setStorage(localStorage.setItem(
              "cart", JSON.stringify([
                ...newCart])))
           
    }

    const precioTotal =()=>  cart.reduce((acc ,item)=>
   { return acc += item.cantidad * item.precio },0)

    const deleteCart = () =>{
      setCart([])
      setStorage(localStorage.setItem(
        "cart", JSON.stringify([
          ])))
      
    }
    const mostrar = ()=>{setMcarrito(!mCarrito)}
    const abrir = ()=>{setMcarrito(true)}
    const cerrar =()=>{setMcarrito(false)}
 

  return (

    <CartContext.Provider value={{
      cart,
      mCarrito,
      mostrar,
      addToCart,
      deleteCartById,
      deleteCart,
      abrir,
      cerrar,
      precioTotal
   
       }}>

      {children}

    </CartContext.Provider>
   )
}

export default CartProvider
