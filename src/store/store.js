import { reactive } from 'vue';

export default  {
    articleData: reactive({ id: 13, name: 'jorge' }),
    showArticle: reactive({ state: false }),
    setArticle(name) {
        this.articleData.name = name;
    },
    toggleArticle() {
        this.showArticle.state = !this.showArticle.state;
    }
}