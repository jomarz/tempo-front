<template>
    <div class="mobile-featured">
            <div class="featured-image-mobile">
                <img :src="featuredInfo.imgUrl" alt="">
            </div>
            <div class="featured-content-mobile">
                <div class="mobile-featured-title">{{featuredInfo.title}}</div>
                <feat-info-event-box v-if="featuredType==='event'" :featuredInfo="featuredInfo" class="home-main"/>
                <div v-else-if="featuredType==='article'" class="home-main" >
                </div>
            </div> 
    </div>
</template>

<script>
import { ref } from 'vue'
import Lister from '../classes/Lister';
import FeaturedAPI from '../classes/FeaturedAPI'
import FeatInfoEventBox from './FeatInfoEventBox.vue';
export default {
    components: {FeatInfoEventBox  },
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
    .mobile-featured {
        overflow: hidden;
        margin: 10px 15px 20px;
        .mobile-featured-title {
            font-size: 1.2rem !important;
            font-family: 'Playfair display';
            color: white;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .featured-image-mobile {
            overflow: hidden;
        }
        .featured-image-mobile img{
            height: 300px;
            width: 100%;
            object-fit: cover;
            overflow: hidden;
        }
        .featured-content-mobile {
            height: 200px;
            margin-top: 4px;
            background-color: #27648f;
        }
    }
</style>