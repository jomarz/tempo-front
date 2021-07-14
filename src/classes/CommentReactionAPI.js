import TempoAPI from './TempoAPI';

export default class CommentReactionAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.likeCommentService = "like_comment";
        this.dislikeCommentService = "dislike_comment";
    }
    likeComment(comment_id, isEvent, handler)
    {
        let data = {
            comment_id: comment_id,
            isEvent: isEvent
        }
        this.makeAPICall(this.likeCommentService, data, handler);
    }
    dislikeComment(comment_id, isEvent, handler)
    {
        let data = {
            comment_id: comment_id,
            isEvent: isEvent
        }
        this.makeAPICall(this.dislikeCommentService, data, handler);
    }
}