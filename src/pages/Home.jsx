import './style.css'
import { Card } from '../components/card/Card';
import {image2} from '../assets'
import { Parallax } from '../components/parallax/Parallax';
import { cards, steps, planes } from '../assets/js/cards';
import { Card2 } from '../components/card2/Card2';
import { ItemPlan } from '../components/plan-item/ItemPlan';
import { Form } from '../components/form/Form';

export const Home = () => {
  return (
    <>  
        <a name="home" id="home"></a> 
        <Parallax imageClass='parallax1bg row' >
            {
                cards.map(card=><Card 
                    bgColor={card.bgColor} 
                    description={card.description}
                    img={card.img}
                    title={card.title}
                    key={card.title}/>)
            }
        <a name="section" id="section"></a>
        </Parallax>
        <section className='container-fluid w-100 row firstRow'>
            <div className='col-12 col-md-6 text-center d-flex flex-column align-items-center justify-content-center'>
                <h1>¿PORQUE TENER UNA PÁGINA WEB?</h1>
                <p>Si queres potenciar tu negocio es imprescindible tener presencia digital, esto te permitira comercializar a mayor escala tus productos y servicios por medio de la venta online.</p>
            </div>
            <div className='col-12 col-md-6 d-flex flex-column align-items-center justify-content-center'>
                <img src={image2} id='section' alt="" />
            </div>
        </section>
        <a name="process" id="process"></a> 
        <Parallax imageClass='parallax2bg'>
            <section className='container row bgStep mt-3'>
                <h2 className='col-12 text-center m-3'>¿CÓMO ES EL PROCESO DE DESARROLLO?</h2>
                {
                    steps.map(step=><Card2
                    img={step.img}
                    description={step.description}
                    title={step.title}
                    key={step.title}/>)

                }
            </section>
            <a name="plan" id="plan"></a> 
        </Parallax>
        <section className='container-fluid w-100 secondRow d-flex align-items-center justify-content-center' id='services'>
            <article className='container-fluid row m-3 d-flex align-items-start justify-justify-content-center'>
                {
                    planes.map(plan=><ItemPlan 
                        title={plan.title} 
                        description={plan.description} 
                        list={plan.list}
                        checkout={plan.date}
                        key={plan.title}/>)
                }
            </article>
        </section>
        <Parallax imageClass='parallax3bg d-flex flex-column'>
            <a name="contact" id="contact"></a> 
            <h2 className='mt-3 text-white text-shadow'><b>CONSULTANOS</b></h2>
            <b className='text-white text-shadow fs-5'>Realiza tus consultas y nos pondremos en contacto a la brevedad!</b>
            <Form/>
        </Parallax>
    </>

  )
}
