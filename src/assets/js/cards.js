import {gear, responsive, landing, menu, ecommerce, social, step1, step2, step3, step4} from '../index'

export const cards = [
    {
        bgColor:'rgba(239, 245, 245,.75)',
        img: landing,
        title:'Necesitas una landing page?',
        description:'Es una pagina web de una sola pantalla que se utiliza para la presentación de productos y servicios',
    },
    {
        bgColor:'rgba(235, 100, 64,.75)' ,
        img: responsive,
        title:'Páginas web responsive',
        description:'Nuestras páginas son adaptables a todos los dispositivos, sean smartphones, tablets o pc'
    },
    {
        bgColor:'rgba(73, 113, 116,.75)',
        img: gear,
        title:'Páginas web autoadministrables',
        description:'Ideal para negocios que necesiten subir y bajar infromación de forma constante'
    },
    {
        bgColor:'rgba(214, 228, 229,.75)',
        img: ecommerce,
        title:'Tiendas online',
        description:'Vas a poder administrar tus productos, tener una pasarela de pagos con Mercado Pago, manejar las ordenes de compra y gestionar tus banners y descuentos'
    },
    {
        bgColor:'rgba(185, 224, 255,.75)',
        img: menu,
        title:'Menú para pedidos',
        description:'Carta digital de pedidos online para negocios gastronómicos'
    },
    {
        bgColor:'rgba(233, 69, 96,.75)',
        img: social,
        title:'Integración con redes sociales',
        description:'Asociamos enlaces directos a tus redes sociales y generamos un botón de whatsapp para tener un contacto directo de consultas'
    }
]

export const steps = [
    {
        img: step1,
        title: '1. Elegí el plan adecuado',
        description: 'Determina el plan que se ajuste a tus necesidades o ideas, siempre vas a poder realizar todas las consultas necesarias sobre el mismo.'
    },
    {
        img: step2,
        title: '2. Contratalo',
        description: 'Una vez seleccionado el plan y resueltas todas tus dudas vas a poder abonar el 50% del costo para iniciar con el proyecto.'
    },
    {
        img: step3,
        title:'3. Iniciamos!',
        description: 'Una vez que iniciemos te vamos a compartir un link donde vas a poder subir todo lo que creas necesario para el desarrollo, siempre vamos a estar en constante comunicación para que puedas ver el progreso del proyecto.'
    },
    {
        img: step4,
        title: '4. Entrega del proyecto',
        description: 'Una vez finalizado el desarrollo, vas a poder visualizar el resultado y hacer las modificaciones que creas necesarias antes de subirlo a la web.'
    }
]
