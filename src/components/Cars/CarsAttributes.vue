<template>
  <section class="cars-section attributes">
    <h2 class="cars-section__title">attributes</h2>
    <p class="cars-section__text">
      Cars are the centerpiece of Moovy's metaverse. <br />
      They are unique, non-fungible tokens (NFT) that can be bought, sold, and
      customized. Each Moovy car has its own set of attributes that affect its
      performance and earning potential
    </p>
    <div class="attributes__overview overview">
      <div class="overview__item overview__item_cards">
        <CarsAttributesCard
          v-for="item in leftCards"
          :key="item.title"
          :title="item.title"
          :icon="item.icon"
          :text="item.text"
          :right="false"
        />
      </div>
      <div class="overview__item overview__item_second">
        <div class="overview__img">
          <img
            src="/img/cars-page/attributes/car.png"
            alt="car"
            class="image"
          />
        </div>
      </div>
      <div class="overview__item overview__item_cards">
        <CarsAttributesCard
          v-for="item in rightCards"
          :key="item.title"
          :title="item.title"
          :icon="item.icon"
          :text="item.text"
          :right="true"
        />
      </div>
    </div>
    <div class="attributes__overview_media">
      <div class="overview__nav">
        <div class="slider-button-prev slider-button">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            class="slider-button-icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 8.86603C-0.166666 8.48113 -0.166667 7.51888 0.5 7.13398L12.5 0.20577C13.1667 -0.179131 14 0.301994 14 1.07179L14 14.9282C14 15.698 13.1667 16.1791 12.5 15.7942L0.5 8.86603Z"
            />
          </svg>
        </div>
        <div class="overview__image">
          <img
            src="/img/cars-page/attributes/car.png"
            alt="car"
            class="image"
          />
        </div>
        <div class="slider-button-next slider-button">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            class="slider-button-icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 8.86603C-0.166666 8.48113 -0.166667 7.51888 0.5 7.13398L12.5 0.20577C13.1667 -0.179131 14 0.301994 14 1.07179L14 14.9282C14 15.698 13.1667 16.1791 12.5 15.7942L0.5 8.86603Z"
            />
          </svg>
        </div>
      </div>
      <swiper
        :modules="modules"
        :navigation="navigation"
        class="slider"
        :speed="800"
        :spaceBetween="40"
        :parallax="true"
      >
        <swiper-slide>
          <div class="slide__body">
            <CarsAttributesCard
              v-for="(item, idx) in leftCards"
              :key="item.title"
              :title="item.title"
              :icon="item.icon"
              :text="item.text"
              :right="false"
              :data-swiper-parallax="idx * 2 * -100"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide__body">
            <CarsAttributesCard
              v-for="(item, idx) in rightCards"
              :key="item.title"
              :title="item.title"
              :icon="item.icon"
              :text="item.text"
              :right="false"
              :data-swiper-parallax="idx * 2 * -100"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script setup>
import { CarsAttributesCard } from '@/components/Cars';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Parallax } from 'swiper';
import 'swiper/css';

const navigation = {
  nextEl: '.slider-button-next',
  prevEl: '.slider-button-prev',
};

const modules = [Navigation, Parallax];

const leftCards = [
  {
    title: 'Respect',
    icon: '/img/cars-page/attributes/respect.svg',
    text: 'Respect is an attribute that represents the prestige and status of a vehicle in Moovy.',
  },
  {
    title: 'Tank Capacity',
    icon: '/img/cars-page/attributes/tank.svg',
    text: 'The Tank Capacity attribute determines the maximum amount of fuel an NFT car can hold',
  },
  {
    title: 'Consumption',
    icon: '/img/cars-page/attributes/consumption.svg',
    text: 'The Consumption attribute determines the amount of fuel used by an NFT car per unit of time',
  },
];
const rightCards = [
  {
    title: 'Efficiency',
    icon: '/img/cars-page/attributes/efficiency.svg',
    text: 'Efficiency in Moovy is a key attribute that determines the performance of a car. The efficiency attribute is important for players who want to maximize their earnings and performance in the game',
  },
  {
    title: 'Earning Capacity',
    icon: '/img/cars-page/attributes/earning.svg',
    text: 'Earning capacity refers to the ability of an asset, such as a car, to generate MGAS per each ride',
  },
  {
    title: 'Total Miliage',
    icon: '/img/cars-page/attributes/total-miliage.svg',
    text: 'Total mileage refers to the total distance traveled by a vehicle',
  },
];
</script>
<style scoped>
.attributes {
  padding: 60px 40px;
}
.attributes__overview {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overview__item_second {
  flex: 0 0 20%;
}

.overview__item .card:not(:last-child) {
  margin-bottom: 35px;
}
.overview__item_second {
  margin: 0 60px;
}
.attributes__overview_media {
  display: none;
}
@media (max-width: 1200px) {
  .attributes__overview {
    transform: scale(0.8);
  }
}
@media (max-width: 992px) {
  .attributes__overview {
    margin: -60px 0;
  }
  .attributes__overview {
    transform: scale(0.6);
  }
  .overview__item_second {
    flex: 0 0 35%;
  }
}
@media (max-width: 768px) {
  .attributes__overview {
    display: none;
  }
  .attributes__overview_media {
    display: block;
  }
  .slide__body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .overview__image {
    width: 200px;
    margin: 0 40px;
  }
  .overview__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .slider-button {
    min-width: 62px;
    min-height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(138.69deg, #25e6d9 0%, #6ecde8 100%);
    box-shadow: 14.5682px 14.5682px 41.6234px rgba(0, 0, 0, 0.75),
      -7.2841px -7.2841px 31.2176px #1f2021;
  }
  .slider-button-next {
    transform: rotate(180deg);
  }
  .slider-button-icon {
    transition: all 0.3s ease 0s;
    fill: #e0edf5;
  }
  .swiper-button-disabled .slider-button-icon {
    fill: #000;
  }
  .slider .card:not(:last-child) {
    margin-bottom: 35px;
  }
}
@media (max-width: 556px) {
  .attributes {
    padding: 60px 20px;
  }
  .overview__image {
    margin: 0 20px;
  }
}
@media (max-width: 410px) {
  .slide__body {
    transform: scale(0.8);
  }
}
</style>
