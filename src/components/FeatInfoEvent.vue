<template>
    <div class="feat-info-event">
        <h1 class="event-title">{{featuredInfo.title}}</h1>
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
        h1 {
            color: white;
        }
    }

</style>