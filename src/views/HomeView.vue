<template>
  <MainSection @isVisible="mainSectionVisibility" />
  <ScrollView
    v-if="isScrollViewVisible"
    :class="{ visible: !isMainSectionVisible }"
  />
  <Preloader :isVisible="isPreloaderVisible" />
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { MainSection } from '@/components/MainSection';
  import { ScrollView, Preloader } from '@/components';
  import { useScrollLock } from '@vueuse/core';

  const el = ref(document.body);
  const isLocked = useScrollLock(el);

  const isTouchScreen = ref(null);

  const CheckTouchScreen = () => {
    isTouchScreen.value =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
  };

  CheckTouchScreen();

  const isScrollViewVisible = ref(false);

  const isMainSectionVisible = ref(true);
  const mainSectionVisibility = (value) => {
    isMainSectionVisible.value = value;
  };

  const isPreloaderVisible = ref(true);

  onMounted(() => {
    isLocked.value = true;
    window.addEventListener('load', () => {
      isPreloaderVisible.value = false;
      isLocked.value = false;
    });
    console.log(isTouchScreen.value);

    if (isTouchScreen.value) {
      isScrollViewVisible.value = true;
    } else {
      setTimeout(() => {
        isScrollViewVisible.value = true;
      }, 300);
    }
  });
</script>

