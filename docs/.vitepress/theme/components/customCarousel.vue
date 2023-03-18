<template>
    <section class="customBg pt-20 pb-32 text-white text-center md:text-left px-8">
        <carousel
            :items-to-show="1"
            :autoplay="5000"
            :mouseDrag="true"
        >
            <slide 
                v-for="item in featureProducts"
                :key="item.title"
            >
                <div class="container relative duration-300 hover:opacity-80">
                    <a :href="item.btnLink" class="block absolute top-0 left-0 bottom-0 right-0 opacity-0 z-10" />
                    <img
                        v-if="!item.videoLink && item.image"
                        class="w-full aspect-video object-cover"
                        :src="item.image"
                        :alt="item.title"
                    />
                    <img 
                        v-else-if="item.videoLink && thumbUrl(item.videoLink)"
                        class="w-full aspect-video object-cover" 
                        :src="thumbUrl(item.videoLink)"
                        :alt="item.title" 
                    />
                    <div class="sm:scale-150 absolute top-2/4 left-2/4 rounded-full pl-2.5 p-2 transform -translate-x-2/4 -translate-y-2/4 z-10">
                        <CustomModal
                            v-if="item.videoLink"
                            :videoUrl="item.videoLink"
                            :videoTitle="item.title"
                            theme="brand"
                            :playBtn="true"
                        />
                    </div>
                    <h1 
                        v-if="item.title" 
                        class="text-left max-w-full px-5 py-3 bg-black bg-opacity-80 static md:absolute right-0 bottom-0 text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight sm:leading-tight lg:leading-tight"
                    >
                        {{item.title}}
                    </h1>
                </div>
            </slide>

            <template #addons>
                <navigation class="mt-0" />
                <pagination class="mt-0 absolute -bottom-14 left-0 right-0" />
            </template>
        </carousel>
    </section>
</template>

<style>
    .carousel__next,
    .carousel__prev {
        @apply bg-white bg-opacity-70 hover:bg-opacity-100 p-1.5 rounded-full duration-300;
    }
</style>

<script>
import products from '../../../../products.json'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


export default {
    data() {
        return {
            show: false,
            products: products,
        }
    },

    props: {
        productType: {
            type: String,
            default: 'all',
        },
    },

    computed: {
        // "marketPlace": true,
        // "education": false,
        featureProducts() {
            if(this.productType == 'marketplace'){
                return this.products.filter(product => product.isFeatured && product.marketplace)
            }else if(this.productType == 'education'){
                return this.products.filter(product => product.isFeatured && product.education)
            }else {
                return this.products.filter(product => product.isFeatured)
            }
        },
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

    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}
</script>