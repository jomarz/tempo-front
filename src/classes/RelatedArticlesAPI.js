import TempoAPI from './TempoAPI';

export default class RelatedArticlesAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'get_related_posts';
    }
    getRelatedPosts(postTags, handler)
    {
        const data = {
            postTags: postTags
        }
        this.makeAPICall(this.serviceName, data, handler);
    }
}