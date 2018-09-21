<template>
    <div class="person">
        <div v-if="$route.params.id == 'prepare'" class="personTitle">
            <div class="personDateTitle" data-scroll-reveal="enter top over 3s after 0.5s">
                2.设置年龄、身高和孕前体重
            </div>
            <div class="personDateCt" data-scroll-reveal="enter top over 3s after 0.5s">
                不同年龄的孕妈根据孕前体重的不同，孕期增重的标准会有所不同，每日所需的能量也会随之发生细微的变化。
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div class="personInforHead" >
                    您的年龄
                </div>
                <input :class="isAge?'personHas':'personNo'" type="text" v-model="age">
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div class="personInforHead" >
                    您的身高
                </div>
                <input :class="isHeight?'personHas':'personNo'" type="text" v-model="height">
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div class="personInforHead" >
                    您的孕前体重
                </div>
                <input :class="isWeight?'personHas':'personNo'" type="text" v-model="weight">
            </div>
        </div>
        <div v-if="$route.params.id == 'prepare'" class="personBottom" data-scroll-reveal="enter bottom over 1s and move 100px">
            <button :class="checked ?'checked':'nochecked'" @click="personBtn">确定</button>
            <ul class="loadingPin">
                <li></li>
                <li class="active"></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div v-if="$route.params.id == 'body'" class="personTitle">
            <div class="personDateTitle" data-scroll-reveal="enter top over 3s after 0.5s">
                2.设置产后信息
            </div>
            <div class="personDateCt" data-scroll-reveal="enter top over 3s after 0.5s">
                以下信息都会影响您的餐单建议，设置准确的信息有助于推荐给您更精准的餐单。
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div class="personInforHead" >
                    您的年龄
                </div>
                <input :class="isAge?'personHas':'personNo'" type="text" v-model="age">
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div class="personInforHead" >
                    您的身高
                </div>
                <input :class="isHeight?'personHas':'personNo'" type="text" v-model="height">
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px">
                <div class="personInforHead" >
                    您的当前体重
                </div>
                <input :class="isWeight?'personHas':'personNo'" type="text" v-model="weight">
            </div>
        </div>
        <div v-if="$route.params.id == 'body'" data-scroll-reveal="enter bottom over 1s and move 100px" class="personBottom">
            <button :class="checked ?'checked':'nochecked'" @click="personBtn">确定</button>
            <ul class="loadingPin">
                <li></li>
                <li class="active"></li>
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
                isAge:false,
                isHeight:false,
                isWeight:false,
                age:"请选择",
                height:"请选择",
                weight:"请选择"
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
                let id = this.$route.params.id;
                if(id == "prepare"){
                    this.$router.push(`/disease/${id}`)
                }else{
                    this.$router.push("/bodyinfor")
                }
            }
        }
    }
</script>

