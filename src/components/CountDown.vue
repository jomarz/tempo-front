<template>
    <div class="count-down">
        <div class="count-down-item">
            <div class="count-down-number">{{distanceToEvent.days}}</div>
            <div class="count-down-item-title">DÍAS</div>
        </div>
        <div class="count-down-item">
            <div class="count-down-number">{{distanceToEvent.hours}}</div>
            <div class="count-down-item-title">HORAS</div>
        </div>
        <div class="count-down-item">
            <div class="count-down-number">{{distanceToEvent.minutes}}</div>
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
    },
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
        justify-content: space-around;
        width: 100%;
        margin: 30px 0 0;
        color: #fff;
        .count-down-item {
            font-family: 'Roboto', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: 2px solid #fff;
            height: 80px;
            width: 80px;
            border-radius: 50%;
            -moz-border-radius: 50%;
            -webkit-border-radius: 50%;
            padding-bottom: 3px;;
        }
        .count-down-number {
            font-size: 1.4rem;
            line-height: 1.5rem;
        }
        .count-down-item-title {
            font-size: 0.6rem;
        }
    }
</style>