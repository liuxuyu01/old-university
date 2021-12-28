<template>
    <div class="tagview"><span @click="loginOut">退出</span> </div>
</template>
<script>
export default {
    methods:{
        loginOut(){
            this.$router.push({name:'login'})
        }
    }
}
</script>
<style scoped>
.tagview{
    height: 30px;
    width: 100%;
    background-color: rgb(60, 175, 160);
}
</style>