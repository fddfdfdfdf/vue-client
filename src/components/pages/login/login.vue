<template>
    <div>
      login
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
