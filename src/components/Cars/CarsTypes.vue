<template>
  <section class="cars-section types">
    <h2 class="cars-section__title">types</h2>
    <p class="cars-section__text">
      Moovy offers a vast selection of cars to suit every car enthusiast's
      taste. From classic cars to sports cars and everything in between, Moovy
      has a car that is perfect for you
    </p>
    <div class="types__overview">
      <div class="types__image">
        <img
          src="/img/cars-page/types/cars.png"
          alt="cars-types"
          class="image"
        />
        <div
          v-for="img in typesList"
          :key="img.img"
          class="types__select-image"
        >
          <Transition>
            <img
              :src="img.img"
              :alt="img.title"
              class="image"
              v-if="activeType === img.title"
            />
          </Transition>
        </div>
        <CarsTypesPattern class="types__select-image" @click="onCarClick" />
        <div class="gradient-bottom"></div>
        <div class="gradient-right"></div>
        <div class="gradient-left"></div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { CarsTypesPattern } from '@/components/Cars';
const typesList = [
  {
    img: '/img/cars-page/types/type-a.png',
    title: 'a',
  },
  {
    img: '/img/cars-page/types/type-b.png',
    title: 'b',
  },
  {
    img: '/img/cars-page/types/type-c.png',
    title: 'c',
  },
  {
    img: '/img/cars-page/types/type-d.png',
    title: 'd',
  },
];

const activeType = ref('a');

const onCarClick = (type) => {
  activeType.value = type;
};
</script>
<style scoped>
.types__overview {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.types__image {
  position: relative;
}
.types__select-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
