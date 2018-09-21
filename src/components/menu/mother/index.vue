<template>
    <div class="bodyMoteher">
        <router-view></router-view>
        <div class="bodyMoteherFixed">
            <ul>
                <li @click="toPage('')">
                    <img :src="menu" alt="">
                    <div>餐单</div>
                </li>
                <li @click="toPage('shop')">
                    <img :src="url+'shop/shoped.png'" alt="">
                    <div>商城</div>
                </li>
                <li @click="toPage('app')">
                    <img :src="app" alt="">
                    <div>孕小二</div>
                </li>
                <li @click="toPage('mycenter')">
                    <img :src="my" alt="">
                    <div>我的</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import "./index.less"
    export default {
        name: "prepare",
        data(){
            return {
                url:initObj.Baseurl,
                menu:initObj.Baseurl+'shop/menu.png',
                app:initObj.Baseurl+'shop/second.png',
                my:initObj.Baseurl+'shop/my.png'
            }
        },
        methods:{
            toPage: function (to){
                if(to == ""){
                    return false;
                }
                switch (to){
                    case 'pregnancyState':
                        this.menu = initObj.Baseurl+'shop/menued.png';
                        break;
                    case 'app':
                        this.app = initObj.Baseurl+'shop/seconded.png';
                        break;
                    case 'mycenter':
                        this.my = initObj.Baseurl+'shop/myed.png';
                        break;
                }
            }
        }
    }
</script>

<style scoped>

</style>