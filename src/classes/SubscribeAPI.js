import TempoAPI from './TempoAPI';

export default class SubscribeAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'insert_subscriber';
    }

    sendSubscriptionRequest(email, name, handler)
    {
        const data = {
            email: email,
            name: name
        };
        this.makeAPICall(this.serviceName, data, handler);
    }
}