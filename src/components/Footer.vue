<template>
    <div class="footer">
        <div class="footer-content container">
            <div class="row">
                <div class="col-12 col-lg-10 footer-content-col">
                    <div class="footer-main">
                        <footer-subscribe/>
                        <div class="mobile-footer-logo-social md-down">
                            <img src="../assets/img/tempo_logo.svg" alt="" class="footer-logo only-sm">
                            <footer-social class=""/>
                        </div>
                        <footer-links />
                        <div class="footer-separator"></div>
                        <footer-copyright />
                    </div>
                </div>
                <div class="col-12 col-lg-2 footer-right lg-up">
                    <img src="../assets/img/tempo_logo.svg" alt="" class="footer-logo">
                    <footer-social />
                </div>
            </div>
        </div>    
    </div>    
</template>

<script>
import FooterCopyright from './FooterCopyright.vue'
import FooterLinks from './FooterLinks.vue'
import FooterSocial from './FooterSocial.vue'
import FooterSubscribe from './FooterSubscribe.vue'
export default {
  components: { FooterSubscribe, FooterLinks, FooterCopyright, FooterSocial },
    
}
</script>

<style lang="scss" scoped>
    .footer {
        padding: 40px 0 20px;
        .footer-content {
            max-width: 1140px;
            .footer-content-col {
                display: flex;
                justify-content: center;
                .footer-main {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    max-width: 650px;
                    .footer-separator {
                        width: 100%;
                        border-top: 1px solid #d1d3d4;
                    }
                    .footer-copyright {
                        align-self: center;
                        margin-top: 8px;
                    }
                    .mobile-footer-logo-social {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin: 20px 0 0;
                    }
                }
            }
            .footer-right {
                padding-right: 20px;
            }
        }
        .footer-logo {
            width: 128px;
            height: 50px;
            object-fit: contain;
        }
        .footer-social {
            margin-top: 7px;
        }
    }
    @media only screen and (max-width: 767px) {
        .footer {
            padding: 30px 0 20px;
        }
    }
    
</style>