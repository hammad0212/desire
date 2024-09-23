import axios from 'axios';

// Axios instance for authentication
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5454/auth',
});
export default axiosInstance