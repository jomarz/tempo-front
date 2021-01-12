import TempoAPI from './Api'

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
        this.call(this.serviceName, data, handler);
    }
}