import TempoAPI from './TempoAPI'

export default class EventApi extends TempoAPI {
    constructor() {
        super();
        this.serviceName = 'get_cover';
    }
    getFeaturedInfo (data, handler) {
        this.makeAPICall(this.serviceName, data, handler);
    }
}