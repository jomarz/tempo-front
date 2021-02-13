<template>
    <div class="footer-subscribe">
        <h6 class="">SUSCRÍBASE A NUESTRO NEWSLETTER</h6>
        <div action="" class="footer-subscribe-form md-up">
            <div><input type="text" v-model="name" name="name" placeholder="Nombre"></div>
            <div><input type="text" v-model="email" name="email" placeholder="Correo"></div>
            <div><button @click="subscribeToNewsletter()">ENVIAR</button></div>
        </div>
        <subscribe-button class="sm-only" />
    </div>    
</template>

<script>
import SubscribeButton from './SubscribeButton.vue'
import SubscribeAPI from '../classes/SubscribeAPI';
export default {
    components: { SubscribeButton },
    methods: {
        subscribeToNewsletter()
        {
            const subscribeAPI = new SubscribeAPI();
            subscribeAPI.sendSubscriptionRequest(this.email, this.name, (response) => {console.log(response)} );
        }
    }
}
</script>

<style lang="scss" scoped>
    .footer-subscribe {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        h6 {
            letter-spacing: 0.05rem;
            font-weight: 400;
        }
        .footer-subscribe-form {
            display: flex;
            width: 100%;
            margin: 20px 0;
            justify-content: center;
            input, button {
                width: 166px;
                height: 22px;
                margin: 0 25px;
            }
            ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            text-align: center;
            }
            ::-moz-placeholder { /* Firefox 19+ */
            text-align: center;
            }
            :-ms-input-placeholder { /* IE 10+ */
            text-align: center;
            }
            :-moz-placeholder { /* Firefox 18- */
            text-align: center;
            }
        }
    }
  @media only screen and (max-width: 767px) {
      .footer-subscribe {
          .subscribe-button {
              margin-top: 15px;
          }
      }
  }
</style>