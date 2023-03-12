<template>
    <Splide
        class="customBg py-20 text-white text-center md:text-left px-8" 
        :options="{ rewind: true }" 
        aria-label="My Favorite Images"
    >
        <SplideSlide
            v-for="item in featureProducts"
            :key="item.title"
            class="flex items-center"
        >
            <div class="container flex flex-col md:flex-row items-center gap-14 md:gap-10 lg:gap-14">
                <figure class="relative w-full md:w-6/12">
                    <img
                        v-if="!item.videoLink && item.image"
                        style="max-height: 60vh;"
                        class="w-6/12 md:w-auto mx-auto lg:ml-0"
                        :src="item.image"
                        alt="image.alt"
                    />
                    <img 
                        v-else-if="item.videoLink && thumbUrl(item.videoLink)"
                        class="w-full h-auto" 
                        :src="thumbUrl(item.videoLink)" 
                    />
                    <a 
                        v-if="item.videoLink && thumbUrl(item.videoLink)" 
                        :href="item.videoLink" 
                        target="_blank"
                        class="customBg customHoverBg block hover:opacity-80 duration-300 absolute top-2/4 left-2/4 rounded-full pl-3.5 p-3 transform -translate-x-2/4 -translate-y-2/4 z-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    </a>
                </figure>
                <article class="max-w-2xl md:max-w-full w-full md:w-6/12">
                    <h1 v-if="item.title" class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight lg:leading-tight">
                        {{item.title}}
                    </h1>
                    <div 
                        v-if="item.desc" 
                        class="mt-6 text-lg md:text-xl space-y-4" 
                        v-html="item.desc"
                    />
                    <a
                        v-if="item.btnLink" 
                        :href="item.btnLink" 
                        class="carouselBtn mt-7 inline-block ctaBtn bg-transparent border-2 border-white py-3 px-8 rounded-full font-medium text-lg md:text-xl duration-300 transform hover:scale-95 cursor-pointer"
                    >
                        <span v-if="item.btnText">{{item.btnText}}</span>
                        <span v-else>Buy This</span>
                    </a>
                </article>
            </div>
        </SplideSlide>
    </Splide>
</template>

<style>
    .carouselBtn:hover {
        color: var(--vp-c-brand);
        @apply bg-white;
    }
    .splide__track {
        @apply pb-16;
    }
    .splide__pagination {
        @apply pb-16;
    }
    .splide__arrow {
        @apply text-white text-xl bg-black bg-opacity-50 hover:bg-opacity-80 duration-300;
    }
    .splide__arrow svg {
        @apply fill-white;
    }
</style>

<script>
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/core';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import products from '../../../../products.json'


export default {
    data() {
        return {
            show: false,
            products: products,
        }
    },

    computed: {
        featureProducts() {
            return this.products.filter(product => product.isFeatured)
        },
    },

    components: {
        Splide,
        SplideSlide,
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

    setup() {
        const options = {
            rewind: true,
            gap   : '1rem',
        };

        return { options };
    },
}
</script>