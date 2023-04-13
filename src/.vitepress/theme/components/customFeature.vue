<template>
    <div class="py-10 container grid grid-cols-1 md:grid-cols-2 gap-5">
        <slot />
    </div>
</template>

<style>
</style>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },

    props: {
        videoUrl: String,
    },
}
</script>