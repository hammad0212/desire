import axios from 'axios';

const axiosInstanceUsers = axios.create({
  baseURL: 'https://node-api-one-gold.vercel.app/api/users', // Base URL for user-related routes
});

export default axiosInstanceUsers;
