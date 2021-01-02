<template>
    <div class="event-small-box ">
        <div class="">
            <div class="thumbnail">
                <img :src="boxContent.imgUrl" alt="">
            </div>
            <div class="box_info">
                <table class="box-info-table">
                    <tr class="box-info-top-row">
                        <td class="box-info-left-col"></td>
                        <td class="box-info-right-col">
                            <h6>{{ boxContent.title }}</h6>
                            <span class="box-subtitle">{{ boxContent.subtitle }}</span>
                        </td>
                    </tr>
                    <tr class="box-info-bottom-row">
                        <td class="box-info-left-col event-day-cell">
                            <h4>{{boxContent.day}}</h4>
                        </td>
                        <td class="box-info-right-col">
                            <span class="box-month">{{boxContent.month}}</span>
                            <span class="box-location">{{boxContent.location}}</span>
                            <div class="box-text-container">
                                <p class="box-text">{{boxContent.description}}</p>
                            </div>
                            <read-more-link contentType="event" :contentName="boxContent.title" :contentId="boxContent.id"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>    
</template>

<script>
import ReadMoreLink from './ReadMoreLink.vue'
export default {
  components: { ReadMoreLink },
    props: {
        boxContent: {
            required: true,
            type: Object
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .event-small-box {
        width: 335px;
        display: inline-block;
        margin-bottom: 40px;
        .thumbnail {
            width: 130px;
            float: left;
        }
        .thumbnail img {
            height: 137px;
            width: 130px;
        }
        .box_info {
            width: 205px;
            float: left;
            padding-left: 9px;
            padding-right: 0px;
            td {
                vertical-align: top;
            }
            .box-info-table tr.box-info-top-row {
                border-bottom: 2px solid #d1d3d4;
                height: 40px;
            }
            .box-info-table tr.box-info-bottom-row {
                height: 94px;
            }
            .box-info-table td.box-info-left-col {
                width: 34px;
                min-width: 34px;
                max-width: 34px;
                padding-right: 9px;
                padding-left: 1px;
            }
            .box-info-table td.box-info-right-col {
                border-left: 2px solid #d1d3d4;
                width: 162px;
                min-width: 162px;
                max-width: 162px;
                padding-left: 9px;
            }
            .event-day-cell {
                text-align: end;
            }
            p.box-text {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
</style>