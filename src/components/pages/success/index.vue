<template>
    <div class="success">
        <div>
            <img class="hide" :src="url+'update/1.png'" alt="">
            <img class="hide"  :src="url+'update/2.png'" alt="">
            <img class="hide"  :src="url+'update/3.png'" alt="">
            <img class="hide"  :src="url+'update/4.png'" alt="">
            <img class="hide"  :src="url+'update/5.png'" alt="">
        </div>
        <div class="successCt">
            <img id="img" :src="url+'update/1.png'" alt="">
            <div class="successTop">
                孕小二已经收到您的定制信息
            </div>
            <div>
                餐单正在生成中…
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
    import './index.less'
    export default {
        name: "index",
        data(){
          return {
             url:initObj.Baseurl
          }
        },
        mounted(){
            var  y = 0 ;
            var  yin = true;
            var step2 = 2;
            var delay = 20;
            var start = 1;
            var obj2 = document.getElementById("img");
            var url = this.url+"update/";
            setInterval(function () {
                var T = 0;
                var B = -60;
                obj2.style.top = y + document.documentElement.scrollTop + "px";
                y = y + step2 * (yin ? -1 : 1);
                if (y > T) {
                    yin = true;
                    y = T;
                    obj2.setAttribute("src",url+start+".png")
                    start ++;
                }
                if (y < B) {
                    if(start >5){
                        start =1;
                    }
                    yin = false;
                    y = B;
                }
            }, delay);
        }
    }
</script>
