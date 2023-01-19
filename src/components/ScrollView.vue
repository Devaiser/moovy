<template>
  <div class="scroll-view" :class="{ touch: isTouchScreen }">
    <div class="media-gallery">
      <MainSectionGallery />
    </div>
    <Collection />
    <TabsSection />
    <!--  <Faq />
    <Containers />
    <Licenses />
    <Roadmap />
    <Social />
    <Subscribe />
    <Footer /> -->
  </div>
</template>
<script setup>
  import {
    Collection,
    TabsSection,
    Faq,
    Containers,
    Licenses,
    Social,
    Footer,
    Subscribe,
    Roadmap,
  } from '@/components';
  import { MainSectionGallery } from '@/components/MainSection';
  import { ref } from 'vue';

  const isTouchScreen = ref(null);

  const CheckTouchScreen = () => {
    isTouchScreen.value =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
  };
  CheckTouchScreen();
</script>
<style scoped>
  .scroll-view {
    position: relative;
    color: #fff;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    transform: translateY(100%);
    transition: transform 2s ease-in-out 0s;
    padding-top: 94px;
    background: rgba(0, 0, 0, 0.8);
  }
  .scroll-view.visible {
    transform: translateY(0);
    transition: transform 2s ease-in-out 1s;
  }
  .scroll-view.touch {
    transform: translateY(0);
  }
  .media-gallery {
    display: none;
  }
  @media (max-width: 992px) {
    .media-gallery {
      display: block;
    }
    .scroll-view {
      padding-top: 0;
    }
  }
</style>