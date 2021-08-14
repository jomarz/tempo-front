<template>
    <div class="content-section albums-section container-fluid md-up">
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
    <div class="content-section container-fluid mobile-albums-printed sm-only">
        <horizontal-carousel :contentList="albumsFullList" componentName="album-small-box" class="horizontal-carousel-albums sm-only"/>
        <h3 class="mobile-printed-title sm-only">Ediciones Impresas</h3>
        <horizontal-carousel :contentList="printedFullList" componentName="printed-small-box" class="horizontal-carousel-printed sm-only"/>
    </div>
</template>

<script>
import { ref } from 'vue'
import store from '../store/store.js';
import AlbumsAPI from '../classes/AlbumsAPI'
import AlbumsCTA from './AlbumsCTA.vue';
import AlbumsGrid from './AlbumsGrid.vue'
import PrintedVertical from './PrintedVertical.vue';
import SectionNavNoMenu from './SectionNavNoMenu.vue';
import HorizontalCarousel from './HorizontalCarousel.vue';

export default {
  components: { AlbumsGrid, SectionNavNoMenu, PrintedVertical, AlbumsCTA, HorizontalCarousel },
  setup() {
      /* const albumList = [
          { id: '1', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab1/300/300" },
          { id: '2', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab2/300/300" },
          { id: '3', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab3/300/300" },
          { id: '4', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab4/300/300" },
          { id: '5', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab5/300/300" },
          { id: '6', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab6/300/300" },
          { id: '7', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab7/300/300" },
          { id: '8', title: "Imodipic iissimus", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a fermentum risus, eget vehicula magna. Aliquam erat volutpat. In condimentum neque neque, in tempus nulla interdum eget. Vestibulum et leo eget purus eleifend semper ut eget tellus. Maecenas sit amet pellentesque tellus.", imgUrl: "https://picsum.photos/seed/jorgeab8/300/300" },
      ]; */
        const printedFullList = [
            { id: 1, title: "", description: "", imgUrl: "/img/edicion1.jpeg" },
            { id: 2, title: "", description: "", imgUrl: "/img/edicion2.jpeg" },
            { id: 3, title: "", description: "", imgUrl: "/img/edicion3.jpeg" }, 
            ];
        const albumsAPI = new AlbumsAPI();
        var albumsFullList = ref([]);
        albumsAPI.getPosts(40, 0, (data)=> {
                albumsFullList.value = Object.entries(albumsFullList.value).map(entry => entry[1]).concat(Object.entries(data.data.posts).map(entry => entry[1]));
                store.albumsCarousel.setNumPages(Object.entries(albumsFullList.value).length);
                });
        store.albumsCarousel.setNumPages(albumsFullList.value.length);
        store.printedEdsCarousel.setNumPages(printedFullList.length);
      return { albumsFullList, printedFullList };
  },
  computed: {
      albumList() {
          return store.albumsCarousel.getCurrentPageList(this.albumsFullList);
      },
      printedList() {
          return store.printedEdsCarousel.getCurrentPageList(this.printedFullList);
      }
  }
    
}
</script>

<style lang="scss" scoped>
    .horizontal-carousel-printed {
        margin-top: 30px;
    }
    .mobile-printed-title {
        margin-top: 20px;
    }
</style>