<template>
    <div class="footer">
        <div class="footer-content container">
            <div class="row">
                <div class="col-12 col-md-10 footer-main">
                    <footer-subscribe />
                </div>
                <div class="col-12 col-md-2">

                </div>
            </div>
        </div>    
    </div>    
</template>

<script>
import FooterSubscribe from './FooterSubscribe.vue'
export default {
  components: { FooterSubscribe },
    
}
</script>

<style lang="scss" scoped>
    .footer {
        .footer-main {
            display: flex;
            justify-content: center;
            margin-top: 30px;
        }
    }
</style>