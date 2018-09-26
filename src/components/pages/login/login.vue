<template>
    <div class="login">
        <div class="loginHead" data-scroll-reveal="enter top over 1s after 0.5s">
            登录/注册后即可查看您的定制餐单
        </div>
        <form  class="loginInfors">
            <li class="loginInfor" data-scroll-reveal="enter right after 0.5s">
                <div class="loginInforHead">手机号</div>
                <input placeholder="请输入" @focus="focus('phone',true)" @blur="focus('phone',false)" :class="phoneInitStyle?'inputInit':'inputFocus'" type="text" v-model="phone">
            </li>
            <li class="loginInfor" data-scroll-reveal="enter left after 0.5s">
                <div class="loginInforHead">图形验证码</div>
                <div class="loginCode">
                    <input placeholder="请输入" @focus="focus('img',true)" @blur="focus('img',false)" :class="imgInitStyle?'inputInit':'inputFocus'"  type="text" v-model="imgCode" >
                    <img @click="loginImgChange()" :src="codeImgUrl" alt="">
                </div>
            </li>
            <li class="loginInfor" data-scroll-reveal="enter right after 0.5s">
                <div class="loginInforHead">验证码</div>
                <div class="loginCode">
                    <input placeholder="请输入" @focus="focus('mess',true)" @blur="focus('mess',false)" :class="messInitStyle?'inputInit':'inputFocus'"  type="text" v-model="messCode" >
                    <input @click="reqCodeFun()" class="reqCode" type="button" v-model="reqCode">
                </div>
            </li>
        </form>
        <button @click="login()" data-scroll-reveal="enter bottom over 1s and move 100px" :class="btnImgInitStyle?'btnInit':'btnFocus'" >登录 / 注册</button>
    </div>
</template>

