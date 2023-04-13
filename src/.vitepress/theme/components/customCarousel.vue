<template>
    <section v-if="featureProducts.length" class="customBg pt-20 pb-32 text-white text-center md:text-left px-8">
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
                    <a v-if="item.external" :href="processedPath(item)" target="_blank" class="block absolute top-0 left-0 bottom-0 right-0 opacity-0 z-10" />
                    <a v-else :href="processedPath(item)" class="block absolute top-0 left-0 bottom-0 right-0 opacity-0 z-10" />
                    <img
                        v-if="!item.videoLink && item.images[0]"
                        class="w-full aspect-video object-cover"
                        :src="item.images[0]"
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
                        {{item.title}} {{new Date(item.date).getDate()}}
                    </h1>
                </div>
            </slide>

            <template #addons>
                <navigation class="mt-0 customNav" />
                <pagination class="mt-0 absolute -bottom-14 left-0 right-0" />
            </template>
        </carousel>
    </section>
</template>

<style>
    .carousel__next,
    .carousel__prev{
        @apply h-full opacity-50 hover:opacity-100 duration-300 text-white hover:text-white;
    }
    .carousel__next svg,
    .carousel__prev svg{
        @apply inline-block border border-white;
    }

    .customNav {
        --vc-nav-width: 50px;
        --vc-icn-width: 50px;
    }
</style>

<script>
import products from '../../../../products.json'
import posts from '../../../../blog.json'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


export default {
    data() {
        return {
            products: products,
            posts: posts,
        }
    },

    props: {
        featuredItems: {
            type: String,
            required: false,
        },
        productType: {
            type: String,
            default: 'all',
        },
    },

    computed: {
        pageItems() {
            if(this.productType == 'marketplace'){
                return this.products.filter(product => product.marketplace).sort( ( a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });
            }else if(this.productType == 'education'){
                return this.products.filter(product => product.education).sort( ( a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });
            }else if(this.productType == 'blog'){
                return this.posts.sort( ( a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });
            }else {
                return this.products.sort( ( a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });
            }
        },
        featureProducts() {
            if(!this.featuredItems){
                return this.pageItems.filter(item => item.isFeatured);
            }else if(this.featuredItems == '0' || this.featuredItems == 'none') {
                return 0;
            }else {
                let featuredLimit = Number(this.featuredItems);

                if(featuredLimit) {
                    let featuredItems = this.pageItems.filter(item => item.isFeatured);

                    if(featuredItems.length >= featuredLimit) {
                        return featuredItems.slice(0, Number(featuredLimit));
                    }else {    
                        let notFeatured = this.pageItems.filter(item => item.isFeatured === false);
                        featuredItems = featuredItems.concat(notFeatured);
                        return featuredItems.slice(0, Number(featuredLimit));
                    }
                }else {
                    console.log('invalid featured items');
                    return 0;
                }
            }

            let allFeaturedProducts = [];
            return 0;
        },
    },

    methods: {
        thumbUrl(url) {
            var videoId = url.match(/youtu\.be.*(\?v=|\/)(.{11})/);

            if(videoId) {
                videoId = videoId.pop()
                return "https://img.youtube.com/vi/"+videoId+"/0.jpg";
            }
        },
        processedPath(item) {
            if(item.url) {
                if(item.external) {
                    return item.url;
                }else {
                    if(this.productType == 'blog'){
                        return '/blog/'+item.url
                    }else if(this.productType == 'marketplace'){
                        return '/marketplace/'+item.url
                    }else if(this.productType == 'education'){
                        return '/education/'+item.url
                    }else {
                        return "/404"        
                    }
                }
            }else {
                return "/404"
            }
        },
    },

    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}
</script>