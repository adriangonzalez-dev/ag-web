import './cardprice.css'

export const ItemPlan = ({title, description, checkout, list}) => {
  return (
    <div className="card col-12 col-md-3 mb-3 cardPrice">
      <h3 className="mt-3">{title}</h3>
      <hr className="w-100" />
      <b>{description}</b>
      <p>{checkout}</p>
      <span className="alert alert-primary">Pago x única vez!</span>
      <hr className="w-100" />
      <ul className='w-100 d-flex flex-column align-items-center justify-content-center p-0'>
        {
            list.map((item)=><li key={item} className='mt-2 listPrice'><span>{item}</span></li>)
        }
      </ul>
      <a className="btn btn-info mt-auto mb-1">
        <i className="bi bi-whatsapp"></i> Solicitar
      </a>
    </div>
  );
}
