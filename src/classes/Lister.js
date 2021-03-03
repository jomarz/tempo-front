export default class Lister 
{
    static assignDay(articleList) {
        return articleList.map((article) => { article.day = parseInt(article.datetime.match(/[0-9]{4}-[0-9]{2}-([0-9]{2})/)[1]); return article });
    }
    
    static assignDateFields(articleList) {
        const monthNames = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
        return articleList.map((article) => {
            let dateNumbers = article.datetime.match(/([0-9]{4})-([0-9]{2})-([0-9]{2})/);
            article.day = parseInt(dateNumbers[3]);
            article.month = parseInt(dateNumbers[2]);
            article.monthName = monthNames[dateNumbers[2]-1];
            article.year = parseInt(dateNumbers[1]);
            return article 
        });
    }
}