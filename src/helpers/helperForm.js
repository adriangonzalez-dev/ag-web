export const messages = {
    req:'Este campo es obligatorio',
    email:'Debes introducir un email válido',
    phone:'Debes introducir un teléfono válido'
  }
export const patterns = {
    phone: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
    email:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
}