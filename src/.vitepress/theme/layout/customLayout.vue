<template>
  <Layout>
    <template #home-hero-before>
      <CustomHero 
        :name="page.frontmatter.customHero.name"
        :text="page.frontmatter.customHero.text"
        :tagline="page.frontmatter.customHero.tagline"
        :image="page.frontmatter.customHero.image"
        :actions="page.frontmatter.customHero.actions"
        :modalButton="page.frontmatter.customHero.modalButton"
      />
    </template>
    <template #home-features-before>
      <CustomCta 
        :title="page.frontmatter.customCta.title"
        :desc="page.frontmatter.customCta.desc"
        :btnUrl="page.frontmatter.customCta.btnUrl"
        :btnText="page.frontmatter.customCta.btnText"
        :bgColor="page.frontmatter.customCta.bgColor"
        :textColor="page.frontmatter.customCta.textColor"
        :bgImg="page.frontmatter.customCta.bgImg"
        :overlayOpacity="page.frontmatter.customCta.overlayOpacity"
        :marginTop="page.frontmatter.customCta.marginTop"
        :marginBottom="page.frontmatter.customCta.marginBottom"
        :allowCopy="page.frontmatter.customCta.allowCopy"
      />
    </template>
    <template #layout-bottom>
      <button v-if="showScrollToTop" @click="scrollToTop" style="z-index: 999999;" class="fadeIn customBtn brand fixed bottom-10 right-10 p-2 rounded-full shadow-md" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
        </svg>
      </button>
    </template>
  </Layout>
</template>

<style>  
  #content {
    height: 200px; 
    overflow: auto; 
    border: 1px solid red; 
    padding: 0 10px;
  }
</style>

<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'
import DefaultTheme from 'vitepress/theme'
import {useData} from "vitepress";
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Layout } = DefaultTheme;
const {page} = useData();
const showScrollToTop = ref(false)

const handleScroll = () => {
  if(window.top.scrollY > 200) {
    showScrollToTop.value = true
  }else {
    showScrollToTop.value = false
  }
}
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
onMounted(() => {
  AOS.init();
  window.addEventListener('scroll', handleScroll);
})
onUpdated(() => {
  AOS.init();
}),
onUnmounted(() => {
  window.addEventListener('scroll', handleScroll);
}) 
</script>