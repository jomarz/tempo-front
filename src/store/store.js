import { reactive } from 'vue';
import Carousel from '../classes/Carousel'

export default  {
    articleData: reactive({ id: 13, name: 'jorge' }),
    showArticle: reactive({ state: false }),
    showSubscribe: reactive({ state: false }),
    featVideo: reactive({
        title: 'Krzysztof Penderecki',
        subtite: '',
        src: 'https://www.youtube-nocookie.com/embed/_x2QIJyxJQA',
    }),
    eventsCarousel: new Carousel(1,9),
    videoCarousel: new Carousel(1,3),
    articlesCarousel: new Carousel(1,8),
    newsCarousel: new Carousel(1,3),
    albumsCarousel: new Carousel(1,6),
    printedEdsCarousel: new Carousel(1,2),
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