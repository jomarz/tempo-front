<template>
    <div class="calendar row">
            <div class="col-4 calendar-left-box">
                <div class="calendar-title-box">
                    <h4 class="calendar-title">CALENDARIO</h4>
                    <div class="calendar-subtitle">DE CONCIERTOS</div>
                </div>
                <div class="calendar-month">
                    <div class="month-arrow">
                        <img src="../assets/img/TempoWebsiteIconsYellowArrows.svg" alt="">
                    </div>
                    <div class="month-year">
                        <div class="month-name">ENERO</div>
                        <div class="year">2021</div>
                    </div>
                    <div class="month-arrow">
                        <img src="../assets/img/TempoWebsiteIconsYellowArrows.svg" alt="">
                    </div>
                </div>
            </div>    
            <div class="col-8 days-container">
                <div class="days-header row"></div>
                <div class="days-numbers row">
                    <div class="single-day-box" v-for="day in days" :key="day">
                        {{day}}
                    </div>
                </div>
            </div> 
    </div>    
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const days = ref(['','','',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,'']);
        return { days };
    }
}
</script>

<style lang="scss" scoped>
    .calendar {
        .calendar-left-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .calendar-title-box {
            flex-direction: column;
            display: flex;
            align-items: center;
        }
        .calendar-title {
            font-family: 'Roboto', sans-serif;
            margin-bottom: 0;
            letter-spacing: 0.08rem;
            line-height: 120%
        }
        .calendar-subtitle {
            font-family: 'Roboto', sans-serif;
            font-size: 1.05rem;
            font-weight: 400;
            line-height: 120%;
            letter-spacing: 0.008em;
            padding-bottom: 15px;
            border-bottom: solid 1.7px #ffc729;
        }
        .calendar-month {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 15px;
        }
        .month-year {
            margin: 0 20px 0 20px;
            display: flex;
            flex-direction: column;
            align-items: center;           
        }
        .month-arrow {
            width: 15px;
            height: 16px;
            line-height: 100%;
        }
        .month-name {
            font-family: 'Roboto', sans-serif;
            font-size: 1.2rem;
            font-weight: 700;
            letter-spacing: 0.04rem;
            line-height: 1.4rem;
        }
        .year {
            font-family: 'Roboto', sans-serif;
            font-size: 1.2rem;
            letter-spacing: 0.18rem;
            font-weight: 400;
            line-height: 1.4rem;
        }
        .days-container {
            background-color: #f3f3f4;
            border-width: 0px 1px 1px 0px;
            border-style: solid;
            border-color: #d1d3d4;
        }
        .single-day-box {
            width: 14.28%;
            border-width: 1px 0px 0px 1px;
            border-style: solid;
            border-color: #d1d3d4;
            padding: 4px;
            text-align: center;
            font-family: 'Roboto', sans-serif;
            font-size: 0.75rem;
            font-weight: 400;
        }
    }
</style>