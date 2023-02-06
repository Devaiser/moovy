<template>
  <div class="preloader" :class="{ active: isVisible }">
    <div class="loader">
      <video preload="metadata" autoplay muted playsinline loop>
        <source type="video/mp4" src="/video/loader.mp4" />
      </video>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    isVisible: {
      type: Boolean,
      required: true,
    },
  });
</script>
<style scoped>
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease-in-out 0s;
  }
  .preloader.active {
    opacity: 1;
    visibility: visible;
  }
  .loader video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 556px) {
    .loader {
      width: 200px;
    }
  }
</style>