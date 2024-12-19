/**
 * 所有类目的接口
 */
import axios from "@/axios.js";
export default {
  getCategoryList(data) {
    // get方法第二个方法就是一个对象
    return axios.get("/category/all", {data});
  },
};
