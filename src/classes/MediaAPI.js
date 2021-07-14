import TempoAPI from './TempoAPI'

export default class MediaAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'get_post_media';
        this.dummy = [
            {
                media_id: 1,
                media_type: "video",
                url: 'https://www.youtube.com/embed/UL1qpV6YtAE'
            },
            {
                media_id: 2,
                media_type: "video",
                url: 'https://www.youtube.com/embed/lGRwO9Dle6E'
            },
            {
                media_id: 3,
                media_type: "video",
                url: 'https://www.youtube.com/embed/_x2QIJyxJQA'
            },
            {
                media_id: 4,
                media_type: "image",
                url: 'https://tempo.wittrees.com/media/imgTest/190711-191403.png'
            },
            {
                media_id: 5,
                media_type: "image",
                url: 'https://tempo.wittrees.com/media/imgTest/190711-191012.png'
            },
            {
                media_id: 6,
                media_type: "image",
                url: 'https://tempo.wittrees.com/media/imgTest/190711-190430.png'
            },
            {
                media_id: 7,
                media_type: "audio",
                url: 'https://temphttps://open.spotify.com/embed/playlist/37i9dQZEVXbKrooeK9WSFF?height=300&amp;theme-id=0&amp;default-tab=css,result&amp;embed-version=2o.wittrees.com/media/imgTest/190711-190430.png'
            },
        ];
    }
    getMedia(postId, permalink, isEvent, handler)
    {
        const data = {
            postId: postId,
            postPermalink: permalink,
            isEvent: isEvent
        };
        this.makeAPICall(this.serviceName, data, handler);
/*         const dummyResults = {
            data: this.dummy
        };
        handler(dummyResults); */
    }
    getDummyMedia() {
        return this.dummy;
    }
}