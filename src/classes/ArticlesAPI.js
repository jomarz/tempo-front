import TempoAPI from './TempoAPI'

export default class ArticlesAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'get_posts';
    }
    getPosts(limit, offset, handler)
    {
        const data = {
            type: 'article',
            limit: limit,
            offset: offset
        }
        this.makeAPICall(this.serviceName, data, handler);
    }
}