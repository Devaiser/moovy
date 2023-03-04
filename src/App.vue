<template>
  <Navbar />
  <RouterView />
  <Preloader :isVisible="isPreloaderVisible" />
  <PromoModal />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { Navbar, Preloader, PromoModal } from '@/components';
import { useScrollLock } from '@vueuse/core';

const isPreloaderVisible = ref(true);

const el = ref(document.body);
const isLocked = useScrollLock(el);

onMounted(() => {
  isLocked.value = true;
  window.addEventListener('load', () => {
    isPreloaderVisible.value = false;
    isLocked.value = false;
  });
});
</script>

<style></style>
