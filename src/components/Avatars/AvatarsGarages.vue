<template>
  <section class="garages">
    <!-- <div class="gradient-top"></div>
    <div class="gradient-bottom"></div> -->
    <h2 class="garages__title">garage system</h2>
    <div class="garages__controls control tablet">
      <div
        class="control__item"
        :class="{ active: slider?.activeIndex === 0 }"
        @click="setActiveSlide(0)"
      >
        <IconTechnician :color="slider?.activeIndex === 0 ? '#000' : '#fff'" />
      </div>
      <div
        class="control__item"
        :class="{ active: slider?.activeIndex === 1 }"
        @click="setActiveSlide(1)"
      >
        <IconsDriver :color="slider?.activeIndex === 1 ? '#000' : '#fff'" />
      </div>
      <div
        class="control__item"
        :class="{ active: slider?.activeIndex === 2 }"
        @click="setActiveSlide(2)"
      >
        <IconEcologist :color="slider?.activeIndex === 2 ? '#000' : '#fff'" />
      </div>
    </div>
    <div class="slider-wrapper">
      <div class="gradient-top"></div>
      <div class="gradient-bottom"></div>
      <swiper
        :speed="2000"
        :long-swipes-ratio="0.01"
        :follow-finger="false"
        :watch-slides-progress="true"
        :parallax="true"
        :allow-touch-move="false"
        :modules="modules"
        @swiper="onSwiper"
        class="slider"
      >
        <swiper-slide class="slide">
          <div class="slide__body" data-swiper-parallax="50%">
            <img src="/img/avatars/technician-bg.jpg" alt="technician" />
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="slide__body" data-swiper-parallax="50%">
            <img src="/img/avatars/driver-bg.jpg" alt="technician" />
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="slide__body" data-swiper-parallax="50%">
            <img src="/img/avatars/ecologist-bg.jpg" alt="technician" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="garages__content content">
      <div class="content__item">
        <h2 class="content__title">GARAGES</h2>
        <p class="content__text">
          Rev Your Engines: Experience the Ultimate Garage System in Moovy
        </p>
      </div>
      <div class="content__item">
        <p class="content__text">Garage types:</p>
        <div class="content__buttons buttons">
          <div
            class="buttons__item"
            :class="{ active: slider?.activeIndex === 0 }"
            @click="setActiveSlide(0)"
          >
            <div class="buttons__head">
              <IconTechnician color="#000" />
            </div>
            <div class="buttons__body">
              <span>Technician</span>
            </div>
          </div>
          <div
            class="buttons__item"
            :class="{ active: slider?.activeIndex === 1 }"
            @click="setActiveSlide(1)"
          >
            <div class="buttons__head">
              <IconsDriver color="#000" />
            </div>
            <div class="buttons__body">
              <span>Driver</span>
            </div>
          </div>
          <div
            class="buttons__item"
            :class="{ active: slider?.activeIndex === 2 }"
            @click="setActiveSlide(2)"
          >
            <div class="buttons__head">
              <IconEcologist color="#000" />
            </div>
            <div class="buttons__body">
              <span>Ecolgist</span>
            </div>
          </div>
        </div>
        <p class="content__text">
          Each Avatar Type provides the garage with bonuses as well as capacity
          improvements.
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax } from 'swiper';
import 'swiper/css';
import { IconTechnician, IconsDriver, IconEcologist } from '@/components/icons';

const modules = [Parallax];

const slider = ref(null);

const onSwiper = (swiper) => {
  slider.value = swiper;
};
const activeSlide = ref(null);

onMounted(() => {
  activeSlide.value = slider.value.activeIndex;
  console.log(activeSlide.value);
});
const setActiveSlide = (slide) => {
  slider.value.slideTo(slide);
};
</script>
<style scoped>
.garages {
  /* min-height: calc(100vh - 100px); */
  position: relative;
}
.garages__title {
  font-weight: 900;
  font-size: 40px;
  line-height: 106%;
  text-align: center;
  text-transform: uppercase;
  color: #e0edf5;
  text-shadow: 1px 0px 5px rgba(33, 231, 214, 0.7);
  position: relative;
  z-index: 2;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}
