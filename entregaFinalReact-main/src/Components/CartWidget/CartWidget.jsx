
import { CartContext } from '../../context/CartContext';
import { useContext } from "react";
import "./CartWidget.css"

export default function CartWidget() {

    const cartContext = useContext(CartContext)
    const{cart} = cartContext

  return (
    <>
    <button className='iconoCarritoContenedor'><i className="fa-solid fa-cart-shopping iconoCarrito"></i></button>

    <div className='contenedorContador'>
        {cart.length}
    </div>
    </>
  )
}
