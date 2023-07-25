import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://seu-servidor-backend:porta',
  withCredentials: true, // Habilita envio de cookies (se necessário)
  headers: {
    'Access-Control-Allow-Origin': '*', // Ou especifique a origem do domínio do seu aplicativo React
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Especifique os métodos permitidos
    'Access-Control-Allow-Headers': 'Content-Type, Authorization', // Especifique os headers permitidos
  },
});

export default instance;