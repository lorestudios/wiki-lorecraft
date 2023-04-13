<template>
    <div 
        class="relative customBox p-6 rounded-lg shadow-sm hover:shadow-lg duration-300 overflow-hidden"
        :class="{ 'pt-0' : videoUrl }"
    >
        <a v-if="btnUrl" :href="btnUrl" class="absolute top-0 left-0 right-0 bottom-0 cursor-pointer z-10" />
        <figure v-if="videoUrl" class="-mx-6 block mb-6 relative h-48 bg-gray-200">
            <img 
                class="w-full h-full object-cover" 
                :src="thumbUrl"
            />
            <div class="absolute top-2/4 left-2/4 rounded-full pl-2.5 p-2 transform -translate-x-2/4 -translate-y-2/4 z-10">
                <CustomModal
                    :videoUrl="videoUrl"
                    :videoTitle="title"
                    theme="brand"
                    :playBtn="true"
                />
            </div>
        </figure>
        <div 
            class="flex gap-4 mb-5"
            :class="[ videoUrl ? 'flex-row items-center' : 'flex-col' ]"
        >
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

        <!-- <div v-if="btnUrl && !videoUrl" class="flex items-center justify-between gap-4">
            <a :href="btnUrl" class="inline-block text-sm">
                Learn More
            </a>
            <button @click="copyURL(btnUrl)" class="cursor-pointer duration-300 hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                </svg>
            </button>
        </div>
        <div v-if="videoUrl" class="flex items-center justify-between gap-4">
            <a :href="videoUrl" target="_blank" class="inline-block text-sm">
                Watch Video
            </a>
            <button @click="copyURL(videoUrl)" class="cursor-pointer duration-300 hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                </svg>
            </button>
        </div> -->
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
        btnUrl: String,
        videoUrl: String,
    },

    computed: {
        thumbUrl() {
            var videoId = this.videoUrl.match(/youtu\.be.*(\?v=|\/)(.{11})/);

            if(videoId) {
                videoId = videoId.pop()
                return "https://img.youtube.com/vi/"+videoId+"/0.jpg"
            }
        }
    },

    methods: {
        async copyURL(mytext) {
            try {
                await navigator.clipboard.writeText(mytext);
                alert('Link copied to clipboard');
            } catch($e) {
                alert('Cannot copy');
            }
        }
    },
}
</script>