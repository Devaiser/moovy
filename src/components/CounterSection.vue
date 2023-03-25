<template>
  <section class="counter">
    <h2 class="section-title">Join Today and make your driving profitable</h2>
    <div class="counter__content content" ref="target">
      <div class="content__item">
        <p>
          <number
            ref="number1"
            :to="numberKM"
            :duration="3"
            :format="numberKMFormat"
            class="number"
          />
          KM
        </p>
        <!-- <p>4,492</p> -->
        <p>TOTAL DISTANCE COVERED BY MOOVERS</p>
      </div>
      <div class="content__item">
        <p>
          <number
            ref="number2"
            :to="numberMGAS"
            :duration="3"
            class="number"
            :format="numberMGASFormat"
          />
        </p>
        <p>MGAS EARNED BY MOOVERS</p>
      </div>
      <div class="content__item">
        <p>
          <number
            ref="number3"
            :to="numberActive"
            :duration="3"
            class="number"
          />
        </p>
        <p>ACTIVE MOOVERS</p>
      </div>
      <div class="content__image">
        <img src="/img/car-skeleton.png" alt="car" class="image" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { useElementVisibility } from '@vueuse/core';
import { ref, watch, onMounted } from 'vue';
import { useNow, useDateFormat } from '@vueuse/core';

const formatted = useDateFormat(useNow(), 'mm');

console.log(formatted.value);

const numberKM = ref(0); // 50
const numberMGAS = ref(0); //110
const numberActive = ref(0); // 83

const number1 = ref(null);
const number2 = ref(null);
const number3 = ref(null);

const numberKMFormat = (number) => {
  return (number.toFixed(2) + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
};
const numberMGASFormat = (number) => {
  return (number.toFixed(2) + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
};

const getTime = () => {
  const initialDate = new Date(2023, 2, 1);
  const now = Date.now();
  const difference = now - initialDate;
  const millisecondsPerHour = 60 * 60 * 1000;
  const hourSince = Math.floor(difference / millisecondsPerHour);
  numberActive.value = 250 + hourSince * 3;

  const millisecondsPerMinute = 60 * 1000;
  const minuteSince = Math.floor(difference / millisecondsPerMinute);
  numberMGAS.value = 1440 + minuteSince * 2.2;

  numberKM.value = 500 + 3 * (difference / (3 * millisecondsPerMinute)) * 2.7;
};

const target = ref(null);
const targetIsVisible = useElementVisibility(target);
watch(targetIsVisible, (newValue) => {
  if (newValue) {
    getTime();
    console.log(number1.value);
    number1.value.restart();
    number2.value.restart();
    number3.value.restart();
  }
});

onMounted(() => {
  getTime();
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
  left: 20%;
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
  margin-left: 40px;
}
.content__image {
  position: absolute;
  right: -200%;
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
    left: 10%;
  }
}
@media (max-width: 768px) {
  .counter__content {
    left: 0%;
  }
  .content__image {
    right: -10%;
  }
  .content__item p {
    font-size: 20px;
  }
}
@media (max-width: 556px) {
  .counter__content {
    margin-top: 0px;
    padding-top: 220px;
    padding-right: 20px;
  }
  .content__image {
    top: 25%;
    right: -10%;
  }
}
</style>
