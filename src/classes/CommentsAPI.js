import TempoAPI from './TempoAPI';

export default class CommentsAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'get_post_comments';
    }
    getCommentsFromPermalink(permalink, isEvent, handler) 
    {
        const data = {
            permalink: permalink,
            isEvent: isEvent
        }
        this.makeAPICall(this.serviceName, data, handler);
    }
}