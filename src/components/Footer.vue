<template>
    <div class="footer">
        <div class="footer-content container">
            <div class="row">
                <div class="col-12 col-md-10 footer-main">
                    <footer-subscribe />
                    <footer-links />
                </div>
                <div class="col-12 col-md-2">

                </div>
            </div>
        </div>    
    </div>    
</template>

<script>
import FooterLinks from './FooterLinks.vue'
import FooterSubscribe from './FooterSubscribe.vue'
export default {
  components: { FooterSubscribe, FooterLinks },
    
}
</script>

<style lang="scss" scoped>
    .footer {
        .footer-content {
            max-width: 1140px;
            .footer-main {
                display: flex;
                flex-direction: column;
                margin-top: 30px;
            }
        }
    }
</style>