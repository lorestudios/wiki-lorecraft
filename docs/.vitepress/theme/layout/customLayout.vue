<template>
  <Layout>
    <template #home-hero-before>
      <CustomHero />
    </template>
    <template #home-features-before>
      <CustomCta 
        title="Thjis is title"
        desc="Ea aute laborum est commodo deserunt sint duis est. Veniam culpa laboris cupidatat pariatur irure proident ut enim ea reprehenderit duis elit. Proident cillum id ad occaecat. Cupidatat Lorem enim ea reprehenderit commodo commodo. Mollit laboris duis enim irure ex tempor esse qui sunt ipsum labore sint mollit aute."
        btnUrl="/"
        bgColor="green"
        textColor="white"
        bgImg="./images/logo.png"
        overlayOpacity="90"
      />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>