<template>
    <div class="app">
       <div class="appActions">
           <img :src="url+'menu/change.png'" alt="">
           <div class="appload">
               <div class="appHead">点击下载App，注册会员享福利</div>
               <div class="appUploadBtn">
                   <a href="">iOS客户端</a>
                   <a href="">Android客户端</a>
               </div>
               <div class="appUploadTrue">
                   <div></div>
                   <div></div>
               </div>
           </div>
       </div>
       <div  class="shopBottom">
            <ul>
                <li @click="toPage('pregnancyState')">
                    <img :src="menu" alt="">
                    <div>餐单</div>
                </li>
                <li @click="toPage('shop')">
                    <img :src="url+'shop/shop.png'" alt="">
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
        name: "app",
        data(){
            return {
                url : initObj.Baseurl,
                menu:initObj.Baseurl+'shop/menu.png',
                app:initObj.Baseurl+'shop/seconded.png',
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
                setTimeout(()=>{
                    this.$router.push(to)
                },300)
            }
        }
    }
</script>

<style scoped>

</style>