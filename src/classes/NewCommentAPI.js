import TempoAPI from './TempoAPI';

export default class NewCommentAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'insert_comment';
    }
    sendNewComment(isEvent, postId, author, text, parentId, handler)
    {
        const data = {
            isEvent: isEvent,
            postId: postId,
            autor: author,
            text: text,
            parentId: parentId
        }
        console.log(data);
        handler(data);
        //this.makeAPICall(this.serviceName, data, handler);
    }
}