<template>
    <div class="login">
        <div class="loginHead" data-scroll-reveal="enter top over 1s after 0.5s">
            登录/注册后即可查看您的定制餐单
        </div>
        <form  class="loginInfors">
            <li class="loginInfor" data-scroll-reveal="enter right after 0.5s">
                <div class="loginInforHead">手机号</div>
                <input @focus="focus('phone',true)" @blur="focus('phone',false)" :class="phoneInitStyle?'inputInit':'inputFocus'" type="text" v-model="phone">
            </li>
            <li class="loginInfor" data-scroll-reveal="enter left after 0.5s">
                <div class="loginInforHead">图形验证码</div>
                <div class="loginCode">
                    <input @focus="focus('img',true)" @blur="focus('img',false)" :class="imgInitStyle?'inputInit':'inputFocus'"  type="text" v-model="imgCode" >
                    <img :src="codeImgUrl" alt="">
                </div>
            </li>
            <li class="loginInfor" data-scroll-reveal="enter right after 0.5s">
                <div class="loginInforHead">验证码</div>
                <div class="loginCode">
                    <input @focus="focus('mess',true)" @blur="focus('mess',false)" :class="messInitStyle?'inputInit':'inputFocus'"  type="text" v-model="messCode" >
                    <input @click="reqCodeFun()" class="reqCode" type="button" v-model="reqCode">
                </div>
            </li>
        </form>
        <button @click="login()" data-scroll-reveal="enter bottom over 1s and move 100px" :class="btnImgInitStyle?'btnInit':'btnFocus'" >登录 / 注册</button>
    </div>
</template>

