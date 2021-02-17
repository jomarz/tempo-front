export default class EventDatetime
{
    constructor(datetimeString)
    {
        console.log(typeof datetimeString);
        var formattedString = "";
        if(datetimeString != undefined) formattedString = datetimeString.replace(/\s/, 'T');
        console.log(formattedString);
        this.datetime = new Date(formattedString).getTime();
        console.log(this.datetime);
    }
    getDistanceToEvent()
    {
        // Timezone offset of the times passed to the constructor
        // Ideally, we should get this from the DB
        var DBtimeZone = -6.00;

        // Get today's date and time
        var now = new Date();
        
        // We get the difference in miliseconds between the BD and the client's local time
        var timeZoneDiff = DBtimeZone * 60 + now.getTimezoneOffset();
        console.log(timeZoneDiff);
        // Find the distance between now and the event date
        var distance = this.datetime - now.getTime() - timeZoneDiff*60*1000;
        var eventIsPast = false;
        if (distance < 0 )  eventIsPast = true;

        distance = Math.abs(distance);
        console.log(distance);
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        console.log({days, hours, minutes, seconds});
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            eventIsPast: eventIsPast
        };
    }
}