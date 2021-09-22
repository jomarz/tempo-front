<template>
    <table class="feat-info-box">
        <tr class="top-row">
            <td class="left-col">
            </td>
            <td class="right-col name-cell">
                <h4 class="feat-article-name"></h4>
            </td>
        </tr>
        <tr class="bottom-row">
            <td class="left-col day-cell">
                <h2 class="feat-event-day"></h2>
            </td>
            <td class="right-col">
                <div class="feat-article-description" v-html="featuredInfo.artist"></div>
                <read-more-link class="feat-article-link" contentType="article" :contentPermalink="featuredInfo.permalink" isEvent="0" :contentId="featuredInfo.id" />
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
    .feat-article-description {   
        font-family: 'Roboto', sans-serif;
        color: white;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.1rem;
        margin-top: 5px;
    }
    a.feat-article-link {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        color: #ffc828;
        display: block;
    }
    .top-row {
        border-bottom: 1px solid white;
    }
    .right-col {
        border-left: 1px solid white;
    }

    .home-main.feat-info-article {
        .feat-article-name {
            min-height: 1.1rem;
        }
        .feat-article-description {
            
        }
        .feat-info-box {
            margin-top: 25px;
        }
        a.feat-article-link {
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

    .article-modal-info.feat-info-article {
        .feat-article-name {
            font-size: 0.75rem !important;
            min-height: 0.85rem;
            line-height: normal;
        }
        .feat-info-box {
            max-width: 90%;
            margin-top: 25px;
        }
        a.feat-article-link {
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
        .feat-article-link {
            display: none;
        }
    }
    @media only screen and (max-width: 768px) {
        .name-cell {
            height: 1.2rem;
        }
        .feat-article-name {
            font-size: 0.75rem !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            min-height: 0.85rem;
        }
        a.feat-article-link {
            font-size: 0.55rem !important;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            color: #ffc828;
            display: block;
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