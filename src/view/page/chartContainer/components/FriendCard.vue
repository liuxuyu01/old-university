<template>
    <div class="friend-card flex-center">
        <person-card />
    </div>
</template>
<script>
import PersonCard from "@/components/PersonCard"
export default {
    name:'FriendChart',
    components:{
       PersonCard 
    }
}
</script>
<style lang="scss" scoped>
.friend-card{
    height: 100%;
    -webkit-app-region: drag;
     overflow-x: hidden;
    overflow-y: auto;
}
</style>