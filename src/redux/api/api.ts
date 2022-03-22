import axios from 'axios';

 const API = axios.create({
     baseURL: 'http://13.126.1.233:8000/'
 });
// const API = axios.create({
//     baseURL: 'http://localhost:8000/'
// });

API.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';


export default API;