import { reactive } from 'vue';

export default  {
    articleData: reactive({ id: 13, name: 'jorge' }),
    showArticle: reactive({ state: false }),
    featVideo: reactive({
        title: 'Orquesta de Cámara de Colombia',
        subtite: 'CARTAGENA MUSIC FESTIVAL 2020',
        src: 'https://www.youtube-nocookie.com/embed/bKFLH-y6Ao0',
    }),
    videoCarousel: {
        numPages: reactive(0),
        currentPage: reactive(1),
        elemsPerPage: reactive(2),
        moveUp() {
            if(this.currentPage<this.numPages) this.currentPage += 1;
        },
        moveDown() {
            if(this.currentPage>1) this.currentPage -= 1;
        },
        setNumPages(num) {
            this.numPages = num;
        },
        setElemsPerPage(num) {
            this.elemsPerPage = num;
        }
    },
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