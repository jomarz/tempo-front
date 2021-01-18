<template>
    <div class="mobile-featured">
            <div class="featured-image-box">
                <img :src="featuredInfo.imgUrl" alt="" class="featured-image">
            </div>  
    </div>
</template>

<script>
import { ref } from 'vue'
import Lister from '../classes/Lister';
import FeaturedAPI from '../classes/FeaturedAPI'
import FeaturedInfo from './FeaturedInfo.vue'
export default {
    components: { FeaturedInfo },
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

</style>