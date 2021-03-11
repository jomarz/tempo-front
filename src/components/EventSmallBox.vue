<template>
    <div class="event-small-box" @click="openContent(boxContent.permalink, boxContent.id, 1)">
        <div class="">
            <div class="thumbnail">
                <img :src="boxContent.imgUrl" alt="">
            </div>
            <div class="box_info">
                <table class="box-info-table">
                    <tr class="box-info-top-row">
                        <td class="box-info-left-col"></td>
                        <td class="box-info-right-col">
                            <h6 class="event-title">{{ boxContent.title }}</h6>
                            <span class="box-subtitle">{{ boxContent.subtitle }}</span>
                        </td>
                    </tr>
                    <tr class="box-info-bottom-row">
                        <td class="box-info-left-col event-day-cell">
                            <h4>{{boxContent.day}}</h4>
                        </td>
                        <td class="box-info-right-col box-info-content-cell">
                            <span class="box-month">DE {{boxContent.monthName}}, {{boxContent.year}}</span>
                            <span class="box-location">{{boxContent.location}}</span>
                            <div class="box-text-container">
                                <p class="box-text">{{boxContent.description}}</p>
                            </div>
                            <read-more-link v-if="boxContent.showContent==1" contentType="event" :contentPermalink="boxContent.permalink" :contentId="boxContent.id" isEvent="1" />
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
    },
    methods: {
        openContent(permalink, id, isEvent) {console.log({permalink, id, isEvent});
            if (isEvent == 1)   this.$router.push('/evento/'+permalink);
            else                this.$router.push('/articulo/'+permalink);
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .event-small-box {
        width: 335px;
        display: inline-block;
        margin-bottom: 40px;
        cursor: pointer;
        .thumbnail {
            width: 130px;
            float: left;
        }
        .thumbnail img {
            height: 137px;
            width: 130px;
            object-fit: cover;
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
                height: 36px;
            }
            .box-info-table tr.box-info-bottom-row {
                height: 98px;
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
            .box-info-content-cell {
                padding-top: 4px;
            }
            .event-title {
                font-size: 0.75rem !important;
                line-height: 0.85rem;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .box-subtitle {
                font-size: 0.6rem !important;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .box-month {
                font-size: 0.55rem !important;
            }
            .box-location {
                font-size: 0.55rem !important;
                line-height: 0.65rem;
            }
            p.box-text {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            .more-link {
                font-size: 0.5rem !important;
                line-height: 0.6rem;
            }
        }
    }
    @media only screen and (max-width: 767px) {
        .event-small-box {
            margin-bottom: 5px;
        }
    }
</style>