<template>
  <section class="customHero VPHero has-image VPHomeHero">
    <div
      class="container flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-10 xl:gap-12"
    >
      <article class="w-full lg:w-7/12 text-center lg:text-left">
        <h1>
          <span
            class="customName block text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight sm:leading-tight lg:leading-tight"
          >
            {{ page.frontmatter.customHero.name }}
          </span>
          <span
            class="customText block text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight lg:leading-tight"
          >
            {{ page.frontmatter.customHero.text }}
          </span>
        </h1>
        <div
          class="customTagline pt-3 text-lg sm:text-xl lg:text-2xl font-medium leading-normal sm:leading-normal lg:leading-normal max-w-xl mx-auto lg:ml-0"
        >
          {{ page.frontmatter.customHero.tagline }}
        </div>
        <div
          class="mt-8 flex gap-3 items-center justify-center lg:justify-start flex-wrap"
        >
          <CustomModal
            v-if="page.frontmatter.customHero.modalButton"
            :buttonText="page.frontmatter.customHero.modalButton.buttonText"
            :videoUrl="page.frontmatter.customHero.modalButton.videoUrl"
            :videTitle="page.frontmatter.customHero.modalButton.videoTitle"
            :theme="page.frontmatter.customHero.modalButton.theme"
          />

          <a
            v-for="item in page.frontmatter.customHero.actions"
            :href="item.link"
            class="customBtn medium"
            :class="{brand: item.theme == 'brand', alt: item.theme == 'alt'}"
          >
            <img class="customBtn medium" :src="item.src" :alt="item.alt" />
            {{ item.text }}
          </a>
        </div>
      </article>
      <figure class="w-full lg:w-5/12">
        <img
          class="w-6/12 sm:w-5/12 mx-auto lg:w-auto"
          :src="page.frontmatter.customHero.image.src"
          :alt="page.frontmatter.customHero.image.alt"
        />
      </figure>
    </div>
  </section>
</template>

<style>
  .customHero {
    margin-top: calc(
      (var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1
    );
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px)
      24px 60px;
  }

  @media only screen and (min-width: 640px) {
    .customHero {
      padding: calc(
          var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px
        )
        48px 75px;
    }
  }

  @media only screen and (min-width: 960px) {
    .customHero {
      padding: calc(
          var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px
        )
        64px 75px;
    }
  }

  .customName {
    color: var(--vp-home-hero-name-color);
  }

  .customText {
    color: var(--vp-c-text-1);
  }
  .customTagline {
    white-space: pre-wrap;
    color: var(--vp-c-text-2);
  }
</style>

<script setup>
import {useData} from "vitepress";
const {page} = useData();
</script>
