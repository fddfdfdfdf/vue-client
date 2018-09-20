const login = () => import(/* webpackChunkName: "home" */ "../components/pages/login/login");
const error =() => import(/* webpackChunkName: "error" */ "../components/pages/error/error");
const userindex =() => import(/* webpackChunkName: "userindex" */ "../components/pages/index/index");

//菜单详情部分
const userMenu = () => import(/* webpackChunkName: "userMenu" */ "../components/pages/userMenu/index/index");
const pregnancyState = () => import(/* webpackChunkName: "pregnancyState" */ "../components/pages/pregnancyState/index");
const shop = () => import(/* webpackChunkName: "shop" */ "../components/pages/shop/index");
const apps = () => import(/* webpackChunkName: "apps" */ "../components/pages/app/index");




export default [
    {
        path:"/",
        component:login,
        meta:{
            keepAlive:false
        }
    },
    {
        path:"/login",
        component:login,
        meta:{
            keepAlive:false
        }
    },
    {
        path:"/pregnancyState",
        component:pregnancyState,
        meta:{
            keepAlive:false
        }
    },
    {
        path:"/shop",
        component:shop,
        meta:{
            keepAlive:false
        }
    },
    {
        path:"/app",
        component:apps,
        meta:{
            keepAlive:false
        }
    },
    {
        path:"/usermenu",
        component:userindex,
        children:[
            { path: 'ff/dd', component: userMenu}
        ],
        meta:{
            keepAlive:false
        }
    },
    // {
    //     path:'/404',
    //     component: error,
    //     meta:{
    //         keepAlive:true
    //     }
    // },{
    //     path:'*',
    //     redirect: "/404",
    //     meta:{
    //         keepAlive:true
    //     }
    // }
]