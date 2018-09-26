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
                <input :class="isVal?'personHas':'personNo'" @click="predicDate" type="text" v-model="predicData">
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
                <input :class="isVal?'personHas':'personNo'" type="text" @click="bodyInforDt" v-model="bodyBorith">
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
    import {isLogin,alertError,clearPiker} from '../../../common/js/commonAler'
    import {check} from "../../../store/actions-type/index"
    export default {
        name: "person",
        data(){
            return {
                predicData:"请选择",
                checked:false,
                isVal:false,
                bodyBorith:"请选择"
            }
        },
        beforeCreate(){
            document.title = "个性化设置";
            isLogin(this);
        },
        beforeMount(){
            console.log(this.$route.params.id)
            clearPiker();
        },
        mounted(){
            new this.$scrollReveal({ reset: true });
        },
        methods:{
            personBtn:function (){
                let _this = this;
                // prepare body
                let id = this.$route.params.id
                if(!this.checked)return;
                if(id == 'prepare'){
                    this.$http.post('/customization/dueDate', {
                        "_token": initObj.token,
                        "date":_this.predicData
                    })
                        .then(function (data) {
                            _this.$router.push('/personinfors/prepare')
                        })
                        .catch(function (error) {
                            alertError(error.response ? error.response.data.message[0] : "")
                        })

                }else{
                    this.$http.post('/customization/birth', {
                        "_token": initObj.token,
                        "date":_this.bodyBorith
                    })
                        .then(function (data) {
                            // _this.$store.state.alertDiv(data.data.message[0])
                            _this.$router.push('/personinfors/body')
                        })
                        .catch(function (error) {
                            _this.$store.state.alertDiv(error.response ? error.response.data.message[0] : "")
                        })
                }

            },
            predicDate:function (){
                clearPiker();
                let today = new Date();
                let year = [];
                let initYear = [];
                let month = [];
                let days = [];
                let day = [];
                let _this = this;
                let date = new Date();
                _this.$store.dispatch(check,null)
                this.$store.state.check?this.$store.state.check.close():null
                date.setDate(date.getDate()+280-1);
                var distance = [date.getFullYear(),(date.getMonth()+1),date.getDate()]
                let initMouth = [];
                for(var i = 1; i <=12  ; i++) {
                    initMouth.push(i + "月");
                }
                for(var i = 0; i <2 ; i++){
                    initYear.push(i + today.getFullYear()+"年");
                }
                for(var i = today.getMonth()+1; i <=12  ; i++) {
                    month.push(i + "月");
                }
                for(var i = today.getDate(); i <= (new Date(today.getFullYear(),today.getMonth(),0)).getDate() ; i++){
                    days.push(i+"日");
                }

                this.$store.dispatch(check,new this.$check({
                    cols : [{
                        options: initYear
                    },{
                        options: month
                    },{
                        options: days
                    },],
                    // title:"请选择人员的userId",
                    onOkClick: function (values) {
                        var dtYear = values[0].replace(/[\u4e00-\u9fa5]+/g,'');
                        var dtMouth = values[1].replace(/[\u4e00-\u9fa5]+/g,'');
                        var dtDay = values[2].replace(/[\u4e00-\u9fa5]+/g,'');
                        _this.checked = true;
                        _this.isVal = true;
                        _this.predicData  = dtYear + "-" + (dtMouth*1<10? ("0"+dtMouth):dtMouth)+ "-" +(dtDay*1<10? ("0"+dtDay):dtDay) ;
                    },
                    setValues: [today.getFullYear()+"年", today.getMonth() + 1+"月", today.getDate()+"日"],
                    onSelectItem : function (i, index, value) {
                        var years = this.getValue(0);
                        var mouthss = this.getValue(1);
                        var dayDt = this.getValue(2);
                        var disDay = "";
                        if(years == "" || mouthss == ""  || dayDt=="")
                            return
                        var year = years.substring(0, years.length -1);
                        var months = mouthss.substring(0, mouthss.length -1);
                        var dayDts = dayDt.substring(0, dayDt.length -1);
                        months =  months==""?value.substring(0, value.length -1):months
                        disDay = year+"-"+months+"-"+dayDts

                        var curDate = new Date();//
                        var curYear = new Date();
                        var day = [];
                        curDate.setYear(year)
                        curDate.setMonth(months);
                        curDate.setDate(0);//
                        if(year == curYear.getFullYear()){
                            if(months == "1"|| months == (curYear.getMonth()+1)){

                                this.setOptions(2, days);
                            }else{
                                for(var i = 1; i <= curDate.getDate() ; i++){
                                    day.push(i+"日");
                                }
                                this.setOptions(2, day);
                            }

                            this.setOptions(1, month)
                        }else{
                            if(months==distance[1]){
                                if(dayDts<=distance[2]){
                                    this.setOptions(1, initMouth);
                                    for(var i = 1; i <= curDate.getDate() ; i++){
                                        day.push(i+"日");
                                    }
                                    this.setOptions(2, day);
                                }else{
                                    this.setOptions(1, initMouth);
                                    for(var i = 1; i <= curDate.getDate() ; i++){
                                        day.push(i+"日");
                                    }
                                    this.setOptions(2, day,distance[2]+"日");
                                }
                            }else if(months<distance[1]){
                                this.setOptions(1, initMouth);
                                for(var i = 1; i <= curDate.getDate() ; i++){
                                    day.push(i+"日");
                                }
                                this.setOptions(2, day);
                            }else{
                                this.setOptions(1, initMouth,distance[1]+"月");
                                for(var i = 1; i <= curDate.getDate() ; i++){
                                    day.push(i+"日");
                                }
                                this.setOptions(2, day,distance[2]+"日");
                            }

                        }
                    }
                }))
                this.$store.state.check.show()
            },
            bodyInforDt:function fun(){
                clearPiker();
                let _this = this;
                _this.$store.dispatch(check,null)
                this.$store.state.check?this.$store.state.check.close():null
                let today = new Date();
                let year = [];
                let month = [];
                let days = [];
                let initMouth = [];
                for(var i = 1; i <=12  ; i++) {
                    initMouth.push(i + "月");
                }
                for(var i = 0; i < 5; i++){
                    year.push( today.getFullYear()-i+"年");
                }
                for(var i =1 ; i <=today.getMonth()+1  ; i++) {
                    month.push(i + "月");
                }
                for(var i = 1; i <= today.getDate() ; i++){
                    days.push(i + "日");
                }

                let getLastYearYestdy =  function (date){
                    var strYear = date.getFullYear() - 1;
                    var strDay = date.getDate()+1;
                    var strMonth = date.getMonth()+1;
                    return [strYear,strMonth,strDay];
                }
                this.$store.dispatch(check,new this.$check({
                    cols : [{
                        options: year
                    },{
                        options: month
                    },{
                        options: days
                    },],
                    // title:"请选择人员的userId",
                    onOkClick: function (values) {
                        var dtYear = values[0].replace(/[\u4e00-\u9fa5]+/g,'');
                        var dtMouth = values[1].replace(/[\u4e00-\u9fa5]+/g,'');
                        var dtDay = values[2].replace(/[\u4e00-\u9fa5]+/g,'');
                        _this.checked = true;
                        _this.isVal = true;
                        _this.bodyBorith  = dtYear + "-" + (dtMouth*1<10? ("0"+dtMouth):dtMouth)+ "-" +(dtDay*1<10? ("0"+dtDay):dtDay) ;
                    },
                    setValues: [today.getFullYear()+"年", today.getMonth() + 1+"月", today.getDate()+"日"],
                    onSelectItem : function (i, index, value) {
                        var years = this.getValue(0);
                        var mouthss = this.getValue(1);
                        if(i != 2){
                            var year = years.substring(0, years.length -1);
                            var months = mouthss.substring(0, mouthss.length -1);

                            months =  months==""?value.substring(0, value.length -1):months
                            if(year == "" || month == "" )
                                return
                            var curDate = new Date();//
                            var curYear = new Date();
                            var day = [];
                            curDate.setYear(year)
                            curDate.setMonth(months);
                            curDate.setDate(0);
                            if(year == curYear.getFullYear()){

                                this.setOptions(1, month);
                                if(months == (curYear.getMonth()+1)){
                                    for(var i = 1; i <= today.getDate() ; i++){
                                        day.push(i + "日");
                                    }
                                    this.setOptions(2, day);
                                }else{
                                    for(var i = 1; i <= curDate.getDate() ; i++){
                                        day.push(i+"日");
                                    }
                                    this.setOptions(2, day);
                                }
                            }else{
                                var year = years.substring(0, years.length -1);
                                var months = mouthss.substring(0, mouthss.length -1);
                                var daydd = this.getValue(2);
                                if(getLastYearYestdy[1] == months){
                                    this.setOptions(1, initMouth);
                                    for(var i = 1; i <= curDate.getDate() ; i++){
                                        day.push(i+"日");
                                    }
                                    if(daydd.substring(0, daydd -1)>getLastYearYestdy[2]){
                                        this.setOptions(2, day);
                                    }else{
                                        this.setOptions(2, day,getLastYearYestdy[2]+"日");
                                    }
                                }else if(getLastYearYestdy[1]< months){
                                    this.setOptions(1, initMouth);
                                    for(var i = 1; i <= curDate.getDate() ; i++){
                                        day.push(i+"日");
                                    }
                                    this.setOptions(2, day);
                                }else{
                                    this.setOptions(1, initMouth,getLastYearYestdy[1]+"月");
                                    for(var i = 1; i <= curDate.getDate() ; i++){
                                        day.push(i+"日");
                                    }
                                    this.setOptions(2, day,getLastYearYestdy[2]+"日");
                                }

                            }

                        }else{
                            var dtDays =  getLastYearYestdy(new Date());
                            var curDate = new Date();
                            var mouth = [];
                            var days = [];
                            if(this.getValue(0).replace(/[\u4e00-\u9fa5]+/g,'')!=curDate.getFullYear()){
                                curDate.setYear(this.getValue(0).replace(/[\u4e00-\u9fa5]+/g,''));
                                curDate.setMonth(this.getValue(1).replace(/[\u4e00-\u9fa5]+/g,''));curDate.setDate(0);
                                for(var t=1;t<=curDate.getDate();t++){days.push(t+"日");};
                                for(var t=1;t<=12;t++){mouth.push(t+"月");}
                                if(this.getValue(2).replace(/[\u4e00-\u9fa5]+/g,'')*1>=dtDays[2]){
                                    this.setOptions(1,mouth);
                                    this.setOptions(2,days);
                                }else{
                                    this.setOptions(1,mouth,dtDays[1]+"月");
                                    this.setOptions(2,days,dtDays[2]+"日");}
                            }else{
                                return false;
                            }
                        }

                    }
                }))
                this.$store.state.check.show();
            }
        }
    }
</script>

