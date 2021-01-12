import TempoAPI from './TempoApi'

export default class ArticlesAPI extends TempoAPI
{
    constructor()
    {
        this.serviceName = 'get_posts';
    }
    getArticles(limit, offset, handler)
    {
        const data = {
            type: 'article',
            limit: limit,
            offset: offset
        }
        this.makeAPICall(this.serviceName, data, handler);
    }
}