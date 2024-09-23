import axios from 'axios';

const axiosInstanceUsers = axios.create({
  baseURL: 'http://localhost:5454/api/users', // Base URL for user-related routes
});

export default axiosInstanceUsers;
