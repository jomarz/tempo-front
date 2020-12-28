<template>
    <div class="feat-info-event">
        <h1 class="feat-event-title">{{featuredInfo.title}}</h1>
        <div class="feat-info-box"></div>
        <h4 class="feat-event-name">{{featuredInfo.name}}</h4>
        <h2 class="feat-event-day">{{featuredInfo.day}}</h2>
        <span class="feat-event-month">{{featuredInfo.month}}</span>
        <a href="#" class="feat-event-link">VER EVENTO</a>
    </div>
</template>

<script>
export default {
    props: {
        featuredInfo: {
            required: true,
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .feat-info-event {
        h1, h2, h4 {
            color: white;
        }
        .feat-event-month {   
            font-family: 'Roboto', sans-serif;
            font-size: 0.95rem !important;
            color: white;
            font-weight: 300;
        }
        a.feat-event-link {
            font-family: 'Roboto', sans-serif;
            font-size: 0.95rem !important;
            font-weight: 700;
            color: #ffc828;
            display: block;
        }
    }

</style>