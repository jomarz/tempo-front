<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                        <div class="close-row">
                            <img src="..\assets\img\icons\ExitIcon.svg" @click="store.toggleSubscribe()" alt="">
                        </div>
                    <div class="subscribe-main">
                        <h2 class="subscribe-title">Suscríbete</h2>
                        <p>Recibe gratis nuestro boletin de las ultimas noticias del mundo de la musica.</p>
                        <div class="subscribe-form">
                            <input type="text" v-model="name" name="name" placeholder="Nombre">
                            <input type="text" v-model="email" name="email" placeholder="Correo electrónico">
                            <button @click="subscribeToNewsletter()">ENVIAR</button>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import store from '../store/store.js';
    import SubscribeAPI from '../classes/SubscribeAPI';
export default {
    setup() {
        return { store };
    },
    methods: {
        subscribeToNewsletter()
        {
            const subscribeAPI = new SubscribeAPI();
            subscribeAPI.sendSubscriptionRequest(this.email, this.name, () => store.toggleSubscribe() );
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
    width: 374px;
    //height: 100%;
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
    .subscribe-main {
        width: 85%;
        input {
            display: block;
            width: 100%;
            margin: 15px 0;
            padding: 5px;
            height: 1.5rem;
            font-size: 1rem;
            border: 1px solid #d1d3d4;
            border-radius: 4px;

        }
        .subscribe-title {
            text-align: center;
            margin: 15px 0;
        }
        p { 
            text-align: center;
            font-weight: 400;
        }
        .subscribe-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            button {
                width: 190px;
                margin: 20px 0 10px;
                padding: 7px 5px 5px;
                font-size: 0.8rem;
                font-weight: 400;
            }
            input {
                text-align: center;
            }
            ::-webkit-input-placeholder { /* Edge */
                color: #278de2;
                font-size: 0.5rem;
            }

            :-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: #278de2;
                font-size: 0.5rem;
            }

            ::placeholder {
                color: #278de2;
                font-size: 0.8rem;
            }
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