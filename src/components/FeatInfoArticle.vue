<template>
    <div class="feat-info-event">
        <h1 class="feat-event-title">{{featuredInfo.title}}</h1>
        <h2 class="feat-event-name">{{featuredInfo.name}}</h2>
        <a href="#" class="feat-event-link">VER MÁS</a>
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
        max-width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1, h2, h4 {
            color: white;
        }
        .feat-event-title {
            width: min-content;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .feat-event-month {   
            font-family: 'Roboto', sans-serif;
            color: white;
            font-weight: 700;
        }
        .feat-event-location {   
            font-family: 'Roboto', sans-serif;
            color: white;
            font-weight: 300;
            display: block;
        }
        a.feat-event-link {
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            color: #ffc828;
            display: block;
        }
        td.day-cell {
            display: block;
        }
        .top-row {
            border-bottom: 1px solid white;
        }
        .right-col {
            border-left: 1px solid white;
        }
    }
    .home-main.feat-info-event {
        .feat-event-title {
            max-width: 300px;
        }
        .feat-info-box {
            margin-top: 25px;
        }
        .feat-event-month {   
            font-size: 0.8rem !important;
        }
        .feat-event-location {   
            font-size: 0.8rem !important;
        }
        a.feat-event-link {
            font-size: 0.8rem !important;
        }
        .feat-info-box td {
            padding-top: 2px;
        }
        .feat-info-box td.right-col {
            padding-left: 12px;
        }
        .feat-info-box td.left-col {
            padding-right: 9px;
        }
        .top-row td {
            padding-bottom: 5px;
        }
    }

    .article-modal-info.feat-info-event {
        .feat-event-title {
            max-width: 190px;
            font-size: 1.5rem !important;
        }
        .feat-event-name {
            font-size: 0.9rem !important;
        }
        .feat-event-day {
            font-size: 1.1rem !important;
        }
        .feat-info-box {
            max-width: 90%;
            margin-top: 25px;
        }
        .feat-event-month {   
            font-size: 0.7rem !important;
        }
        .feat-event-location {   
            font-size: 0.7rem !important;
        }
        a.feat-event-link {
            font-size: 0.8rem !important;
        }
        .feat-info-box td {
            padding-top: 2px;
        }
        .feat-info-box td.right-col {
            padding-left: 8px;
        }
        .feat-info-box td.left-col {
            padding-right: 5px;
        }
        .top-row td {
            padding-bottom: 5px;
        }
        .feat-event-link {
            display: none;
        }
    }

</style>