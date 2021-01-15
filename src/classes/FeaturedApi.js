import TempoAPI from './TempoAPI'

export default class EventApi extends TempoAPI {
    constructor() {
        super();
        this.serviceName = 'get_cover';
    }
    apiCall (data, handler) {
        this.call(this.serviceName, data, handler);
    }
}