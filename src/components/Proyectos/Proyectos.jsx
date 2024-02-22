import React from 'react'
import CardProject from '../CardProject/CardProject'

const Proyectos = () => {
  return (
    <div className='container-fluid my-5' id='projects'>
        <div className="row justify-content-center">
            <div className='col-2 py-4 text-center'>
                <h2 className='subrayado'>Proyectos</h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col">
            <h5 className='text-center'>Aqui puedes ver algunos de los proyectos en los que trabajé</h5>
            </div>
        </div>
        <div className="row">
            <div className="col d-flex justify-content-around py-5 flex-wrap gap-3">

            <CardProject 
                title={'Luis Isa Derbake'} 
                text={' Aplicativo web que permite la administración de usuarios y la reproducción de canciones asignadas a cada uno.'}
                site={'https://luisisaderbake.netlify.app/'}
                repo={'https://github.com/pablopaul01/MusicProject-Front'}
                img={'https://res.cloudinary.com/dcv6aut2v/image/upload/v1708565517/luisIsa_fd9hyd.jpg'}
            />
            <CardProject 
                title={'Rolling Hotel'} 
                text={' Aplicativo web para Hoteles, con gestion de administracion de categorias de habitaciones y numeros de habitaciones. Con sistema de reservas para clientes.'}
                site={'https://rolling-hotel.netlify.app/'}
                repo={'https://github.com/pablopaul01/Rolling-Hotel'}
                img={'https://res.cloudinary.com/dcv6aut2v/image/upload/v1700350011/Porfolio/Hotel_vbw0ro.png'}
            />
            <CardProject 
                title={'ArgenCast'} 
                text={' Maquetación de web de servicio de streaming completamente responsive con HTML, CSS Y BOOTSTRAP 5.2.3.'}
                site={'https://argencast.netlify.app/'}
                repo={'https://github.com/pablopaul01/ArgenCast'}
                img={'https://res.cloudinary.com/dcv6aut2v/image/upload/v1700339648/Porfolio/argencast_pwlci4.png'}
            />
            <CardProject 
                title={'MusicFlow'} 
                text={' Sitio web para administración y reroduccion de muscica. Se usó el localstorage como almacenamiento de los crud y las funciones escritas con javascript nativo'}
                site={'https://music-flow.netlify.app'}
                repo={'https://github.com/LorenzoAlbornoz/ProyectoJavaScript'}
                img={'https://res.cloudinary.com/dcv6aut2v/image/upload/v1700349891/Porfolio/MusicFlow_no8plg.png'}
            />

            </div>
        </div>
    </div>
  )
}

export default Proyectos