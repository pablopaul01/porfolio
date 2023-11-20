import React from 'react'
import NavbarM from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Servicios from '../components/Servicios/Servicios'
import Proyectos from '../components/Proyectos/Proyectos'
import Contacto from '../components/Contacto/Contacto'

const Home = () => {
  return (
    <>
      <NavbarM />
      <Hero/>
      <About />
      <Servicios />
      <Proyectos />
      <Contacto />
    </>
  )
}

export default Home