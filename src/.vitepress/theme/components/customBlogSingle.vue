<template>
    <section class="px-8 border-t pb-20">
        <div class="container">
            <h1 v-if="postItem.title" class="mt-10 text-3xl md:text-4xl lg:text-5xl font-bold">
                {{postItem.title}}
            </h1>
            <p class="mt-5 opacity-60">
                Date: {{ itemDate.getDate() }}/{{ itemDate.getMonth() }}/{{itemDate.getFullYear() }}
            </p>
            <figure v-if="postItem.images[0]" class="customSoftBg mt-12 w-full aspect-video">
                <img 
                    class="w-full h-full object-cover object-center" 
                    :src="postItem.images[0]" 
                />
            </figure>
            <div class="mt-10 space-y-10">
                <div v-if="postItem.desc">
                    <h2 class="text-xl md:text-2xl lg:text-3xl font-bold">
                        Description
                    </h2>
                    <article
                        class="mt-4"
                        v-html="postItem.desc"
                    />
                </div>
                
                <CustomLightbox :images="postItem.images" :imageAlt="postItem.title" />

                <div v-if="postItem.content">
                    <h2 class="text-xl md:text-2xl lg:text-3xl font-bold">
                        Content
                    </h2>
                    <article
                        class="mt-4"
                        v-html="postItem.content"
                    />
                </div>

                <CustomRelated :relatedList="relatedPost" productType="blog" productLimit="4" heading="Related Posts" />
            </div>
        </div>
    </section>
</template>

<script>
    import posts from '../../../../blog.json'

    export default {
        props: {
            postUrl: String,
        },

        computed: {
            postItem() {
                return posts.find((item) => {return item.url === this.postUrl});
            },
            itemDate() {
                return new Date(this.postItem.date);
            },
            relatedPost() {
                return posts.filter(
                    post => post.tags.some(t => this.postItem.tags.indexOf(t) !== -1)
                    && post.url !== this.postItem.url
                );
            }
        },

        head() {
            return {
                title: this.postItem.title,
            }
        },
    }
</script>