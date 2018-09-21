<template>
    <div class="person">
        <div class="personTitle">
            <div class="personDateTitle" data-scroll-reveal="enter top over 2s after 0.5s">
                3.设置宝宝信息
            </div>
            <div class="personDateCt" data-scroll-reveal="enter top over 3s after 0.5s">
                宝宝从出生开始，每日所需母乳量、什么时候开始添加辅食以及添加的测敏方法都是有规律的。
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div class="personInforHead">
                    宝宝昵称
                </div>
                <input :class="isVal?'personHas':'personNo'" type="text" v-model="predicData">
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div class="personInforHead">
                    宝宝性别
                </div>
                <input :class="isVal?'personHas':'personNo'" type="text" v-model="predicData">
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div class="personInforHead">
                    宝宝体重
                </div>
                <input :class="isVal?'personHas':'personNo'" type="text" v-model="predicData">
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div class="personInforHead">
                    宝宝出生方式
                </div>
                <input :class="isVal?'personHas':'personNo'" type="text" v-model="predicData">
            </div>
        </div>
        <div data-scroll-reveal="enter bottom over 1s and move 100px" class="personBottom">
            <button :class="checked ?'checked':'nochecked'" @click="personBtn">确定</button>
            <ul class="loadingPin">
                <li></li>
                <li></li>
                <li class="active"></li>
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
                this.$router.push(`/disease/body`)
            }
        }
    }
</script>

