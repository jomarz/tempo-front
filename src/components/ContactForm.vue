<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                        <div class="close-row">
                            <img src="..\assets\img\icons\ExitIcon.svg" @click="store.toggleContactForm()" alt="">
                        </div>
                    <div class="contact-main">
                        <h2 class="contact-title">Contáctanos</h2>
                        <div class="contact-form">
                            <input type="text" v-model="name" name="name" placeholder="Nombre y apellido*">
                            <input type="text" v-model="email" name="email" placeholder="Correo electrónico*">
                            <label for="message" class="message-label">Mensaje*</label>
                            <textarea name="message" id="message" cols="30" rows="5"></textarea>
                            <button @click="sendContactForm()">ENVIAR</button>
                        </div>
                    </div>  
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
    .contact-main {
        width: 85%;
        input {
            display: block;
            width: 100%;
            margin: 15px 0;
            padding: 5px;
            height: 1.5rem;
            font-size: 0.7rem;
            border: 1px solid #d1d3d4;
            border-radius: 4px;

        }
        textarea {
            display: block;
            width: 100%;
            margin: 10px 0;
            padding: 5px;
            border: 1px solid #d1d3d4;
            border-radius: 4px;
            font-size: 0.7rem;
        }
        .contact-title {
            text-align: center;
            margin: 15px 0;
        }
        p { 
            text-align: center;
            font-weight: 400;
        }
        .contact-form {
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
            .message-label {
                font-size: 0.75rem;
                color: #278de2;
            }
            ::-webkit-input-placeholder { /* Edge */
                color: #278de2;
                font-size: 0.75rem;
            }

            :-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: #278de2;
                font-size: 0.7rem;
            }

            ::placeholder {
                color: #278de2;
                font-size: 0.75rem;
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