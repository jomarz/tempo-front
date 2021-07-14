<template>
    <div v-if="showInfo" class="mobile-featured">
            <div class="featured-image-mobile">
                <img :src="featuredInfo.imgUrl" alt="">
            </div>
            <div class="featured-content-mobile">
                <template v-if="featuredType==='event'">
                    <div class="mobile-featured-left-info">
                        <div class="mobile-featured-title">{{featuredInfo.title}}</div>
                        <count-down class="mobile-countdown" :datetime="featuredInfo.datetime" ></count-down>
                    </div>
                    <div class="mobile-featured-info">
                        <h1>{{featuredType}}</h1>
                        <feat-info-event-box :featuredInfo="featuredInfo" class="home-main"/>
                    </div>
                </template>
                <template v-else-if="featuredType==='article'">
                    <div class="article-mobile-featured-info">
                        <div class="left-article-mobile-info"></div>
                            <h1 class="mobile-featured-title">{{featuredInfo.title}}</h1>
                        <div class="right-article-mobile-info">
                            <feat-info-article-box :featuredInfo="featuredInfo" /> 
                        </div>
                    </div>
                </template>

            </div> 
    </div>
</template>

<script>
import { ref } from 'vue'
import Lister from '../classes/Lister';
import FeaturedAPI from '../classes/FeaturedAPI'
import FeatInfoEventBox from './FeatInfoEventBox.vue';
import CountDown from './CountDown.vue';
import FeatInfoArticleBox from './FeatInfoArticleBox.vue';
export default {
    components: {FeatInfoEventBox, CountDown, FeatInfoArticleBox  },
    setup () {
        var featuredType = ref('');
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
            });
        return { featuredType, featuredInfo, showInfo }
    }
}
</script>

<style lang="scss" scoped>
    .mobile-featured {
        overflow: hidden;
        margin: 10px 15px 20px;
        .featured-content-mobile {
            display: flex;
            justify-content: space-evenly;    
            align-items: center;
            //height: 170px;
            margin-top: 4px;
            padding: 0px 10px 10px;
            background-color: #27648f;
        }
        .mobile-featured-title {
            font-size: 1.2rem !important;
            font-family: 'Playfair display';
            color: white;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .mobile-featured-left-info {
            max-width: 50%;
            padding: 0;
        }
        .mobile-featured-info {
            max-width: 50%;
            padding: 10px 10px;
        }
        .featured-image-mobile {
            overflow: hidden;
        }
        .featured-image-mobile img{
            height: 250px;
            width: 100%;
            object-fit: cover;
            overflow: hidden;
        }
        .article-mobile-featured-info {
            display: flex;
            padding: 10px;
        }
        .right  -article-mobile-info {
            padding: 10px 0 0 5px;
        }
    }
</style>