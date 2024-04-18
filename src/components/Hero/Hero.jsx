import Aos from 'aos'
import { useEffect } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
    useEffect(  () => {
        Aos.init();
    },[])

  return (
    <div className='hero-container d-flex align-items-center' id='hero'>
        <div className="container contentHero pt-5 pt-md-0">
            <div className="row">
                <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center gap-5"   >
                    <div className='imgMeContainer flex-column flex-md-row d-flex justify-content-center ' 
                    data-aos="fade-right"  
                    data-aos-offset="200" 
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-delay="200"
                    data-aos-once="false">
                        <img className='imgMe' 
                        src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1708554384/yo_profile_tqhkbz.jpg" alt="" />
                    </div>
                    <div className='text-center' 
                    data-aos="fade-up"
                    data-aos-offset="200" 
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-delay="200"
                    data-aos-once="false">
                        <h2 className='mb-0 saludo'>Hola!</h2>
                        <h1 className='myName mb-0'>Soy Juan Pablo Salomón</h1>
                        <p className='secondaryText'>Fullstack Web Developer</p>
                        <div className='d-flex justify-content-center gap-3'>
                            <a href='https://github.com/pablopaul01' target='blank'>
                                <FaGithub className='iconsHero'/>
                            </a>
                            <a href="https://www.linkedin.com/in/juanpablosalomon/" target='blank'>
                                <FaLinkedin className='iconsHero'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero