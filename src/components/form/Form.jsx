import { useState } from 'react';
import { sendMail } from '../../helpers/sendMails';
import { Loader } from '../';
import {useForm} from 'react-hook-form'
import { messages, patterns } from '../../helpers/helperForm';
import Swal from 'sweetalert2';
import './form.css'

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isSending, setIsSendig] = useState(false);

  const onSubmit = async (userInfo) => {

    try {
      setIsSendig(true)
      await sendMail.post('/api/mail', userInfo);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias por contactarte!',
        text:'Nos vamos a estar comunicando a la brevedad!',
        showConfirmButton: false,
        timer: 2000
      })
    } catch (error) {
     console.log(error.response.data.errors)
    }finally {
      setIsSendig(false)
    }
  }
  return (
    <form className="mt-3 mb-3 container row" onSubmit={handleSubmit(onSubmit)}>

      <div className="mb-3 col-12">
        <label htmlFor="name" className="form-label">
          <i className="bi bi-person-circle"></i> Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name='name'
          {...register("name",{required:messages.req})}/>
      {errors.name && <div class="alert alert-danger mt-2" role="alert">
                          {errors.name.message}
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
          {...register("phone",{
            required:messages.req,
            pattern:{
              value:patterns.phone,
              message: messages.phone
            }
          })}/>
        {errors.phone &&  <div class="alert alert-danger mt-2" role="alert">
                            {errors.phone.message}
                          </div>}
      </div>
      <div className="mb-3 col-12 col-xl-4">
        <label htmlFor="email" className="form-label">
          <i className="bi bi-envelope-at-fill"></i> Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          name='email'
          {...register("email",{
            required:messages.req,
            pattern: {
              value: patterns.email,
              message: messages.email
            }
          })}
        />
        {errors.email && <div class="alert alert-danger mt-2" role="alert">
                            {errors.email.message}
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
          {...register("pyme")}
          /* value={pyme}
          onChange={handleInput} */
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
        {...register("message")}>
        </textarea>
      </div>
      {
        isSending
        ? <Loader/>
        :  <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        }
    </form>
  );
}
