<template>
    <div class="list">
            <ul>
                <li data-scroll-reveal="enter top"><img src="http://cdn.dowebok.com/134/images/i2/1.jpg" alt=""></li>
                <li data-scroll-reveal="enter right after 0.5s"><img src="http://cdn.dowebok.com/134/images/i2/2.jpg" alt=""></li>
                <li data-scroll-reveal="enter bottom over 1s and move 300px after 0.3s"><img src="http://cdn.dowebok.com/134/images/i2/3.jpg" alt=""></li>
                <li data-scroll-reveal="enter top over 0.5s and move 200px"><img src="http://cdn.dowebok.com/134/images/i2/4.jpg" alt=""></li>
                <li data-scroll-reveal="enter bottom over 1s and move 100px"><img src="http://cdn.dowebok.com/134/images/i2/5.jpg" alt=""></li>
                <li data-scroll-reveal="enter bottom over 1s and move 300px after 0.3s"><img src="http://cdn.dowebok.com/134/images/i2/6.jpg" alt=""></li>
                <li data-scroll-reveal="enter top over 3s after 0.5s"><img src="http://cdn.dowebok.com/134/images/i2/7.jpg" alt=""></li>
                <li data-scroll-reveal="enter left"><img src="http://cdn.dowebok.com/134/images/i2/8.jpg" alt=""></li>
            </ul>
            <ul>
                <li data-scroll-reveal="enter top"><img src="http://cdn.dowebok.com/134/images/i2/9.jpg" alt=""></li>
                <li data-scroll-reveal="enter left"><img src="http://cdn.dowebok.com/134/images/i2/10.jpg" alt=""></li>
                <li data-scroll-reveal="enter top"><img src="http://cdn.dowebok.com/134/images/i2/11.jpg" alt=""></li>
                <li data-scroll-reveal="enter top over 3s after 0.5s"><img src="http://cdn.dowebok.com/134/images/i2/12.jpg" alt=""></li>
                <li data-scroll-reveal="enter bottom over 1s and move 100px"><img src="http://cdn.dowebok.com/134/images/i2/13.jpg" alt=""></li>
                <li data-scroll-reveal="enter top over 0.5s and move 200px"><img src="http://cdn.dowebok.com/134/images/i2/14.jpg" alt=""></li>
                <li data-scroll-reveal="enter top over 3s after 0.5s"><img src="http://cdn.dowebok.com/134/images/i2/15.jpg" alt=""></li>
                <li data-scroll-reveal="enter right after 0.5s"><img src="http://cdn.dowebok.com/134/images/i2/16.jpg" alt=""></li>
            </ul>
            <ul>
                <li data-scroll-reveal="enter top over 3s after 0.5s"><img src="http://cdn.dowebok.com/134/images/i2/17.jpg" alt=""></li>
                <li data-scroll-reveal="enter left"><img src="http://cdn.dowebok.com/134/images/i2/18.jpg" alt=""></li>
                <li data-scroll-reveal="enter right after 0.5s"><img src="http://cdn.dowebok.com/134/images/i2/19.jpg" alt=""></li>
                <li data-scroll-reveal="enter top"><img src="http://cdn.dowebok.com/134/images/i2/20.jpg" alt=""></li>
                <li data-scroll-reveal="enter bottom over 1s and move 100px"><img src="http://cdn.dowebok.com/134/images/i2/21.jpg" alt=""></li>
                <li data-scroll-reveal="enter top over 0.5s and move 200px"><img src="http://cdn.dowebok.com/134/images/i2/22.jpg" alt=""></li>
                <li data-scroll-reveal="enter bottom over 1s and move 300px after 0.3s"><img src="http://cdn.dowebok.com/134/images/i2/23.jpg" alt=""></li>
                <li data-scroll-reveal="enter right after 0.5s"><img src="http://cdn.dowebok.com/134/images/i2/24.jpg" alt=""></li>
            </ul>
            <ul>
                <li data-scroll-reveal="enter left"><img src="http://cdn.dowebok.com/134/images/i2/25.jpg" alt=""></li>
                <li data-scroll-reveal="enter top over 3s after 0.5s"><img src="http://cdn.dowebok.com/134/images/i2/26.jpg" alt=""></li>
                <li data-scroll-reveal="enter bottom over 1s and move 100px"><img src="http://cdn.dowebok.com/134/images/i2/27.jpg" alt=""></li>
                <li data-scroll-reveal="enter top over 0.5s and move 200px"><img src="http://cdn.dowebok.com/134/images/i2/28.jpg" alt=""></li>
                <li data-scroll-reveal="enter top over 3s after 0.5s"><img src="http://cdn.dowebok.com/134/images/i2/29.jpg" alt=""></li>
                <li data-scroll-reveal="enter left"><img src="http://cdn.dowebok.com/134/images/i2/30.jpg" alt=""></li>
                <li data-scroll-reveal="enter top over 3s after 0.5s"><img src="http://cdn.dowebok.com/134/images/i2/31.jpg" alt=""></li>
                <li data-scroll-reveal="enter bottom over 1s and move 100px"><img src="http://cdn.dowebok.com/134/images/i2/32.jpg" alt=""></li>
            </ul>
    </div>
</template>

<script>
    import "./login.less"
    export default {
        name: "login",
        data(){
            return {
                data:null,
                bannerIndex:null
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
            console.log(this.$refs.mySwipe)
        },
        methods:{
            goto(index) {
                this.$refs.mySwipe.goto(index);
            },
            changeSwipe(newIndex, oldIndex) {
                this.bannerIndex = this.bannerIndex.map((val,index)=>{
                    console.log(index)
                    if(index == newIndex){
                        return "active";
                    }else{
                        return "noactive";
                    }
               })
            }
        }
    }
</script>
