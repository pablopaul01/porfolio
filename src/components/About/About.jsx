import React from 'react'
import Button from 'react-bootstrap/esm/Button'


const About = () => {

  return (
    <>
        <div className='container-fluid py-5 my-3' id='aboutMe'>
            <div className="row justify-content-center">
                <div className="col-4 col-md-2 text-center">
                    <h2 className='subrayado'>Sobre Mi</h2>
                </div>
            </div>
            <div className="row d-flex mt-5" 
            data-aos="fade-in"
            data-aos-offset="200" 
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-delay="200"
            data-aos-once="false">
            <div className="col-5 container-imgAboutMe">
                </div>
                <div className="col-12 col-md-6" >
                    <div className='pb-5'>
                        <h4 className='pt-3'>¿Quien soy?</h4>
                        <h4>Soy Juan Pablo Salomón, Deasarrollador Web Fullstack</h4>
                        <p className='mt-4'>
                            Soy un apasionado del mundo de la tecnología y la programación, con una insaciable sed de conocimiento y una profunda pasión por los desafíos que presenta el mundo IT. Como autodidacta, disfruto explorando nuevas tecnologías y abordando problemas complejos, viendo cómo las ideas se convierten en proyectos tangibles.<br/><br/>

                            Me gusta colaborar y trabajar en equipo. Tengo una gran habilidad de comunicación. Estoy en busqueda de un trabajo de tiempo completo como desarrollador web, donde pueda aplicar mis conocimientos y habilidades para continuar creciedo como programador
                        </p>
                        <Button variant="dark" href='https://drive.google.com/file/d/1IAPYddPy-3DvFV74e99yNzutj2JcWc7y/view?usp=sharing' target='blank'>Descargar CV</Button>
                    </div>
                    <div className='mt-5'>
                    <h4>Mis Skills:</h4>
                    <div className='d-flex flex-wrap gap-2 justify-content-center mt-4'>
                        <div className='text-center'>
                            <img className='w-50' src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1700316292/Porfolio/icons8-html-100_anucbf.png" alt="html" />
                            <p>HTML</p>
                        </div>
                        <div className='text-center'>
                            <img className='w-50' src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1700316295/Porfolio/icons8-css-100_yhtjay.png" alt="html" />
                            <p>CSS</p>
                        </div>
                        <div className='text-center'>
                            <img className='w-50' src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1700316292/Porfolio/icons8-javascript-100_vdwv11.png" alt="html" />
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className='text-center'>
                            <img className='w-50' src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1700316294/Porfolio/icons8-react-a-javascript-library-for-building-user-interfaces-100_kuv4ej.png" alt="html" />
                            <p>REACT</p>
                        </div> 
                        <div className='text-center'>
                            <img className='w-50' src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1700316293/Porfolio/icons8-nodejs-100_brz2xm.png" alt="html" />
                            <p>NODE JS</p>
                        </div>
                        <div className='text-center'>
                            <img className='w-50' src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1700316292/Porfolio/icons8-expresar-js-100_xolxw1.png" alt="html" />
                            <p>EXPRESS JS</p>
                        </div>
                        <div className='text-center'>
                            <img className='w-50' src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1700316293/Porfolio/icons8-mongodb-100_px3q3f.png" alt="html" />
                            <p>MONGODB</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column justify-content-center mt-5 mt-md-0">
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default About