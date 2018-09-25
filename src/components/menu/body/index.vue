<template>
    <div class="body">
       <div class="bodyHead">
           <div class="bodyDate">
               <div>
                   孕34周
               </div>
               <div>
                   孕  期  餐  单
               </div>

           </div>
           <div class="bodyMenuCt">
               <div>
                    <div>
                        1827千卡
                    </div>
                   <div>
                       今日所需能量总数
                   </div>
               </div>
               <div>
                   <div>
                       除了本餐单食物的供给，您今天还需额外补充维生素c 25.33mg，维生素b1 0.53ng，锌0.39mg。根据新版《孕期膳食指南》，您需再补充400mg／天。
                   </div>
               </div>
           </div>
           <div class="detData" v-html="kjData">

           </div>
           <div @click="isEatFun" class="isEat">?</div>
       </div>
        <div class="bodyCt">
            <div class="bodyZao">
                <img :src="url+'menu/zao.png'" alt="">
                <div class="bodyDt">
                    <img :src="url+'menu/error.png'" alt="">
                    <div class="ct">
                        建议早餐后要补充叶酸哦~
                    </div>
                </div>
            </div>
            <ul class="zaoMenu">
                <li>
                    <span>荞麦煎饼卷</span>
                    <span>1.5份</span>
                </li>
            </ul>
            <div class="zaoAdd">
                <img :src="url+'menu/moni.png'" alt="">
                <div></div>
            </div>
            <ul class="zaoMenu zaoMenuAdd">
                <li>
                    <span>荞麦煎饼卷</span>
                    <span>1.5份</span>
                </li>
            </ul>
            <div class="bodyZao">
                <img :src="url+'menu/middle.png'" alt="">
            </div>
            <ul class="zaoMenu">
                <li>
                    <span>荞麦煎饼卷</span>
                    <span>1.5份</span>
                </li>
            </ul>
            <div class="bodyZao">
                <img :src="url+'menu/night.png'" alt="">
                <div class="bodyDt">
                    <img :src="url+'menu/error.png'" alt="">
                    <div class="ct">
                        建议晚间补钙，吸收更好~
                    </div>
                </div>
            </div>
            <ul class="zaoMenu">
                <li>
                    <span>荞麦煎饼卷</span>
                    <span>1.5份</span>
                </li>
            </ul>
        </div>
        <div class="menuRule">
            <div>
                所有配餐方案基于您的个性化设置，结合以下专著的研究成果，由“孕小二”为您私人定制生成
                Ώ]中国营养学会，中国居民膳食指南，北京，人民卫生出版社，2016
                ΐ]中国营养学会科学全书，葛可佑，北京，人民出版社2004
            </div>
        </div>
        <div class="btn">
            <button @click="goMyMenu">定制我的营养餐单</button>
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
    import "./index.less"
    export default {
        name: "prepare",
        data(){
            return {
                kjData:"1827千卡",
                url:initObj.Baseurl,
                menu:initObj.Baseurl+'shop/menued.png',
                app:initObj.Baseurl+'shop/second.png',
                my:initObj.Baseurl+'shop/my.png'
            }
        },
        methods:{
            goMyMenu:function fun(){

            },
            isEatFun:function fun(){
              this.$router.push("/eat")
            }

        }
    }
</script>

<style scoped>

</style>