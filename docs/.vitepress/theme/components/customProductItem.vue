<template>
    <div class="customBorder flex flex-col justify-between shadow-md">
        <div class="block">
            <figure class="relative h-60 bg-gray-200">
                <img
                    v-if="!itemInfo.videoLink && itemInfo.image"
                    class="w-full h-full object-cover"
                    :src="itemInfo.image"
                    alt="image.alt"
                />
                <img 
                    v-else-if="itemInfo.videoLink && thumbUrl(itemInfo.videoLink)"
                    class="w-full h-full object-cover" 
                    :src="thumbUrl(itemInfo.videoLink)" 
                />
                <a 
                    v-if="itemInfo.videoLink && thumbUrl(itemInfo.videoLink)" 
                    :href="itemInfo.videoLink" 
                    target="_blank"
                    class="customBg customHoverBg block hover:opacity-80 duration-300 absolute top-2/4 left-2/4 rounded-full pl-2.5 p-2 text-white transform -translate-x-2/4 -translate-y-2/4 z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                </a>
            </figure>
            <article class="p-4">
                <h3 v-if="itemInfo.title" class="text-xl md:text-2xl font-bold">
                    {{itemInfo.title}}
                </h3>
                <div
                    v-if="itemInfo.desc" 
                    class="mt-3 space-y-3"
                    v-html="itemInfo.desc"
                />
                <ul class="mt-3 flex items-center flex-wrap gap-1 text-sm italic">
                    <li class="font-bold">
                        Tags:
                    </li>
                    <li
                        v-for="tag in itemInfo.tags"
                        :key="tag"
                    >
                        {{tag}},
                    </li>
                </ul>
            </article>
        </div>
        <div class="block p-4 pt-2">
            <a href="" class="customBtn brand medium inline-block cursor-pointer relative overflow-hidden">
                Buy This    
            </a>
        </div>
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
            var videoId = url.match(/youtu\.be.*(\?v=|\/)(.{11})/);

            if(videoId) {
                videoId = videoId.pop()
                return "https://img.youtube.com/vi/"+videoId+"/0.jpg";
            }
        }
    },
}
</script>