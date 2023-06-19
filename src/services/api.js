import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:1111',
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/*(async()=>{
  await api.get("/").then((res)=>{
    alert("VOCE ESTA ONLINE")
  }).catch(({respo})=>{
    alert("API DESCONECTADA!")
  })
})()*/
export default api;
