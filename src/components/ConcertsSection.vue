<template>
    <div class="concerts-section container-fluid">
        <div class="concerts-nav row">
            <div class="col-3 concerts-nav-title">
                <h3 class="section-nav-title">Conciertos</h3>
            </div>    
            <div class="col-9 concerts-nav-menu">
                <ul class="nav-menu concerts-menu">
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
    .concerts-section {
        margin: 40px 0 40px 0;
        padding: 15px 63px 15px 20px;
        background-color: #f3f3f4;
        .concerts-nav-menu {
            display: flex;
            align-items: center;
        }
        ul.concerts-menu {
            margin: 0;
            padding: 0;
            li {
                font-size: 0.95rem;
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
            }
        }
        .concerts-menu li{
            margin-left: 40px;
        }
    }
</style>