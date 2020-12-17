<template>
    <div class="content-section videos-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <section-nav-no-menu :navTitle="navTitle" :menuItems="menuItems"/>
            </div>
        </div>
    </div>    
</template>

<script>
import SectionNavNoMenu from './SectionNavNoMenu.vue';
export default {
  components: { SectionNavNoMenu },
    setup() 
    {
        const navTitle = "Videos Tempo";
        return { navTitle };  
    }  
}
</script>

<style lang="scss" scoped>

</style>