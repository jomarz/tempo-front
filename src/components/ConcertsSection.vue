<template>
    <div class="content-section concerts-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <SectionNav :navTitle="navTitle" :menuItems="menuItems" section="events" />
            </div>
        </div>
        <div class="row calendar-row">
            <div class="col-12 col-md-9 col-lg-7 calendar">
                <Calendar :month="month" :year="year" :daysWithEvent="daysWithEvent" v-on:prev-month="prevMonth()" v-on:next-month="nextMonth()" />
            </div>
            <div class="col-12 col-md-3 col-lg-5 pr-0">
                <AdBox class="ad-small" :ad="ad" />
            </div>
        </div>
        <div class="row grid-row">
            <div class="col">
                <ContentGrid :contentType="contentType" :contentList="contentList" :contentFullList="contentFullList" />
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
          { text: 'Clásica', url: "#", filter: 'clásica' },
          { text: 'Ópera', url: "#", filter: 'ópera' },
          { text: 'Jazz', url: "#", filter: 'jazz' },
          { text: 'World Music', url: "#", filter: 'world music' }
        ];
        const contentType = "event";
        const month = ref(new Date().getMonth());
        const year = ref(new Date().getFullYear());
        const eventsAPI = new EventsApi();
        const eventsPerPage = 6;
        var contentUnfilteredFullList = ref([]);
        const getEvents = function(year, month)
        {
            eventsAPI.getMonthEvents(year, month, (data) => {
                // DEV only
                //contentUnfilteredFullList.value = [Lister.assignDateFields(data.data)[0],Lister.assignDateFields(data.data)[0],Lister.assignDateFields(data.data)[0],Lister.assignDateFields(data.data)[0]];
                // end DEV only
                // Uncomment next line when in prod
                contentUnfilteredFullList.value = Lister.assignDateFields(data.data);
                console.log(contentUnfilteredFullList.value);
                store.eventsCarousel.setNumPages(data.data.length);
                });
        }
        store.eventsCarousel.setElemsPerPage(eventsPerPage);
        getEvents(year.value, month.value+1);
    
        return { store, navTitle, menuItems, month, year, contentType, contentUnfilteredFullList, getEvents };
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
        contentFullList: function() {
            if(store.sectionFilter.events.applyFilter) {
                var filteredContent = this.contentUnfilteredFullList.filter( element => {
                    return element.musicGenre.includes(store.sectionFilter.events.filter);
                });
                return filteredContent;
            }
            return this.contentUnfilteredFullList;
        },
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
    @media only screen and (min-width: 768px) {
        .calendar {
            padding-left: 0;
        }
    }

</style>