<script>
    import "./login.less"
    import {goHistory,clearPiker,alertError,setCookie} from '../../../common/js/commonAler'
    import {changeLogin} from "../../../store/actions-type/index"
    export default {
        name: "login",
        data(){
            return {
                phone:"",
                phoneInitStyle:true,
                imgCode:"",
                imgInitStyle:true,
                messCode:"",
                isStart:false,
                messInitStyle:true,
                btnImgInitStyle:true,
                reqCode:"获取验证码",
                isCheckedImg:false,
                codeImgUrl:initObj.testUrl+'validitPicture/'+Math.random()
            }
        },
        created(){
            let _this = this;
            this.$http.post('/customization/auth',{
            "u_message": "1313",
            "u_phone": "13167517425",
            "_token": initObj.token,
            "deviceId" :_this.$device.getDeviceId()
            }).then((data)=>{
              console.log(data)
            }).catch((error)=>{
                console.log(error)
            })
        },
        mounted(){
            new this.$scrollReveal({ reset: true });
        },
        beforeUpdate(){
            // console.log(this.$refs.mySwipe)
            clearPiker()
        },
        methods:{
            focus(index,status) {
                let phone = this.phone;
                let imgCode = this.imgCode;
                let messCode = this.messCode;
                switch (index){
                    case 'phone':
                        if(status){
                            //拾取焦点
                            if(phone == ''){
                                this.phone = "";
                                this.phoneInitStyle = false
                            }else{
                                this.phoneInitStyle = false
                            }
                        }else{
                            if(phone == ""){
                                this.phoneInitStyle = true
                            }else{
                                this.phoneInitStyle = false
                            }
                        }
                        break;
                    case 'img':
                        if(status){
                            //拾取焦点
                            if(imgCode== ''){
                                this.imgCode = "";
                                this.imgInitStyle = false
                            }else{
                                this.imgInitStyle = false
                            }
                        }else{
                            if(imgCode == ""){
                                this.imgInitStyle = true
                            }else{
                                this.imgInitStyle = false
                            }
                        }
                        break;
                    case 'mess':
                        if(status){
                            //拾取焦点
                            if(messCode== ''){
                                this.messCode = "";
                                this.messInitStyle = false
                            }else{
                                this.messInitStyle = false
                            }
                        }else{
                            if(messCode == ""){
                                this.messInitStyle = true
                            }else{
                                this.messInitStyle = false
                            }
                        }
                        break;
                }
            },
            loginImgChange:function fun(){
                this.codeImgUrl = initObj.testUrl+'validitPicture/'+Math.random()
            },
            reqCodeFun(){
                 let _this = this;
                 let phone = this.phone;
                 let imgCode = this.imgCode;
                 let reqCode = false;

                 if(phone == "" || imgCode =="")return;
                 if(!/^(1[3-9]{1})\d{9}$/ig.test(phone)){
                    alertError("请输入正确的手机号")
                     return ;
                 }
                if(imgCode.length != 5){
                    alertError("请输入正确的图形验证码")
                    return ;
                }
                if(!reqCode){
                    reqCode = true
                    // this.$http.post('/customization/message',{
                    //     "_token": initObj.token,
                    //     "u_captcha":imgCode,
                    //     "u_phone":phone
                    // })
                    //     .then(function(data){
                    //         reqCode = false;
                            _this.isCheckedImg = true;
                            var start = 120;
                            var endTime = null;
                            if(!_this.isStart){
                                _this.isStart = true
                                endTime = setInterval(function () {
                                    if (start * 1 == 0) {
                                        _this.isStart = false
                                        clearInterval(endTime)
                                        _this.reqCode = '获取验证码';
                                    } else {
                                        start--;
                                        _this.reqCode = start + "s";
                                    }
                                }, 1000)
                            }

                            // if(data){
                            //     alertError(data.data.message[0])
                            // }
                        // })
                        // .catch(function(error){
                        //     alertError(error.response.data.message[0])
                        // })
                }

            },
            login(){
                let _this = this;
                let phone = this.phone;
                let imgCode = this.imgCode;
                let messCode = this.messCode;
                // if(!_this.isCheckedImg){
                //     alertError('请先获取短信验证码')
                //     return;
                // }
                // if(!this.btnImgInitStyle){
                    // this.$http.post('/customization/auth', {
                    //     "_token": initObj.token,
                    //     "u_phone": phone,
                    //     "u_message": messCode,
                    //     "deviceId" :_this.$device.getDeviceId()
                    // })
                    //     .then(function (data) {
                            alertError("登录成功")
                            _this.$store.dispatch(changeLogin, true)
                            // setCookie("SnfdPk",JSON.stringify(data.data))
                            // if (data.data.customization) {
                            //     //去菜单页
                            //     window.location.href = initObj.testUrl +"customization/menu/pregnancy"
                            // } else {
                                  _this.$router.push("/pregnancyState")
                            // }
                        // })
                        // .catch(function (error) {
                        //     alertError(error.response ? error.response.data.message[0] : "")
                        // })
                // }else{
                //     // alertError("请输入您正确的信息")
                // }
            }
        },
        watch:{
            phone:function (old,news){
                let oldPhone =  old.replace(/(^\s*)|(\s*$)/g, "");
                let oldMessCode = this.messCode.replace(/(^\s*)|(\s*$)/g, "");
                let imgCode = this.imgCode.replace(/(^\s*)|(\s*$)/g, "");
                //区分数字汉字
                this.btnImgInitStyle = true;
                if(/^\d+$/ig.test(oldPhone)){
                   // 手机号位数校验
                    if(oldPhone.length>=11){
                        this.phone = oldPhone.substr(0,11);
                    }
                    if(oldPhone.length>=1){
                        if(oldMessCode != "" &&  imgCode != ""){
                            this.btnImgInitStyle = false;
                        }
                    }
                }else{
                    this.phone = ""
                }


                // if(oldPhone.length>=11 && /^(1[3-9]{1})\d{9}$/ig.test(oldPhone.substr(0,11)) ){
                //     this.phone = oldPhone.substr(0,11);
                //     if(oldMessCode != "" && oldMessCode != "请输入"){
                //         if(oldMessCode != "" && oldMessCode != "请输入"){
                //             this.btnImgInitStyle = false;
                //         }
                //     }
                // }else if(!/^\d+$/ig.test(oldPhone) && oldPhone != ""){
                //     this.phone = "";
                // }else{
                //     if(){
                //
                //     }
                //     this.phone = "";
                //     this.btnImgInitStyle = true;
                // }
            },
            imgCode:function (old){
                let oldPhone =  old.replace(/(^\s*)|(\s*$)/g, "");
                let phone = this.phone.replace(/(^\s*)|(\s*$)/g, "");
                let messCode = this.messCode.replace(/(^\s*)|(\s*$)/g, "");
                this.btnImgInitStyle = true;
                if(oldPhone.length>=5){
                    this.imgCode = oldPhone.substr(0,5);

                }
                if(oldPhone.length>=1){
                    if(phone != "" &&  messCode != ""){
                        this.btnImgInitStyle = false;
                    }
                }
            },
            messCode:function (old){
                let oldPhone =  old.replace(/(^\s*)|(\s*$)/g, "");
                let phone = this.phone.replace(/(^\s*)|(\s*$)/g, "");
                let imgCode = this.imgCode.replace(/(^\s*)|(\s*$)/g, "");
                this.btnImgInitStyle = true;
                //区分数字汉字
                if(/^\d+$/ig.test(oldPhone)){
                    // 验证码位数校验
                    if(oldPhone.length>=4){
                        this.messCode = oldPhone.substr(0,4);
                    }
                    if(oldPhone.length>=1){
                        if(phone != "" &&  imgCode != ""){
                            this.btnImgInitStyle = false;
                        }
                    }
                }else{
                    this.messCode = "";
                }
            }
        }
    }
</script>
