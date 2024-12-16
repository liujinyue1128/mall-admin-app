import axios from "@/axios.js"

// 对用用户接口的管理
export default {
    loginApi(params) {
        return axios.post("/passport/login", params)
    }
}