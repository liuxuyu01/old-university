<template>
    <div class="sidebar-logo-container">
         <router-link
                class="sidebar-logo-link"
                to="/">
                <img  :src="logo" class="sidebar-logo" width="250px" height="60px" />
        </router-link>
    </div>
</template>
<script>
import logo from '@/assets/images/logo.png'
export default {
    data(){
        return{}
    },
    computed:{
        logo(){
            return logo
        }
    }
}
</script>
<style  scoped>
</style>