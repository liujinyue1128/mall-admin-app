import axios from "axios";
const request = axios.create({
    baseURL:'https://mallapi.duyiedu.com'
})
request.interceptors.request.use((config)=>{
    console.log(config);
    if (config.url !== '/login') {
        config.headers['Authorization'] = localStorage.getItem('token');
        config.headers.token -= localStorage.getItem('token');
    }
    return config;
},(error)=>{
    return Promise.reject(error)
})
request.interceptors.response.use((res)=>{
    if (res.data.status === 'fail') {
        return Promise.reject(res.data.msg)
    } else {
        return res.data
    }
},(error)=>{
    return Promise.reject(res.data.msg)
})
export default request;
