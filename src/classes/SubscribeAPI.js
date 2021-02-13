import TempoAPI from './TempoAPI';

export default class LikePostAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'insert_subscriber';
    }

    subscribeToNewsletter(email, name, handler)
    {
        const data = {
            email: email,
            name: name
        };
        this.makeAPICall(this.serviceName, data, handler);
    }
}