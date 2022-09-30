
import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <div className="logo"><h3>CACY</h3></div>
      <nav className="navegacion">
        <Link className="a" to='./'><p className='p'>Sobre Mi</p></Link>
        <Link className="a" to='./about'><p className='p'>Formación</p></Link>
        <Link className="a" to='./contacto'><p className='p'>Contacto</p></Link>
        <Link className="a" to='./proyectos'><p className='p'>Proyectos</p></Link>
      </nav>
    </header>
  )
}

export default Navbar
