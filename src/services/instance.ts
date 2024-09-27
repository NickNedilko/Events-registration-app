import axios from 'axios';

const BASE_URL = 'https://events-registration-backend-o0z6.onrender.com/api'

export const axiosInstance = axios.create({
    baseURL: BASE_URL
});