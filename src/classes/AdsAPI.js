import TempoAPI from './TempoAPI'

export default class AdsAPI extends TempoAPI {
    constructor() {
        super();
        this.serviceName = 'get_ads';
    }
    getAds (page, handler) {
        const data = { page: page };
        this.makeAPICall(this.serviceName, data, handler);
    }
}