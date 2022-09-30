import React from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function Cripto() {
  return (
    <div style={{
      backgroundColor: "rgba(51, 102, 255, 0.1)",
      borderRadius:'10px',
      width: '350px',
      boxShadow: '0 0 .5rem #39e206',
      margin:'20px'
    }}>
      <div>
        <img src='../../recursos/img/cripto.JPG' alt="cripto"
        style={{
          width: '350px',
          height: '350px',
          borderRadius: '10px'
        }}/>
      </div>
      <div>
      <h1>Criptomoneda</h1>
      <p>permite cotizar las criptomonedas segun a tipo de cambio de moneda: dolares, euros, libras y soles peruanos</p>
      </div>
      <Link to='./cripto'><Button variant="contained" style={{
        margin: '20px'
      }}>PROBAR</Button></Link>
    </div>
  )
}

export default Cripto