<script>
    import "./login.less"
    import {goHistory,clearPiker,alertError} from '../../../common/js/commonAler'
    export default {
        name: "login",
        data(){
            return {
                phone:"请输入",
                phoneInitStyle:true,
                imgCode:"请输入",
                imgInitStyle:true,
                messCode:"请输入",
                messInitStyle:true,
                btnImgInitStyle:true,
                reqCode:"获取验证码",
                codeImgUrl:"https://cmstest.6kena.com//validitPicture/0.6404590732174111"
            }
        },
        created(){
            let _this = this;
            this.$http({
                url: "/v2/ecapi.banner.list",
                type: "post",
                dataType: "json",
                data: {
                    page: 1,
                    per_page: 10
                }
            }).then((data)=>{
               _this.$nextTick(()=>{
                   this.data = data.banners
                   this.bannerIndex = data.banners.map((val,index)=>{
                       if(index == 0){
                           return "active";
                       }else{
                            return "noactive";
                        }
                   })
            })
            }).catch((error)=>{
                console.log(error)
            })
        },
        mounted(){
            new this.$scrollReveal({ reset: true });
        },
        beforeUpdate(){
            // console.log(this.$refs.mySwipe)
        },
        methods:{
            focus(index,status) {
                let phone = this.phone;
                let imgCode = this.imgCode;
                let messCode = this.messCode;
                switch (index){
                    case 'phone':
                        if(status){
                            if(/^(1[3-9]{1})\d{9}$/ig.test(phone)){
                                this.phoneInitStyle = false;
                                this.phone = phone;
                            }else{
                                this.phone = "";
                                if(phone!="" && phone !="请输入"){
                                    alertError('请输入正确的手机号')
                                }
                                this.phoneInitStyle = false;
                            }
                        }else{
                            if(/^(1[3-9]{1})\d{9}$/ig.test(phone)){
                                this.phone = phone;
                                this.phoneInitStyle = false;
                            }else{
                                if(phone!=""&& phone !="请输入"){
                                    alertError('请输入正确的手机号')
                                }
                                this.phoneInitStyle = true;
                                this.phone = "请输入";
                            }
                        }

                        if(messCode != "" && messCode!="请输入"){
                            this.messInitStyle = false;
                            this.messCode= imgCode;
                        }else{
                            this.messCode = imgCode;
                            this.messInitStyle = true;
                        }

                        if(imgCode !="" && imgCode != "请输入"){
                            this.imgCode = imgCode;
                            this.imgInitStyle = false;
                        }else{
                            this.imgCode = imgCode;
                            this.imgInitStyle = true;
                        }

                        break;
                    case 'img':
                        if(status){
                            if(imgCode != "" && imgCode!="请输入"){
                                this.imgInitStyle = false;
                                this.imgCode = imgCode;
                            }else{
                                this.imgCode = "";
                                this.imgInitStyle = false;
                            }
                        }else{
                            this.imgCode =  imgCode == ""?"请输入":imgCode;
                        }
                        this.messCode = messCode ==  ""?"请输入":messCode;

                        if(/^(1[3-9]{1})\d{9}$/ig.test(phone)){
                            this.phone = phone;
                            this.phoneInitStyle = false;
                        }else{
                            this.phoneInitStyle = true;
                            this.phone = "请输入";
                        }
                        this.messInitStyle =  true;
                        break;
                    case 'mess':
                        if(status){
                            if(messCode != "" && messCode!="请输入"){
                                this.messInitStyle = true;
                                this.messCode= imgCode;
                            }else{
                                this.messCode = "";
                                this.messInitStyle = false;
                            }
                        }else{
                            this.messCode =  messCode == ""?"请输入":messCode;
                        }

                        if(/^(1[3-9]{1})\d{9}$/ig.test(phone)){
                            this.phone = phone;
                            this.phoneInitStyle = false;
                        }else{
                            this.phoneInitStyle = true;
                            this.phone = "请输入";
                        }

                        if(imgCode !="" && imgCode != "请输入"){
                            this.imgCode = imgCode;
                            this.imgInitStyle = false;
                        }else{
                            this.imgCode = "";
                            this.imgInitStyle = true;
                        }

                        break;
                }
            },
            reqCodeFun(){
                console.log("fds")
            },
            login(){
                this.$router.push("pregnancyState")
                if(!this.btnImgInitStyle){
                    console.log("login")
                }else{
                    // alertError("请输入您正确的信息")
                }
            }
        },
        watch:{
            phone:function (old){
                let oldPhone =  old.replace(/(^\s*)|(\s*$)/g, "");
                let oldMessCode = this.messCode.replace(/(^\s*)|(\s*$)/g, "");
                let imgCode = this.imgCode.replace(/(^\s*)|(\s*$)/g, "");
                if(oldPhone.length>=11 && /^(1[3-9]{1})\d{9}$/ig.test(oldPhone.substr(0,11)) ){
                    this.phone = oldPhone.substr(0,11);
                    if(oldMessCode != "" && oldMessCode != "请输入"){
                        if(oldMessCode != "" && oldMessCode != "请输入"){
                            this.btnImgInitStyle = false;
                        }
                    }
                }else if(!/^\d+$/ig.test(oldPhone) && oldPhone != ""){
                    this.phone = "请输入";
                }else{
                    this.btnImgInitStyle = true;
                }
            },
            imgCode:function (old){
                let oldPhone =  old.replace(/(^\s*)|(\s*$)/g, "");
                let phone = this.phone.replace(/(^\s*)|(\s*$)/g, "");
                let messCode = this.messCode.replace(/(^\s*)|(\s*$)/g, "");

                if(oldPhone.length>=6){
                    this.imgCode = oldPhone.substr(0,6);
                    if(phone != "" && phone != "请输入"){
                        if(messCode != "" &&  messCode != "请输入"){
                            this.btnImgInitStyle = false;
                        }
                    }
                }else {
                    this.imgCode = oldPhone;
                    this.btnImgInitStyle = true;
                }
            },
            messCode:function (old){
                let oldPhone =  old.replace(/(^\s*)|(\s*$)/g, "");
                let phone = this.phone.replace(/(^\s*)|(\s*$)/g, "");
                let imgCode = this.imgCode.replace(/(^\s*)|(\s*$)/g, "");

                if(oldPhone.length>=4){
                    if( /^\d{4}$/ig.test(oldPhone.substr(0,4)) ){
                        this.messCode = oldPhone.substr(0,4);
                        if(phone != "" && phone != "请输入"){
                            if(imgCode != "" &&  imgCode != "请输入"){
                                this.btnImgInitStyle = false;
                            }
                        }
                    }else{
                        alertError("请输入正确的验证码")
                        this.messCode = "";
                    }
                }else{
                    this.btnImgInitStyle = true;
                    this.messCode = oldPhone;
                }
            }
        }
    }
</script>
