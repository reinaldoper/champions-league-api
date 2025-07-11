import axios from 'axios';

const jsonServer = axios.create({
  baseURL: 'http://localhost:5000'
});

export default jsonServer;
