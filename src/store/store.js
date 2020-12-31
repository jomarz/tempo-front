import { reactive } from 'vue';

export default  {
    articleData: reactive({ id: 13, name: 'jorge' }),
    showArticle: reactive({ state: false }),
    featVideo: reactive({
        title: 'Orquesta de Cámara de Colombia',
        subtite: 'CARTAGENA MUSIC FESTIVAL 2020',
        src: 'https://www.youtube-nocookie.com/embed/bKFLH-y6Ao0',
    }),
    setArticle(name) {
        this.articleData.name = name;
    },
    toggleArticle() {
        this.showArticle.state = !this.showArticle.state;
    },
    setfeatVideo(videoInfo) {
        this.featVideo.src = videoInfo.src;
    }
}