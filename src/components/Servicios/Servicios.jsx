import React from 'react'
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { FaMobileAlt } from "react-icons/fa";
import { CgPerformance } from "react-icons/cg";
import { GrLike } from "react-icons/gr";
import { RxUpdate } from "react-icons/rx";

const Servicios = () => {
  return (
    <section className='px-5 py-5 servicesContainer'>
        <div className='container'>
            <h2 className='titleServices'>Servicios</h2>
            <h5>Servicios que ofrezco a mis clientes</h5>
            <div className="row">
                    <div className="col d-flex gap-4 py-5 flex-wrap justify-content-center">
                        <div className='text-center cardServices'>
                            <HiOutlineCodeBracketSquare className='iconServices'/>
                            <h5 className='titleServices'>Desarrollo</h5>
                            <p>Conozco la importancia del diseño web y yo puedo ayudarte a crear un sitio que amarás.</p>
                        </div>
                        <div className='text-center cardServices'>
                            <FaMobileAlt className='iconServices'/>
                            <h5 className='titleServices'>Responsive</h5>
                            <p>Tu sitio se verá correctamente en cualquier dispositivo, incluyendo computadoras, tablets y celulares.</p>
                        </div>
                        <div className='text-center cardServices'>
                            <CgPerformance className='iconServices'/>
                            <h5 className='titleServices'>Performance</h5>
                            <p>Retener a los usuarios es crucial para mejorar las conversiones. Una alta performance del sitio seducen y retienen a los usuarios.</p>
                        </div>
                        <div className='text-center cardServices'>
                            <GrLike className='iconServices'/>
                            <h5 className='titleServices'>Funcional</h5>
                            <p>Tu sitio será completamente funcional a tus necesidaes y a la lógica del negocio.</p>
                        </div>
                        <div className='text-center cardServices'>
                            <RxUpdate className='iconServices'/>
                            <h5 className='titleServices'>Dinámico</h5>
                            <p>Retener a los usuarios es crucial para mejorar las conversiones. Una alta performance del sitio seducen y retienen a los usuarios.</p>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Servicios