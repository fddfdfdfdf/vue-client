<template>
    <div class="mycenter">
        <div class="mycenterHead">
            <img :src="myImg" alt="">
            <div class="mycenterInfor">
                 <div>昵称</div>
                 <div>八宝</div>
            </div>
        </div>
        <div class="mycenterCt">
              <ul v-if="bodyRagOut" class="bodyRagOut">
                  <li class="mycenterDtCt">
                      <img :src="url+'mypage/bardsday.png'" alt="">
                      <span>宝宝生日</span>
                      <span>2017年5月18日</span>
                      <img :src="url+'mypage/left.png'" alt="">
                  </li>
              </ul>
              <ul v-if="!bodyRag" class="bodyRag">
                  <ul class="bodyRagContain">
                      <li class="mycenterDtCt">
                          <img :src="url+'mypage/bardsday.png'" alt="">
                          <span>宝宝生日</span>
                          <span>2017年5月18日</span>
                          <img :src="url+'mypage/left.png'" alt="">
                      </li>
                      <li class="mycenterDtCt">
                          <img :src="url+'mypage/body.png'" alt="">
                          <span>宝宝生日</span>
                          <span>2017年5月18日</span>
                          <img :src="url+'mypage/left.png'" alt="">
                      </li>
                  </ul>
                  <ul class="bodyRagContain">
                      <li class="mycenterDtCt">
                          <img :src="url+'mypage/height.png'" alt="">
                          <span>宝宝生日</span>
                          <span>2017年5月18日</span>
                          <img :src="url+'mypage/left.png'" alt="">
                      </li>
                      <li class="mycenterDtCt">
                          <img :src="url+'mypage/weight.png'" alt="">
                          <span>宝宝生日</span>
                          <span>2017年5月18日</span>
                          <img :src="url+'mypage/left.png'" alt="">
                      </li>
                  </ul>
                  <ul class="bodyRagContain">
                      <li class="mycenterDtCt">
                          <img :src="url+'mypage/del.png'" alt="">
                          <span>宝宝生日</span>
                          <span>2017年5月18日</span>
                          <img :src="url+'mypage/left.png'" alt="">
                      </li>
                  </ul>
                  <ul class="bodyRagContain">
                      <li class="mycenterDtCt">
                          <img :src="url+'mypage/min.png'" alt="">
                          <span>宝宝生日</span>
                          <span>2017年5月18日</span>
                          <img :src="url+'mypage/left.png'" alt="">
                      </li>
                  </ul>
              </ul>
              <ul v-if="preg" class="preg">
                  <ul class="bodyRagContain">
                      <li class="mycenterDtCt">
                          <img :src="url+'mypage/preg.png'" alt="">
                          <span>宝宝生日</span>
                          <span>2017年5月18日</span>
                          <img :src="url+'mypage/left.png'" alt="">
                      </li>
                  </ul>
                  <ul class="bodyRagContain">
                      <li class="mycenterDtCt">
                          <img :src="url+'mypage/bardsday.png'" alt="">
                          <span>宝宝生日</span>
                          <span>2017年5月18日</span>
                          <img :src="url+'mypage/left.png'" alt="">
                      </li>
                      <li class="mycenterDtCt">
                          <img :src="url+'mypage/height.png'" alt="">
                          <span>宝宝生日</span>
                          <span>2017年5月18日</span>
                          <img :src="url+'mypage/left.png'" alt="">
                      </li>
                      <li class="mycenterDtCt">
                          <img :src="url+'mypage/weight.png'" alt="">
                          <span>宝宝生日</span>
                          <span>2017年5月18日</span>
                          <img :src="url+'mypage/left.png'" alt="">
                      </li>
                  </ul>
                  <ul class="bodyRagContain">
                      <li class="mycenterDtCt">
                          <img :src="url+'mypage/del.png'" alt="">
                          <span>宝宝生日</span>
                          <span>2017年5月18日</span>
                          <img :src="url+'mypage/left.png'" alt="">
                      </li>
                  </ul>
                  <ul class="bodyRagContain">
                      <li class="mycenterDtCt">
                          <img :src="url+'mypage/min.png'" alt="">
                          <span>宝宝生日</span>
                          <span>2017年5月18日</span>
                          <img :src="url+'mypage/left.png'" alt="">
                      </li>
                  </ul>
              </ul>
              <ul v-if="!predic" class="predic"></ul>
              <div class="changeStatus">
                  <div>
                      <img :src="url+'mypage/togle.png'" alt="">
                      <span>切换状态</span>
                      <img :src="url+'mypage/left.png'" alt="">
                  </div>
              </div>
        </div>
        <div class="bodyMoteherFixed">
            <ul>
                <li @click="toPage('')">
                    <img :src="menu" alt="">
                    <div>餐单</div>
                </li>
                <li @click="toPage('shop')">
                    <img :src="url+'shop/shop.png'" alt="">
                    <div>商城</div>
                </li>
                <li @click="toPage('app')">
                    <img :src="app" alt="">
                    <div>孕小二</div>
                </li>
                <li @click="toPage('mycenter')">
                    <img :src="my" alt="">
                    <div>我的</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import "./index.less"
    export default {
        name: "prepare",
        data(){
            return {
                myImg:"http://localhost:3000/img/shop/shop.png",
                url:initObj.Baseurl,
                menu:initObj.Baseurl+'shop/menu.png',
                app:initObj.Baseurl+'shop/second.png',
                my:initObj.Baseurl+'shop/myed.png',
                predic:false,
                preg:false,
                bodyRagOut:false,
                bodyRag:true
            }
        },
        beforeMount(){

        },
        mounted(){
            console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>