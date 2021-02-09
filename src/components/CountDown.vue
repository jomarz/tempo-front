<template>
    <div class="count-down">Hello</div>    
</template>

<script>
import { computed } from 'vue';
import EventDatetime from '../classes/EventDatetime';
export default {
    props: {
        datetime: {}
    },
    setup(props) {
        var eventDatetime = new EventDatetime(props.datetime);
        var distanceToEvent = eventDatetime.getDistanceToEvent();
        return { distanceToEvent }
    }
}
</script>

<style lang="scss" scoped>

</style>