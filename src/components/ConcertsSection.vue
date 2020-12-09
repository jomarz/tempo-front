<template>
    <div class="concerts-section container-fluid">
        <div class="section-nav row">
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
        <div class="row calendar-row">
            <div class="col-md-9 col-lg-7 pl-0">
                <Calendar />
            </div>
            <div class="col-md-3 col-lg-5 pr-0">
                <AdBox class="ad-small" />
            </div>
        </div>
        <div class="row grid-row">
            <div class="col">
                <ArticleGrid />
            </div>
        </div>
        <div class="receive-cta-row">
            <div class="col">
                <ReceiveCTA />
            </div>
        </div>
    </div>    
</template>

<script>
import AdBox from './AdBox.vue'
import ArticleGrid from './ArticleGrid.vue'
import Calendar from './Calendar.vue'
import ReceiveCTA from './ReceiveCTA.vue'
export default {
  components: { Calendar, AdBox, ArticleGrid, ReceiveCTA },
    
}
</script>

<style lang="scss" scoped>
    .concerts-section {
        margin: 40px 0 40px 0;
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
        .calendar-row {
            padding: 40px 0 04px 0;
        }
    }
</style>