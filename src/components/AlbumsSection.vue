<template>
    <div class="content-section albums-section container-fluid">
        <div class="row section-nav-row">
            <div class="col pl-0 pr-0">
                <section-nav-no-menu navTitle="Novedades Discográficas" />
            </div>
        </div>
        <div class="row grid-row">
            <div class="col-12 col-md-9 albums">
                <albums-grid :albumList="albumList"/>
                <AlbumsCTA />
            </div>
            <div class="col-12 col-md-3">
                <printed-vertical :printedList="printedList" />
            </div>
        </div>
    </div>    
</template>

<script>
import store from '../store/store.js';
import AlbumsCTA from './AlbumsCTA.vue';
import AlbumsGrid from './AlbumsGrid.vue'
import PrintedVertical from './PrintedVertical.vue';
import SectionNavNoMenu from './SectionNavNoMenu.vue';
export default {
  components: { AlbumsGrid, SectionNavNoMenu, PrintedVertical, AlbumsCTA },
  setup() {
      const albumList = [
          { id: '1', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab1/300/300" },
          { id: '2', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab2/300/300" },
          { id: '3', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab3/300/300" },
          { id: '4', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab4/300/300" },
          { id: '5', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab5/300/300" },
          { id: '6', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab6/300/300" },
          { id: '7', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab7/300/300" },
          { id: '8', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab8/300/300" },
      ];
        const printedFullList = [
            { id: 1, title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgabc1/200/300" }, 
            { id: 2, title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgacc2/200/301" },
            { id: 3, title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgabc3/200/300" }, 
            { id: 4, title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgacc4/200/301" },
            { id: 5, title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgabc5/200/300" }, 
            { id: 6, title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgacc6/200/301" },
            { id: 7, title: "Imodipic iissimus", description: "Bea cullendicid eiur sed qui beatectur, occum andesequi omnihicienes del is dis. Bea cullendicid eiur sed qui beatectur", imgUrl: "https://picsum.photos/seed/jorgacc7/200/301" }
        ];
        store.printedEdsCarousel.setNumPages(printedFullList.length);
      return { albumList, printedFullList };
  },
  computed: {
      printedList() {
          return store.printedEdsCarousel.getCurrentPageList(this.printedFullList);
      }
  }
    
}
</script>

<style lang="scss" scoped>

</style>