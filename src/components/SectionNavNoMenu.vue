<template>
    <div class="container-fluid section-nav-no-menu">
        <div class="row">
            <div class="col-12 section-title-container">
                <h3 class="section-nav-no-menu-title">{{navTitle}}</h3>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props: {
        navTitle: {
            required: true,
            type: String
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .section-nav-no-menu {
        padding: 10px 63px 10px 20px;
        background-color: #f3f3f4;
    }
</style>