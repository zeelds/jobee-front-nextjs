
import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL,
    timeout: 8000,
    headers: {'Content-Type':'application/json'}
})

axiosInstance.interceptors.request.use((config)=>{
    return config
})

axiosInstance.interceptors.response.use((response)=>{
    return response
})