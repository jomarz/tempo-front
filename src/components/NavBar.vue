<template>
    <div class="nav-bar">
        <ul class="navbar-menu nav-menu">
            <li class="navbar-menu-item"><a href="#top" class='navbar-menu-link' data-text='INICIO'>INICIO</a></li>
            <li class="navbar-menu-item"><a href="#concerts" class='navbar-menu-link' data-text='CONCIERTOS'>CONCIERTOS</a></li>
            <li class="navbar-menu-item"><a href="#videos" class='navbar-menu-link' data-text='VIDEOS TEMPO'>VIDEOS TEMPO</a></li>
            <li class="navbar-menu-item"><a href="#articles" class='navbar-menu-link' data-text='ARTÍCULOS/NOTICIAS'>ARTÍCULOS/NOTICIAS</a></li>
            <li class="navbar-menu-item"><a href="#albums-section" class='navbar-menu-link' data-text='NOVEDADES DISCOGRÁFICAS'>NOVEDADES DISCOGRÁFICAS</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .nav-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #d1d3d4;
        width: 100%;
    }
    ul.navbar-menu {
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0;
        padding: 0 20px 0 20px;
    }

    .navbar-menu li {
        text-decoration: none;
        display: inline;
        font-size: 0.9rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    .navbar-menu li:not(:first-child) {
        margin-left: 48px;
    }

</style>