
import './card2.css'
export const Card2 = ({img, title, description}) => {
  return (
    <article className="card col-6 col-md-3 mb-3">
      <img src={img} alt="step1" className="mt-3" loading='lazy'/>
      <b>{title}</b>
      <p>
        {description}
      </p>
    </article>
  );
}