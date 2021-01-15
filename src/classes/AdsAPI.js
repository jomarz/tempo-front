import TempoAPI from './TempoAPI'

export default class AdsAPI extends TempoAPI {
    constructor() {
        super();
        this.serviceName = 'get_ads';
    }
    getAds (data = {}, handler) {
        this.makeAPICall(this.serviceName, data, handler);
    }
}