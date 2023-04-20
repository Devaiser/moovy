<template>
  <div class="flip-card">
    <div class="flip-card__inner">
      <div class="flip-card__front front">
        <div class="front__wrapper">
          <div class="font__body">
            <div class="front__bg-text" :style="colorStyle">
              {{ options.bgTitle }}
            </div>
            <div class="front__subtitle">{{ options.subtitle }}</div>
            <h3 :style="colorStyle" class="front__title">
              {{ options.title }}
            </h3>
            <p class="flip-card__text">
              {{ options.text }}
            </p>
            <div class="front__line" :style="bgStyle"></div>
          </div>
        </div>
      </div>
      <div class="flip-card__back back">
        <div class="back__wrapper">
          <div class="back__body"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
const props = defineProps({
  options: {
    type: Object,
    required: true,
    subtitle: {
      type: String,
    },
    title: {
      type: String,
    },
    bgTitle: {
      type: String,
    },
    text: {
      type: String,
    },
    color1: {
      type: String,
    },
    color2: {
      type: String,
    },
  },
});
const colorStyle = computed(() => {
  return `background: linear-gradient(180deg, ${props.options.color1} 0%, ${props.options.color2} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;`;
});
const bgStyle = computed(() => {
  return `background: linear-gradient(180deg, ${props.options.color1} 0%, ${props.options.color2} 100%);`;
});
</script>
<style scoped>
.flip-card {
  background-color: transparent;
  width: 308px;
  height: 277px;
  perspective: 1000px;
}
.flip-card__inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card__inner {
  transform: rotateY(180deg);
}

.flip-card__front,
.flip-card__back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card__front,
.flip-card__back {
  z-index: 0;
  border: 1px solid #746565;
  border-bottom: none;
  width: 100%;
  height: 100%;
  border-radius: 32px;
}
.front__wrapper,
.back__wrapper {
  border-radius: 32px;
  position: relative;
  background: linear-gradient(0deg, #161616 0%, rgba(22, 22, 22, 0) 110.13%);
  width: 100%;
  height: 100%;
  z-index: 0;
  padding: 20px 32px;
  box-sizing: border-box;
}
.front__wrapper::after,
.back__wrapper::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: 200px;
  background: linear-gradient(to top, #000 15%, rgba(0, 0, 0, 0));
  z-index: 1;
}

.font__body,
.back__body {
  z-index: 2;
  position: relative;
}

.flip-card__back {
  transform: rotateY(180deg);
}
.front__bg-text {
  font-weight: 800;
  font-size: 60px;
  line-height: 106.5%;
  text-transform: uppercase;
  opacity: 0.1;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
}
.front__subtitle {
  font-weight: 900;
  font-size: 24px;
  color: #fff;
  line-height: 106.5%;
  text-transform: capitalize;
}
.front__title {
  margin-top: 8px;
  font-weight: 700;
  font-size: 30px;
  line-height: 106.5%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.flip-card__text {
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: #fff;
  z-index: 1;
  position: relative;
  margin-top: 10px;
}
.front__line {
  width: 70%;
  height: 15px;
  margin: 0 auto;
  margin-top: 10px;
}
</style>
