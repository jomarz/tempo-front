<template>
    <div class="content-section concerts-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <SectionNav :navTitle="navTitle" :menuItems="menuItems" class="md-up"/>
            </div>
        </div>
        <div class="row calendar-row">
            <div class="col-md-9 col-lg-7 pl-0">
                <Calendar :month="month" :year="year" :daysWithEvent="daysWithEvent" v-on:prev-month="prevMonth()" v-on:next-month="nextMonth()" />
            </div>
            <div class="col-md-3 col-lg-5 pr-0">
                <AdBox class="ad-small" :ad="ad" />
            </div>
        </div>
        <div class="row grid-row">
            <div class="col">
                <ContentGrid :contentType="contentType" :contentList="contentList" />
            </div>
            <div class="grid-nav-column carousel-nav md-up">
                <a href="" @click.prevent="store.eventsCarousel.moveUp()"><img src="..\assets\img\icons\Arrows\YellowArrows_top.svg" alt="up"></a>
                <a href="" @click.prevent="store.eventsCarousel.moveDown()"><img src="..\assets\img\icons\Arrows\YellowArrows_down.svg" alt="down"></a>
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
import { ref } from 'vue'
import store from '../store/store'
import EventsApi from '../classes/EventsApi'
import Lister from '../classes/Lister'
import AdBox from './AdBox.vue'
import ContentGrid from './ContentGrid.vue'
import Calendar from './Calendar.vue'
import ReceiveCTA from './ReceiveCTA.vue'
import SectionNav from './SectionNav.vue'
export default {
    components: { Calendar, AdBox, ContentGrid, ReceiveCTA, SectionNav },
    props: { ad: {required: true } },
    setup() {
        const navTitle = "Conciertos";
        const menuItems = [
          { text: 'Clásica', url: "#" },
          { text: 'Ópera', url: "#" },
          { text: 'Jazz', url: "#" },
          { text: 'World Music', url: "#" }
        ];
        const contentType = "event";
        /* const contentList = [
            { id: '1', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", day: "3", month: "DE JULIO, 2020", location: "Teatro Mayor, Bogotá", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/aab1/300/300", datetime: '2021-01-03 20:00:00', music_genre: 'jazz'},
            { id: '2', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", day: "5", month: "DE JULIO, 2020", location: "Teatro Mayor, Bogotá", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/aab2/300/300", datetime: '2021-01-05 20:00:00', music_genre: 'clásica' },
            { id: '3', title: "Teatro Mariinsky", subtitle:"Imodipic iissimus", day: "8", month: "DE JULIO, 2020", location: "Teatro Mayor, Bogotá", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/ab3/300/300", datetime: '2021-01-08 20:00:00', music_genre: 'clásica' },
            { id: '4', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", day: "10", month: "DE JULIO, 2020", location: "Teatro Mayor, Bogotá", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/ab4/300/300", datetime: '2021-01-10 20:00:00', music_genre: 'ópera' },
            { id: '5', title: "Olivier Messiaen", subtitle:"Imodipic iissimus", day: "15", month: "DE JULIO, 2020", location: "Teatro Mayor, Bogotá", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/ab5/300/300", datetime: '2021-01-15 20:00:00', music_genre: 'world music' },
            { id: '6', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", day: "19", month: "DE JULIO, 2020", location: "Teatro Mayor, Bogotá", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/aa6/300/300", datetime: '2021-01-19 20:00:00', music_genre: 'clásica' },
            { id: '7', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", day: "20", month: "DE JULIO, 2020", location: "Teatro Mayor, Bogotá", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/ab7/300/300", datetime: '2021-01-20 20:00:00', music_genre: 'jazz' },
            { id: '8', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", day: "27", month: "DE JULIO, 2020", location: "Teatro Mayor, Bogotá", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/ab8/300/300", datetime: '2021-01-27 20:00:00', music_genre: 'clásica' },
            { id: '9', title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", day: "31", month: "DE JULIO, 2020", location: "Teatro Mayor, Bogotá", description: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi", imgUrl:"https://picsum.photos/seed/ab9/300/300", datetime: '2021-01-31 20:00:00', music_genre: 'ópera' },
        ]; */
        const month = ref(new Date().getMonth());
        const year = ref(new Date().getFullYear());
        const eventsAPI = new EventsApi();
        const eventsPerPage = 6;
        const getEvents = function(year, month)
        {
            eventsAPI.getMonthEvents(year, month, (data) => { 
                contentFullList.value = Lister.assignDay(data.data);
                store.eventsCarousel.setNumPages(data.data.length);
                });
        }
        var contentFullList = ref([]);
        store.eventsCarousel.setElemsPerPage(eventsPerPage);
        getEvents(year.value, month.value+1);
    
        return { store, navTitle, menuItems, month, year, contentType, contentFullList, getEvents };
    },
    methods: {
        prevMonth() {
            const oldMonth = this.month;
            this.month = new Date(this.year, this.month-1).getMonth();
            this.year = new Date(this.year, oldMonth-1).getFullYear();
            this.getEvents(this.year, this.month+1);
        },
        nextMonth() {
            const oldMonth = this.month;
            this.month = new Date(this.year, this.month+1).getMonth();
            this.year = new Date(this.year, oldMonth+1).getFullYear();
            this.getEvents(this.year, this.month+1);
        }
    },
    computed: {
        daysWithEvent() { 
            if(this.contentFullList.length>0) {
                return this.contentFullList.map((event) => { return parseInt(event.datetime.match(/[0-9]{4}-[0-9]{2}-([0-9]{2})/)[1])});
            } else {
                return [];
            }
        },
        contentList() {
            return store.eventsCarousel.getCurrentPageList(this.contentFullList);
        }
    }
    
}
</script>

<style lang="scss" scoped>
    
        .grid-nav-column {
            width: 19px;
            padding: 0 1px 0;
        }

</style>