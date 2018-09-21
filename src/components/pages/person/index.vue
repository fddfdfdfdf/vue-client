<template>
    <div class="person">
        <div v-if="$route.params.id == 'prepare'" class="personTitle">
            <div class="personDateTitle" data-scroll-reveal="enter top over 2s after 0.5s">
                1.设置预产期
            </div>
            <div class="personDateCt" data-scroll-reveal="enter top over 3s after 0.5s">
                不同怀孕阶段，孕妇每日所需的能量和营养不一样哦，准确的信息可以给你推荐精准的营养餐单。
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div class="personInforHead" >
                    预产期
                </div>
                <input :class="isVal?'personHas':'personNo'" type="text" v-model="predicData">
            </div>
        </div>
        <div v-if="$route.params.id == 'prepare'" class="personBottom" data-scroll-reveal="enter bottom over 1s and move 100px">
            <button :class="checked ?'checked':'nochecked'" @click="personBtn">确定</button>
            <ul class="loadingPin">
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div v-if="$route.params.id == 'body'" class="personTitle">
            <div class="personDateTitle" data-scroll-reveal="enter top over 2s after 0.5s">
                1.设置生育信息
            </div>
            <div class="personDateCt" data-scroll-reveal="enter top over 3s after 0.5s">
                请设置宝宝的出生日期，以便我们提供定制化餐单。
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div class="personInforHead">
                    宝宝出生日期
                </div>
                <input :class="isVal?'personHas':'personNo'" type="text" v-model="predicData">
            </div>
        </div>
        <div v-if="$route.params.id == 'body'" data-scroll-reveal="enter bottom over 1s and move 100px" class="personBottom">
            <button :class="checked ?'checked':'nochecked'" @click="personBtn">确定</button>
            <ul class="loadingPin">
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import "./index.less"
    export default {
        name: "person",
        data(){
            return {
                predicData:"请选择",
                checked:false,
                isVal:false
            }
        },
        beforeCreate(){
            document.title = "个性化设置"
        },
        beforeMount(){
            console.log(this.$route.params.id)
        },
        mounted(){
            new this.$scrollReveal({ reset: true });
        },
        methods:{
            personBtn:function (){
                let id = this.$route.params.id
                this.$router.push(`/personinfors/${id}`)
            }
        }
    }
</script>

