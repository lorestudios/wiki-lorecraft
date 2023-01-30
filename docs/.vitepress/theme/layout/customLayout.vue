<template>
  <Layout>
    <template #home-hero-before>
      <CustomHero />
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
      />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import {useData} from "vitepress";

const { Layout } = DefaultTheme

const {page} = useData();
</script>