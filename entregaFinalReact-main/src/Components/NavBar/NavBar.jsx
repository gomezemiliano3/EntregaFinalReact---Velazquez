import React, { useContext, useState } from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"
import CartWidget from '../cartWidget/CartWidget';
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart';


export default function NavBar() {

    const cartContext = useContext(CartContext)
    const { mostrar , mCarrito, cerrar } = cartContext
    const [toggle , setToggle]=useState(true)
  
    const menu =()=>{
      setToggle(!toggle)
    }

  return (
    <>
      {
        mCarrito
        ? <Cart />
        :null
      }    

    <div className='navBar'>
        <ul className='list'>

           <Link onClick={cerrar} to="/"> <li className='link'>Home</li> </Link>
           <Link onClick={cerrar} to="/Nosotros"> <li className='link'>Nosotros</li> </Link>
           <Link onClick={cerrar} to="/Colegios"> <li className='link'>Colegios</li> </Link>
           <Link onClick={cerrar} to="/Jardines/BeHappy"> <li className='link'>Jardines</li> </Link>
         

        </ul>
        <div className='icono'>

        <div  onClick={mostrar} id='pop' className='circulo'>
           <CartWidget />
        </div>

        </div>
    </div>
    <div className= 'list-mobile' >
          
          <i onClick={menu} className="fa-solid fa-bars barrita"></i>
  
          <ul className={toggle ? 'links-mobile' : 'links-mobile-abierta'} >
              <Link onClick={menu} to="/"> <li className='link'>Home</li> </Link>
              <Link onClick={menu} to="/Nosotros"> <li className='link'>Nosotros</li> </Link>
              <Link onClick={menu} to="/Colegios"> <li className='link'>Colegios</li> </Link>
              <Link onClick={menu} to="/Jardines/BeHappy"> <li className='link'>Jardines</li> </Link>
          </ul>
  
          <div className='icono'>
  
          <div  onClick={mostrar} id='pop' className='circulo'>
             <CartWidget />
          </div>
  
          </div>
  
    </div>
  </>
   
  )
}
