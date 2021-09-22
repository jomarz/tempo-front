<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                <div class="close-row">
                    <img src="..\assets\img\icons\ExitIcon.svg" @click="store.toggleInfograph()" alt="">
                </div>
                    <img class="infograph-url" :src="store.infographUrl.url" alt=""> 
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import store from '../store/store.js';
    import ContactAPI from '../classes/ContactAPI';
export default {
    setup() {
        return { store };
    },
    methods: {
        sendContactForm()
        {
            const contactAPI = new ContactAPI();
            contactAPI.sendContactForm(this.email, this.name, () => store.toggleContactForm() );
        }
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
    width: 85%;
    max-width: 860px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px auto;
    padding: 7px 10px 20px;
    background-color: #fff;
    border-radius: 0px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    img.infograph-url {
        width: 100%;
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