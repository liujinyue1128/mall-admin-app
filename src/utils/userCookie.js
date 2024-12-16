import Cookies from "js-cookie";
/**
 * 1. 存储用户信息
 * @param {Object} userInfo 
 */
export const setUserCookie= (userInfo)=>{
    let data = Object.entries(userInfo);
    for(let i=0;i<data.length;i++) {
        Cookies.set(data[i][0], data[i][1]);
    }
}
/**
 * 2. 获取用户信息
 * @param {Object} userInfo 
 */
export const getUserCookie =()=>{
    return {
        username:Cookies.get("username"),
        password:Cookies.get("password"),
        role: Cookies.get("role"),
        email: Cookies.get("email"),
    }
}
/**
 * 3. 移除用户信息
 * @param {Object} userInfo 
 */
export const removeUserCookie= ()=>{
    Cookies.remove("username");
    Cookies.remove("password");
    Cookies.remove("role");
    Cookies.remove("email");
    return true;
}