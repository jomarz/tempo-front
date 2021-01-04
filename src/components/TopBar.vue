<template>
    <div  class="container-fluid" id="navbar">
        <div class="row">
            <div class="col-6 logo-container">
                <a class='navbar-logo'></a>
            </div>
            <SearchBox class="col-6"/>
        </div>
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
        background-color: white;
        .row {
        height: 76px;
        margin: 65px 20px 55px 20px;
        }
        .logo-container {
            height: 100%;
            display: inline;
        }
        .navbar-logo {
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
    @media only screen and (max-width: 767px) {
        #navbar {
            .row {
                height: 46px;
                margin: 25px 15px 30px 0;
            }
        }
    }
</style>