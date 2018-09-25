<template>
    <div class="motherBody">
        <div  class="bodyHead">
            <div>
                240~360ml
            </div>
            <div>
                宝宝出生244天
            </div>
            <div>
                辅食说明:建议6个月开始添加辅食
            </div>
            <div @click="isEatFun" class="isEat">?</div>
            <img :src="url+'menu/menubottom.png'" alt="">
        </div>
        <div class="bodyMenuCt">
           <div>
               <div>妈妈餐单</div>
               <div>宝宝餐单</div>
           </div>
            <div>
                <div></div>
                <div>
                    标准辅食
                </div>
            </div>
            <ul class="motherBodyMenu">
                <li>
                    <span>6:00</span>
                    <span>母乳</span>
                    <span>ml</span>
                </li>
            </ul>
            <button class="bodyMenuBtn">
                更改辅食计划
            </button>
        </div>
        <div class="motherBodyRule">
            所有配餐方案基于您的个性化设置，结合以下专著的研究成果，由“孕小二”为您私人定制生成
            <div>[1]中国营养学会，中国居民膳食指南，北京，人民卫生出版社，2016</div>
            <div>[2]中国营养学会科学全书，葛可佑，北京，人民出版社2004</div>
        </div>
    </div>
</template>

<script>
    import "./index.less"
    export default {
        name: "prepare",
        data(){
            return {
                url:initObj.Baseurl
            }
        },
        methods:{
            isEatFun:function fun(){
            }
        }
    }
</script>

<style scoped>

</style>