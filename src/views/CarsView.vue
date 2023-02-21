<template>
  <div class="page-container">
    <CarsRarity />
    <CarsTypes />
    <CarsAttributes />
  </div>
</template>
<script setup>
import { CarsRarity, CarsTypes, CarsAttributes } from '@/components/Cars';
</script>
<style scoped>
.page-container {
  margin-top: 94px;
}
</style>
