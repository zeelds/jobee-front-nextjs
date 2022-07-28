
import axios from 'axios'
import { getToken } from './auth';

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL || 'https://api-jobee.herokuapp.com',
    timeout: 8000,
    headers: { 'Content-Type': 'application/json' }
})

axiosInstance.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers = {
            ...config.headers,
            "x-access-token": token
        }
    }

    return config
})

axiosInstance.interceptors.response.use((response) => {
    return response
})