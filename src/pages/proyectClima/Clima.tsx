import React from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function Clima() {
  return (
    <div style={{
      backgroundColor: "rgba(51, 102, 255, 0.1)",
      borderRadius:'10px',
      width: '350px',
      boxShadow: '0 0 .5rem #39e206',
      margin:'20px'
    }}>
      <div >
        <img src='../../recursos/img/clima.JPG' alt="clima" style={{
          width: '350px',
          height: '350px',
          borderRadius: '10px'
        }}/>
      </div>
      <div>
      <h1>Clima</h1>
      <p>Permite realizar consultas en tiempo real del tiempo según la cuidad que se ingrese</p>
      </div>
      <Link to='./clima'><Button variant="contained" style={{
        margin: '20px'
      }}>PROBAR</Button></Link>
    </div>
  )
}

export default Clima