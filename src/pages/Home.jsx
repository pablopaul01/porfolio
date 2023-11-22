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
  const [inHome, setInHome] = useState(false)
  const [currentSection, setCurrentSection] = useState(null);

  const hiddenRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      // ... (el mismo código que proporcioné anteriormente para determinar la sección actual)
      setCurrentSection('#hero');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);
  return (
    <>
      <NavbarM currentSection={currentSection}/>
      <ScrollToTop smooth onClick={()=>
       { 
        location.replace(`#hero`)
        setCurrentSection("#hero")
      }
      
      }/>
      <Hero ref={hiddenRef}/>
      <About />
      <Servicios />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  )
}

export default Home