<template>
  <div class="page-container">
    <CarsMainSection />
    <CarsRarity />
    <CarsTypes />
    <CarsAttributes />
    <Footer />
  </div>
</template>
<script setup>
import {
  CarsRarity,
  CarsTypes,
  CarsAttributes,
  CarsMainSection,
} from '@/components/Cars';
import { Footer } from '@/components';
</script>
<style scoped></style>
