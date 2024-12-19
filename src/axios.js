import axios from "axios";
import store from "./store";
const request = axios.create({
    baseURL:'https://mallapi.duyiedu.com',
})
request.interceptors.request.use((config)=>{
    if (config.url.includes('/passport')) {
      return config;
    } 
    return {
        ...config,
        params: {
            ...config.params,
            appkey: store.state.userInfo.appkey,
        },
    };
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
