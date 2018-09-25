<template>
    <div class="budEnd">
        <div>

        </div>
        <div>
            <img :src="url+'mypage/end.png'" alt="">
            <div class="buyEndDt buyEndDtH">
                您的餐单定制服务已结束
            </div>
            <div class="buyEndDt">
                请重新设置身份开始定制
            </div>
            <div class="eatBtn">
                <div>
                    重新定制
                </div>
                <div>
                    去商城看看
                </div>
            </div>
        </div>
        <div>
            <div>
                您的更多营养建议、采购建议、宝宝餐单、烹饪方法
            </div>
            <div>
                和食材查询请下载孕小二APP查询。
            </div>
        </div>
    </div>
</template>

<script>
    import  "./index.less"
    export default {
        name: "index",
        data(){
            return {
                url:initObj.Baseurl
            }
        }
    }
</script>

<style scoped>

</style>