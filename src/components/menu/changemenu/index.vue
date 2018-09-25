<template>
    <div class="changeMenu">
         <div class="changeMenuHead">
             <div>
                 更改辅食计划
             </div>
             <div>
                 根据宝宝的情况选择一种辅食计划吧！
             </div>
         </div>
        <ul class="changeMenuDt">
            <li>
                <div>
                    <img :src="url+'change/Rectangle.png'" alt="">
                </div>
                <div class="changeMenuRight">
                    <div class="changeMenuHeadTitle">
                        标准辅食
                    </div>
                    <img :src="url+'change/false.png'" alt="">
                </div>
            </li>
            <li>
                <div>
                <img :src="url+'change/gai.png'" alt="">
                </div>
                <div class="changeMenuRight">
                    <div class="changeMenuHeadTitle">
                        <div>
                            宝宝缺钙症状
                        </div>
                        <div>
                            宝宝体型较小/骨骼牙齿发育不良/出牙晚/腓肠肌痉挛/佝偻症/枕秃
                        </div>
                    </div>
                    <img :src="url+'change/true.png'" alt="">
                </div>
            </li>
            <li>
                <div>
                <img :src="url+'change/fe.png'" alt="">
                </div>
                <div class="changeMenuRight">
                    <div class="changeMenuHeadTitle">
                        <div>
                            宝宝缺铁症状
                        </div>
                        <div>
                            宝宝体型较小/骨骼牙齿发育不良/出牙晚/腓肠肌痉挛/佝偻症/枕秃
                        </div>
                    </div>
                    <img :src="url+'change/true.png'" alt="">
                </div>
            </li>
            <li>
                <div>
                <img :src="url+'change/ze.png'" alt="">
                </div>
                <div class="changeMenuRight">
                    <div class="changeMenuHeadTitle">
                        <div>
                            宝宝缺锌症状
                        </div>
                        <div>
                            宝宝体型较小/骨骼牙齿发育不良/出牙晚/腓肠肌痉挛/佝偻症/枕秃
                        </div>
                    </div>
                    <img :src="url+'change/true.png'" alt="">
                </div>
            </li>
            <li>
                <div>
                <img :src="url+'change/va.png'" alt="">
                </div>
                <div class="changeMenuRight">
                    <div class="changeMenuHeadTitle">
                        <div>
                            宝宝缺Va症状
                        </div>
                        <div>
                            宝宝体型较小/骨骼牙齿发育不良/出牙晚/腓肠肌痉挛/佝偻症/枕秃
                        </div>
                    </div>
                    <img :src="url+'change/true.png'" alt="">
                </div>
            </li>
            <li>
                <div>
                <img :src="url+'change/vb2.png'" alt="">
                </div>
                <div class="changeMenuRight">
                    <div class="changeMenuHeadTitle">
                        <div>
                            宝宝缺Vb2症状
                        </div>
                        <div>
                            宝宝体型较小/骨骼牙齿发育不良/出牙晚/腓肠肌痉挛/佝偻症/枕秃
                        </div>
                    </div>
                    <img :src="url+'change/true.png'" alt="">
                </div>
            </li>
            <li>
                <div>
                <img :src="url+'change/vc.png'" alt="">
                </div>
                <div class="changeMenuRight">
                    <div class="changeMenuHeadTitle">
                        <div>
                            宝宝缺Vc症状
                        </div>
                        <div>
                            宝宝体型较小/骨骼牙齿发育不良/出牙晚/腓肠肌痉挛/佝偻症/枕秃
                        </div>
                    </div>
                    <img :src="url+'change/true.png'" alt="">
                </div>
            </li>
        </ul>
        <div class="changeMenuRule">
            <div>
                <img :src="url+'change/error.png'" alt="">重要说明：由于宝宝6个月后增加辅食，8个月后辅食种类多！
            </div>
            <div>
                样化，所以辅食定制只能从8个月后开始实施哦
            </div>
        </div>
    </div>
</template>

<script>
    import "./index.less"
    export default {
        name: "index",
        data(){
            return {
                url:initObj.Baseurl
            }
        }
    }
</script>
