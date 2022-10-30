import React from 'react'
import "./Colegios.css"
import {Link} from 'react-router-dom'

export default function Colegios() {

  return (
    <div className='contenedorColegios'>
        <div className='colegios'>
            <div>
              <li><Link to="/Jockey/Jockey"><img src="https://firebasestorage.googleapis.com/v0/b/akumaluniformes.appspot.com/o/jockey.png?alt=media&token=4db82491-7973-420f-bfce-61512c8f74d8" alt="" /></Link></li>
              <li><Link to="/Ins/Ins"><img src="https://firebasestorage.googleapis.com/v0/b/akumaluniformes.appspot.com/o/ins.png?alt=media&token=e954d776-4574-4381-8cba-9bcf59a116af" alt="" /></Link></li>
              <li><Link to="/Ninos/Na"><img src="https://firebasestorage.googleapis.com/v0/b/akumaluniformes.appspot.com/o/ninos.png?alt=media&token=210f05a8-71e4-4833-a8d0-d366e6c74a5a" alt="" /></Link></li>
              <li><Link to="/Vida/Vida"><img src="https://firebasestorage.googleapis.com/v0/b/akumaluniformes.appspot.com/o/vida.png?alt=media&token=01d33b14-e358-4e2a-a265-dc536d41155c" alt="" /></Link></li>
            </div>
        </div>
    </div>
    
  )
}
