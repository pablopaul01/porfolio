import React from 'react'
import CardProject from '../CardProject/CardProject'

const Proyectos = () => {
  return (
    <div className='container-fluid my-5'>
        <div className="row">
            <div className='py-4 text-center'>
            <h2>Proyectos</h2>
            <h5>Aqui puedes ver algunos de los proyectos en los que trabajé</h5>
            </div>
            <div className="col d-flex justify-content-around pb-4">
                
            <CardProject 
                title={'ArgenCast'} 
                text={' Maquetación de web de servicio de streaming completamente responsive con HTML, CSS Y BOOTSTRAP 5.2.3.'}
                site={'https://argencast.netlify.app/'}
                repo={'https://github.com/pablopaul01/ArgenCast'}
                img={'https://res.cloudinary.com/dcv6aut2v/image/upload/v1700339648/Porfolio/argencast_pwlci4.png'}
            />
            <CardProject 
                title={'ArgenCast'} 
                text={' Maquetación de web de servicio de streaming completamente responsive con HTML, CSS Y BOOTSTRAP 5.2.3.'}
                site={'https://argencast.netlify.app/'}
                repo={'https://github.com/pablopaul01/ArgenCast'}
                img={'https://res.cloudinary.com/dcv6aut2v/image/upload/v1700339648/Porfolio/argencast_pwlci4.png'}
            />
            <CardProject 
                title={'ArgenCast'} 
                text={' Maquetación de web de servicio de streaming completamente responsive con HTML, CSS Y BOOTSTRAP 5.2.3.'}
                site={'https://argencast.netlify.app/'}
                repo={'https://github.com/pablopaul01/ArgenCast'}
                img={'https://res.cloudinary.com/dcv6aut2v/image/upload/v1700339648/Porfolio/argencast_pwlci4.png'}
            />
            </div>
        </div>
    </div>
  )
}

export default Proyectos