<template>
    <section
        id="customCta" 
        class="relative py-24 my-24 bg-cover bg-center bg-no-repeat"
        :style="bgStyle(bg_img, bgColor)"
    >
        <span
            v-if="bg_img"
            :style="overlayStyle(bgColor, overlayOpacity)" 
            class="absolute top-0 left-0 right-0 bottom-0 bg-red-400" 
        />
        <div class="container sticky z-10 text-center">
            <h2 
                v-if="title" 
                class="text-4xl md:text-5xl font-bold"
                :style="textStyle(textColor)" 
            >
                {{title}}
            </h2>
            <article 
                v-if="desc" 
                class="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-normal md:leading-normal" 
                :style="textStyle(textColor)"
                v-html="desc"
            />
            <div v-if="btnUrl" class="mt-10 flex flex-wrap items-center justify-center gap-4">
                
                <a  
                    v-if="allowCopy == 'true' || allowCopy == 'True'"
                    class="ctaBtn bg-transparent border-2 border-white py-3 px-8 rounded-full font-medium text-lg md:text-xl duration-300 transform hover:scale-95 cursor-pointer"
                    :style="textStyle(textColor)"
                    @click="copyURL(btnUrl)"
                >
                    {{btnText}}
                </a>

                <a 
                    v-else
                    :href="btnUrl" 
                    class="ctaBtn bg-transparent border-2 border-white py-3 px-8 rounded-full font-medium text-lg md:text-xl duration-300 transform hover:scale-95 cursor-pointer"
                    :style="textStyle(textColor)"
                >
                    {{btnText}}
                </a>
            </div>
        </div>
    </section>
</template>

<style>
    .content #customCta {
        @apply py-20 px-10 rounded-md overflow-hidden;
    }
    .content #customCta h2 {
        @apply py-0 my-0 border-none text-4xl;
    }
    .content #customCta article {
        @apply mt-10 py-0 border-none text-lg;
    }
    .content #customCta article p{
        @apply mt-0 py-0 border-none text-lg;
    }

    .content #customCta .ctaBtn{
        @apply text-base;
        transition: 0.3s;
    }
</style>


<script>
export default {
    name: "cta",

    props: {
        title: String,
        desc: String,
        btnText: {
            type: String,
            default: "Learn More",
        },
        btnUrl: String,
        allowCopy: {
            type: String,
            default: 'false',
        },
        bgImg: String,
        bgColor: {
            type: String,
            default: "var(--vp-c-brand)",
        },
        overlayOpacity: {
            type: String,
            default: "90",
        },
        textColor: {
            type: String,
            default: "white",
        },
    },

    computed: {
        bg_img() {
            if (this.bgImg) {
                return this.bgImg;
            }
        },
    },

    methods: {
        async copyURL(mytext) {
            try {
                await navigator.clipboard.writeText(mytext);
                alert('Link copied to clipboard');
            } catch($e) {
                alert('Cannot copy');
            }
        },
        bgStyle(bgImg, bgColor) {
            return {
                'background-image': `url(${bgImg})`,
                'background-color': `${bgColor}`
            }
        },
        overlayStyle(ovColor, ovOpacity) {
            return {
                'background-color': `${ovColor}`,
                'opacity': `${ovOpacity}%`
            }
        },
        textStyle(textColor) {
            return {
                'color': `${textColor}`,
                'border-color': `${textColor}`,
            }
        }
    },
}
</script>