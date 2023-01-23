<template>
    <div class="customBox p-6 rounded-lg bg-red-400">
        <div class="mb-5">
            <div v-if="iconText" class="customIcon">
                {{iconText}}
            </div>
            <img v-if="iconImg" 
                class="customIcon object-contain" 
                :src="iconImg"
                :alt="title" 
            />
        </div>
        <p v-if="title" class="customBoxHeading font-semibold text-base">
            {{title}}
        </p>
        <p v-if="text" class="customBoxText text-sm leading-tight">
            {{text}}
        </p>
    </div>
</template>

<style>
    .customBox {
        background-color: var(--vp-c-bg-soft);
        color: var(--vp-c-text-1);
    }
    .customIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        border-radius: 6px;
        background-color: var(--vp-c-bg-soft-down);
        width: 48px;
        height: 48px;
        font-size: 24px;
        transition: background-color 0.25s;
    }
    .vp-doc p.customBoxHeading {
        line-height: 24px;
        font-size: 16px;
        font-weight: 600;
        color: var(--vp-c-text-1);
        margin: 0!important;
    }
    .vp-doc p.customBoxText {
        flex-grow: 1;
        padding-top: 8px;
        line-height: 24px;
        font-size: 14px;
        font-weight: 500;
        color: var(--vp-c-text-2);
        margin: 0;
    }
</style>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },

    props: {
        iconText: String,
        iconImg: String,
        title: String,
        text: String,
    },
}
</script>