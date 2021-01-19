<template>
    <div class="section-nav">
        <h3 class="section-nav-title">{{navTitle}}</h3>
        <div class="section-nav-separator">
            <div class="sep-left"></div>
            <div class="sep-right"></div>
        </div>
        <div class="section-nav-menu">
            <ul class="nav-menu section-menu">
                <li class="navbar-menu-item" v-for="menuItem in menuItems" :key="menuItem"><a :href="menuItem.url" class='navbar-menu-link' :data-text="menuItem.text">{{menuItem.text}}</a></li>
            </ul>
        </div>
        <!-- <div class="row">
            <div class="col-2 section-title-container">
                <h3 class="section-nav-title">{{navTitle}}</h3>
            </div>
            <div class="col-10 section-nav-menu">
                <ul class="nav-menu section-menu">
                    <li class="navbar-menu-item" v-for="menuItem in menuItems" :key="menuItem"><a :href="menuItem.url" class='navbar-menu-link' :data-text="menuItem.text">{{menuItem.text}}</a></li>
                </ul>
            </div>
        </div> -->
    </div>
    
</template>

<script>
export default {
    props: {
        navTitle: {
            required: true,
            type: String
        },
        menuItems: {
            type: Array
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .section-nav {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 15px 20px 15px 20px;
        background-color: #f3f3f4;
        .section-nav-title {
            display: inline;
        }
        .section-nav-separator {
            display: inline-flex;
            align-items: center;
        }
        ul.section-menu {
            margin: 0;
            padding-left: 0px;
            li {
                font-size: 0.95rem;
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                line-height: 1.3rem;
            }
        }
        .section-menu li:not(:first-child){
            margin-left: 40px;
        }
        .section-nav-separator>div{
            /* display: inline-block; */
            width: 63px;
            height: 100%;
        }
        .section-nav-separator {
            height: 1.5rem;
            .sep-left {
                border-right: 1px solid black;
            }
        }
    }
    @media only screen and (max-width: 767px) {
        .section-nav {
            padding: 15px 5px 15px 15px;
            .section-nav-title {
                font-size: 0.9rem !important;
                font-family: "Playfair display";
                font-weight: 700;
            }
            ul.section-menu {
                margin: 0;
                padding-left: 0px;
                li {
                    font-size: 0.8rem;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 400;
                    line-height: 0.9rem;
                }
            }
            .section-menu li:not(:first-child){
                margin-left: 10px;
            }
            .section-nav-separator>div{
                /* display: inline-block; */
                width: 10px;
                height: 100%;
            }
            .section-nav-separator {
                height: 1.1rem;
                .sep-left {
                    border-right: 1px solid black;
                }
            }
        }
    }
</style>