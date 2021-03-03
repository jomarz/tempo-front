<template>
    <table class="feat-info-box">
        <tr class="top-row">
            <td class="left-col">
            </td>
            <td class="right-col name-cell">
                <h4 class="feat-event-name">{{featuredInfo.name}}</h4>
            </td>
        </tr>
        <tr class="bottom-row">
            <td class="left-col day-cell">
                <h2 class="feat-event-day">{{featuredInfo.day}}</h2>
            </td>
            <td class="right-col">
                <span class="feat-event-month">DE {{featuredInfo.monthName}}, {{featuredInfo.year}}</span>
                <span class="feat-event-location">{{featuredInfo.location}}</span>
                <read-more-link v-if="featuredInfo.showContent==1" class="feat-event-link" contentType="event" :contentPermalink="featuredInfo.permalink" isEvent="1" :contentId="featuredInfo.id" />
            </td>
        </tr>
    </table>
</template>

<script>
import ReadMoreLink from './ReadMoreLink.vue'

export default {
  components: { ReadMoreLink },
    props: {
        featuredInfo: {
            required: true,
            type: Object
        }
    },
}
</script>

<style lang="scss" scoped>
    h1, h2, h4 {
        color: white;
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

    .home-main.feat-info-event {
        .feat-event-name {
            min-height: 1.1rem;
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
            font-size: 0.6rem !important;
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
        .feat-event-name {
            font-size: 0.75rem !important;
            min-height: 0.85rem;
            line-height: normal;
        }
        .feat-event-day {
            font-size: 1.1rem !important;
        }
        .feat-info-box {
            max-width: 90%;
            margin-top: 25px;
        }
        .feat-event-month {   
            font-size: 0.65rem !important;
            line-height: normal;
        }
        .feat-event-location {   
            font-size: 0.55rem !important;
            line-height: normal;
        }
        a.feat-event-link {
            font-size: 0.55rem !important;
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
    @media only screen and (max-width: 768px) {
        .name-cell {
            height: 1.2rem;
        }
        .feat-event-name {
            font-size: 0.75rem !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            min-height: 0.85rem;
        }
        .feat-event-month {   
            font-size: 0.65rem !important;
            font-family: 'Roboto', sans-serif;
            color: white;
            font-weight: 700;
        }
        .feat-event-location {   
            font-size: 0.55rem !important;
            font-family: 'Roboto', sans-serif;
            color: white;
            font-weight: 300;
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        a.feat-event-link {
            font-size: 0.55rem !important;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            color: #ffc828;
            display: block;
        }
        .feat-event-day {
            font-size: 1rem !important;
        }
        .feat-info-box td {
            padding-top: 2px;
        }
        .feat-info-box td.right-col {
            padding-left: 6px;
            padding-right: 5px;
        }
        .feat-info-box td.left-col {
            padding-right: 10px;
        }
        .top-row td {
            padding-bottom: 5px;
        }
    }
</style>