.slider-wrapper {
  position: relative;
}
.slider {
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
  height: 100vh;
  position: relative;
  z-index: 0;
}
.slide {
  position: relative;
  overflow: hidden;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  user-select: none;
  pointer-events: none;
}
.slide__body {
  height: 100%;
}
.gradient-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background: linear-gradient(to bottom, #000 15%, rgba(0, 0, 0, 0));
  z-index: 1;
}
.gradient-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background: linear-gradient(to top, #000 15%, rgba(0, 0, 0, 0));
  z-index: 1;
}
.garages__content {
  padding: 0 6.5% 0 10%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
  bottom: 130px;
  left: 0;
  width: 100%;
  box-sizing: border-box;
}
.content__item {
  display: flex;
  flex-direction: column;
}
.content__title {
  font-weight: 900;
  font-size: 62.8016px;
  line-height: 67px;
  text-transform: uppercase;
  color: #fff;
  mix-blend-mode: normal;
  text-shadow: 0px 0px 5px #fff;
  margin-bottom: 20px;
}
.content__text {
  font-weight: 700;
  font-size: 14px;
  line-height: 1.25;
  color: #fff;
}
.content__buttons {
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.buttons__item:not(:last-child) {
  margin-right: 15px;
}
.buttons__item {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.buttons__body {
  background: linear-gradient(
      93.54deg,
      #ffffff 5.03%,
      rgba(11, 13, 15, 0) 133.92%
    ),
    linear-gradient(138.69deg, #44e3e5 0%, #1a1c1f 100%);
  box-shadow: 14px 14px 40px rgba(0, 0, 0, 0.75), -7px -7px 30px #1f2021;
  border-radius: 50px;
  width: 205px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease 0s;
}
.buttons__body span {
  display: block;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #000;
  z-index: 3;
  margin-left: 30px;
}
.buttons__head {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(98.27deg, #f5f5f5 0%, #83daff 105.42%);
  border-radius: 16px;
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease 0s;
}
.buttons__item.active .buttons__body {
  background: linear-gradient(
      93.54deg,
      #53e1eb 5.03%,
      rgba(11, 13, 15, 0) 133.92%
    ),
    linear-gradient(138.69deg, #44e3e5 0%, #1a1c1f 100%);
  box-shadow: 14px 14px 40px rgba(0, 0, 0, 0.75), -7px -7px 30px #1f2021;
}
.buttons__item.active .buttons__head {
  background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
}
.garages__controls {
  display: none;
}
@media (max-width: 992px) {
  .slider {
    height: 900px;
  }
  .content__title {
    font-size: 50px;
    line-height: 1.25;
    margin-bottom: 0;
  }
  .gradient-top {
    height: 200px;
  }
  .gradient-bottom {
    height: 200px;
  }
}
@media (max-width: 768px) {
  .slider {
    height: 600px;
  }
  .garages__content {
    display: none;
  }
  .gradient-top {
    height: 100px;
  }
  .gradient-bottom {
    height: 100px;
  }
  .garages__controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .control__item {
    border-radius: 16px;
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #fff;
    background: #000;
    transition: all 0.5s ease 0s;
    position: relative;
  }
  .control__item.active {
    background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
    border: 1px solid #21e7d6;
  }
  .control__item:not(:last-child) {
    margin-right: 40px;
  }
  .garages__title {
    margin: 0 auto;
    font-weight: 900;
    font-size: 40px;
    line-height: 106%;
    text-align: center;
    text-transform: uppercase;
    color: #e0edf5;
    text-shadow: 1px 0px 5px rgba(33, 231, 214, 0.7);
    position: relative;
    z-index: 2;
    position: static;
    transform: translateX(0);
    margin-bottom: 40px;
  }
}
@media (max-width: 556px) {
  .garages__title {
    font-size: 32px;
  }

  .gradient-bottom {
    height: 50px;
  }
  .slider {
    height: 400px;
  }
}
</style>
