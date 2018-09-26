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
                <input :class="isVal?'personHas':'personNo'" type="text" @blur="bodyName(false)" @focus="bodyName(true)" v-model="predicData">
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px" @click="checkInput('gender')">
                <div class="personInforHead">
                    宝宝性别
                </div>
                <input :class="isGender?'personHas':'personNo'" type="text" v-model="gender">
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px" @click="checkInput('weight')">
                <div class="personInforHead">
                    宝宝体重
                </div>
                <input :class="isWeight?'personHas':'personNo'" type="text" v-model="weight">
            </div>
            <div class="personInfor" data-scroll-reveal="enter left over 1s and move 100px" @click="checkInput('way')">
                <div class="personInforHead">
                    宝宝出生方式
                </div>
                <input :class="isWay?'personHas':'personNo'" type="text" v-model="way">
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
    import {isLogin,alertError,clearPiker} from '../../../common/js/commonAler'
    import {check} from "../../../store/actions-type/index"
    export default {
        name: "person",
        data(){
            return {
                predicData:"请输入",
                gender:"请选择",
                weight:"请选择",
                way:"请选择",
                isGender:false,
                isWeight:false,
                isWay:false,
                checked:false,
                isVal:false
            }
        },
        beforeCreate(){
            document.title = "个性化设置";
            clearPiker();
            // isLogin(this);
        },
        beforeMount(){
            console.log(this.$route.params.id)
        },
        mounted(){
            new this.$scrollReveal({ reset: true });
        },
        methods:{
            personBtn:function (){
                let  _this = this;
                if(!this.checked)return;
                _this.$http.post('/customization/baby', {
                    "_token": initObj.token,
                    "name":_this.predicData,
                    "gender":_this.gender=="男"?1:0,
                    "way":(function(way){if(way=="顺产"){return 0}else{return 1}})(_this.way),
                    "weight":_this.weight.replace(/kg$/,"")
                })
                    .then(function (data) {
                        // _this.$store.state.alertDiv(data.data.message[0])
                        _this.$router.push(`/disease/body`)
                    })
                    .catch(function (error) {
                        alertError(error.response ? error.response.data.message[0] : "")
                    })
            },
            bodyName:function (dd){
                if(this.predicData == "请输入"){
                       this.predicData = "";
                       this.isVal = true;
               }else if(this.predicData != ""){
                       this.isVal = true;
               }else{
                    this.predicData = "请输入";
                    this.isVal = false;
                }
            },
            checkInput:function (status){
                clearPiker();
                let _this = this;
               switch(status){
                   case 'gender':
                       this.$store.dispatch(check,new _this.$check({
                           cols : [{
                               options:["男","女"]
                           }],
                           title:"请选择宝宝性别",
                           onOkClick: function (values) {
                               var age = values
                               _this.gender = age[0]
                               _this.isGender = true;
                               if(_this['predicData'] !="" && _this['predicData'] !="请输入" && _this['weight'] != "请选择"&& _this['way'] != "请选择" && _this['gender'] != "请选择"){
                                   _this.checked = true;
                               }else{
                                   _this.checked = false;
                               }
                           }
                       }))
                       _this.$store.state.check.show()
                       break;
                   case 'weight':
                       this.$store.dispatch(check,new _this.$check({cols : [{
                               options:(()=>{
                                   let arr = [];
                                   for(let i=2;i<30;i++){
                                       arr.push(i)
                                   }
                                   return arr;
                               })()
                           }],
                           title:"请选择宝宝体重 (kg)",
                           onOkClick: function (values) {
                               var age = values;
                               _this.weight = age[0]+"kg"
                               _this.isWeight = true;
                               if(_this['predicData'] !="" && _this['predicData'] !="请输入" && _this['weight'] != "请选择"&& _this['way'] != "请选择" && _this['gender'] != "请选择"){
                                   _this.checked = true;
                               }else{
                                   _this.checked = false;
                               }
                           }
                       }))
                       _this.$store.state.check.show()
                       break;
                   case 'way':
                       this.$store.dispatch(check,new _this.$check({
                           cols : [{
                               options:["顺产","剖腹产"]
                           }],
                           title:"请选择宝宝性别",
                           onOkClick: function (values) {
                               var age = values
                               _this.way = age[0]
                               _this.isWay = true;
                               console.log('fds')
                               if(_this['predicData'] !="" && _this['predicData'] !="请输入" && _this['weight'] != "请选择"&& _this['way'] != "请选择" && _this['gender'] != "请选择"){
                                   _this.checked = true;
                               }else{
                                   _this.checked = false;
                               }
                           }
                       }))
                       _this.$store.state.check.show()
                       break;
               }
            }
        },
        watch:{
            predicData:function (old){
                let names = this.predicData;
                let gender = this.gender;
                let weight = this.weight;
                let way = this.way;
                let name = names;
                if(names.length>=20){
                    name = names.substr(0,20);
                }
                if(name != '请输入' && name != '' && gender !="请选择"&& weight !="请选择"&& way !="请选择"){
                    this.checked = true;
                }
            }
        }
    }
</script>

