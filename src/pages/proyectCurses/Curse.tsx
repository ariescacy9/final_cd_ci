import React from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function Curse() {
  return (
    <div style={{
      backgroundColor: "rgba(51, 102, 255, 0.1)",
      borderRadius:'10px',
      width: '350px',
      boxShadow: '0 0 .5rem #39e206',
      margin:'20px'
    }}>
      <div>
        <img src='../../recursos/img/curses.JPG' alt="curses"
        style={{
          width: '350px',
          height: '350px',
          borderRadius: '10px'
        }}/>
      </div>
      <div>
      <h1>Cursos</h1>
      <p>Muestra el consumo de una Api mediante fetch, traendo valores de cada curso y mostrando en cartas</p>
      </div>
      <Link to='./curso'><Button variant="contained" style={{
        margin: '20px'
      }}>PROBAR</Button></Link>
    </div>
  )
}

export default Curse