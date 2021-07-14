import TempoAPI from './TempoAPI'

export default class EventApi extends TempoAPI {
    constructor() {
        super();
        this.serviceName = 'get_events';
    }
    getMonthEvents (year, month, handler) {
        const data = {
            year: year,
            month: month,
        };
        this.makeAPICall(this.serviceName, data, handler);
    }
}