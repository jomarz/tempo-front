<template>
    <div class="content-section concerts-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <SectionNav :navTitle="navTitle" :menuItems="menuItems"/>
            </div>
        </div>
        <div class="row calendar-row">
            <div class="col-md-9 col-lg-7 pl-0">
                <Calendar />
            </div>
            <div class="col-md-3 col-lg-5 pr-0">
                <AdBox class="ad-small" />
            </div>
        </div>
        <div class="row grid-row">
            <div class="col">
                <ContentGrid :contentType="contentType" :contentList="contentList" />
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
import AdBox from './AdBox.vue'
import ContentGrid from './ContentGrid.vue'
import Calendar from './Calendar.vue'
import ReceiveCTA from './ReceiveCTA.vue'
import SectionNav from './SectionNav.vue'
export default {
  components: { Calendar, AdBox, ContentGrid, ReceiveCTA, SectionNav },
  setup() {
        const navTitle = "Conciertos";
        const menuItems = [
          { text: 'Clásica', url: "#" },
          { text: 'Ópera', url: "#" },
          { text: 'Jazz', url: "#" },
          { text: 'World Music', url: "#" }
        ];
        const contentType = "event";
        const contentList = [
            { id: 1, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 2, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 3, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 4, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 5, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 6, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 7, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
            { id: 8, title: "Nicolas Altstaedt", subtitle:"Imodipic iissimus", text: "Imodipic iissimus. Uptatem invente comnihilita soluptas eaque nus praesci Core audignate nes iditiunt quodi" },
        ];
      return { navTitle, menuItems, contentType, contentList };
  }
    
}
</script>

<style lang="scss" scoped>

</style>