<template>
    <div class="eat">
        <div class="eatHead">
            <input type="text" v-model="reachDt">
            <span>搜索</span>
        </div>
        <div class="hotReach">
            <div class="hotReachHead">
                热门搜索
            </div>
            <ul class="reseachLists">
                <li>
                    可乐
                </li>
                <li>
                    可乐
                </li>
                <li>
                    可乐
                </li>
                <li>
                    可乐
                </li>
                <li>
                    可乐
                </li>
                <li>
                    可乐
                </li>
            </ul>
            <div class="hotReachHead">
                历史搜索
                <img :src="url+'mypage/dels.png'" alt="">
            </div>
            <ul class="reseachLists">
                <li>
                    可乐
                </li>
            </ul>
        </div>
        <div class="bodyMoteherFixed">
            <ul>
                <li @click="toPage('')">
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
    import  "./index.less"
    export default {
        name: "eat",
        data(){
            return {
                url:initObj.Baseurl,
                menu:initObj.Baseurl+'shop/menued.png',
                app:initObj.Baseurl+'shop/second.png',
                my:initObj.Baseurl+'shop/my.png',
                reachDt:"搜索 / 食材能不能吃"
            }
        }
    }
</script>

<style scoped>

</style>