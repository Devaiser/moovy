<template>
  <section class="counter">
    <h2 class="section-title">Join Today and make your driving profitable</h2>
    <div class="counter__content content" ref="target">
      <div class="content__item">
        <p>
          <number ref="number1" :to="4492" :duration="3" class="number" />
        </p>
        <!-- <p>4,492</p> -->
        <p>DISTANCE COVERED (KM)</p>
      </div>
      <div class="content__item">
        <p><number ref="number2" :to="13981" :duration="3" class="number" /></p>
        <p>MGAS EARNED (BETA)</p>
      </div>
      <div class="content__item">
        <p><number ref="number3" :to="3230" :duration="3" class="number" /></p>
        <p>ACTIVE MOOVERS (BETA)</p>
      </div>
      <div class="content__image">
        <img src="/img/car-skeleton.png" alt="car" class="image" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { useElementVisibility } from '@vueuse/core';
import { ref, watch } from 'vue';

const number1 = ref(null);
const number2 = ref(null);
const number3 = ref(null);

const target = ref(null);
const targetIsVisible = useElementVisibility(target);
watch(targetIsVisible, (newValue) => {
  if (newValue) {
    console.log(number1.value);
    number1.value.restart();
    number2.value.restart();
    number3.value.restart();
  }
});
</script>
<style scoped>
.counter {
  padding: 150px 0;
  background: #000;
  overflow: hidden;
  position: relative;
}
.section-title {
  max-width: 1000px;
  text-align: center;
  margin: 0 auto;
  padding: 0 40px;
}
.counter__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: fit-content;
  /* margin: 0 auto; */
  margin-top: 90px;
  position: relative;
  left: 35%;
}
.content__item:not(:last-child) {
  margin-bottom: 20px;
}
.content__item {
  position: relative;
  padding-bottom: 20px;
  z-index: 1;
}
.content__item::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 500%;
  height: 6px;
}
.content__item:nth-child(1)::after {
  background-color: #21e7d6;
}
.content__item:nth-child(2)::after {
  background-color: #88cad5;
}
.content__item:nth-child(3)::after {
  background-color: #a7d6e0;
}
.content__item p {
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  text-align: right;
  color: #ffffff;
}
.content__image {
  position: absolute;
  right: -270%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
  user-select: none;
  pointer-events: none;
}
@media (max-width: 1200px) {
  .content__image {
    right: -150%;
    /* width: 700px; */
  }
}
@media (max-width: 992px) {
  .counter__content {
    margin-top: 60px;
    left: 20%;
  }
}
@media (max-width: 768px) {
  .counter__content {
    left: 20%;
  }
  .content__image {
    right: -100%;
  }
  .content__item p {
    font-size: 20px;
  }
}
</style>
