<template>
    <div class="footer">
        <div class="footer-content container">
            <div class="row">
                <div class="col-12 col-md-10 footer-content-col">
                    <div class="footer-main">
                        <footer-subscribe />
                        <footer-links />
                        <div class="footer-separator"></div>
                    </div>
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
            .footer-content-col {
                display: flex;
                justify-content: center;
                .footer-main {
                    display: flex;
                    flex-direction: column;
                    margin-top: 30px;
                    width: 650px;
                    .footer-separator {
                        width: 100%;
                        border-top: 1px solid #d1d3d4;
                    }
                }
            }
        }
    }
</style>