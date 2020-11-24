<template>
    <div class="nav-bar">
        <ul class="navbar-menu">
            <li class="vavbar-menu-item"><a href="#" class='navbar-menu-link' data-text='INICIO'>INICIO</a></li>
            <li class="vavbar-menu-item"><a href="#" class='navbar-menu-link' data-text='CONCIERTOS'>CONCIERTOS</a></li>
            <li class="vavbar-menu-item"><a href="#" class='navbar-menu-link' data-text='VIDEOS TEMPO'>VIDEOS TEMPO</a></li>
            <li class="vavbar-menu-item"><a href="#" class='navbar-menu-link' data-text='ARTÍCULOS/NOTICIAS'>ARTÍCULOS/NOTICIAS</a></li>
            <li class="vavbar-menu-item"><a href="#" class='navbar-menu-link' data-text='NOVEDADES DISCOGRÁFICAS'>NOVEDADES DISCOGRÁFICAS</a></li>
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
        margin: 0;
        padding: 0 20px 0 20px;
    }
    .navbar-menu li {
        text-decoration: none;
        display: inline;
        font-size: 0.9rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        a {
            text-decoration: none;
            color: black;
            display: inline-flex;
            flex-direction: column;
        }
        a:hover {
            font-weight: 700;
        }        
        .navbar-menu-link::after {
            content: attr(data-text);
            content: attr(data-text) / "";
            height: 0;
            visibility: hidden;
            overflow: hidden;
            user-select: none;
            pointer-events: none;
            font-weight: 700;

            @media speech {
                display: none;
            }
        }
    }
    .navbar-menu li:not(:first-child) {
        margin-left: 48px;
    }

</style>