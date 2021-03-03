import TempoAPI from './TempoAPI'

export default class PostContentAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'get_post_data';
    }
    getContent(id, permalink, isEvent, handler)
    {
        const data = {
            postId: id,
            postPermalink: permalink,
            isEvent: isEvent
        }
        this.makeAPICall(this.serviceName, data, handler);
    }
}