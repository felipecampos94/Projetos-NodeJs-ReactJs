import axios from 'axios';

const api = axios.create({baseURL: "http://localhost:4000/sistema"});

export default api;