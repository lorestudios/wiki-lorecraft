<template>
    <div class="customBorder relative shadow-md transform hover:scale-105 duration-300">
        <a :href="itemInfo.btnLink" class="block absolute top-0 left-0 bottom-0 right-0 opacity-0 z-10" />
        <figure class="relative h-48 bg-gray-300">
            <img
                v-if="!itemInfo.videoLink && itemInfo.image"
                class="fadeIn w-full h-full object-cover"
                :src="itemInfo.image"
                alt="image.alt"
            />
            <img 
                v-else-if="itemInfo.videoLink && thumbUrl(itemInfo.videoLink)"
                class="fadeIn w-full h-full object-cover" 
                :src="thumbUrl(itemInfo.videoLink)" 
            />
            <div class="absolute top-2/4 left-2/4 rounded-full pl-2.5 p-2 transform -translate-x-2/4 -translate-y-2/4 z-10">
                <CustomModal
                    v-if="itemInfo.videoLink"
                    :videoUrl="itemInfo.videoLink"
                    :videoTitle="itemInfo.title"
                    theme="brand"
                    :playBtn="true"
                />
            </div>
        </figure>
        <article class="p-4 pb-5">
            <h3 v-if="itemInfo.title" class="fadeIn text-xl md:text-2xl font-bold">
                {{itemInfo.title}}
            </h3>
            <div
                v-if="itemInfo.desc" 
                class="fadeIn mt-3 space-y-3"
                v-html="itemInfo.desc.substring(0,120)"
            />
        </article>
    </div>
</template>

<script>
export default {
    name: "CustomProductItem",

    props: {
        itemInfo: Object,
    },

    methods: {
        thumbUrl(url) {
            var videoId = url.match(/youtu\.be.*(\?v=|\/)(.{11})/).pop();
            if(videoId) {
                return "https://img.youtube.com/vi/"+videoId+"/0.jpg";
            }
        }
    },
}
</script>