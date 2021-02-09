<template>
    <div class="count-down">
        <div class="count-down-item">
            <h2>{{distanceToEvent.days}}</h2>
            <div class="count-down-item-title">DÍAS</div>
        </div>
        <div class="count-down-item">
            <h2>{{distanceToEvent.hours}}</h2>
            <div class="count-down-item-title">HORAS</div>
        </div>
        <div class="count-down-item">
            <h2>{{distanceToEvent.minutes}}</h2>
            <div class="count-down-item-title">MINUTOS</div>
        </div>
    </div>    
</template>

<script>
import EventDatetime from '../classes/EventDatetime';
export default {
    props: {
        datetime: {
            required: true,
            type: String
        }
    },/* 
    data(props) {console.log(props.hora);
        var eventDatetime = new EventDatetime(props.hora);
        var distanceToEvent = eventDatetime.getDistanceToEvent();console.log(distanceToEvent);
        return { distanceToEvent }
    }, */
    computed: {
        distanceToEvent()
        {
            let eventDatetime = new EventDatetime(this.datetime);
            console.log(eventDatetime.getDistanceToEvent());
            return eventDatetime.getDistanceToEvent();
        }
    }
}
</script>

<style lang="scss" scoped>
    .count-down {
        display: flex;
        align-content: space-between;
        width: 100%;
        color: #fff;
        .count-down-item {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .count-down-item-title {
            font-family: 'Roboto', sans-serif;
            font-size: 0.7rem;
        }
    }
</style>