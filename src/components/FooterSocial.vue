<template>
    <div class="footer-social">
        <a href="#"><img src="..\assets\img\icons\Facebook.svg" alt="facebook"></a>
        <a href="#"><img src="..\assets\img\icons\Instagram.svg" alt="instagram"></a>
        <a href="#"><img src="..\assets\img\icons\Twitter.svg" alt="twitter"></a>
        <a href="#"><img src="..\assets\img\icons\Youtube.svg" alt="youtube"></a>
        <a href="#"><img src="..\assets\img\icons\Spotify.svg" alt="spotify"></a>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .footer-social {
        display: flex;
        width: 128px;
        justify-content: space-between;
        img {
            width: 15px;
            height: 15px;
            object-fit: contain;
        }
    }
</style>