import React from 'react'
import Aos from 'aos'
import { useEffect } from 'react'

const Hero = () => {
    useEffect(  () => {
        Aos.init();
    },[])

  return (
    <div className='hero-container d-flex align-items-center' id='hero'>

        <div className="container contentHero">
        
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center gap-5"   >
                    <div className='imgMeContainer  d-flex justify-content-center d-none d-md-block' 
                    data-aos="fade-right"  
                    data-aos-offset="200" 
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-delay="200"
                    data-aos-once="false">
                        <img className='imgMe' 
                        src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1708554384/yo_profile_tqhkbz.jpg" alt="" />
                    </div>
                    <div className='text-center' data-aos="fade-left">
                        <h2 className='mb-0 saludo'>Hola!</h2>
                        <h1 className='myName mb-0'>Soy Juan Pablo Salomón</h1>
                        <p className='secondaryText'>Fullstack Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero