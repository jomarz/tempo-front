export default class Lister {
    static assignDay(articleList) {
        return articleList.map((article) => { article.day = parseInt(article.datetime.match(/[0-9]{4}-[0-9]{2}-([0-9]{2})/)[1]); return article });
    }
}