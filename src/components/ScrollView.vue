<template>
  <div class="scroll-view">
    <Collection />
    <TabsSection />
    <Faq />
    <Containers />
    <Licenses />
    <Social />
    <Subscribe />
    <Footer />
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
  } from '@/components';
</script>
<style scoped>
  .scroll-view {
    position: relative;
    color: #fff;
    backdrop-filter: blur(20px);
    transform: translateY(100%);
    transition: transform 2s ease-in-out 0s;
    padding-top: 94px;
    background: rgba(0, 0, 0, 0.8);
  }
  .scroll-view.visible {
    transform: translateY(0);
    transition: transform 2s ease-in-out 1s;
  }
</style>