import TempoAPI from './TempoAPI'

export default class AlbumsAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'get_posts';
    }
    getPosts(limit, offset, handler)
    {
        const data = {
            type: 'discography',
            limit: limit,
            offset: offset
        }
        this.makeAPICall(this.serviceName, data, handler);
    }
}