<template>
    <section v-if="page.frontmatter.customFeature" class="customBorderTop py-24 px-8">
        <div class="container">
            <div clas="max-w-xl bg-red-400 text-center mx-auto">
                <h2 v-if="page.frontmatter.customFeature.heading" class="text-center text-4xl md:text-5xl font-bold">
                    {{page.frontmatter.customFeature.heading}}
                </h2>
                <p v-if="page.frontmatter.customFeature.description" class="mt-5 text-center text-lg: md:text-xl">
                    {{page.frontmatter.customFeature.description}}
                </p>
            </div>
            <div 
                v-if="page.frontmatter.customFeature.items" 
                class="mt-16 grid gap-8"
                :class="rwoClasses"
            >
                <CustomProductFeatureBox
                    v-for="(item, index) in page.frontmatter.customFeature.items"
                    :key="index+item.title" 
                    :iconImg="item.iconImg"
                    :title="item.title"
                    :text="item.text"
                    :link="item.link"
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
import {useData} from "vitepress";

export default {
    data() {
        return {
            show: false,
            page: useData(),
        }
    },

    computed: {
        rwoClasses() {
            if(this.page.frontmatter.customFeature.itemPerRow) {
                let itemNum = this.page.frontmatter.customFeature.itemPerRow;
                if(itemNum == 12) {
                    return 'grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12';
                }else if(itemNum == 11) {
                    return 'grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-10';
                }else if(itemNum == 10) {
                    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10';
                }else if(itemNum == 9) {
                    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9';
                }else if(itemNum == 8) {
                    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8';
                }else if(itemNum == 7) {
                    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7';
                }else if(itemNum == 6) {
                    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6';
                }else if(itemNum == 5) {
                    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5';
                }else if(itemNum == 4) {
                    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
                }else if(itemNum == 3) {
                    return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
                }else if(itemNum == 2) {
                    return 'grid-cols-1 sm:grid-cols-1 md:grid-cols-2';
                }else {
                    return 'grid-cols-1';
                }
            }else {
                return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
            }
        }
    }
}
</script>