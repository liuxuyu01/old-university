<template>
    <div class='slidemenu'>
        <logo></logo>
        <el-scrollbar class="scrollbar-wrapper">
            <el-menu
                :unique-opened="true"
                mode="vertical">
                <!-- <menu-item
                    v-for="route in menuList"
                    :key="route.path"
                    :item="route"
                    :base-path="route.path"></menu-item> -->
            </el-menu>
        </el-scrollbar>
    </div>
</template>
<script>
import Logo from './logo'
export default {
    components: { Logo },
    computed: {
    }
}
</script>
