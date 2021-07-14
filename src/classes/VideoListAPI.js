import TempoAPI from './TempoAPI'

export default class VideoListAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'get_youtube_channel_uploads';
    }
    getVideos(data, handler)
    {
        this.makeAPICall(this.serviceName, data, handler);
    }
}