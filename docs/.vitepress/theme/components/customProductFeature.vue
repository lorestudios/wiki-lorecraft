<template>
    <section class="customBorderTop py-24 px-8">
        <div class="container">
            <div clas="max-w-xl bg-red-400 text-center mx-auto">
                <h2 class="text-center text-4xl md:text-5xl font-bold">
                    Feature section
                </h2>
                <p class="mt-5 text-center text-lg: md:text-xl">
                    This is short description right here. And this is optional;
                </p>
            </div>
            <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <CustomProductFeatureBox 
                    iconImg="./../images/community.png"
                    title="Friendly Community"
                    text="Our community supports each other to be the best builders, level designers, and content creators we can be. Join us on our friendly discord server!"
                    link="/"
                />
                <CustomProductFeatureBox 
                    iconImg="./../images/community.png"
                    title="Friendly Community"
                    text="Our community supports each other to be the best builders, level designers, and content creators we can be. Join us on our friendly discord server!"
                    link="/"
                />
                <CustomProductFeatureBox 
                    iconImg="./../images/community.png"
                    title="Friendly Community"
                    text="Our community supports each other to be the best builders, level designers, and content creators we can be. Join us on our friendly discord server!"
                    link="/"
                />
                <CustomProductFeatureBox 
                    iconImg="./../images/community.png"
                    title="Friendly Community"
                    text="Our community supports each other to be the best builders, level designers, and content creators we can be. Join us on our friendly discord server!"
                    link="/"
                />
            </div>
        </div>
    </section>
</template>

<style>
    .customBorderTop {
        border-top: 1px solid var(--vp-c-gutter);
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
        videoUrl: String,
    },
}
</script>