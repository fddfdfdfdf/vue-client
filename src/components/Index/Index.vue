<template>
  <div class="pageContain">
          <keep-alive>
              <router-view class="dd" v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script type="text/javascript">
import "./index.less"
import {isLogin} from '../../common/js/commonAler'
// import Header from "../../common/Head/Head"
// import Footer from "../../common/footer/footer"

export default {
  isLogin:isLogin,
  data() {
    return {
    }
  },
  beforeCreate(){
     // console.log("beforeCreate")
  },
  created() {
    // console.log("created")
  },
    beforeMount(){
        // console.log("beforeMount")
    },
    mounted(){
     // console.log('mounted')
    },
    beforeUpdate(){
    // console.log("beforeUpdate")
    },
   updated(){
        // console.log("update")
       // console.log(this.$router);
    },
    activated(){
      // console.log("activated")
    },
    deactivated(){
      // console.log("deactivated")
    },
  beforeDestroy(){
      // console.log("beforeDestory")
  },
  destroyed(){
     // console.log("destoryed")
  },
  components: {
     // 'v-header': Header,
     // 'v-footer':Footer
  }
}

</script>
