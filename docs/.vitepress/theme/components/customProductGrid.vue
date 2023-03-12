<template>
    <section class="py-24">
        <div class="filters lg:sticky top-16 py-4 px-8">
            <div class="container flex flex-col lg:flex-row justify-between gap-y-4 gap-x-5">
                <div class="relative customBorder">
                    <input
                        class="w-full block py-2 pl-9 pr-4" 
                        type="text"
                        placeholder="Search"
                        v-model="search"
                    />
                    <span class="block absolute top-2/4 left-0 transform -translate-y-2/4 py-3 px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                </div>
                <div class="flex flex-col sm:flex-row items-center gap-5">
                    <div class="w-full sm:w-6/12 lg:w-auto customBorder px-4 py-2 flex items-center gap-2">
                        <p>
                            Filter:
                        </p>
                        <select 
                            class="bg-transparent text-sm capitalize"
                            v-model="tag"
                        >
                            <option value="">
                                All Tags
                            </option>
                            <option
                                v-for="item in page.frontmatter.productGrid.tagOptions" 
                                :key="item"
                                :value="item"
                            >
                                {{item}}
                            </option>
                        </select>
                    </div>
                    <div class="w-full sm:w-6/12 lg:w-auto customBorder px-4 py-2 flex items-center gap-2">
                        <p>
                            Sort:
                        </p>
                        <select 
                            class="bg-transparent text-sm"
                            v-model="sort"
                        >
                            <option value="new-to-old">
                                New to old
                            </option>
                            <option value="old-to-new">
                                Old to new
                            </option>
                            <option value="a-to-z">
                                From A to z
                            </option>
                            <option value="z-to-a">
                                From Z to A
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-8">
            <div class="container mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <CustomProductItem
                    v-if="sortedProduct.length > 0" 
                    v-for="item in sortedProduct"
                    :key="item.title"
                    :itemInfo="item"
                />
                <p v-else>
                    No match found!!
                </p>
            </div>
        </div>
    </section>
</template>

<style>
    .filters {
        top: var(--vp-nav-height);
        z-index: 999;
        background-color: var(--vp-c-bg);
    }
    .customBorder {
        border: 1px solid var(--vp-c-gutter);
    }
    select {
        color: var(--vp-c-text-2);
        cursor: pointer;
    }
    select option {
        background-color: var(--vp-c-bg);
    }
</style>

<script>
import products from '../../../../products.json'
import {useData} from "vitepress";

export default {
    data() {
        return {
            show: false,
            products: products,
            search: '',
            tag: '',
            sort: 'new-to-old',
        }
    },

    props: {
        tags: Array,
    },

    computed: {
        filteredProduct() {
            return this.products.filter(product => {
                if(this.tag) {
                    return product.isFeatured == false && 
                    product.title.toLowerCase().includes(this.search.toLowerCase()) &&
                    product.tags.indexOf(this.tag) !== -1    
                }else {
                    return product.isFeatured == false && 
                    product.title.toLowerCase().includes(this.search.toLowerCase())
                }
                
            })
        },
        sortedProduct() {
            if(this.sort == 'new-to-old'){
                return this.filteredProduct.slice().reverse();
            }
            else if(this.sort == 'old-to-new'){
                return this.filteredProduct;
            }
            else if(this.sort == 'a-to-z') {
                return this.filteredProduct.sort((a,b) => {
                    let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
                    if (fa < fb) {return -1}
                    if (fa > fb) {return 1}return 0
                })
            }
            else if(this.sort == 'z-to-a') {
                return this.filteredProduct.sort((a,b) => {
                    let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
                    if (fa > fb) {return -1}
                    if (fa < fb) {return 1}return 0
                })
            }
        }
    },
}
</script>

<script setup>
import {useData} from "vitepress";
const {page} = useData();
</script>