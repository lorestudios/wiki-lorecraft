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
                <div class="flex flex-col sm:flex-row items-center gap-8">
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
                                v-for="item in tags(pageProducts)" 
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
                            <option value="">
                                Default
                            </option>
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
            <div
                id="product-list"
                v-if="finalProducts(loadedProducts).length > 0" 
                :style="`gap: ${page.frontmatter.productGrid.itemsGap}`" 
                class="container mt-14 grid"
                :class="rwoClasses"
            >
                <CustomProductItem
                    v-for="(item, index) in finalProducts(loadedProducts)"
                    :key="index+':'+item.title"
                    :itemInfo="item"
                />
            </div>
            <div v-else class="container fadeIn bg-gray-100 my-10 py-20 text-xl font-medium text-center">
                No match found!!
            </div>
            <div ref="loadMore" class="container text-xl mt-14 font-medium text-center">
                <div v-if="finalProducts(loadedProducts).length > 0 && isLoaded<pageProducts.length" class="bluffing">
                    Loading more...
                </div>
                <div v-if="finalProducts(loadedProducts).length > 0 && isLoaded>=pageProducts.length" class="fadeIn flex flex-wrap items-center justify-center gap-2">
                    Showing all,
                    <a href="#product-list" class="inline-block customLink">back to top?</a>
                </div>
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
    .customLink {
        color: var(--vp-home-hero-name-color);
    }
    .customLink:hover {
        color: var(--vp-button-brand-hover-bg);
    }
</style>

<script>
import products from '../../../../products.json'
import {useData} from "vitepress";

export default {
    data() {
        return {
            page: useData(),
            show: false,
            products: products,
            search: '',
            tag: '',
            sort: '',
            willLoad: 9,
            isLoaded: 0,
            loadedProducts: [],
        }
    },

    props: {
        productType: {
            type: String,
            default: 'all',
        },
    },

    computed: {
        pageProducts(){
            if(this.productType=='marketplace') {
                return this.products.filter(product => !product.isFeatured && product.marketplace);    
            }else if(this.productType=='education') {
                return this.products.filter(product => !product.isFeatured && product.education);
            }else {
                return this.products.filter(product => !product.isFeatured);
            }
        },
        rwoClasses() {
            if(this.page.frontmatter.productGrid.itemsPerRow) {
                let itemNum = this.page.frontmatter.productGrid.itemsPerRow;
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
                return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
            }
        }
    },

    // created () {
    //     window.addEventListener('scroll', this.handleScroll);
    // },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        if(this.page.frontmatter.productGrid.defaultLoad) {
            this.willLoad = this.page.frontmatter.productGrid.defaultLoad;
        }
        this.loadProduct();
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        tags(productList) {
            const oldArr = productList.map(x => x.tags.map(y => y))
            const newArr = [];
            for(let i = 0; i<oldArr.length; i++) {
                for(let j = 0; j<oldArr[i].length; j++) {
                    newArr.push(oldArr[i][j]);
                } 
            } 
            return [ ...new Set(newArr) ]
        },
        finalProducts(givenProducts) {
            // filtering products
            let filteredProducts = [];
            if(this.tag) {
                filteredProducts = givenProducts.filter(
                    product => product.title.toLowerCase().includes(this.search.toLowerCase()) 
                    && product.tags.indexOf(this.tag) !== -1
                );
            }else {
                filteredProducts = givenProducts.filter(
                    product => product.title.toLowerCase().includes(this.search.toLowerCase())
                );
            }

            // sorting products
            let sortedProducts = [];
            if(this.sort == 'new-to-old'){
                sortedProducts = filteredProducts.slice().reverse();
            }
            else if(this.sort == 'old-to-new'){
                sortedProducts = filteredProducts;
            }
            else if(this.sort == 'a-to-z') {
                sortedProducts = filteredProducts.sort((a,b) => {
                    let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
                    if (fa < fb) {return -1}
                    if (fa > fb) {return 1}return 0
                })
            }
            else if(this.sort == 'z-to-a') {
                sortedProducts = filteredProducts.sort((a,b) => {
                    let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
                    if (fa > fb) {return -1}
                    if (fa < fb) {return 1}return 0
                })
            }else {
                sortedProducts = filteredProducts;
            }

            return sortedProducts;
        },
        handleScroll() {
            let screenHeight = window.innerHeight;
            let loadStart = this.$refs.loadMore.getBoundingClientRect().top;
            let limitHeight = (screenHeight*50)/100;

            if(screenHeight-loadStart > limitHeight && this.isLoaded < this.pageProducts.length){              
                this.loadProduct();
            }
        },
        loadProduct(){
            if(this.isLoaded <= 0) {
                this.loadedProducts = this.pageProducts.slice(0, this.willLoad);
                this.isLoaded = this.isLoaded + this.willLoad;
            }else {
                let lastIndex = this.isLoaded + this.willLoad;
                if(lastIndex > this.pageProducts.length) {
                    lastIndex = this.pageProducts.length
                }
                this.loadedProducts.push(...this.pageProducts.slice(this.isLoaded, lastIndex));
                this.isLoaded = lastIndex;
            }
        },
    },
}
</script>