import VueRouter from 'vue-router'
import routers from "./routers"
export default new VueRouter({
    routes:routers ,
    linkActiveClass: 'active'
})
