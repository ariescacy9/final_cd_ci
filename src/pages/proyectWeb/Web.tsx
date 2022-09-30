import React from 'react'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'
/*'../../recursos/img/webP1.JPG'*/

function Web() {
  return (
    <div style={{
      backgroundColor: "rgba(51, 102, 255, 0.1)",
      borderRadius:'10px',
      width: '350px',
      boxShadow: '0 0 .5rem #39e206',
      margin:'20px'
    }}>
      <div>
        <img src="../../recursos/img/webP1.JPG" alt="webP"
        style={{
          width: '350px',
          height: '350px',
          borderRadius: '10px'
        }}/>
      </div>
      <div>
      <h1>Pagina web</h1>
      <p>Muestra una pagina web con secciones, registro, login y productos, ideal para una futura implementacion</p>
      </div>
      <Link to='./web'><Button variant="contained" style={{
        margin: '20px'
      }}>PROBAR</Button></Link>
    </div>
  )
}

export default Web