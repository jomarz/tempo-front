<template>
    <div class="calendar container">
        <div class="row">
            <div class="col-3">
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
            <div class="col-9 days-container">
                <div class="days-header"></div>
                <div class="days-numbers"></div>
            </div>
        </div>    
    </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .calendar {
        margin: 40px 0 40px 0;
        .calendar-title {
            font-family: 'Roboto', sans-serif;
            margin-bottom: 0;
            letter-spacing: 0.08rem;
        }
        .calendar-subtitle {
            font-family: 'Roboto', sans-serif;
            font-size: 1.05rem;
            font-weight: 400;
            letter-spacing: 0.008em;
        }
        .calendar-title-box {
            flex-direction: column;
            display: flex;
            align-items: center;
        }
        .calendar-month {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .month-arrow {
            width: 15px;
            height: 15px;
            line-height: 100%;
        }
    }
</style>