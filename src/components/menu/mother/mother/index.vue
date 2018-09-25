<template>
    <div class="motherMenu">
        <div  class="bodyHead">
            <div>
                240~360ml
            </div>
            <div>
                宝宝出生244天
            </div>
            <div>
                孕期餐单
            </div>
            <div @click="isEatFun" class="isEat">?</div>
            <img :src="url+'menu/menubottom.png'" alt="">
        </div>
        <div class="bodyMenuCt">
            <div>
                <div>妈妈餐单</div>
                <div>宝宝餐单</div>
            </div>
            <div class="motherMenuDt">
                    <div class="morning">
                        <img  :src="url+'menu/zao.png'" alt="">
                        <div>
                            <img @click="showWarn('isShowMorning')" :src="url+'menu/error.png'" alt="">
                            <div  v-if="isShowMorning">
                                建议早餐后要补充叶酸哦~
                            </div>
                        </div>
                    </div>
                    <ul class="morningDt">
                        <li>
                            <span>荞麦煎饼卷</span>
                            <span>1.5份</span>
                        </li>
                    </ul>
                    <div class="addMoring">
                        <img :src="url+'menu/moni.png'" alt="">
                    </div>
                    <ul class="morningDt">
                        <li>
                            <span>荞麦煎饼卷</span>
                            <span>1.5份</span>
                        </li>
                    </ul>
                    <div class="morning">
                        <img :src="url+'menu/middle.png'" alt="">
                    </div>
                    <ul class="morningDt">
                        <li>
                            <span>荞麦煎饼卷</span>
                            <span>1.5份</span>
                        </li>
                    </ul>
                    <div class="morning">
                        <img  :src="url+'menu/night.png'" alt="">
                        <div >
                            <img  @click="showWarn('isNight')" :src="url+'menu/error.png'" alt="">
                            <div v-if="isNight">
                                建议晚间补钙，吸收更好~
                            </div>
                        </div>
                    </div>
                    <ul class="morningDt">
                        <li>
                            <span>荞麦煎饼卷</span>
                            <span>1.5份</span>
                        </li>
                    </ul>
                </div>
        </div>
        <div class="motherBodyRule">
            所有配餐方案基于您的个性化设置，结合以下专著的研究成果，由“孕小二”为您私人定制生成
            <div>[1]中国营养学会，中国居民膳食指南，北京，人民卫生出版社，2016</div>
            <div>[2]中国营养学会科学全书，葛可佑，北京，人民出版社2004</div>
        </div>
        <div class="bodyMenuBtn">
            <button >
                定制我的营养餐单
            </button>
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
                isShowMorning:false,
                isNight:false
            }
        },
        methods:{
            isEatFun:function fun(){
            },
            showWarn:function(which){
                this[which] = !this[which];
            }
        }
    }
</script>

<style scoped>

</style>