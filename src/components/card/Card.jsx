import './card.css'

export const Card = ({bgColor, img, title, description}) => {
  return (
    <div className='col-12 col-md-5 m-1 cardHome' style={{backgroundColor:bgColor}}>
        <img src={img} alt={title} />
      <b>{title}</b>
      <p>
        {description}
      </p>
    </div>
  );
}
