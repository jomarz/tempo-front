<template>
    <div id="navbar">
        <div class="logo-container">
            <a class='navbar-logo'></a>
        </div>
        <SearchBox />
    </div> 
</template>

<script>
import SearchBox from './SearchBox.vue'
export default {
    name: 'NavBar',
    components: {
        SearchBox
    }
}
</script>

<style lang="scss" scoped>
    #navbar {
        width: 100vw;
        background-color: white;
        height: 76px;
        .logo-container {
            height: 100%;
            display: inline;
        }
        .navbar-logo {
            margin: 65px 0px 55px 20px;
            display: block;
            background-image: url('../assets/img/tempo_logo.svg');
            background-size: contain;
            background-repeat: no-repeat;
            height: 100%;
            img{
                height: 100%;
            }
        }
        h1 {
            color: black;
        }
    }
</style>