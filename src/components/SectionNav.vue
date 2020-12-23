<template>
    <div class="container-fluid section-nav">
        <div class="row">
            <div class="col-2 section-title-container">
                <h3 class="section-nav-title">{{navTitle}}</h3>
            </div>
            <div class="col-10 section-nav-menu">
                <ul class="nav-menu section-menu">
                    <li class="navbar-menu-item" v-for="menuItem in menuItems" :key="menuItem"><a :href="menuItem.url" class='navbar-menu-link' :data-text="menuItem.text">{{menuItem.text}}</a></li>
                </ul>
            </div>
        </div>
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