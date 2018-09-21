<template>
    <div class="prenancyState">
        <div class="pregStatusHead" data-scroll-reveal="enter top">
            <div>请设置自己的状态</div>
        </div>
        <div class="pregStatus"  data-scroll-reveal="enter left" @click="lifeStatusChecked(1)">
            <img :src="baseUrl+'pregstatus/preged.png'" alt="">
        </div>
        <div class="pregStatus" data-scroll-reveal="enter right" @click="lifeStatusChecked(2)">
            <img :src="baseUrl+'pregstatus/topreg.png'" alt="">
        </div>
        <div class="pregStatus" data-scroll-reveal="enter left" @click="lifeStatusChecked(3)">
            <img :src="baseUrl+'pregstatus/body.png'" alt="">
        </div>
        <div class="pregStatusHead">

        </div>
    </div>
</template>

<script>
    import "./index.less"
    import {goHistory,alertError} from '../../../common/js/commonAler'
    export default {
        name: "pregnancy-state",
        data(){
           return{
               isClick:false,
               baseUrl:initObj.Baseurl
           }
        },
        mounted(){
            new this.$scrollReveal({ reset: true });
        },
        methods:{
            lifeStatusChecked:function (status){
                 let _this = this;
                 // if(!_this.isClick){
                 //     _this.isClick = true;
                 //     _this.$http({
                 //         url: "/customization/stage",
                 //         type: "post",
                 //         dataType: "json",
                 //         data:{
                 //             "_token": baseStaticUrl["_token"],
                 //             "stage":status
                 //         }
                 //     }).then(function (data) {
                 //         _this.isClick = false;
                         switch (status){
                             case 1:
                                 _this.$router.push('shop');
                                 break;
                             case 2:
                                 _this.$router.push('person/prepare');
                                 break;
                             case 3:
                                 _this.$router.push('person/body');
                                 break;
                         }
                 //         alertError(data.data.message[0])
                 //     })
                 //      .catch(function (error) {
                 //             _this.isClick = false;
                 //             alertError(error.response ? error.response.data.message[0] : "")
                 //         })
                 // }
            }
        }
    }
</script>

<style scoped>

</style>