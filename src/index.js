import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/Index/Index'
// import vueTap from 'v-tap'
import fastclick from 'fastclick'
fastclick.attach(document.body);
// import pdSelect from 'pd-select'

import axios  from 'axios'
import { Swipe, SwipeItem } from 'vue-swipe';
import Vuex from "vuex"

import stores from './store/index'
import router from './router/index'

global.baseStaticUrl = window.initObj //设置为全局引用
Vue.prototype.$http = axios //在vue的原型链上添加axios
Vue.prototype.$scrollReveal = scrollReveal; //在vue的原型链上添加axios
Vue.prototype.$device = SMSdk;
Vue.prototype.$check = myPicker;
Vue.config.productionTip = false

axios.get('/customization/welcome#/login')
    .then((data)=>{
        console.log(data.data)
    }).catch((error)=>{
        console.log(error)
    })
Vue.use(VueRouter)
Vue.use(Vuex)
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);
// Vue.component('swipe', Swipe);
// Vue.component('swipe-item', SwipeItem);

Vue.mixin({
    created: function () {
        var isLogin = this.$options.isLogin
        // if (isLogin && !this.$store.state.isLogin) {
        //     this.$router.push("404")
        // }
    }
})

const store = stores();

const component =  new Vue({
    router,
    store,
    template: '<App/>',
    components: {
        App
    },
    data: {
        eventHub: new Vue()
    }
});
component.$mount('#app')

if (module.hot) {
    module.hot.accept('./router/index', function() {
        component.$nextTick(()=>{
             component.$forceUpdate()
        })
    })
}


