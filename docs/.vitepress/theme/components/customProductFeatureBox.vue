<template>
    <a
        :href="link" 
        class="customBox p-6 rounded-lg shadow-sm hover:shadow-lg duration-300 overflow-hidden transform hover:scale-105"
    >
        <div class="flex gap-4 mb-5 flex-col">
            <div class="block">
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
        </div>
        <article 
            v-if="text" 
            class="customBoxText text-sm leading-tight" 
            v-html="text"
        />
    </a>
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
        margin-bottom: 0px;
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
    .vp-doc .customBoxText,
    .vp-doc .customBoxText p {
        flex-grow: 1;
        line-height: 24px;
        font-size: 14px;
        font-weight: 500;
        color: var(--vp-c-text-2);
        margin: 0;
    }
</style>

<script>
export default {
    props: {
        iconText: String,
        iconImg: String,
        title: String,
        text: String,
        link: String,
    }
}
</script>