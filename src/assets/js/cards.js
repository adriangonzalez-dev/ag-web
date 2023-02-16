import {gear, responsive, landing, menu, ecommerce, social, step1, step2, step3, step4} from '../index'

export const cards = [
    {
        bgColor:'rgba(239, 245, 245,.75)',
        img: landing,
        title:'NECESITAS UNA LANDING PAGE?',
        description:'Es una página web de una sola pantalla que se utiliza para la presentación de productos y servicios',
    },
    {
        bgColor:'rgba(235, 100, 64,.75)' ,
        img: responsive,
        title:'PÁGINAS WEB RESPONSIVE',
        description:'Nuestras páginas son adaptables a todos los dispositivos, sean smartphones, tablets o pc'
    },
    {
        bgColor:'rgba(73, 113, 116,.75)',
        img: gear,
        title:'PÁGINAS AUTOADMINISTRABLES',
        description:'Ideal para negocios que necesiten subir y bajar información de forma constante'
    },
    {
        bgColor:'rgba(214, 228, 229,.75)',
        img: ecommerce,
        title:'TIENDAS ONLINE',
        description:'Vas a poder administrar tus productos, tener una pasarela de pagos con Mercado Pago, manejar las ordenes de compra y gestionar tus banners y descuentos'
    },
    {
        bgColor:'rgba(185, 224, 255,.75)',
        img: menu,
        title:'MENÚ PARA PEDIDOS',
        description:'Carta dígital de pedidos online para negocios gastronómicos'
    },
    {
        bgColor:'rgba(233, 69, 96,.75)',
        img: social,
        title:'INTEGRACIÓN CON REDES SOCIALES',
        description:'Asociamos enlaces directos a tus redes sociales y generamos un botón de whatsapp para tener un contacto directo de consultas'
    }
]

export const steps = [
    {
        img: step1,
        title: '1. ELEGÍ EL PLAN ADECUADO',
        description: 'Determiná el plan que se ajuste a tus necesidades o ideas, siempre vas a poder realizar todas las consultas necesarias sobre el mismo.'
    },
    {
        img: step2,
        title: '2. CONTRATALO',
        description: 'Una vez seleccionado el plan y resueltas todas tus dudas vas a poder abonar un porcentaje del costo para iniciar con el proyecto.'
    },
    {
        img: step3,
        title:'3. INICIAMOS!',
        description: 'Al iniciar te vamos a compartir un link donde vas a poder subir todo lo que creas necesario para el desarrollo, siempre vamos a estar en constante comunicación para que puedas ver el progreso del proyecto.'
    },
    {
        img: step4,
        title: '4. ENTREGA DEL PROYECTO',
        description: 'Una vez finalizado el desarrollo, vas a poder visualizar el resultado y hacer las modificaciones que creas necesarias antes de subirlo a la web.'
    }
]

export const planes = [
    {
        title: 'Plan inicial',
        description: 'Ideal para emprendimientos pequeños',
        date: 'Entrega en 15 días habiles',
        list: [
            'Hasta 3 pestañas para el sitio',
            'Presentación del negocio',
            'Conexión a redes sociales',
            'Diseño adaptable a todos los dispositivos',
            'Botón de whatsapp'
        ]
    },
    {
        title: 'Plan Profesional',
        description: 'Enfocado en tener presencia dígital profesional',
        date: 'Entrega en 25 días habiles',
        list: [
            'Hasta 6 pestañas para el sitio',
            'Presentación del negocio',
            'Conexión a redes sociales',
            'Diseño adaptable a todos los dispositivos',
            'Botón de whatsapp',
            'Web autogestionable',
            'Portada interactiva',
            'Registro de dominio',
        ]
    },
    {
        title: 'Plan Menú digital',
        description: 'Enfocado en el manejo de pedidos para locales gastrónomicos',
        date: 'Entrega en 35 días habiles',
        list: [
            'Recepción de pedidos por whatsapp',
            'Take away para reserva y retiro en local',
            'Panel de gestión de pedidos',
            'Manejo de stock con un click',
            'Integración con Mercado Pago',
            'Botón de whatsapp para consultas',
            'Adminstración de precios y productos',
            'Integración con redes sociales',
            'Manejo de horarios de atención',
        ]
    },
    {
        title: 'Plan Tienda Online',
        description: 'Ideal para venta de productos y servicios online',
        date: 'Entrega en 35 días habiles',
        list: [
            'Hasta 6 pestañas para el sitio',
            'Manejo de productos por categorías',
            'Carrito de compras',
            'Integración con Mercado Pago',
            'Botón de whatsapp',
            'Web autogestionable',
            'Portada interactiva',
            'Registro de dominio',
            'Tutorial de administración',
            'Manejo de stock con un click',
        ]
    }
]