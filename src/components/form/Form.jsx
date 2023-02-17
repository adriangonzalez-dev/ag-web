import { useState } from 'react';
import './form.css'
import { sendMail } from '../../helpers/sendMails';
import { Loader } from '../loader/Loader';
import Swal from 'sweetalert2';

export const Form = () => {
  const [isSending, setIsSendig] = useState(false);

  const [errors, setErrors] = useState({
    name: undefined,
    phone: undefined,
    email: undefined,
  });

  const [values,setValues] = useState({
    name:'',
    phone:'',
    email:'',
    pyme:'',
    message:''
  });

  const {name, phone, email, pyme, message} = values

  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
    }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSendig(true)
      const {data} = await sendMail.post('/api/mail', values);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias por contactarte!',
        text:'Nos vamos a estar comunicando a la brevedad!',
        showConfirmButton: false,
        timer: 2000
      })
      setErrors({
        name:undefined,
        phone:undefined,
        email:undefined
      })
      setValues({
        name:'',
        phone:'',
        email:'',
        pyme:'',
        message:''
      });
    } catch (error) {
      /* console.log(error.response.data.errors) */
      setErrors({
        name:error.response.data.errors.name && error.response.data.errors.name.msg,
        phone:error.response.data.errors.phone && error.response.data.errors.phone.msg,
        email:error.response.data.errors.email && error.response.data.errors.email.msg,
      })
    }finally {
      setIsSendig(false)
    }
  }
  return (
    <form className="mt-3 mb-3 container row" onSubmit={handleSubmit}>

      <div className="mb-3 col-12">
        <label htmlFor="name" className="form-label">
          <i className="bi bi-person-circle"></i> Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name='name'
          value={name}
          onChange={handleInput}
        />
        {errors.name && <div class="alert alert-danger mt-2" role="alert">
                          {errors.name}
                        </div>}
      </div>
      <div className="mb-3 col-12 col-xl-4">
        <label htmlFor="phone" className="form-label">
          <i className="bi bi-telephone-fill"></i> Teléfono
        </label>
        <input
          type="number"
          className="form-control"
          id="phone"
          name='phone'
          value={phone}
          onChange={handleInput}
        />
        {errors.phone && <div class="alert alert-danger mt-2" role="alert">
                          {errors.phone}
                        </div>}
      </div>
      <div className="mb-3 col-12 col-xl-4">
        <label htmlFor="email" className="form-label">
          <i className="bi bi-envelope-at-fill"></i> Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name='email'
          value={email}
          onChange={handleInput}
        />
        {errors.email && <div class="alert alert-danger mt-2" role="alert">
                          {errors.email}
        </div>}
      </div>
      <div className="mb-3 col-12 col-xl-4">
        <label htmlFor="pyme" className="form-label">
          <i className="bi bi-house-fill"></i> Nombre del negocio
        </label>
        <input
          type="text"
          className="form-control"
          id="pyme"
          name='pyme'
          value={pyme}
          onChange={handleInput}
        />
      </div>
      <div className="mb-3 col-12">
        <label htmlFor="message" className="form-label">
          <i className="bi bi-chat-dots-fill"></i> Mensaje
        </label>
        <textarea 
        className="form-control"
        name="message" 
        id="message" 
        cols="30" 
        rows="10"
        value={message}
        onChange={handleInput}>
          {message}
        </textarea>
      </div>
      {
        isSending
        ? <Loader/>
        : <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        
      }
    </form>
  );
}
