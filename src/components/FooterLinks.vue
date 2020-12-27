<template>
    <div class="footer-links">
        <a href="#" data-text='Contacto'>Contacto</a>
        <span class="footer-link-separator"></span>
        <a href="#" data-text='Términos y Condiciones'>Términos y Condiciones</a>
        <span class="footer-link-separator"></span>
        <a href="#" data-text='Política de Privacidad'>Política de Privacidad</a>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .footer-links {
        margin: 30px 0 20px;
        display: flex;
        justify-content: center;
        width: 100%;
        a {
            color: black;
            font-size: 0.65rem;
            margin: 0 15px;
        }
        a:hover {
            font-weight: 700;
        }
        .footer-link-separator {
            display: inline-block;
            height: 0.75rem;
            border-left: 1px solid black;
        }
    }
</style>