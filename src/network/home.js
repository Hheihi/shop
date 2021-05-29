import  request  from './request.js'
export function getHomeData() {
    return request({
        url:"/products",
        
    })
}