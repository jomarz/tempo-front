<template>
    <div class="container-fluid section-nav">
        <div class="row">
            <div class="col-2 section-title-container">
                <h3 class="section-nav-title">Conciertos</h3>
            </div>
            <div class="col-10 section-nav-menu">
                <ul class="nav-menu section-menu">
                    <li class="navbar-menu-item"><a href="#" class='navbar-menu-link' data-text='Clásica'>Clásica</a></li>
                    <li class="navbar-menu-item"><a href="#" class='navbar-menu-link' data-text='Ópera'>Ópera</a></li>
                    <li class="navbar-menu-item"><a href="#" class='navbar-menu-link' data-text='Jazz'>Jazz</a></li>
                    <li class="navbar-menu-item"><a href="#" class='navbar-menu-link' data-text='World Music'>World Music</a></li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    
        .section-nav {
            padding: 10px 63px 10px 20px;
            background-color: #f3f3f4;
        }
        .section-nav-menu {
            display: flex;
            align-items: center;
            padding: 10px 0 10px 0;
        }
        ul.section-menu {
            margin: 0;
            li {
                font-size: 0.95rem;
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                line-height: 1.3rem;
            }
        }
        .section-menu li{
            margin-left: 40px;
        }
</style>