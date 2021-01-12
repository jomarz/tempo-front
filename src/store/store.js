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
    setNumPages(listLength) {
        this.numPages.value = Math.ceil(listLength/this.elemsPerPage.value);
    }
    setElemsPerPage(num) {
        this.elemsPerPage.value = num;
    }
    getCurrentPageList(list) {
        return list.slice((this.currentPage.value-1)*this.elemsPerPage.value,this.currentPage.value*this.elemsPerPage.value);
    }
}

export default  {
    articleData: reactive({ id: 13, name: 'jorge' }),
    showArticle: reactive({ state: false }),
    showSubscribe: reactive({ state: false }),
    featVideo: reactive({
        title: 'Krzysztof Penderecki',
        subtite: '',
        src: 'https://www.youtube-nocookie.com/embed/_x2QIJyxJQA',
    }),
    eventsCarousel: new carousel(1,9),
    videoCarousel: new carousel(1,3),
    articlesCarousel: new carousel(1,8),
    newsCarousel: new carousel(1,3),
    printedEdsCarousel: new carousel(1,2),
    setArticle(name) {
        this.articleData.name = name;
    },
    toggleArticle() {
        this.showArticle.state = !this.showArticle.state;
    },
    toggleSubscribe() {
        this.showSubscribe.state = !this.showSubscribe.state;
    },
    setfeatVideo(videoInfo) {
        this.featVideo.src = videoInfo.src;
    },
}