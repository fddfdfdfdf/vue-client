<template>
    <div>
        <keep-alive>
            <router-view  v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
    import "./index.less"
    export default {
        name: "statusContain"
    }
</script>

<style scoped>

</style>