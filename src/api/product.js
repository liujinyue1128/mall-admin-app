import axios from "@/axios.js"
export default {
    getTableData (params) {
        return axios.get('/products/all',{params})
    },
    removeProductRecord (params) {
        return axios.delete(`/products/${params.id}`)
    }
}