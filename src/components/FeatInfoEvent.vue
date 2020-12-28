<template>
    <div class="feat-info-event">
        <h1 class="feat-event-title">{{featuredInfo.title}}</h1>
        <table class="feat-info-box">
            <tr class="top-row">
                <td class="left-col">
                </td>
                <td class="right-col">
                    <h4 class="feat-event-name">{{featuredInfo.name}}</h4>
                </td>
            </tr>
            <tr class="bottom-row">
                <td class="left-col day-cell">
                    <h2 class="feat-event-day">{{featuredInfo.day}}</h2>
                </td>
                <td class="right-col">
                    <span class="feat-event-month">{{featuredInfo.month}}</span>
                    <span class="feat-event-location">{{featuredInfo.location}}</span>
                    <a href="#" class="feat-event-link">VER EVENTO</a>
                </td>
            </tr>
        </table>
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
        display: flex;
        flex-direction: column;
        align-items: center;
        h1, h2, h4 {
            color: white;
        }
        .feat-event-title {
            width: min-content;
            max-width: 300px;
        }
        .feat-info-box {
            margin-top: 25px;
        }
        td.day-cell {
            display: block;
        }
        .feat-event-month {   
            font-family: 'Roboto', sans-serif;
            font-size: 0.8rem !important;
            color: white;
            font-weight: 700;
        }
        .feat-event-location {   
            font-family: 'Roboto', sans-serif;
            font-size: 0.8rem !important;
            color: white;
            font-weight: 300;
            display: block;
        }
        a.feat-event-link {
            font-family: 'Roboto', sans-serif;
            font-size: 0.8rem !important;
            font-weight: 700;
            color: #ffc828;
            display: block;
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
        .top-row {
            border-bottom: 1px solid white;
        }
        .right-col {
            border-left: 1px solid white;
        }
    }

</style>