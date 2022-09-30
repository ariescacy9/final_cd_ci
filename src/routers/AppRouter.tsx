import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from '../components/main/Main'
import Proyects from '../pages/proyects/Proyects'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import ShowWeb from '../pages/proyectWeb/ShowWeb'
import ShowClima from '../pages/proyectClima/ShowClima'
import ShowCripto from '../pages/proyectCripto/ShowCripto'
import ShowCurse from '../pages/proyectCurses/ShowCurse'
import ShowBox from '../pages/proyectList/ShowBox'
import RedSocial from '../components/redSocial/RedSocial'


function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar/>
      <RedSocial/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contacto' element={<Contact/>} />
        <Route path='/proyectos' element={<Proyects/>} />
        <Route path='/proyectos/web' element={<ShowWeb/>} />
        <Route path='/proyectos/clima' element={<ShowClima/>} />
        <Route path='/proyectos/cripto' element={<ShowCripto/>} />
        <Route path='/proyectos/curso' element={<ShowCurse/>} />
        <Route path='/proyectos/box' element={<ShowBox/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter