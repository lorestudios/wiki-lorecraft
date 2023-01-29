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
                :style="textStyle(textColor, false)" 
            >
                {{title}}
            </h2>
            <article 
                v-if="desc" 
                class="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-normal md:leading-normal" 
                :style="textStyle(textColor, false)"
                v-html="desc"
            />
            <div v-if="btnUrl" class="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a 
                    href="" 
                    class="ctaBtn bg-transparent border-2 border-white py-3 px-8 rounded-full font-medium text-lg md:text-xl duration-300 transform hover:scale-95"
                    :style="textStyle(textColor, false)"
                >
                    {{btnText}}
                </a>
                <button 
                    @click="copyURL(btnUrl)" 
                    class="bg-white p-3 rounded-full text-red-400 cursor-pointer border-2 duration-300 transform hover:scale-95"
                    :style="textStyle(textColor, true)"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                    </svg>
                </button>
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
        textStyle(textColor, invert) {
            if(!invert) {
                return {
                    'color': `${textColor}`,
                    'border-color': `${textColor}`,
                }
            }else {
                return {
                    'background-color': `${textColor}`,
                    'color': `${this.bgColor}`,
                }
            }
            
        }
    },
}
</script>