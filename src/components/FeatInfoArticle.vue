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
        align-items: flex-start;
        justify-content: center;
        h1, h2, h4 {
            color: white;
        }
        .feat-event-title {
            width: min-content;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 18px;;
        }
        a.feat-event-link {
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            color: #ffc828;
            display: block;
        }
    }
    .home-main.feat-info-event {
        .feat-event-title {
            max-width: 300px;
        }
        a.feat-event-link {
            font-size: 0.8rem !important;
            margin-top: 10px;
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
        a.feat-event-link {
            display: none;
        }
    }

</style>