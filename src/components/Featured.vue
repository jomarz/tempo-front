<template>
    <div class="featured-section container-fluid md-up">
        <div class="row featured-top">
            <div class="col-4 featured-top-left"></div>
            <div class="col-8 featured-top-right"></div>
        </div>    
        <div class="row featured-content">
            <div class="col-4 featured-info-box">
                <featured-info v-if="showInfo" :featuredType="featuredType" :featuredInfo="featuredInfo"/>
            </div>
            <div class="col-8 featured-image-box">
                <img v-if="showInfo" :src="featuredInfo.imgUrl" alt="" class="featured-image">
            </div>    
        </div>
        <div class="row featured-bottom">
            <div class="col-4 featured-bottom-left"></div>
            <div class="col-8 featured-bottom-right"></div>
        </div>
    </div>
    <mobile-featured class="sm-only"/>
</template>

<script>
import { ref } from 'vue'
import Lister from '../classes/Lister';
import FeaturedAPI from '../classes/FeaturedAPI'
import FeaturedInfo from './FeaturedInfo.vue'
import MobileFeatured from './MobileFeatured.vue';
export default {
    components: { FeaturedInfo, MobileFeatured },
    setup () {
        var featuredType = ref('event');
        const featuredAPI = new FeaturedAPI();
        var featuredInfo = ref([]);
        var showInfo = ref(false);
        featuredAPI.getFeaturedInfo('', (data) => {
            if (data.data[0].post_type === 'event') {
                featuredInfo.value = Lister.assignDateFields(data.data)[0]; 
                showInfo.value = true;
            } else if (data.data[0].post_type === 'article') {
                featuredInfo.value = data.data[0];
                featuredType.value = 'article'
                showInfo.value = true;
            }   
        } );
        return { featuredType, featuredInfo, showInfo }
    }
}
</script>

<style lang="scss" scoped>
    .featured-section {
        margin: 40px 0 40px 0;
        .featured-top, .featured-bottom {
            height: 23px;
        }
        .featured-content {
            height: 480px;
        }
        .featured-top-left, .featured-bottom-left {
            background-color: #27648f;
        }
        .featured-top-right, .featured-bottom-right {
            background-color: white;
        }
        .featured-info-box {
            display: flex;
            justify-content: center;
            background-color: #0d273b
        }
        .featured-image-box {
            height: 100%;
            background-color: #59686f;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        img.featured-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1199px) {
        .featured-section {
            .featured-info-box {
                padding: 0;
            }
        }
    }
</style>