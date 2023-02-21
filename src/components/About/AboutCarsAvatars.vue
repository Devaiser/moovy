<template>
  <section class="section">
    <Vue3Marquee class="section__marquee marquee" :duration="50">
      <div class="marquee__item" v-for="item in 10" :key="item">
        <p class="marquee__text">Drive 2 earn</p>
        <p class="marquee__text marquee__text_blue">Drive 2 earn</p>
      </div>
    </Vue3Marquee>
    <div class="section__body">
      <div class="section__avatars avatars">
        <div class="about__text-item about__text-item_right">
          <h2 class="about-title">
            Uncovering the <br />
            World of Avatars
          </h2>
          <p class="about-text">
            Discover the World of Avatars in Moovy: Explore the Exciting
            Features and Personalization Options for Your Virtual Identity. Get
            Ready to Unleash Your Creativity and Showcase Your Unique Style in
            the Moovy Metaverse
          </p>
          <ButtonLink
            to="/about/avatars"
            value="Learn More"
            class="avatars__link"
          />
        </div>
        <div class="avatars__image">
          <img src="/img/about/avatars.jpg" alt="avatars" class="image desk" />
          <img
            src="/img/about/avatars-media.png"
            alt="avatars"
            class="image media"
          />
        </div>
      </div>
      <div class="section__cars cars">
        <div class="cars__image">
          <img src="/img/about/car.png" alt="car" class="image" />
        </div>
        <div class="about__text-item about__text-item_left">
          <h2 class="about-title">
            Revving Up the Fun: <br />
            A Guide to Moovy's Car System
          </h2>
          <p class="about-text">
            Experience a unique blend of virtual and real-world car ownership.
            With a vast array of customization options, you can bring your dream
            car to life and set it loose on the roads of Moovy's Metaverse. From
            classic rides to the most sought-after exotic vehicles, Moovy has
            something for every car enthusiast. So rev your engines and join the
            ride
          </p>
          <ButtonLink
            to="/about/cars"
            value="Ready.Steady"
            class="cars__link"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ButtonLink } from '@/components';
import { Vue3Marquee } from 'vue3-marquee';
import 'vue3-marquee/dist/style.css';
</script>
<style scoped>
.section {
  padding-top: 60px;
  position: relative;
  overflow-x: hidden;
}
.section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: 0;
  background-color: #6addd7;
}
.section::before {
  content: '';
  position: absolute;
  bottom: 100px;
  left: 0;
  height: 100px;
  width: 100%;
  background: linear-gradient(180deg, #000 43.23%, rgba(0, 0, 0, 0) 100%);
  z-index: 1;
}
.marquee__text {
  font-weight: 900;
  font-size: 40px;
  line-height: 106%;
  text-transform: uppercase;
  color: #e0edf5;
  text-shadow: 1px 0px 5px rgba(33, 231, 214, 0.7);
  margin-right: 15px;
}
.marquee__text_blue {
  color: #21e7d6;
}
.marquee__item {
  display: flex;
}
.section__body {
  margin-top: 20px;
}
.avatars__link {
  margin-left: auto;
}
.section__avatars {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 40px;
}
.avatars__image {
  overflow: hidden;
  margin-left: 75px;
  min-width: 50vw;
}
.avatars__image .media {
  display: none;
}
.avatars__image img {
  margin-top: -1px;
}
.section__cars {
  position: relative;
  z-index: 1;
  display: flex;
  margin-top: 90px;
  padding-right: 40px;
}
.cars__image {
  max-width: 900px;
  margin-top: 50px;
}
@media (max-width: 1200px) {
  .section__avatars {
    padding-left: 20px;
  }
  .avatars__image {
    margin-left: 0px;
  }
  .section__cars {
    padding-right: 20px;
    padding-bottom: 40px;
  }
}
@media (max-width: 992px) {
  .section__avatars {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
    padding-left: 0px;
    padding: 0 20px;
  }
  .avatars__image .desk {
    display: none;
  }
  .avatars__image .media {
    display: block;
  }
  .avatars__link {
    margin: 0 auto;
  }
  .section__cars {
    padding: 0 20px 40px 20px;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  .cars__image {
    max-width: 900px;
    margin-top: 0px;
    position: relative;
    margin-bottom: 60px;
  }
  .cars__image img {
    position: relative;
    z-index: 2;
  }
  .cars__image::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -100px;
    width: 150%;
    height: 180px;
    z-index: 0;
    background-color: #6addd7;
    z-index: -1;
  }
  .cars__image::before {
    content: '';
    position: absolute;
    bottom: 100px;
    left: -100px;
    height: 90px;
    width: 150%;
    background: linear-gradient(180deg, #000 43.23%, rgba(0, 0, 0, 0) 100%);
    z-index: 1;
  }
  .cars__link {
    margin: 0 auto;
  }
  .section::after,
  .section::before {
    display: none;
  }
}
@media (max-width: 768px) {
  .section {
    padding-top: 40px;
  }
}
@media (max-width: 556px) {
  .section {
    padding-top: 20px;
  }
  .avatars__image .media {
    margin: 60px 0 40px 20px;
    transform: scale(1.43);
  }
  .section__avatars {
    padding: 0;
    margin-bottom: 40px;
  }
  .section__avatars .about__text-item {
    padding: 0 40px;
  }
  .about__text-item {
    padding: 0 20px;
  }
  .cars__image {
    transform: scale(1.3);
  }
  .cars__image::after {
    height: 70px;
  }
  .cars__image::before {
    bottom: 20px;
    height: 90px;
  }
}
</style>
