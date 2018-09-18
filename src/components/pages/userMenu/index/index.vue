<template>
    <div class="userMenu">
        <li data-scroll-reveal="enter left over 3s after 0.5s"><img src="http://cdn.dowebok.com/134/images/i2/31.jpg" alt=""></li>
    </div>
</template>

<script>
    import "./index.less"
    export default {
        name: "userMenu",
        data(){
            return {

            }
        },
        mounted(){
            new this.$scrollReveal({reset: true})
        }
    }
</script>

<style scoped>

</style>