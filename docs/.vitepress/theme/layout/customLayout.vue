<template>
  <Layout>
    <template #home-hero-before>
      <CustomHero />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>