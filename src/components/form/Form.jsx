
export const Form = () => {
  return (
    <form className="mt-3 mb-3 container row">
      <div class="mb-3 col-12">
        <label for="name" class="form-label">
          <i className="bi bi-person-circle"></i> Nombre
        </label>
        <input
          type="text"
          class="form-control"
          id="name"
          name='name'
        />
      </div>
      <div class="mb-3 col-12 col-xl-4">
        <label for="phone" class="form-label">
          <i className="bi bi-telephone-fill"></i> Teléfono
        </label>
        <input
          type="number"
          class="form-control"
          id="phone"
        />

      </div>
      <div class="mb-3 col-12 col-xl-4">
        <label for="email" class="form-label">
          <i className="bi bi-envelope-at-fill"></i> Email
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
        />
      </div>
      <div class="mb-3 col-12 col-xl-4">
        <label for="pyme" class="form-label">
          <i className="bi bi-house-fill"></i> Nombre del negocio
        </label>
        <input
          type="text"
          class="form-control"
          id="pyme"
        />
      </div>
      <div class="mb-3 col-12">
        <label for="message" class="form-label">
          <i className="bi bi-chat-dots-fill"></i> Mensaje
        </label>
        <textarea 
        className="form-control"
        name="" id="message" cols="30" rows="10">
        </textarea>
      </div>
      
      <button type="submit" class="btn btn-primary">
        Enviar mensaje
      </button>
    </form>
  );
}
