<template>
  <section class="main-section" :class="{ relative: isTouchScreen }">
    <MainSectionInfo :class="{ hidden: !isMainSectionVisible }" />
    <div class="gallery">
      <MainSectionGallery
        :class="{ hidden: !isMainSectionVisible }"
        @mouseover="toggleCheckScroll(false)"
        @mouseleave="toggleCheckScroll(true)"
      />
    </div>

    <video preload="auto" autoplay muted loop playsinline class="bg-video">
      <source type="video/webm" src="/video/main-bg.webm" />
      <source type="video/mp4" src="/video/main-bg.mp4" />
    </video>
  </section>
</template>
<script setup>
  import { onMounted, ref, watch } from 'vue';
  import { MainSectionGallery, MainSectionInfo } from '@/components/MainSection';

  const isTouchScreen = ref(null);

  const CheckTouchScreen = () => {
    isTouchScreen.value =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
  };
  CheckTouchScreen();

  const emit = defineEmits(['isVisible']);

  const isMainSectionVisible = ref(true);
  const needToCheckScroll = ref(true);

  const toggleCheckScroll = (value) => {
    needToCheckScroll.value = value;
  };

  const toggleLockScreen = (value) => {
    const body = document.body;
    value ? body.classList.add('lock') : body.classList.remove('lock');
  };

  watch(isMainSectionVisible, (newValue) => {
    if (!isTouchScreen.value) {
      emit('isVisible', newValue);
      if (newValue) {
        toggleLockScreen(newValue);
      } else {
        setTimeout(() => {
          toggleLockScreen(newValue);
        }, 3000);
      }
    }
  });

  onMounted(() => {
    if (!isTouchScreen.value) {
      toggleLockScreen(isMainSectionVisible.value);

      window.addEventListener('wheel', (e) => {
        if (needToCheckScroll.value && window.pageYOffset === 0) {
          if (e.deltaY < 0) {
            // scroll Up
            isMainSectionVisible.value = true;
          } else if (e.deltaY > 0) {
            // scroll Down
            isMainSectionVisible.value = false;
          }
        }
      });
    }
  });
</script>
<style scoped>
  .main-section {
    min-height: 100vh;
    background: #000;
    display: flex;
    justify-content: space-between;
    position: fixed;
    overflow: hidden;
    width: 100%;
  }
  .main-section.relative {
    position: relative;
  }

  .bg-video {
    opacity: 0.7;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 0;
  }
  @media (max-width: 992px) {
    .gallery {
      display: none;
    }
  }
</style>