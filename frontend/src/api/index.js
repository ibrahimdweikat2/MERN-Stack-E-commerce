import axios from 'axios';
const token = JSON.parse( localStorage.getItem('user'))?.token;
export const API=axios.create({baseURL:'http://localhost:5000/api',headers:{authorization:`Bearer ${token}`}});

export const Register = (user)=>API.post('/auth/register',user);
export const Login = (user)=>API.post('/auth/login',user);

export const addProductToCart=(productId,quantity,color,size)=>API.post('/carts/addCart',{productId,quantity,color,size});
export const getCart=(id)=>API.get(`/carts/find/${id}`);

