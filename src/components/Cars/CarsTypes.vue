<template>
  <section class="cars-section types">
    <h2 class="cars-section__title">types</h2>
    <p class="cars-section__text">
      Moovy offers a vast selection of cars to suit every car enthusiast's
      taste. From classic cars to sports cars and everything in between, Moovy
      has a car that is perfect for you
    </p>
    <div class="types__overview">
      <div class="types__image">
        <img
          src="/img/cars-page/types/cars.png"
          alt="cars-types"
          class="image"
        />
        <div
          v-for="img in typesList"
          :key="img.img"
          class="types__select-image"
        >
          <Transition>
            <img
              :src="img.img"
              :alt="img.title"
              class="image"
              v-if="activeType === img.title"
            />
          </Transition>
        </div>
        <CarsTypesPattern class="types__select-image" @click="onCarClick" />
        <div class="gradient-bottom"></div>
        <div class="gradient-right"></div>
        <div class="gradient-left"></div>
      </div>
      <div class="types__about about">
        <Transition mode="out-in" name="scale">
          <div class="about__body" v-if="activeType === 'a'">
            <h3 class="about__title about__title_classic">type a</h3>
            <div class="about__text">
              <p>
                Type A vehicles include the Hatchback, the Sedan, and the
                Estate.
              </p>
              <p>
                The Hatchback is a versatile passenger car that can accommodate
                two rows of seats. It's a great option for anyone looking for a
                car that's easy to handle.
              </p>
              <p>
                The Sedan is a spacious car with a closed body and a trunk
                that's separate from the main cabin. Finally, the Estate is a
                vehicle that offers a spacious trunk and combines a stylish
                design with ample storage space.
              </p>
            </div>
          </div>
          <div class="about__body" v-else-if="activeType === 'b'">
            <h3 class="about__title about__title_classic">type b</h3>
            <div class="about__text">
              <p>
                Discover the Type B vehicles in the Moovy collection, the bigger
                models in our fleet: The Pickup Truck – an open-backed
                semi-truck with ample ground clearance, perfect for enthusiasts
                of larger cars.
              </p>
            </div>
          </div>
          <div class="about__body" v-else-if="activeType === 'c'">
            <h3 class="about__title about__title_classic">type c</h3>
            <div class="about__text">
              <p>
                Introducing Type C's star vehicle, the SUV - a practical and
                versatile car that appeals to everyone.
              </p>
              <p>
                The SUV is a popular choice for families and adventure seekers
                alike, offering ample space for passengers and cargo, as well as
                impressive off-road capabilities. It's a perfect blend of style,
                performance, and practicality, making it a top pick for those
                who want the best of both worlds. Whether you're embarking on a
                road trip or tackling a tough terrain, an SUV is sure to provide
                a smooth and comfortable ride.
              </p>
            </div>
          </div>
          <div class="about__body" v-else-if="activeType === 'd'">
            <h3 class="about__title about__title_classic">type d</h3>
            <div class="about__text">
              <p>Introducing Type D, featuring three exciting car bodies:</p>
              <p>
                The Coupe - a sleek two-door passenger car for the stylish
                driver.
              </p>
              <p>
                The Convertible - a lightweight and speedy option for those who
                crave a fast ride.
              </p>
              <p>
                The Roadster - an open-top two-seater perfect for a thrilling
                driving experience.
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
    <div class="types__overview_media">
      <swiper
        :space-between="30"
        :speed="600"
        :slides-per-view="1"
        :modules="modules"
        :parallax="true"
      >
        <swiper-slide class="slide">
          <div class="slide__body">
            <div class="slide__img">
              <img
                src="/img/cars-page/types/car-a.png"
                alt="type a"
                class="image"
              />
              <div class="gradient-left"></div>
              <div class="gradient-right"></div>
              <div class="gradient-bottom"></div>
            </div>
            <div class="types__about" data-swiper-parallax="-300">
              <div class="about__body">
                <h3
                  class="about__title about__title_classic"
                  data-swiper-parallax="-400"
                >
                  type a
                </h3>
                <div class="about__text" data-swiper-parallax="-300">
                  <p>
                    Type A vehicles include the Hatchback, the Sedan, and the
                    Estate.
                  </p>
                  <p>
                    The Hatchback is a versatile passenger car that can
                    accommodate two rows of seats. It's a great option for
                    anyone looking for a car that's easy to handle.
                  </p>
                  <p>
                    The Sedan is a spacious car with a closed body and a trunk
                    that's separate from the main cabin. Finally, the Estate is
                    a vehicle that offers a spacious trunk and combines a
                    stylish design with ample storage space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="slide__body">
            <div class="slide__img">
              <img
                src="/img/cars-page/types/car-b.png"
                alt="type b"
                class="image"
              />
              <div class="gradient-left"></div>
              <div class="gradient-right"></div>
              <div class="gradient-bottom"></div>
            </div>
            <div class="types__about" data-swiper-parallax="-300">
              <div class="about__body">
                <h3
                  class="about__title about__title_classic"
                  data-swiper-parallax="-400"
                >
                  type b
                </h3>
                <div class="about__text" data-swiper-parallax="-300">
                  <p>
                    Discover the Type B vehicles in the Moovy collection, the
                    bigger models in our fleet: The Pickup Truck – an
                    open-backed semi-truck with ample ground clearance, perfect
                    for enthusiasts of larger cars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="slide__body">
            <div class="slide__img">
              <img
                src="/img/cars-page/types/car-c.png"
                alt="type c"
                class="image"
              />
              <div class="gradient-left"></div>
              <div class="gradient-right"></div>
              <div class="gradient-bottom"></div>
            </div>
            <div class="types__about" data-swiper-parallax="-300">
              <div class="about__body">
                <h3
                  class="about__title about__title_classic"
                  data-swiper-parallax="-400"
                >
                  type c
                </h3>
                <div class="about__text" data-swiper-parallax="-300">
                  <p>
                    Introducing Type C's star vehicle, the SUV - a practical and
                    versatile car that appeals to everyone.
                  </p>
                  <p>
                    The SUV is a popular choice for families and adventure
                    seekers alike, offering ample space for passengers and
                    cargo, as well as impressive off-road capabilities. It's a
                    perfect blend of style, performance, and practicality,
                    making it a top pick for those who want the best of both
                    worlds. Whether you're embarking on a road trip or tackling
                    a tough terrain, an SUV is sure to provide a smooth and
                    comfortable ride.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div class="slide__body">
            <div class="slide__img">
              <img
                src="/img/cars-page/types/car-d.png"
                alt="type d"
                class="image"
              />
              <div class="gradient-left"></div>
              <div class="gradient-right"></div>
              <div class="gradient-bottom"></div>
            </div>
            <div class="types__about" data-swiper-parallax="-300">
              <div class="about__body">
                <h3
                  class="about__title about__title_classic"
                  data-swiper-parallax="-400"
                >
                  type d
                </h3>
                <div class="about__text" data-swiper-parallax="-300">
                  <p>
                    Introducing Type D, featuring three exciting car bodies:
                  </p>
                  <p>
                    The Coupe - a sleek two-door passenger car for the stylish
                    driver.
                  </p>
                  <p>
                    The Convertible - a lightweight and speedy option for those
                    who crave a fast ride.
                  </p>
                  <p>
                    The Roadster - an open-top two-seater perfect for a
                    thrilling driving experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { CarsTypesPattern } from '@/components/Cars';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax } from 'swiper';
