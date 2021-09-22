import { reactive } from 'vue';
import Carousel from '../classes/Carousel'

export default  {
    siteURL: "https://revistatempo.co",
    articleData: reactive({ id: 1, permalink: '', isEvent: 0 }),
    showArticle: reactive({ state: false }),
    showInfograph: reactive({ state: false }),
    infographUrl: reactive({url: ''}),
    showSubscribe: reactive({ state: false }),
    showContactForm: reactive({ state: false }),
    showMobileMenu: reactive({ state: false }),
    showMobileSearchbox: reactive({ state:false }),
    eventFilter: reactive({ applyFilter: false, filter: '' }),
    articleFilter: reactive({ applyFilter: false, filter: '' }),
    sectionFilter: reactive({
        events: { applyFilter: false, filter: '' },
        articles: { applyFilter: false, filter: '' }
    }),
    featVideo: reactive({
        title: '',
        subtitle: '',
        src: '',
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
    setSectionFilter(section, filter) {
        this.sectionFilter[section].applyFilter = true;
        this.sectionFilter[section].filter = filter;
    },
    setArticleId(id) {
        this.articleData.id = id;
    },
    setInfographUrl(url) {
        this.infographUrl.url = url;
    },
    toggleArticle() {
        this.showArticle.state = !this.showArticle.state;
    },
    toggleInfograph() {
        this.showInfograph.state = !this.showInfograph.state;
    },
    openArticle() {
        this.showArticle.state = true;
    },
    getShowArticleState() {
        return this.showArticle.state;
    },
    getShowInfograph() {
        return this.showInfograph.state;
    },
    toggleSubscribe() {
        this.showSubscribe.state = !this.showSubscribe.state;
    },
    toggleContactForm() {
        this.showContactForm.state = !this.showContactForm.state;
    },
    toggleMobileMenu() {
        this.showMobileMenu.state = !this.showMobileMenu.state;
    },
    toggleMobileSearchbox() {
        this.showMobileSearchbox.state = !this.showMobileSearchbox.state;
    },
    setfeatVideo(videoInfo) {
        this.featVideo.src = 'https://www.youtube.com/embed/'+videoInfo.snippet.resourceId.videoId;
        this.featVideo.title = videoInfo.snippet.title;
    },
}