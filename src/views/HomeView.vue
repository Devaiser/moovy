<template>
  <MainSection @isVisible="mainSectionVisibility" />
  <ScrollView
    v-if="isScrollViewVisible"
    :class="{ visible: !isMainSectionVisible }"
  />
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { MainSection } from '@/components/MainSection';
  import { ScrollView } from '@/components';

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

  onMounted(() => {
    if (isTouchScreen.value) {
      isScrollViewVisible.value = true;
    } else {
      setTimeout(() => {
        isScrollViewVisible.value = true;
      }, 300);
    }
  });
</script>

