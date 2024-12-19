/**
 * 存储的是用户角色所对应的权限
 */
const roleToRoute = {
    "coustomer":[
        {
            name: 'Product'
        },
        {
            name: 'ProductList'
        },
        {
            name: 'ProductAdd'
        }
    ],
    "admin": [
        {
            name: 'Product'
        },
        {
            name: 'ProductList'
        },
        {
            name: 'ProductAdd'
        },
        {
            name: 'Category'
        }
    ]
}

/**
 * 过滤掉没有权限的路由
 * @param {String} role 
 * @param {Array} routes 
 * @returns 
 */
export default function getMenuRoutes (role,routes) {
    const allRoutesName  = roleToRoute[role].map(item=>item.name);
    const resultRoles = routes.filter(r=>{
        if (allRoutesName.indexOf(r.name) !== -1) {
            const children = r.children;
            r.children = children.filter(c=>allRoutesName.indexOf(c.name) !== -1);
            return true;
        }
        return false;
    })
    return resultRoles;
}