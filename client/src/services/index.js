import axios from 'axios';
const baseURL = process.env.NEXT_URL_BASE_API

const api = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

export default api;