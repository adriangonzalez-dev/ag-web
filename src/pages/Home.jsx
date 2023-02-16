import React from 'react'
import './style.css'
import { Card } from '../components/card/Card';
import {gear, responsive, landing, menu, ecommerce, social, image2, step1, step2, step3, step4} from '../assets'
export const Home = () => {
  return (
    <>
        <div className='container-fluid parallax parallax1bg d-flex align-items-center justify-content-center opacity-75 row'>
                <Card 
                bgColor='rgba(239, 245, 245,.75)' 
                img={landing}
                title='Necesitas una landing page?'
                description='Es una pagina web de una sola pantalla que se utiliza para la
                presentación de productos y servicios'/>
                <Card 
                bgColor='rgba(235, 100, 64,.75)' 
                img={responsive}
                title='Páginas web responsive'
                description='Nuestras páginas son adaptables a todos los dispositivos, sean smartphones, tablets o pc'/>
                <Card
                bgColor='rgba(73, 113, 116,.75)'
                img={gear}
                title='Páginas web autoadministrables'
                description='Ideal para negocios que necesiten subir y bajar infromación de forma constante'/>
                <Card
                bgColor='rgba(214, 228, 229,.75)'
                img={ecommerce}
                title='Tiendas online'
                description='Vas a poder administrar tus productos, tener una pasarela de pagos con Mercado Pago, manejar las ordenes de compra y gestionar tus banners y descuentos'
                />
                <Card
                bgColor='rgba(185, 224, 255,.75)'
                img={menu}
                title='Menú para pedidos'
                description='Carta digital de pedidos online para negocios gastronómicos'/>
                <Card
                bgColor='rgba(233, 69, 96,.75)'
                img={social}
                title='Integración con redes sociales'
                description='Asociamos enlaces directos a tus redes sociales y generamos un botón de whatsapp para tener un contacto directo de consultas'/>
        </div>
        <div className='container-fluid w-100 row firstRow'>
            <div className='col-12 col-md-6 text-center d-flex flex-column align-items-center justify-content-center'>
                <h1>Porque tener una página web?</h1>
                <p>Si queres potenciar tu negocio es imprescindible tener presencia digital, esto te permitira comercializar a mayor escala tus productos y servicios por medio de la venta online.</p>
            </div>
            <div className='col-12 col-md-6 d-flex flex-column align-items-center justify-content-center'>
                <img src={image2} id='section' alt="" />
            </div>
        </div>
        <div className='container-fluid parallax parallax2bg d-flex align-items-center justify-content-center opacity-75'>
            <section className='container row bgStep mt-3'>
                <h2 className='col-12 text-center m-3'>¿Como es el proceso de desarrollo?</h2>
                <article className='card col-6 col-md-3 mb-3'>
                    <img src={step3} alt="step1" className='mt-3'/>
                    <b>1. Elegí el plan adecuado</b>
                    <p>Determina el plan que se ajuste a tus necesidades o ideas, siempre vas a poder realizar todas las consultas necesarias sobre el mismo.</p>
                </article>
                <article className='card col-6 col-md-3  mb-3'>
                <img src={step1} alt="step1" className='mt-3'/>
                    <b>2. Contratalo</b>
                    <p>Una vez seleccionado el plan y resueltas todas tus dudas vas a poder abonar el 50% del costo para iniciar con el proyecto.</p>
                </article>
                <article className='card col-6 col-md-3 mb-3'>
                <img src={step2} alt="step1" className='mt-3'/>
                    <b>3. Iniciamos!</b>
                    <p>Una vez que iniciemos te vamos a compartir un link donde vas a poder subir todo lo que creas necesario para el desarrollo, siempre vamos a estar en constante comunicación para que puedas ver el progreso del proyecto.</p>
                </article>
                <article className='card col-6 col-md-3 mb-3'>
                <img src={step4} alt="step1" className='mt-3'/>
                    <b>4. Entrega del proyecto</b>
                    <p>Una vez finalizado el desarrollo, vas a poder visualizar el resultado y hacer las modificaciones que creas necesarias antes de subirlo a la web.</p>
                </article>
            </section>
        </div>
    </>

  )
}
