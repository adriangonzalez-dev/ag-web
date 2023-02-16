import React from 'react'
import './style.css'
import { Card } from '../components/card/Card';
import {image2} from '../assets'
import { Parallax } from '../components/parallax/Parallax';
import { cards, steps } from '../assets/js/cards';
import { Card2 } from '../components/card2/Card2';

export const Home = () => {
  return (
    <>
        <Parallax imageClass='parallax1bg row'>
            {
                cards.map(card=><Card 
                    bgColor={card.bgColor} 
                    description={card.description}
                    img={card.img}
                    title={card.title}
                    key={card.title}/>)
            }
        </Parallax>
        <div className='container-fluid w-100 row firstRow'>
            <div className='col-12 col-md-6 text-center d-flex flex-column align-items-center justify-content-center'>
                <h1>Porque tener una página web?</h1>
                <p>Si queres potenciar tu negocio es imprescindible tener presencia digital, esto te permitira comercializar a mayor escala tus productos y servicios por medio de la venta online.</p>
            </div>
            <div className='col-12 col-md-6 d-flex flex-column align-items-center justify-content-center'>
                <img src={image2} id='section' alt="" />
            </div>
        </div>
        <Parallax imageClass='parallax2bg'>
            <section className='container row bgStep mt-3'>
                <h2 className='col-12 text-center m-3'>¿Como es el proceso de desarrollo?</h2>
                {
                    steps.map(step=><Card2
                    img={step.img}
                    description={step.description}
                    title={step.title}
                    key={step.title}/>)

                }
            </section>
        </Parallax>
    </>

  )
}
