import React from 'react'
import NavbarM from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Servicios from '../components/Servicios/Servicios'

const Home = () => {
  return (
    <>
      <NavbarM />
      <Hero/>
      <About />
      <Servicios />
    </>
  )
}

export default Home