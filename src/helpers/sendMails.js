import axios from 'axios';

export const sendMail = axios.create({
    baseURL: import.meta.env.VITE_URL_BACKEND
})