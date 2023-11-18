import React from 'react'

const Hero = () => {
  return (
    <div className='hero-container d-flex align-items-center'>

        <div className="container contentHero">
        
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center gap-5">
                    <div className='imgMeContainer'>
                        <img className='imgMe' 
                        src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1700311516/Porfolio/yo2_ia0ctt.png" alt="" />
                    </div>
                    <div className='text-center'>
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