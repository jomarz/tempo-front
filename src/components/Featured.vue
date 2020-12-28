<template>
    <div class="featured-section container-fluid">
        <div class="row featured-top">
            <div class="col-4 featured-top-left"></div>
            <div class="col-8 featured-top-right"></div>
        </div>    
        <div class="row featured-content">
            <div class="col-4 featured-info-box">
                <featured-info :featuredType="featuredType" :featuredInfo="featuredInfo"/>
            </div>
            <div class="col-8 featured-image-box">
                <img src="https://picsum.photos/id/304/1000/600" alt="" class="featured-image">
            </div>    
        </div>
        <div class="row featured-bottom">
            <div class="col-4 featured-bottom-left"></div>
            <div class="col-8 featured-bottom-right"></div>
        </div>
    </div>    
</template>

<script>
import FeaturedInfo from './FeaturedInfo.vue'
export default {
    components: { FeaturedInfo },
    setup () {
        const featuredType = 'event';
        const featuredInfo = {
            id: 1,
            title: 'Concierto Inagural',
            name: 'Ian Bostridge',
            day: 18,
            month: 'JULIO, 2020',
            location: 'Teatro Mayor, Bogota',
            imgUrl: ''           
        };
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