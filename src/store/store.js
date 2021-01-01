import { reactive, ref } from 'vue';

class carousel {
    constructor(numPages, elemsPerPage) {
        this.numPages = ref(numPages);
        this.elemsPerPage = ref(elemsPerPage);
        this.currentPage = ref(1);
    }
    moveUp() {
        if(this.currentPage.value>1) this.currentPage.value -= 1;
    }
    moveDown() {
        if(this.currentPage.value<this.numPages.value) this.currentPage.value += 1;
    }
    setNumPages(num) {
        this.numPages.value = num;
    }
    setElemsPerPage(num) {
        this.elemsPerPage.value = num;
    }
}

export default  {
    articleData: reactive({ id: 13, name: 'jorge' }),
    showArticle: reactive({ state: false }),
    featVideo: reactive({
        title: 'Orquesta de Cámara de Colombia',
        subtite: 'CARTAGENA MUSIC FESTIVAL 2020',
        src: 'https://www.youtube-nocookie.com/embed/bKFLH-y6Ao0',
    }),
    videoCarousel: new carousel(1,3),
    newsCarousel: new carousel(1,3),
    printedEdsCarousel: new carousel(1,2),
    setArticle(name) {
        this.articleData.name = name;
    },
    toggleArticle() {
        this.showArticle.state = !this.showArticle.state;
    },
    setfeatVideo(videoInfo) {
        this.featVideo.src = videoInfo.src;
    },
}