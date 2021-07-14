import TempoAPI from './TempoAPI';

export default class LikePostAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'like_article';
    }
    likePost(postId, isEvent=0, handler)
    {
        const data = {
            postId: postId,
            isEvent: isEvent
        }
        this.makeAPICall(this.serviceName, data, handler);
    }
}