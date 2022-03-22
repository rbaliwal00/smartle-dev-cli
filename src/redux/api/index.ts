import axios from 'axios';

const API = axios.create({ baseURL: 'http://13.126.1.233:8000' });

export const getUsers = () => API.get('/coursesonhome');
