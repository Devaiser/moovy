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
      <div class="overview__item overview__item_first">
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
      <div class="overview__item overview__item_first">
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
  </section>
</template>
<script setup>
import { CarsAttributesCard } from '@/components/Cars';

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
    text: 'The Consumption attribute determines the amount of fuel used by an NFT car per unit of time',
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
.attributes__overview {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overview__item .card:not(:last-child) {
  margin-bottom: 35px;
}
.overview__item_second {
  margin: 0 60px;
}
</style>
