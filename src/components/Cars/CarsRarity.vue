<template>
  <section class="cars-section rarity">
    <h2 class="cars-section__title">rarity</h2>
    <p class="cars-section__text">
      It's worth noting that the higher the rarity level, the rarer the vehicle
      is in-game, making it more valuable and sought-after. Each rarity level
      also increases the value of the Respect characteristic, which can help
      players to boost their overall car performance and earnings. Having a high
      rarity level car in your fleet is a surefire way to make a statement in
      the Moovy meta-universe!
    </p>
    <div class="rarity__overview">
      <div class="rarity__image">
        <img
          src="/img/cars-page/rarity/cars.png"
          alt="cars-rarity"
          class="image"
        />
        <div
          v-for="img in selectList"
          :key="img.img"
          class="rarity__select-image rarity__select-image_colors"
        >
          <Transition>
            <img
              :src="img.img"
              :alt="img.title"
              class="image"
              v-if="activeRarity === img.title"
            />
          </Transition>
        </div>
        <CarsRarityPattern class="rarity__select-image" @click="onCarClick" />
        <div class="gradient-bottom"></div>
        <div class="gradient-right"></div>
        <div class="gradient-left"></div>
      </div>
      <div class="rarity__about about">
        <div class="about__body">
          <Transition mode="out-in" name="scale">
            <div v-if="activeRarity === 'classic'">
              <h3 class="about__title about__title_classic">classic</h3>
              <p class="about__text">
                Classic rarity cars are the most basic type of NFT cars in
                Moovy. They have standard attributes and offer a solid
                foundation for players to build upon
              </p>
            </div>
            <div v-else-if="activeRarity === 'rare'">
              <h3 class="about__title about__title_rare">rare</h3>
              <p class="about__text">
                Rare cars have improved attributes compared to Classic cars,
                making them more sought after and valuable. They offer a unique
                look and increased performance.
              </p>
            </div>
            <div v-else-if="activeRarity === 'epic'">
              <h3 class="about__title about__title_epic">epic</h3>
              <p class="about__text">
                Epic cars are highly coveted in the Moovy Metaverse, as they
                have the best attributes and offer the highest level of
                performance. They stand out with their striking appearance and
                are considered a symbol of prestige.
              </p>
            </div>
            <div v-else-if="activeRarity === 'legendary'">
              <h3 class="about__title about__title_legendary">legendary</h3>
              <p class="about__text">
                Legendary rarity cars are the epitome of luxury in Moovy. They
                possess the best attributes and offer the highest level of
                performance. They are the one of the rarest and most valuable
                cars in the game and are highly sought after by players.
              </p>
            </div>
            <div v-else-if="activeRarity === 'insane'">
              <h3 class="about__title about__title_insane">insane</h3>
              <p class="about__text">
                Insane rarity cars are the most unique and powerful cars in
                Moovy. They offer the highest level of performance and have
                attributes that set them apart from the rest. These cars are
                highly prized and are the ultimate symbol of success in the game
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { CarsRarityPattern } from '@/components/Cars';
const selectList = [
  {
    img: '/img/cars-page/rarity/select-classic.png',
    title: 'classic',
  },
  {
    img: '/img/cars-page/rarity/select-rare.png',
    title: 'rare',
  },
  {
    img: '/img/cars-page/rarity/select-epic.png',
    title: 'epic',
  },
  {
    img: '/img/cars-page/rarity/select-legendary.png',
    title: 'legendary',
  },
  {
    img: '/img/cars-page/rarity/select-insane.png',
    title: 'insane',
  },
];

const activeRarity = ref('classic');

const onCarClick = (rarity) => {
  activeRarity.value = rarity;
};
</script>
<style scoped>
.rarity__overview {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.rarity__image {
  position: relative;
}
.rarity__select-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.rarity__select-image_colors {
  z-index: -1;
}
.rarity__about {
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  margin-top: -100px;
}
.rarity__about::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 130px;
  background: linear-gradient(to top, #000 15%, rgba(0, 0, 0, 0));
}
.about__body {
  background: linear-gradient(0deg, #161616 0%, rgba(22, 22, 22, 0) 110.13%);
  border: 1px solid #fff;
  border-bottom: none;
  border-radius: 40px;
  padding: 30px 45px 70px 45px;
  position: relative;
}
.about__title {
  font-weight: 900;
  font-size: 24px;
  line-height: 106%;
  text-align: center;
  text-transform: uppercase;
}
.about__title_classic {
  color: #e0edf5;
  text-shadow: 1px 0px 5px rgba(33, 231, 214, 0.7);
}
.about__title_rare {
  color: #328333;
  text-shadow: 1px 0px 5px rgba(0, 0, 0, 0.7);
}
.about__title_epic {
  color: #0f5290;
  text-shadow: 1px 0px 5px #000;
}
.about__title_legendary {
  color: #e087ff;
  text-shadow: 1px 0px 5px #000;
}
.about__title_insane {
  color: #f77518;
  text-shadow: 1px 0px 5px #000;
}
.about__text {
  margin-top: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 106%;
  text-align: center;
  color: #fff;
  /* z-index: 1; */
  position: relative;
}
</style>
