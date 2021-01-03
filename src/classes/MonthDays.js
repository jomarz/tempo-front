export default class MonthDays {
    constructor() {
        this.days = [];
    }
    getDaysList(month, year) { //0-based month: January is month 0
        const daysInMonth = new Date(year, month+1, 0).getDate();
        const firstWeekDay = new Date(year, month, 1).getDay();
        const lastWeekDay = new Date(year, month, daysInMonth).getDay();
        for(var i=0; i<firstWeekDay-1; i++) {
            this.days.push("");
        }
        for(i=0; i<daysInMonth; i++) {
            this.days.push((i+1).toString());
        } 
        for(i=0; 1>7-lastWeekDay; i++) {
            this.days.push("");
        }
        return this.days;
    }
    getCurrentList() {
        const today = new Date();
        return this.getDaysList(today.getMonth(), today.getFullYear());
    }
}