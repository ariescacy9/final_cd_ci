import React from 'react'
import Clima from '../proyectClima/Clima'
import Cripto from '../proyectCripto/Cripto'
import Curse from '../proyectCurses/Curse'
import List from '../proyectList/List'
import Web from '../proyectWeb/Web'

function Proyects() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: '#061b00',
      color: 'white',
      margin:'0'
    }}>
      <h1>PROYECTOS</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly'
      }}>
        <Clima/>
        <Cripto/>
        <Curse/>
        <Web/>
        <List/>
      </div>
    </div>
  )
}

export default Proyects