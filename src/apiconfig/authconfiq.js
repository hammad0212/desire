import axios from 'axios';

// Axios instance for authentication
const axiosInstance = axios.create({
  baseURL: `https://node-api-one-gold.vercel.app/auth`,
});
export default axiosInstance