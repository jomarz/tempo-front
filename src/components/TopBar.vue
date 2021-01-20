<template>
    <div  class="container-fluid" id="top-bar">
        <div class="row md-up">
            <div class="col-6 logo-container">
                <a class='top-bar-logo'></a>
            </div>
            <SearchBox class="col-6"/>
        </div>
        <div class="mobile-top">
            <div v-if="!store.showMobileSearchbox.state" class="mobile-topbar sm-only">
                <img src="../assets/img/tempo_logo.svg" alt="" class="mobile-logo">
                <div class="topbar-icons-mobile">
                    <img src="../assets/img/icons/Tempo-Search.svg" alt="" class="search-icon-mobile" @click="store.toggleMobileSearchbox()">
                    <img src="../assets/img/icons/menu_mobile.svg" alt="" class="menu-icon-mobile" @click="store.toggleMobileMenu()">
                </div>
            </div>
            <SearchBox v-if="store.showMobileSearchbox.state" class="mobile-searchbox" :focusOnInput="true" />
        </div>
    </div> 
</template>

<script>
import store from '../store/store.js';
import SearchBox from './SearchBox.vue'
export default {
    name: 'TopBar',
    components: {
        SearchBox
    },
    setup() {
        return { store };
    }
}
</script>

<style lang="scss" scoped>
    #top-bar {
        z-index: 10;
        background-color: white;
        .row {
        height: 76px;
        margin: 65px 20px 55px 20px;
        }
        .logo-container {
            height: 100%;
            display: inline;
        }
        .top-bar-logo {
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
    .mobile-topbar {
        margin: 20px 0;
        height : 35px;
        img.mobile-logo {
            height: 35px;
        }
        .topbar-icons-mobile {
            float: right;
            height: 100%;
        }
        .search-icon-mobile {
            height: 70%;
            color: #bcbec0;
            padding: 1px 9px 1px 2px;
            margin-top: 5px;
        }
        .menu-icon-mobile {
            height: 70%;
            color: #bcbec0;
            padding: 1px 9px 1px 2px;
            margin-top: 5px;
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