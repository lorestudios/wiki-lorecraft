<template>
    <div class="container">
        <h3 v-if="heading" class="font-bold text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
            {{ heading }}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <CustomProductItem
                v-for="(item, index) in relatedList.slice(0, Number(productLimit))"
                :key="index+':'+item.title"
                :itemInfo="item"
                :productType="productType"
            />
        </div>
    </diV>
</template>

<script>
    export default {
        props: {
            heading: String,
            relatedList: Array,
            productType: String,
            productLimit: {
                type: String,
                default: '4',
            }
        }
    }
</script>