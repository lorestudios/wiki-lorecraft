<template>
    <button v-if="tourBtn" @click="openModal" :class="{'brand': theme=='brand', 'alt': theme=='alt'}" class="customBtn medium flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
        {{ buttonText }}
    </button>
    <button v-if="playBtn" @click="openModal" :class="{'brand': theme=='brand', 'alt': theme=='alt'}" class="customBtn pl-3 p-2.5 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
    </button>
    <button v-if="!tourBtn && !playBtn" @click="openModal" :class="{'brand': theme=='brand', 'alt': theme=='alt'}" class="customBtn medium">
        {{ buttonText }}
    </button>
    
    <Teleport to="body">
        <div v-if="show" class="modalBox fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
            <span @click="closeModal" class="modalBg fixed top-0 left-0 right-0 bottom-0 z-0" />
            <span @click="closeModal" class="block text-white fixed top-3 md:top-4 right-3 md:right-4 bg-red-400 z-50 p-1 rounded-full cursor-pointer hover:opacity-80 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
            <div class="sticky z-10 iframeContainer w-10/12 md:w-8/12 aspect-video shadow-md modalBg flex items-center justify-center">
                <iframe
                    v-if="finalUrl"
                    width="100%"
                    height="100%"
                    :src="finalUrl" 
                    :title="videoTitle" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                ></iframe>
                <div v-else>
                    <p class="text-white">
                        Now video URL is set yet.
                        <span @click="closeModal" class="underline text-red-400 inline-block cursor-pointer hover:opacity-80 duration-300">
                            Close Modal?
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style>
    .modalBox {
        z-index: 9999;
    }
    .modalBg {
        background-color: #545454b3;
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
        theme: {
            type: String,
            default: 'brand',
        },
        videoUrl: String,
        videoTitle: {
            type: String,
            default: "This video title",
        },
        buttonText: {
            type: String,
            default: "Tour",
        },
        tourBtn: {
            type: Boolean,
            defalt: false,             
        },
        playBtn: {
            type: Boolean,
            defalt: false,             
        },
    },

    computed: {
        finalUrl() {
            var videoId = this.videoUrl.match(/youtu\.be.*(\?v=|\/)(.{11})/).pop();
            if(videoId) {
                return 'https://www.youtube.com/embed/'+videoId+'?autoplay=1';
            }
        }
    },

    methods: {
        openModal() {
            this.show = true;
        },
        closeModal() {
            this.show = false;
        }
    },
}
</script>