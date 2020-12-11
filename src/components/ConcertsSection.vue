<template>
    <div class="concerts-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <SectionNav :menuItems="menuItems"/>
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
                <ArticleGrid />
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
import ArticleGrid from './ArticleGrid.vue'
import Calendar from './Calendar.vue'
import ReceiveCTA from './ReceiveCTA.vue'
import SectionNav from './SectionNav.vue'
export default {
  components: { Calendar, AdBox, ArticleGrid, ReceiveCTA, SectionNav },
  setup() {
      const menuItems = [
          { text: 'Clásica', url: "#" },
          { text: 'Ópera', url: "#" },
          { text: 'Jazz', url: "#" },
          { text: 'World Music', url: "#" }
        ];
      return { menuItems };
  }
    
}
</script>

<style lang="scss" scoped>
    .concerts-section {
        margin: 40px 0 40px 0;
        .calendar-row {
            padding: 40px 0 04px 0;
        }
    }
</style>