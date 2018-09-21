<template>
    <div class="material">
        <div class="personTitle">
            <div class="personDateTitle" v-if="$route.params.id == 'prepare'" data-scroll-reveal="enter top over 2s after 0.5s">
                4.设置妈妈慢性病
            </div>
            <div class="personDateTitle" v-if="$route.params.id == 'body'" data-scroll-reveal="enter top over 2s after 0.5s">
                5.设置妈妈慢性病
            </div>
            <div class="personDateCt" v-if="$route.params.id == 'prepare'" data-scroll-reveal="enter top over 3s after 0.5s">
                孕期妈妈因怀孕期间身体更加敏感，长期的饮食习惯、作息和环境压力更容易导致妊娠糖尿病、妊娠高血压以及缺铁性贫血等症状，尤其已经存在病史的妈妈，您将会得到更加严格的饮食建议。
            </div>
            <div class="personDateCt" v-if="$route.params.id == 'body'" data-scroll-reveal="enter top over 3s after 0.5s">
                孕期妈妈因怀孕期间身体更加敏感，长期的饮食习惯、作息和环境压力更容易导致妊娠糖尿病、妊娠高血压以及缺铁性贫血等症状，尤其已经存在病史的妈妈，您将会得到更加严格的饮食建议。
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div :class="isClick?'diseaseInit':'diseaseInited'" @click="dd()">
                    <div>fdsfdsf</div>
                    <img :src="url+'resetimg/resetimg.png'" alt="">
                </div>
            </div>
        </div>
        <div  class="personBottom" data-scroll-reveal="enter bottom over 1s and move 100px">
            <button :class="checked ?'checked':'nochecked'" @click="personBtn">确定</button>
            <ul class="loadingPin" v-if="$route.params.id == 'prepare'">
                <li></li>
                <li></li>
                <li></li>
                <li class="active"></li>
            </ul>
            <ul class="loadingPin" v-if="$route.params.id == 'body'">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li class="active"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import "./index.less"
    export default {
        name: "index",
        data(){
            return {
                isClick:true,
                url:initObj.Baseurl,
                checked:false
            }
        },
        mounted(){
            new this.$scrollReveal({ reset: true });
        },
        methods:{
            dd:function fun(){
                this.isClick = !this.isClick
            },
            personBtn:function fun(){
                let id = this.$route.params.id
                this.$router.push("/success")
            }
        }
    }
</script>
