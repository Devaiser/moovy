<template>
  <div class="main-section__right">
    <swiper
      class="slider"
      :direction="'vertical'"
      :slides-per-view="'auto'"
      :mousewheel="true"
      :modules="modules"
      :speed="500"
      :space-between="36"
    >
      <swiper-slide
        class="slider-item"
        v-for="(car, idx) in carsList"
        :key="idx"
      >
        <div class="car-item">
          <div class="car-img">
            <img :src="car.img" :alt="car.name" />
          </div>
          <div class="car-info">
            <div>
              <p class="car-name">{{ car.name }}</p>
              <p class="car-type">{{ car.type }}</p>
            </div>
            <div class="car-arrow">
              <img src="/img/arrow.png" alt="arrow" />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <img
      class="double-arrows"
      src="/img/double-arrows.png"
      alt="double-arrows"
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Mousewheel } from 'swiper';
  import 'swiper/css';

  const modules = ref([Mousewheel]);

  const carsList = [
    {
      name: 'Benefactor',
      type: 'Type D',
      img: '/img/cars-gallery/benefactor.png',
    },
    {
      name: 'Crystall',
      type: 'Type D',
      img: '/img/cars-gallery/crystall.png',
    },
    {
      name: 'Hawk RS',
      type: 'Type A',
      img: '/img/cars-gallery/hawkRS.png',
    },
    {
      name: 'Buffalo',
      type: 'Type B',
      img: '/img/cars-gallery/buffalo.png',
    },
    {
      name: 'Stunt',
      type: 'Type C',
      img: '/img/cars-gallery/stunt.png',
    },
  ];
</script>
<style scoped>
  .main-section__right {
    margin: 0;
    width: 36vw;
    background: linear-gradient(
      174.62deg,
      rgba(8, 119, 119, 0.54) 0.94%,
      rgba(4, 48, 48, 0.54) 99.73%
    );
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 0 44px;
    position: relative;
    z-index: 2;
    transition: transform 1s ease-in-out;
    transform: translateX(0%);
  }
  .main-section__right.hidden {
    transform: translateX(110%);
  }
  .slider {
    max-height: calc(100vh - 190px);
    margin-top: 150px;
    padding-bottom: 40px;
  }
  .car-item {
    border: 1px solid;
    border-image: linear-gradient(to bottom, #fff, transparent) 1;
    position: relative;
  }
  .car-item::after {
    content: '';
    transition: all 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
  .car-img {
    padding: 54px 98px 0 49px;
    z-index: 1;
    position: relative;
  }
  .car-img img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .car-name {
    font-weight: 700;
    color: #fff;
    font-size: 29px;
    line-height: 1.25;
    position: relative;
    width: fit-content;
  }
  .car-name::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 1300px;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    margin-left: 11px;
  }
  .car-type {
    font-weight: 700;
    color: #21e7d6;
    text-shadow: 0px 0px 2.61039px #dfcbff;
    font-size: 20px;
    line-height: 1.25;
  }
  .car-info {
    display: flex;
    justify-content: space-between;
    padding: 0 34px 13px 24px;
    position: relative;
    z-index: 1;
  }
  .car-arrow {
    margin-top: 20px;
  }

  .swiper-slide-active .car-item::after {
    opacity: 0.7;
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right bottom, #4ebfcc, transparent 100%);
    z-index: 0;
  }
  .double-arrows {
    position: absolute;
    margin-top: 150px;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 0;
  }

  @media (max-width: 992px) {
    .main-section__right {
      display: none;
    }
  }
</style>