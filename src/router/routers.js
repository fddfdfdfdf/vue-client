const login = () => import(/* webpackChunkName: "home" */ "../components/pages/login/login");
const error =() => import(/* webpackChunkName: "error" */ "../components/pages/error/error");
const userindex =() => import(/* webpackChunkName: "userindex" */ "../components/pages/index/index");

//菜单详情
// const body = () => import(/* webpackChunkName: "body" */ "../components/menu/body/index");
// const mother = () => import(/* webpackChunkName: "mother" */ "../components/menu/mother/index");
// const mycenter = () => import(/* webpackChunkName: "mycenter" */ "../components/menu/mycenter/index");
// const prepare = () => import(/* webpackChunkName: "prepare" */ "../components/menu/prepare/index");
// const buyend = () => import(/* webpackChunkName: "buyend" */ "../components/menu/buyend/index");
// const changemenu = () => import(/* webpackChunkName: "changemenu" */ "../components/menu/changemenu/index");
// const eat = () => import(/* webpackChunkName: "eat" */ "../components/menu/eat/index");
// const bodymother = () => import(/* webpackChunkName: "bodymother" */ "../components/menu/mother/mother/index");
// const bodys = () => import(/* webpackChunkName: "bodys" */ "../components/menu/mother/body/index");
// const firstLogin = () => import(/* webpackChunkName: "firstLogin" */ "../components/pages/firstlogin/index");


// export default [
//     {
//         path:"/buyend",
//         component:buyend,
//         meta:{
//             keepAlive:false
//         }
//     },{
//         path:"/changemenu",
//         component:changemenu,
//         meta:{
//             keepAlive:false
//         }
//     },{
//         path:"/firstlogin",
//         component:firstLogin,
//         meta:{
//             keepAlive:false
//         }
//     },{
//         path:"/eat",
//         component:eat,
//         meta:{
//             keepAlive:false
//         }
//     },
//     {
//         path:"/body",
//         component:body,
//         meta:{
//             keepAlive:false
//         }
//     },{
//         path:"/mother",
//         component:mother,
//         children:[
//             {
//                 path: 'bodymother',
//                 component: bodymother
//             }, {
//                 path: 'body',
//                 component: bodys
//             }
//         ],
//         meta:{
//             keepAlive:false
//         }
//     },{
//         path:"/mycenter",
//         component:mycenter,
//         meta:{
//             keepAlive:false
//         }
//     },{
//         path:"/prepare",
//         component:prepare ,
//         meta:{
//             keepAlive:false
//         }
//     },
// ]



//菜单详情部分
const userMenu = () => import(/* webpackChunkName: "userMenu" */ "../components/pages/userMenu/index/index");
const pregnancyState = () => import(/* webpackChunkName: "pregnancyState" */ "../components/pages/pregnancyState/index");
const shop = () => import(/* webpackChunkName: "shop" */ "../components/pages/shop/index");
const apps = () => import(/* webpackChunkName: "apps" */ "../components/pages/app/index");
const person = () => import(/* webpackChunkName: "person" */ "../components/pages/person/index");
const personInfors = () => import(/* webpackChunkName: "personInfors" */ "../components/pages/personinfors/index");
const bodyinfor = () => import(/* webpackChunkName: "bodyinfor" */ "../components/pages/bodyinfor/index");
const disease = () => import(/* webpackChunkName: "disease" */ "../components/pages/disease/index");
const material = () => import(/* webpackChunkName: "material" */ "../components/pages/material/index");
const success = () => import(/* webpackChunkName: "success" */ "../components/pages/success/index");
const firstLogin = () => import(/* webpackChunkName: "firstLogin" */ "../components/pages/firstlogin/index");

export default [
    {
        path:"/",
        component:login,
        meta:{
            keepAlive:false
        }
    },{
    path:"/firstlogin",
        component:firstLogin,
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
        path:"/personinfors/:id",
        component:personInfors,
        meta:{
            keepAlive:false
        }
    },
    {
        path:"/bodyinfor",
        component:bodyinfor,
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
        path:"/person/:id",
        component:person,
        meta:{
            keepAlive:false
        }
    },
    {
        path:"/disease/:id",
        component:disease,
        meta:{
            keepAlive:false
        }
    },
    {
        path:"/material/:id",
        component:material,
        meta:{
            keepAlive:false
        }
    },
    {
        path:"/success",
        component:success,
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