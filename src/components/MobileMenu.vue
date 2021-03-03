<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
            <div class="modal-container">
                    <div class="close-row">
                        <img src="..\assets\img\icons\ExitIcon.svg" @click="store.toggleMobileMenu()" alt="">
                    </div>
                    <div class="mobile-menu-main">
                        <img src="../assets/img/tempo_logo.svg" alt="" class="mobile-menu-logo">
                        <a href="#" class="mobile-menu-link" @click="store.toggleMobileMenu()">Inicio</a>
                        <a href="#concerts" class="mobile-menu-link" @click="store.toggleMobileMenu()">Conciertos</a>
                        <a href="#videos" class="mobile-menu-link" @click="store.toggleMobileMenu()">Videos Tempo</a>
                        <a href="#articles" class="mobile-menu-link" @click="store.toggleMobileMenu()">Artículos/Noticias</a>
                        <a href="#albums" class="mobile-menu-link" @click="store.toggleMobileMenu()">Novedades discográficas</a>
                    </div>  
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import store from '../store/store.js';
export default {
    setup() {
        return { store };
    }
}
</script>

<style lang="scss" scoped>
    .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
    }

    .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    }

    .modal-container {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px auto;
    padding: 7px 20px 20px;
    background-color: #fff;
    border-radius: 0px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    }
    .mobile-menu-main {
        width: 85%;
        height: 85%;
        display: flex;
        flex: 0 1 auto;
        flex-direction: column;
        justify-content: space-evenly;
        align-content: center;
        .mobile-menu-logo {
            height: 70px;
        }
        a.mobile-menu-link {
            text-align: center;
            font-size: 1.2rem;
            color: black;
        }
    }
    .close-row {
        width: 100%;
        img {
            height: 15px;
            float: right;
            margin-top: 10px;
            cursor: pointer;
        }
    }
</style>