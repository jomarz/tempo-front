<template>
    <div class="calendar row">
            <div class="col-4 calendar-left-box">
                <div class="calendar-title-box">
                    <h4 class="calendar-title">CALENDARIO</h4>
                    <div class="calendar-subtitle">DE CONCIERTOS</div>
                </div>
                <div class="calendar-month">
                    <div class="month-arrow" @click="prevMonth()">
                        <img src="..\assets\img\icons\Arrows\YellowArrows_left.svg" alt="">
                    </div>
                    <div class="month-year">
                        <div class="month-name">{{monthNames[month]}}</div>
                        <div class="year">{{year}}</div>
                    </div>
                    <div class="month-arrow" @click="nextMonth()">
                        <img src="..\assets\img\icons\Arrows\YellowArrows_right.svg" alt="">
                    </div>
                </div>
            </div>    
            <div class="col-8 days-container">
                <div class="days-header row">
                    <div v-for="weekday in weekdays" :key='weekday' class="weekday-box">{{weekday}}</div>
                </div>
                <div class="days-numbers row">
                    <div class="single-day-box" :class="{highlight: daysWithEvent.includes(parseInt(day))}" v-for="day in days" :key="day">
                        {{day}}
                    </div>
                </div>
            </div> 
    </div>    
</template>

<script>
import { ref } from 'vue'
import MonthDays from '../classes/MonthDays'
export default {
    props: {
        daysWithEvent: {required: true}
    },
    setup() {
        const weekdays = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO'];
        const monthNames = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
        const month = ref(new Date().getMonth());
        const year = ref(new Date().getFullYear());
        return { weekdays, month, year, monthNames };
    },
    methods: {
        prevMonth() {
            const oldMonth = this.month;
            this.month = new Date(this.year, this.month-1).getMonth();
            this.year = new Date(this.year, oldMonth-1).getFullYear();
        },
        nextMonth() {
            const oldMonth = this.month;
            this.month = new Date(this.year, this.month+1).getMonth();
            this.year = new Date(this.year, oldMonth+1).getFullYear();
        }
    },
    computed: {
        days() {
            return ref(new MonthDays().getDaysList(this.month, this.year)).value;
        }
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
        .month-arrow:hover {
            cursor: pointer;
            font-weight: 700;
        }
        .month-name {
            font-family: 'Roboto', sans-serif;
            font-size: 1.05rem;
            font-weight: 700;
            letter-spacing: 0.04rem;
            line-height: 1.4rem;
        }
        .year {
            font-family: 'Roboto', sans-serif;
            font-size: 1.05rem;
            letter-spacing: 0.18rem;
            font-weight: 400;
            line-height: 1.4rem;
        }
        .days-container {
            //background-color: #f3f3f4;
            border-width: 0px 1px 1px 0px;
            border-style: dashed;
            border-color: #d1d3d4;
        }
        .single-day-box {
            color: #d1d3d4;
            width: 14.28%;
            border-width: 1px 0px 0px 1px;
            border-style: dashed;
            border-color: #d1d3d4;
            padding: 2px;
            text-align: center;
            font-family: 'Roboto', sans-serif;
            font-size: 0.75rem;
            font-weight: 400;
        }
        .single-day-box.highlight {
            color: black;
        }
        .weekday-box {
            color: black;
            width: 14.28%;
            border-style: none;
            background-color: #ffc628;
            padding: 2px;
            text-align: center;
            font-family: 'Roboto', sans-serif;
            font-size: 0.50rem;
            font-weight: 700;
        }
    }
</style>