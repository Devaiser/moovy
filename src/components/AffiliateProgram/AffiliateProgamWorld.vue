<template>
  <section class="world">
    <a href="/" class="world__button">
      <span>APPLY NOW</span>
    </a>
    <h2 class="affiliate-title">
      Moovy Ambassadors <br />
      around the world
    </h2>
    <div class="wrapper" :class="{ active: isMapActive }">
      <TheWorldMap
        @active="isMapActive = true"
        @inactive="isMapActive = false"
      />
    </div>
    <div class="accordion__body-item" :class="{ active: isMapActive }">
      <h3 class="accordion__title accordion__title_ambasadors">Ambassador</h3>
      <div class="accordion__scroll">
        <div class="accordion__body-cards accordion__body-cards_ambasadors">
          <PersonCard
            class="accordion__body-card"
            :name="cardItem.name"
            :img="cardItem.img"
            v-for="(cardItem, idx) in ambasadors"
            :key="idx"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { TheWorldMap, PersonCard } from '@/components';

const ambasadors = [
  {
    name: 'name',
    img: '/img/moil-token.png',
  },
  {
    name: 'name',
    img: '/img/moil-token.png',
  },
  {
    name: 'name',
    img: '/img/moil-token.png',
  },
  {
    name: 'name',
    img: '/img/moil-token.png',
  },
  {
    name: 'name',
    img: '/img/moil-token.png',
  },
];

const isMapActive = ref(false);
</script>
<style scoped>
.world {
  position: relative;
}
.affiliate-title {
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
}
.wrapper {
  position: relative;
  width: 70%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.5s ease 0s;
  will-change: left;
}
.wrapper.active {
  left: 62%;
}
.world__button {
  width: 237px;
  height: 59px;
  background: linear-gradient(138.69deg, #25e6d9 0%, #6ecde8 100%);
  box-shadow: 14px 14px 40px rgba(0, 0, 0, 0.75), -7px -7px 30px #1f2021;
  border-radius: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 50px;
}
.world__button span {
  font-weight: 700;
  font-size: 24px;
  line-height: 106.5%;
  color: #000;
}
.accordion__body-item {
  width: 300px;
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-30%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease 0s;
}
.accordion__body-item.active {
  opacity: 1;
  visibility: visible;
}
.accordion__title {
  font-weight: 700;
  font-size: 26px;
  line-height: 106.5%;
  text-align: center;
}
.accordion__title_ambasadors {
  background: linear-gradient(180deg, #21e7d6 0%, #88cad5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.accordion__title_champions {
  color: #7fff52;
}
.accordion__title_leaders {
  color: #e087ff;
}
.accordion__title_elites {
  color: #ffa318;
}
.accordion__scroll {
  height: 355px;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 40px;
  box-sizing: border-box;
  justify-content: center;
}
.accordion__scroll::-webkit-scrollbar {
  width: 5px;
}
.accordion__scroll::-webkit-scrollbar-track {
  background: #282828cc;
  border-radius: 4px;
}
.accordion__scroll::-webkit-scrollbar-thumb {
  background: #6b6a6acc;
  border-radius: 4px;
}
.accordion__body-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.accordion__body-card {
  margin: 15px 15px 0 0;
}
.world__content {
  display: flex;
}
@media (max-width: 1200px) {
  .wrapper {
    width: 60%;
  }
}
@media (max-width: 992px) {
  .world {
    padding: 60px 0 0 0;
  }
  .wrapper {
    width: 80%;
  }
  .wrapper.active {
    left: 50%;
  }
  .accordion__body-item {
    position: relative;
    width: 100%;
    left: 0;
    top: 80px;
  }
  .accordion__title {
    font-weight: 700;
    font-size: 26px;
    line-height: 106.5%;
    text-align: start;
    padding-left: 20px;
  }
  .accordion__scroll {
    height: auto;
    overflow-y: hidden;
    overflow-x: scroll;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    padding: 0 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    justify-content: flex-start;
  }
  .accordion__scroll::-webkit-scrollbar {
    height: 5px;
  }
  .accordion__body-cards {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }
}
@media (max-width: 768px) {
  .wrapper {
    width: 90%;
  }
}
</style>
