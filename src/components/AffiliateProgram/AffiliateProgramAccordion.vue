<template>
  <section class="section accordion-section">
    <div
      v-for="(item, idx) in accordionData"
      :key="item.title"
      class="accordion"
    >
      <button
        :class="['accordion__panel', { active: item.isExpanded }]"
        @click="handleAccordion(idx)"
      >
        {{ item.title }}
      </button>
      <Collapse as="div" :when="item.isExpanded" class="accordion__body">
        <div class="accordion__body-item" v-if="item.ambasadors">
          <h3 class="accordion__title accordion__title_ambasadors">
            Ambassador
          </h3>
          <div class="accordion__scroll">
            <div class="accordion__body-cards accordion__body-cards_ambasadors">
              <PersonCard
                class="accordion__body-card"
                :name="cardItem.name"
                :img="cardItem.img"
                v-for="(cardItem, idx) in item.ambasadors"
                :key="idx"
              />
            </div>
          </div>
        </div>
        <div class="accordion__body-item" v-if="item.champions">
          <h3 class="accordion__title accordion__title_champions">Champion</h3>
          <div class="accordion__scroll">
            <div class="accordion__body-cards accordion__body-cards_champions">
              <PersonCard
                class="accordion__body-card"
                :name="cardItem.name"
                :img="cardItem.img"
                v-for="(cardItem, idx) in item.champions"
                :key="idx"
              />
            </div>
          </div>
        </div>
        <div class="accordion__body-item" v-if="item.leaders">
          <h3 class="accordion__title accordion__title_leaders">Leader</h3>
          <div class="accordion__scroll">
            <div class="accordion__body-cards accordion__body-cards_leaders">
              <PersonCard
                class="accordion__body-card"
                :name="cardItem.name"
                :img="cardItem.img"
                v-for="(cardItem, idx) in item.leaders"
                :key="idx"
              />
            </div>
          </div>
        </div>
        <div class="accordion__body-item" v-if="item.elites">
          <h3 class="accordion__title accordion__title_elites">Elite</h3>
          <div class="accordion__scroll">
            <div class="accordion__body-cards accordion__body-cards_elites">
              <PersonCard
                class="accordion__body-card"
                :name="cardItem.name"
                :img="cardItem.img"
                v-for="(cardItem, idx) in item.elites"
                :key="idx"
              />
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  </section>
</template>
<script setup>
import { PersonCard } from '@/components';
import { ref } from 'vue';
import { Collapse } from 'vue-collapsed';
const accordionData = ref([
  {
    title: 'Europe',
    ambasadors: [
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
    ],
    champions: [
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
    ],
    leaders: [
      {
        name: 'name',
        img: '/img/moil-token.png',
      },
      {
        name: 'name',
        img: '/img/moil-token.png',
      },
    ],
    elites: [
      {
        name: 'name',
        img: '/img/moil-token.png',
      },
    ],
    isExpanded: false,
  },
  {
    title: 'ASIA',
    isExpanded: false,
  },
  {
    title: 'OCEANIA',
    isExpanded: false,
  },
  {
    title: 'NORTH AMERICA',
    isExpanded: false,
  },
  {
    title: 'SOUTH AMERICA',
    isExpanded: false,
  },
  {
    title: 'AFRICA',
    isExpanded: false,
  },
]);

const handleAccordion = (selectedIndex) => {
  console.log(selectedIndex);
  accordionData.value.forEach((_, index) => {
    console.log(index);
    accordionData.value[index].isExpanded =
      index === selectedIndex ? !accordionData.value[index].isExpanded : false;
  });
};
</script>
<style scoped>
.accordion-section {
  margin-top: 100px;
  padding: 0 40px 60px 40px;
}
.accordion {
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
  border-top: 1px solid #fff;
}
.accordion:last-of-type {
  border-bottom: 1px solid #fff;
}
.accordion__panel {
  border: none;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  font-weight: 900;
  font-size: 32px;
  line-height: 106.5%;
  text-transform: uppercase;
  background: linear-gradient(180deg, #21e7d6 0%, #88cad5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  mix-blend-mode: normal;
  cursor: pointer;
}
.accordion__body {
  transition: height 0.4s ease;
  display: flex;
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

.accordion__body-text {
  color: #fff;
  padding: 15px 0;
}
.accordion__body-item {
  width: 25%;
}
.accordion__body-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.accordion__body-card {
  margin: 15px 15px 0 0;
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
@media (max-width: 1200px) {
  .accordion {
    max-width: 90%;
  }
}
@media (max-width: 992px) {
  .accordion {
    max-width: 100%;
  }
  .accordion__body {
    display: flex;
    flex-direction: column;
  }
  .accordion__body-item {
    position: relative;
    width: 100%;
    left: 0;
    margin-top: 20px;
  }
  .accordion__title {
    font-weight: 700;
    font-size: 26px;
    line-height: 106.5%;
    text-align: start;
  }
  .accordion__scroll {
    height: auto;
    overflow-y: hidden;
    overflow-x: scroll;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
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
  .accordion-section {
    padding: 0 0px 60px 0px;
  }
  .accordion__body-item {
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>
