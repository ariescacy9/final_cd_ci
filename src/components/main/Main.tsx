import React from 'react'
import './Main.css'


function Main() {
  return (
    <div className='main'>
      <div className='main_description'>
        <div className='main_description-date'>
          <h1 className='h1'>Bienvenidos!!!</h1>
          <div className='datePersnal'>
            <h2>DATOS PERSONALES</h2>
            <p>NOMBRES: Cristian Alexander</p>
            <p>APELLIDOS: Carhuas Yuyale</p>
            <p>EDAD: 28</p>
          </div>
          <div className='tecnology'>
            <h3>TECNOLOGIAS</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
          </div>
        </div>
        <div className='main_description-futuro'>
          <h3>Futuro Full Stack</h3>
          <h4>Actualmente estoy en etapa de preparacion Front End, hacentando cada vez más los conocimientos solidos y poniendo ya en practica lo aprendido</h4>
          <h4>En la parte de BackEnd tambien ya tengo la parte teorica de los conceptos fundamentales, pero aun me falta abarcar mas ese campo y experimentar</h4>
          <h4>a diario voy aprendiendo y poniendo en practica lo aprendido</h4>
          <h4>¡Nunca se deja de aprender!</h4>
        </div>
      </div>
      <div className='main_tecnology'>
        <div className='main_tecnology-icon'>
            <div>
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react'/>
            <p>React</p>
            </div>
            <div>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='js'/>
              <p>Javascript</p>
            </div>
            <div>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='html'/>
              <p>HTML</p>
            </div>
            <div>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='github'/>
              <p>GitHub</p>
            </div>
            <div>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='git'/>
              <p>Git</p>
            </div>
            <div>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='css'/>
              <p>CSS</p>
            </div>
            <div>
              <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt='sass'/>
              <p>Saas</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main