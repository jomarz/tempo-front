<template>
    <div class="footer-subscribe">
        <h6 class="">SUSCRÍBASE A NUESTRO NEWSLETTER</h6>
        <form action="" class="footer-subscribe-form">
            <input type="text" name="name" placeholder="Nombre">
            <input type="text" name="email" placeholder="Correo">
            <button type="submit">ENVIAR</button>
        </form>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .footer-subscribe {
        display: flex;
        flex-direction: column;
        align-items: center;
        .footer-subscribe-form {
            display: flex;
        }
    }
</style>