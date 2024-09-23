import axios from 'axios';

// Axios instance for other API requests
export const api = axios.create({
  baseURL: "http://localhost:5454",
});

// Adding the Authorization header dynamically using interceptors
api.interceptors.request.use((config) => {
  console.log('Request Config:', config); 
  const token = localStorage.getItem('jwt'); // Retrieve the JWT token from localStorage
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`; // Set the Authorization header
  }
  config.headers['Content-Type'] = 'application/json'; // Set Content-Type header
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
