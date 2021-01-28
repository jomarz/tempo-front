<template>
    <div class="footer-subscribe">
        <h6 class="">SUSCRÍBASE A NUESTRO NEWSLETTER</h6>
        <form action="" class="footer-subscribe-form md-up">
            <div><input type="text" name="name" placeholder="Nombre"></div>
            <div><input type="text" name="email" placeholder="Correo"></div>
            <div><button type="submit">ENVIAR</button></div>
        </form>
        <subscribe-button class="sm-only" />
    </div>    
</template>

<script>
import SubscribeButton from './SubscribeButton.vue'
export default {
  components: { SubscribeButton },
    
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