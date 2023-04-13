<template>
    <section class="px-8 border-t pb-20">
        <div class="container">
            <h1 v-if="productItem.title" class="mt-10 text-3xl md:text-4xl lg:text-5xl font-bold">
                {{productItem.title}}
            </h1>
            <p class="mt-5 opacity-60">
                Date: {{ itemDate.getDate() }}/{{ itemDate.getMonth() }}/{{itemDate.getFullYear() }}
            </p>
            <figure v-if="productItem.images[0]" class="customSoftBg mt-12 w-full aspect-video">
                <img 
                    class="w-full h-full object-cover object-center" 
                    :src="productItem.images[0]" 
                />
            </figure>
            <div class="mt-10 space-y-10">
                <div v-if="productItem.desc">
                    <h2 class="text-xl md:text-2xl lg:text-3xl font-bold">
                        Description
                    </h2>
                    <article
                        class="mt-4"
                        v-html="productItem.desc"
                    />
                </div>
                
                <CustomLightbox :images="productItem.images" :imageAlt="productItem.title" />

                <div v-if="productItem.content">
                    <h2 class="text-xl md:text-2xl lg:text-3xl font-bold">
                        Content
                    </h2>
                    <article
                        class="mt-4"
                        v-html="productItem.content"
                    />
                </div>

                <CustomRelated :relatedList="relatedPost" :productType="productType" productLimit="4" heading="Related Products" />
            </div>
        </div>
    </section>
</template>

<script>
    import products from '../../../../products.json'

    export default {
        props: {
            postUrl: String,
            productType: String, 
        },

        computed: {
            productItem() {
                return products.find((item) => {return item.url === this.postUrl});
            },
            itemDate() {
                return new Date(this.productItem.date);
            },
            relatedPost() {
                if(this.productType=='education'){
                    return products.filter(
                        product => product.tags.some(t => this.productItem.tags.indexOf(t) !== -1)
                        && product.url !== this.productItem.url && product.education === true
                    );
                }else if(this.productType=='marketplace') {
                    return products.filter(
                        product => product.tags.some(t => this.productItem.tags.indexOf(t) !== -1)
                        && product.url !== this.productItem.url && product.marketplace === true
                    );
                }else {
                    return products.filter(
                        product => product.tags.some(t => this.productItem.tags.indexOf(t) !== -1)
                        && product.url !== this.productItem.url
                    );
                }
            }
        },

        head() {
            return {
                title: this.productItem.title,
            }
        },
    }
</script>