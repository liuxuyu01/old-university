<template>
    <div class="appmain">
        <router-view />
    </div>
</template>
<script>
export default {
    name:'AppMain',
 
    created(){
    },
    mounted() {
    },
}
</script>
<style lang="scss" scoped>
.appmain{
    height: 90%;
    width: 100%;
    background-color: #fff;
}
</style>