import 'swiper/css';

const modules = [Parallax];

const typesList = [
  {
    img: '/img/cars-page/types/type-a.png',
    title: 'a',
  },
  {
    img: '/img/cars-page/types/type-b.png',
    title: 'b',
  },
  {
    img: '/img/cars-page/types/type-c.png',
    title: 'c',
  },
  {
    img: '/img/cars-page/types/type-d.png',
    title: 'd',
  },
];

const activeType = ref('a');

const onCarClick = (type) => {
  activeType.value = type;
};
</script>
<style scoped>
.types__overview {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.types__image {
  position: relative;
}
.types__select-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.types__about {
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  margin-top: -100px;
}
.types__about::after {
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
  color: #e0edf5;
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
.types__overview_media {
  display: none;
}
@media (max-width: 1200px) {
  .gradient-bottom {
    height: 100px;
    bottom: -1px;
  }
  .types__about {
    margin-top: -100px;
    z-index: 5;
  }
}
@media (max-width: 768px) {
  .gradient-right,
  .gradient-left {
    width: 20px;
  }
}
@media (max-width: 556px) {
  .types__overview {
    display: none;
  }
  .types__overview_media {
    display: block;
    margin-top: 60px;
    position: relative;
  }
  .slide__img {
    position: relative;
    width: 80%;
    margin: 0 auto;
  }
  .about__text {
    z-index: 3;
  }
  .about__body {
    padding: 30px 20px 70px 20px;
  }
  .cars-section {
    padding: 60px 0px 0 0px;
  }
  .cars-section__text {
    padding: 0 20px;
  }
  .cars-section__title {
    padding: 0 20px;
  }
  .slide__img .gradient-left,
  .slide__img .gradient-right {
    width: 20px;
  }
}
</style>
