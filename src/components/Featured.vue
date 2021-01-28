<template>
    <div class="featured-section container-fluid md-up">
        <div class="row featured-top">
            <div class="col-4 featured-top-left"></div>
            <div class="col-8 featured-top-right"></div>
        </div>    
        <div class="row featured-content">
            <div class="col-4 featured-info-box">
                <featured-info :featuredType="featuredType" :featuredInfo="featuredInfo"/>
            </div>
            <div class="col-8 featured-image-box">
                <img :src="featuredInfo.imgUrl" alt="" class="featured-image">
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
        const featuredType = 'event';
        /* const featuredInfo = {
            id: 1,
            title: 'Concierto Inagural',
            name: 'Ian Bostridge',
            day: 18,
            month: 'JULIO, 2020',
            location: 'Teatro Mayor, Bogota',
            imgUrl: 'https://picsum.photos/id/304/1000/600'           
        }; */
        const featuredAPI = new FeaturedAPI();
        var featuredInfo = ref([]);
        featuredAPI.getFeaturedInfo('', (data) => { featuredInfo.value = Lister.assignDateFields(data.data)[0];} );
        return { featuredType, featuredInfo }
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
</style>