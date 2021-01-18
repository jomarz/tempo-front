import TempoAPI from './TempoAPI'

export default class MediaAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'get_media';
        this.dummy = [
            {
                media_id: 1,
                media_type: "video",
                url: 'https://www.youtube.com/embed/UL1qpV6YtAE'
            },
            {
                media_id: 2,
                media_type: "video",
                url: 'https://www.youtube.com/embed/UL1qpV6YtAE'
            },
            {
                media_id: 3,
                media_type: "video",
                url: 'https://www.youtube.com/embed/UL1qpV6YtAE'
            },
            {
                media_id: 4,
                media_type: "image",
                url: 'https://tempo.wittrees.com/media/imgTest/190711-191233.png'
            },
            {
                media_id: 5,
                media_type: "image",
                url: 'https://tempo.wittrees.com/media/imgTest/190711-191233.png'
            },
            {
                media_id: 6,
                media_type: "image",
                url: 'https://tempo.wittrees.com/media/imgTest/190711-191233.png'
            },
        ];
    }
    getMedia(postId, isEvent, handler)
    {
        data = {
            postId: postId,
            isEvnt: isEvent
        };
        this.makeAPICall(this.serviceName, data, handler);
    }
}