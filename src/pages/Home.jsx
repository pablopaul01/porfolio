import React, {useState, useEffect, useRef} from 'react'
import NavbarM from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Servicios from '../components/Servicios/Servicios'
import Proyectos from '../components/Proyectos/Proyectos'
import Contacto from '../components/Contacto/Contacto'
import Footer from '../components/Footer/Footer'
import ScrollToTop from "react-scroll-to-top";

const Home = () => {


  return (
    <>
      <NavbarM />
      <ScrollToTop smooth onClick={()=>
       { 
        location.replace(`#hero`)
      }
      
      }/>
      <Hero />
      {/* <section class="curved"></section> */}
      <Proyectos />
      <section className="divider-container">
        <div class="skewedR"></div>
      </section>
      <Servicios/>
      <section className="divider-container">
        <div class="skewed"></div>
      </section>
      <About />
      <div class="wave-container"></div>
      <Contacto />

      <Footer />
    </>
  )
}

export default Home