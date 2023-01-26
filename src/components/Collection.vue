<template>
  <div class="collection">
    <div>
      <div class="collection-control">
        <img
          src="/img/arrow.png"
          class="control-left nav-button collection-button-prev"
          alt="arrow"
        />
        <h2 class="section-title">collection</h2>
        <img
          src="/img/arrow.png"
          class="control-right nav-button collection-button-next"
          alt="arrow"
        />
      </div>
      <swiper
        class="slider"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :space-between="-100"
        :speed="700"
        :navigation="navigation"
        :modules="modules"
        :breakpoints="breakpoints"
      >
        <swiper-slide class="slide" v-for="(car, idx) in carsList" :key="idx">
          <div class="car-image">
            <img :src="car.img" :alt="`car-${idx + 1}`" />
          </div>
          <div class="car-model">
            <img :src="car.model" :alt="car.model" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation } from 'swiper';
  import 'swiper/css';

  const breakpoints = ref({
    1400: {
      spaceBetween: -270,
    },
    768: {
      spaceBetween: -200,
    },
    768: {
      spaceBetween: -120,
    },
  });

  const navigation = ref({
    enabled: true,
    nextEl: '.collection-button-next',
    prevEl: '.collection-button-prev',
  });

  const modules = ref([Navigation]);

  const carsList = [
    {
      img: '/img/cars-collection/car-1.png',
      model: '/img/cars-collection/logos/MoovyVVSLogo.png',
    },
    {
      img: '/img/cars-collection/car-2.png',
      model: '/img/cars-collection/logos/MoovyDaitanaLogo.png',
    },
    // {
    //   img: '/img/cars-collection/car-3.png',
    //   model: '/img/daitana.svg',
    // },
    // {
    //   img: '/img/cars-collection/car-4.png',
    //   model: '/img/lumia.svg',
    // },
    // {
    //   img: '/img/cars-collection/car-5.png',
    //   model: '/img/vvs.svg',
    // },
    // {
    //   img: '/img/cars-collection/car-6.png',
    //   model: '/img/vvs.svg',
    // },
    {
      img: '/img/cars-collection/car-7.png',
      model: '/img/cars-collection/logos/MoovyAvattiLogo.png',
    },
    // {
    //   img: '/img/cars-collection/MoovyCarAstorX1.png',
    //   model: '/img/cars-collection/logos/MoovyAvattiLogo.png',
    // },
    {
      img: '/img/cars-collection/MoovyCarDaitanaX2.png',
      model: '/img/cars-collection/logos/MoovyDaitanaLogo.png',
    },
    {
      img: '/img/cars-collection/MoovyCarHectorOffroad.png',
      model: '/img/cars-collection/logos/MoovyHectorLogo.png',
    },
    {
      img: '/img/cars-collection/MoovyCarShumanCrystal.png',
      model: '/img/cars-collection/logos/MoovyShumanLogo.png',
    },
    {
      img: '/img/cars-collection/MoovyCarTrorT7.png',
      model: '/img/cars-collection/logos/MoovyTrorLogo.png',
    },
    {
      img: '/img/cars-collection/MoovyCarTrorX2.png',
      model: '/img/cars-collection/logos/MoovyTrorLogo.png',
    },
  ];
</script>
<style scoped>
  .collection {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .collection-control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 0 auto;
  }
  .control-left {
    transform: rotate(180deg);
  }
  .section-title {
    margin: 0 7vw;
  }
  .slider {
    margin-top: 60px;
  }
  .slide {
    width: fit-content;
    display: flex;
    height: 100%;
  }
  .slide.swiper-slide-active {
    transform: scale(1);
    opacity: 1;
  }
  .slide {
    /* width: 940px; */
    width: 54vw;
    transform: scale(0.7);
    opacity: 0.5;
    transition: transform 0.5s ease-in-out 0s, opacity 0.5s ease-in-out 0s;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .car-image img,
  .car-model img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .car-model {
    margin-top: 40px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;
    width: 150px;
  }
  .slide.swiper-slide-active .car-model {
    opacity: 1;
    visibility: visible;
  }
  .nav-button {
    cursor: pointer;
    transition: opacity 0.3s ease-in-out 0s;
  }
  .nav-button.swiper-button-disabled {
    opacity: 0.4;
    cursor: auto;
  }
  @media (max-width: 1200px) {
    .slide {
      width: 75vw;
    }
    .collection {
      min-height: auto;
      padding-bottom: 40px;
    }
  }

  @media (max-width: 992px) {
    .collection {
      margin-top: 100px;
    }
    .collection {
      min-height: auto;
      padding-bottom: 40px;
    }
  }

  @media (max-width: 768px) {
    .slide {
      width: 85vw;
    }
    .collection {
      min-height: auto;
      padding-bottom: 40px;
    }
  }
  @media (max-width: 556px) {
    .slide {
      width: 100vw;
    }
    .car-model {
      width: 25%;
      margin-top: 20px;
    }
    .collection-control {
      justify-content: space-between;
    }
    .collection-button-prev {
      order: 2;
    }
    .section-title {
      order: 1;
    }
    .collection-button-next {
      order: 3;
    }
  }
</style>