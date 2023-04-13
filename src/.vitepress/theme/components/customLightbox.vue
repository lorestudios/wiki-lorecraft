<template>
  <div class="py-10">
    <div class="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="(image, index) in galleryImages"
        :key="index"
        class="cursor-pointer w-full aspect-video overflow-hidden duration-300 hover:opacity-80"
      >
        <img
          :src="image"
          :alt="imageAlt+' '+index"
          @click="showLightbox(index)"
          class="w-full h-full object-cover object-center"
        />
      </div>
    </div>
    <div
      style="z-index: 99999999"
      v-if="showingLightbox"
      class="fixed top-0 left-0 w-full h-full lightBoxBg flex justify-center items-center"
      @click.self="hideLightbox"
    >
      <span @click="hideLightbox" class="block text-white fixed top-3 md:top-4 right-3 md:right-4 bg-red-400 z-50 p-1 rounded-full cursor-pointer hover:opacity-80 duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
      </span>

      <figure class="container px-8">
        <img
          :data-aos="'fade-'+fadeDirection"
          style="max-height: 80vh;"
          class="w-full h-full object-contain"
          :src="galleryImages[currentImageIndex]"
          :alt="imageAlt+' '+currentImageIndex"
          :key="imageAlt+currentImageIndex"
        />
      </figure>
      
      <button @click="prevImage" class="customBtn brand rounded-full fixed top-1/2 -mt-6 left-10 w-12 h-12 flex justify-center items-center text-3xl" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button @click="nextImage" class="customBtn brand rounded-full fixed top-1/2 -mt-6 right-10 w-12 h-12 flex justify-center items-center text-3xl" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    imageAlt: {
      type: String,
      default: 'item-image',
      required: false,
    }
  },
  data() {
    return {
      showingLightbox: false,
      currentImageIndex: 0,
      fadeDirection: 'up',
    };
  },

  computed: {
    galleryImages() {
      return this.images.slice(1);
    }
  },

  methods: {
    showLightbox(index) {
      this.currentImageIndex = index;
      this.showingLightbox = true;
      document.body.style.overflow = "hidden"; // prevent scrolling when lightbox is open
    },
    hideLightbox() {
      this.showingLightbox = false;
      document.body.style.overflow = ""; // allow scrolling again
    },
    nextImage() {
      this.fadeDirection = 'left';
      this.currentImageIndex = (this.currentImageIndex + 1) % this.galleryImages.length;
    },
    prevImage() {
      this.fadeDirection = 'right';
      this.currentImageIndex = (this.currentImageIndex + this.galleryImages.length - 1) % this.galleryImages.length;
    },
  },
};
</script>

<style>
  .lightBoxBg {
    background-color: #545454b3;
  }
</style>