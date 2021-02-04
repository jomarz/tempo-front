import { reactive } from 'vue';
import Carousel from '../classes/Carousel'

export default  {
    siteURL: "https://revistatempo.co",
    articleData: reactive({ id: 1, permalink: '', isEvent: 0 }),
    showArticle: reactive({ state: false }),
    showSubscribe: reactive({ state: false }),
    showMobileMenu: reactive({ state: false }),
    showMobileSearchbox: reactive({ state:false }),
    featVideo: reactive({
        title: 'Krzysztof Penderecki',
        subtitle: '',
        src: 'https://www.youtube-nocookie.com/embed/_x2QIJyxJQA',
    }),
    eventsCarousel: new Carousel(1,9),
    videoCarousel: new Carousel(1,3),
    articlesCarousel: new Carousel(1,8),
    newsCarousel: new Carousel(1,3),
    albumsCarousel: new Carousel(1,6),
    printedEdsCarousel: new Carousel(1,2),
    setArticle(permalink, id, isEvent=0) {
        this.articleData.permalink = permalink;
        this.articleData.id = id;
        this.articleData.isEvent = isEvent;
    },
    setArticlePermalink(permalink, isEvent=0) {
        this.articleData.permalink = permalink;
        this.articleData.id = 0;
        this.articleData.isEvent = isEvent;
    },
    setArticleId(id) {
        this.articleData.id = id;
    },
    toggleArticle() {
        this.showArticle.state = !this.showArticle.state;
    },
    toggleSubscribe() {
        this.showSubscribe.state = !this.showSubscribe.state;
    },
    toggleMobileMenu() {
        this.showMobileMenu.state = !this.showMobileMenu.state;
    },
    toggleMobileSearchbox() {
        this.showMobileSearchbox.state = !this.showMobileSearchbox.state;
    },
    setfeatVideo(videoInfo) {
        this.featVideo.src = videoInfo.src;
        this.featVideo.title = videoInfo.title;
    },
}