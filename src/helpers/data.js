export const proyectos = [
    {
        title: 'Divishare',
        text:' Aplicativo web que nos sirve como herramientas para la división de gastos, por ejemplo para una juntada entre amigos',
        site:'https://luisisaderbake.netlify.app/',
        img:'https://res.cloudinary.com/dcv6aut2v/image/upload/v1711023836/Porfolio/divisharew_zxdd0j.jpg',
        alcance: `La aplicación es una herramienta que ayuda a registrar los gastos de un evento en concreto, agregar los participantes y nos brinda sobre la division de los gastos y las cuentas a pagar.
        Permite crear una cuenta sin necesidad de registrarse. La cuenta será accesible durante 10 días desde la última vez que alguien la utilizó.
        Puedes generar dos tipos de usuarios: administradores (que pueden crear/editar/borrar todos los elementos de la cuenta) y lectores (que no pueden hacer modificaciones pero pueden ver todos los detalles de la cuenta).
        Hemos implementado la funcionalidad de asignar responsable para evitar que las transferencias tengan que hacerse entre personas fuera del grupo que, como invitados de alguien, necesitan compartir gastos.`,
        tecnologiasFront: `HTML, CSS, TAILWINDCSS, DAISYUI, JAVASCRIPT, REACT JS, REDUX. (Dependencias
            utilizadas: Framer Motion, i18Next, React Router Dom, React Icons, Sonner, React Select, React Swiper, Socket.io, Axios, ).`,
        tecnologiasBack: `NODE, EXPRESS, MONGODB, MONGOOSE, CORS, DOTENV, EXPRESS-VALIDATOR, JUST-CLONE. SHORT-UUID, SOCKET.IO.`
    },
    {
        title: 'Luis Isa Derbake',
        text:' Aplicativo web que permite la administración de usuarios y la reproducción de canciones asignadas a cada uno.',
        site:'https://luisisaderbake.netlify.app/',
        repo:'https://github.com/pablopaul01/MusicProject-Front',
        img:'https://res.cloudinary.com/dcv6aut2v/image/upload/v1708565517/luisIsa_fd9hyd.jpg',
        alcance: `Aplicación web para un profesor de musica arabe. El
        aplicativo le permite al administrador subir sus canciones necesarias a usar en las classes,
        crear categorías de audios, ABM de usuarios a los cuales permite asignarles de la colección
        de canciones a cuales tendrán acceso. La interfaz del usuario permite al cliente que al
        loguearse ingrese en un reproductor donde podrá visualizar las canciones asignadas y
        escucharlas directamente en el reproductor inserto en la misma página.`,
        tecnologiasFront: `HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT JS, CONTEXT. (Dependencias
            utilizadas: Jwt Decode, React Hook Form, React Data Table, React Icons, Sweetalert2.
            Wavesurfer.js, Yup, Axios, ).`,
        tecnologiasBack: `NODEJS, EXPRESS, MONGODB.(Dependencias usadas: Jsonwebtoken,Multer, passport-jwt, Cloudinary, Bcrypt, Dotenv, Morgan, Mongoose, Nodemon).`
    },
    {
        title: 'Rolling Hotel',
        text:' Aplicativo web para Hoteles, con gestion de administracion de categorias de habitaciones y numeros de habitaciones. Con sistema de reservas para clientes.',
        site:'https://rolling-hotel.netlify.app/',
        repo:'https://github.com/pablopaul01/Rolling-Hotel',
        img:'https://res.cloudinary.com/dcv6aut2v/image/upload/v1700350011/Porfolio/Hotel_vbw0ro.png',
        alcance: `Desarrollo de una aplicación web para un hotel. La interfaz de usuario permite a los visitantes ver detalles del hotel, servicios y
        habitaciones, inciar sesión y realizar reservas. La interfaz de administrador ofrece funciones ABM para categorías de habitaciones y clientes del hotel. El objetivo es mejorar la
        experiencia tanto para los huéspedes como para el personal administrativo.`,
        tecnologiasFront: `HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT JS. (Dependencias utilizadas: Jwt
            Decode, React Data Table, React Date Range, Axios).`,
        tecnologiasBack: `NODE JS, EXPRESS JS, MONGODB, MONGOOSE. (Dependecias utilizadas: Jwt,
            Passport, Cloudinary Api, Bcrypt).           
            `
    },
    {
        title: 'Hierbas del Jardin - E-commerce',
        text:'Desarrollo de plataforma de E-commerce para ventas mayoristas con conexión a base de datos externa al sitio',
        site:'https://tienda.hierbasdeljardin.com.ar/',
        img:'https://res.cloudinary.com/dcv6aut2v/image/upload/v1710623426/Porfolio/hdj1_xtpigj.jpg',
        alcance: `Desarrollo de tienda online mayorista realizada en Wordpess con Woocommerce y funciones personalizadas, como campos extras en el registro, precios ocultos sin logueo, descuentos por cantidad de un mismo producto. La tienda ademas cuenta con una conexión a una base de datos externas que permite trasladar las ventas a un sistema de gestión propio de la empresa`,
        tecnologiasFront: `WORDPRESS, WOOCOMMERCE, ELEMENTOR, PHP`,
        tecnologiasBack: `SQL, MYSQL           
            `
    },
    {
        title: 'MusicFlow',
        text:'Sitio web para administración y reroduccion de muscica. Se usó el localstorage como almacenamiento de los crud y las funciones escritas con javascript nativo',
        site:'https://music-flow.netlify.app',
        repo:'https://github.com/LorenzoAlbornoz/ProyectoJavaScript',
        img:'https://res.cloudinary.com/dcv6aut2v/image/upload/v1700349891/Porfolio/MusicFlow_no8plg.png',
        alcance: `El proyecto es un aplicativo web de streaming de música. La interface del administrador permite
        crear canciones a la colección de datos, las mismas se guardan en localstorage del navegador. Con esta colección creada en la interfaz del
        usuario mostramos el listado de canciones alamacenadas. Las mismas pueden ser reproducidas en un reproductor de audio principal de la
        web.
        `,
        tecnologiasFront: `HTML, CSS, BOOTSTRAP y funcionalidades aplicadas con JAVASCRIPT nativo.`,       
    },
    {
        title: 'ArgenCast',
        text:'Maquetación de web de servicio de streaming completamente responsive con HTML, CSS Y BOOTSTRAP 5.2.3.',
        site:'https://argencast.netlify.app/',
        repo:'https://github.com/pablopaul01/ArgenCast',
        img:'https://res.cloudinary.com/dcv6aut2v/image/upload/v1700339648/Porfolio/argencast_pwlci4.png',
        alcance: `Maquetación para una web de streaming de Películas y series. La interface es inspirada en plataformas como Netflix y Paramount. El sitio cuenta con secciones para películas y series con sus categorías y secciones como series y películas recomendadas.
        `,
        tecnologiasFront: `HTML, CSS, BOOTSTRAP`,       
    },
]

