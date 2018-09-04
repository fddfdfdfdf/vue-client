const login = () => import(/* webpackChunkName: "home" */ "../components/pages/login/login");
const error =() => import(/* webpackChunkName: "error" */ "../components/pages/error/error");
const userindex =() => import(/* webpackChunkName: "userindex" */ "../components/pages/index/index");

//菜单详情部分
const userMenu = () => import(/* webpackChunkName: "userMenu" */ "../components/pages/userMenu/index/index");


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