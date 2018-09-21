<template>
    <div class="motherBody">
        <div  class="bodyHead">
            <div >
                240~360ml
            </div>
            <div>
                宝宝出生244天
            </div>
            <div>
                辅食说明:建议6个月开始添加辅食
            </div>
            <div @click="isEatFun" class="isEat">?</div>
        </div>
        <div>
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
            <ul>
                <li>
                    <span>data</span>
                    <span>母乳</span>
                    <spam>ml</spam>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import "./index.less"
    export default {
        name: "prepare",
        methods:{
            isEatFun:function fun(){
            }
        }
    }
</script>

<style scoped>

</style>