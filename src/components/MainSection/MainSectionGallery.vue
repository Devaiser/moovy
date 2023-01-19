<template>
  <div class="main-section__right">
    <div class="gallery__control">
      <img
        src="/img/arrow.png"
        class="control-left nav-button gallery-button-prev"
        alt="arrow"
      />
      <img
        src="/img/arrow.png"
        class="control-right nav-button gallery-button-next"
        alt="arrow"
      />
    </div>
    <swiper
      class="slider"
      :direction="'horizontal'"
      :slides-per-view="'auto'"
      :centered-slides="true"
      :mousewheel="true"
      :modules="modules"
      :speed="500"
      :navigation="navigation"
      :space-between="36"
      :breakpoints="breakpoints"
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
  import { Mousewheel, Navigation } from 'swiper';
  import 'swiper/css';

  const breakpoints = {
    992: {
      direction: 'vertical',
      slidesPerView: 'auto',
      centeredSlides: false,
    },
    556: {
      slidesPerView: 1.4,
    },
  };

  const navigation = ref({
    enabled: true,
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  });

  const modules = ref([Mousewheel, Navigation]);

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
    padding-top: 150px;
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
    /* margin-top: 150px; */
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
    z-index: -1;
  }
  .double-arrows {
    position: absolute;
    margin-top: 150px;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 0;
  }
  .gallery__control {
    display: none;
  }
  @media (max-width: 992px) {
    .double-arrows {
      display: none;
    }
    .main-section__right {
      width: 100vw;
      padding: 20px;
      box-sizing: border-box;
      background: linear-gradient(
        174.62deg,
        rgba(8, 119, 119, 0.295) 0.94%,
        rgba(8, 119, 119, 0) 100%
      );
      backdrop-filter: blur(0);
      -webkit-backdrop-filter: blur(0);
    }
    .slider {
      max-height: none;
      margin-top: 0;
      padding-bottom: 0;
    }
    .car-img {
      padding: 20px 0 0 0;
    }
    .car-info {
      overflow: hidden;
    }
    .control-left {
      transform: rotate(180deg);
    }
    .nav-button {
      cursor: pointer;
      transition: opacity 0.3s ease-in-out 0s;
    }
    .nav-button.swiper-button-disabled {
      opacity: 0.4;
      cursor: auto;
    }
    .gallery__control {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
    }
    .gallery-button-prev {
      margin-right: 20px;
    }
  }
  @media (max-width: 556px) {
    .double-arrows {
      display: none;
    }
    .main-section__right {
      width: 100vw;
      padding: 20px;
      box-sizing: border-box;
      background: linear-gradient(
        174.62deg,
        rgba(8, 119, 119, 0.295) 0.94%,
        rgba(8, 119, 119, 0) 100%
      );
      backdrop-filter: blur(0);
      -webkit-backdrop-filter: blur(0);
    }
    .slider {
      max-height: none;
      margin-top: 0;
      padding-bottom: 0;
    }
    .car-img {
      padding: 20px 0 0 0;
    }
    .car-info {
      overflow: hidden;
    }
  }
</style>