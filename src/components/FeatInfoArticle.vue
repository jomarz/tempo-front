<template>
    <div class="feat-info-article">
        <h1 class="feat-article-title">{{featuredInfo.title}}</h1>
        <feat-info-article-box :featuredInfo="featuredInfo" />
        <read-more-link class="feat-article-link" contentType="article" :contentPermalink="featuredInfo.permalink" isEvent="0" :contentId="featuredInfo.id" />
    </div>
</template>

<script>
import FeatInfoArticleBox from './FeatInfoArticleBox.vue'
import ReadMoreLink from './ReadMoreLink.vue'
export default {
  components: { ReadMoreLink, FeatInfoArticleBox },
    props: {
        featuredInfo: {
            required: true,
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .feat-info-article {
        max-width: 95%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        h1, h2, h4 {
            color: white;
        }
        .feat-article-title {
            width: min-content;
            display: -webkit-box;
            text-align: center;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 18px;;
        }
        a.feat-article-link {
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            color: #ffc828;
            display: block;
        }
    }
    .home-main.feat-info-article {
        .feat-article-article {
            max-width: 300px;
        }
        a.feat-article-link {
            font-size: 0.8rem !important;
            margin-top: 10px;
        }
    }

    .article-modal-info.feat-info-article {
        .feat-article-title {
            max-width: 190px;
            font-size: 1.5rem !important;
        }
        .feat-article-name {
            font-size: 0.9rem !important;
        }
        a.feat-article-link {
            display: none;
        }
    }

</style>