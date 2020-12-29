import { reactive } from 'vue';

export default  {
    articleData: reactive({ name: 'jorge'}),
    setArticle(name) {
        this.articleData.name = name;
    }
}