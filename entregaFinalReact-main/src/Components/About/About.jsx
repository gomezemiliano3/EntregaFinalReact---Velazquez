import React from 'react'
import "./About.css"

export default function About() {

  return (
   
    <div className='Nosotros'>
      <div className='ContenedorTexto'>
      <h1>Nosotros</h1>
        <p>Hola somos Akumal una empresa dedicada a la fabricación, Produccion y venta de uniformes.<br />Trabajamos para que puedas vestir con la mejor calidad , innovadores diseños a un precio accesible.<br /> Anímate a diseñar el uniforme de tu empresa.Con Akumal podes personalizar tu ropa de trabajo, elegir los colores, bordados, estampas, y el diseño que mejor se adapte a tus necesidades.
        </p>
    
        <div className='redes'>
          <p><i className="fa-brands fa-instagram red1"></i>@akumal_cordoba</p>
          <p><i className="fa-solid fa-at red1 mail"></i>ventasakumal@gmail.com</p>
          <p><i className="fa-brands fa-whatsapp red1 wha"></i>3518015096</p>
        </div>
      </div>

    </div>
  )
}
