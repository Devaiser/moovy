<template>
  <section class="system">
    <div class="system__coins">
      <img src="/img/coins.png" alt="coins" class="image" />
    </div>
    <Vue3Marquee class="section__marquee marquee" :duration="50">
      <div class="marquee__item" v-for="item in 10" :key="item">
        <p class="marquee__text">Avatar types</p>
        <p class="marquee__text marquee__text_blue">Avatar types</p>
      </div>
    </Vue3Marquee>
    <div class="system__content content">
      <div class="content__top-text">
        <p class="avatars-text single">
          The Moovy avatar system offers a truly immersive experience that is
          unlike anything else. Through each avatar, users can harness their own
          unique skills and strategies to progress and thrive in the Moovy
          ecosystem
        </p>
      </div>
      <div class="system__controls control tablet">
        <div
          class="control__item"
          :class="{ active: activeItem === 'technician' }"
          @click="setActiveItem('technician')"
        >
          <IconTechnician
            :color="activeItem === 'technician' ? '#000' : '#fff'"
          />
        </div>
        <div
          class="control__item"
          :class="{ active: activeItem === 'driver' }"
          @click="setActiveItem('driver')"
        >
          <IconsDriver :color="activeItem === 'driver' ? '#000' : '#fff'" />
        </div>
        <div
          class="control__item"
          :class="{ active: activeItem === 'ecologist' }"
          @click="setActiveItem('ecologist')"
        >
          <IconEcologist :color="activeItem === 'ecolgist' ? '#000' : '#fff'" />
        </div>
      </div>
      <div class="content__systems systems">
        <Transition mode="out-in" name="slide">
          <div class="systems__item" v-if="activeItem === 'technician'">
            <div class="systems__img">
              <img
                src="/img/avatars/technician.jpg"
                alt="technician"
                class="image"
              />
              <div class="gradient-top"></div>
              <div class="gradient-bottom"></div>
            </div>
            <div
              class="systems__about about"
              @click="setActiveStatusVisible('technician')"
              :class="{ active: activeStatus === 'technician' }"
            >
              <div
                class="about__body"
                :class="{ active: activeStatus === 'technician' }"
              >
                <div class="about__title">technician</div>
                <div class="about__text">
                  <p>
                    The Moovy Technician avatar is the ultimate expert in
                    vehicle maintenance and repair. With in-depth knowledge of
                    the inner workings of vehicles.
                  </p>
                  <p>
                    This avatar type can help players optimize their cars for
                    fuel efficiency and efficiency. In the game, players who
                    choose the technician avatar can earn rewards for completing
                    various vehicle maintenance tasks, such as repairs and
                    upgrades. Additionally, they can also earn rewards for
                    sharing their knowledge and expertise with other players,
                    making them a valuable asset to the Moovy community (TBA).
                  </p>
                  <p>
                    Whether you're a seasoned mechanic or just starting to learn
                    about vehicle maintenance, the Moovy Technician avatar
                    provides the tools and resources you need to succeed
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="systems__item" v-else-if="activeItem === 'driver'">
            <div class="systems__img">
              <img
                src="/img/avatars/driver.jpg"
                alt="technician"
                class="image"
              />
              <div class="gradient-top"></div>
              <div class="gradient-bottom"></div>
            </div>
            <div
              class="systems__about about"
              @click="setActiveStatusVisible('driver')"
              :class="{ active: activeStatus === 'driver' }"
            >
              <div
                class="about__body"
                :class="{ active: activeStatus === 'driver' }"
              >
                <div class="about__title">driver</div>
                <div class="about__text">
                  <p>
                    The Moovy Driver Avatar is the perfect choice for daring
                    risk-takers who love to hit the open road. With exceptional
                    navigation skills and a competitive spirit, this avatar type
                    is perfect for players who want to put their driving skills
                    to the test.
                  </p>
                  <p>
                    In the Moovy metaverse, players who choose the driver avatar
                    can earn rewards for taking on difficult driving missions,
                    competing in races, and sharing their driving tips and
                    tricks with other players. Whether you're a seasoned racer
                    or just starting out, the Moovy Driver Avatar provides the
                    challenge and excitement you're looking for
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="systems__item" v-else-if="activeItem === 'ecologist'">
            <div class="systems__img">
              <img
                src="/img/avatars/ecologist.jpg"
                alt="technician"
                class="image"
              />
              <div class="gradient-top"></div>
              <div class="gradient-bottom"></div>
            </div>
            <div
              class="systems__about about"
              @click="setActiveStatusVisible('ecologist')"
              :class="{ active: activeStatus === 'ecologist' }"
            >
              <div
                class="about__body"
                :class="{ active: activeStatus === 'ecologist' }"
              >
                <div class="about__title">ecologist</div>
                <div class="about__text">
                  <p>
                    The Moovy Ecologist Avatar is the perfect choice for players
                    who are environmentally conscious and care about the impact
                    of their driving on the planet.
                  </p>
                  <p>
                    With a deep understanding of sustainable driving practices
                    and a commitment to reducing their carbon footprint, this
                    avatar type provides players with the tools they need to
                    drive in an eco-friendly manner.
                  </p>
                  <p>
                    In the Moovy metaverse, players who choose the ecologist
                    avatar can earn rewards for driving in a sustainable way,
                    such as reducing speed, avoiding sudden acceleration and
                    braking, and conserving fuel. They can also earn rewards for
                    educating other players about sustainable driving practices,
                    making them a valuable member of the Moovy community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <div class="system__controls control desktop">
          <div
            class="control__item"
            :class="{ active: activeItem === 'technician' }"
            @click="setActiveItem('technician')"
          >
            <IconTechnician
              :color="activeItem === 'technician' ? '#000' : '#fff'"
            />
            <div class="control__item-arrow">
              <img src="/img/arrow.png" alt="arrow" class="image" />
            </div>
          </div>
          <div
            class="control__item"
            :class="{ active: activeItem === 'driver' }"
            @click="setActiveItem('driver')"
          >
            <IconsDriver :color="activeItem === 'driver' ? '#000' : '#fff'" />
            <div class="control__item-arrow">
              <img src="/img/arrow.png" alt="arrow" class="image" />
            </div>
          </div>
          <div
            class="control__item"
            :class="{ active: activeItem === 'ecologist' }"
            @click="setActiveItem('ecologist')"
          >
            <IconEcologist
              :color="activeItem === 'ecolgist' ? '#000' : '#fff'"
            />
            <div class="control__item-arrow">
              <img src="/img/arrow.png" alt="arrow" class="image" />
            </div>
          </div>
        </div>
      </div>
      <div class="systems__text">
        <div class="avatars-text avatars-text_left">
          <p>
            At Moovy, we took great care in designing each type of avatar to
            ensure that there is no one "best" strategy. Each avatar offers its
            own unique benefits and strengths, and is better suited to different
            modes of car usage and users' lifestyles.
          </p>
          <p>
            For example, if you enjoy customizing and repairing cars, the
            mechanic avatar might be the best fit for you. If you're more
            focused on racing and competition, the driver avatar might be the
            way to go.
          </p>
        </div>
        <div class="avatars-text avatars-text_right">
          <p>
            And if you're passionate about sustainability and the environment,
            the ecologist avatar could be the perfect choice.
          </p>
          <p>
            In other words, there is no one-size-fits-all solution - each avatar
            has its own advantages and disadvantages, and the choice ultimately
            comes down to personal preference and playstyle. So take your time,
            consider your options, and choose the avatar that best suits your
            needs and goals within the Moovy metaverse.
          </p>
        </div>
      </div>
    </div>
    <div class="road">
      <video preload="metadata" autoplay muted loop playsinline class="video">
        <source type="video/mp4" src="/video/modal-road.mp4" />
      </video>
      <div class="gradient-left"></div>
      <div class="gradient-right"></div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { IconTechnician, IconsDriver, IconEcologist } from '@/components/icons';
import { Vue3Marquee } from 'vue3-marquee';
import 'vue3-marquee/dist/style.css';

const activeItem = ref('technician');

const setActiveItem = (item) => {
  activeItem.value = item;
};

const activeStatus = ref(null);
const setActiveStatusVisible = (status) => {
  if (activeStatus.value === status) {
    activeStatus.value = null;
  } else {
    activeStatus.value = status;
  }
};
</script>
<style scoped>
.system {
  padding-top: 40px;
  position: relative;
  overflow: hidden;
  background-color: #000;
}
.system__coins {
  position: absolute;
  top: 15%;
  left: -15%;
  width: 600px;
  z-index: 0;
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
.system__content {
  margin-top: 50px;
  position: relative;
  z-index: 1;
}
.content__top-text {
  max-width: 1000px;
  text-align: center;
  margin: 0 auto;
}
.content__systems {
  display: flex;
  justify-content: center;
}
.systems__img {
  width: 250px;
}
.systems__about {
  width: 400px;
  box-sizing: border-box;
  margin-left: 70px;
  border-radius: 40px;
  position: relative;
}
.systems__about::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 400px;
  background: linear-gradient(to top, #000 15%, rgba(0, 0, 0, 0));
  z-index: 1;
}
.about__title {
  font-weight: 900;
  font-size: 32px;
  line-height: 106%;
  text-align: center;
  text-transform: uppercase;
  color: #21e7d6;
  text-shadow: 1px 0px 5px rgba(33, 231, 214, 0.7);
  margin-bottom: 36px;
}
.about__text p {
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #ffffff;
  position: relative;
  z-index: 2;
}
.about__text p:not(:last-child) {
  margin-bottom: 10px;
}
.about__body {
  background: linear-gradient(0deg, #161616 0%, rgba(22, 22, 22, 0) 110.13%);
  border-radius: 40px;
  border: 1px solid #fff;
  border-bottom: none;
  height: 580px;
  box-sizing: border-box;
  padding: 30px 30px 96px 30px;
}
.systems__item {
  display: flex;
  margin-right: 90px;
}
.system__controls {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-right: 40px;
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
.control__item-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  right: -100px;
  width: 40px;
  opacity: 0;
  transition: all 0.3s ease 0s;
}
.control__item.active .control__item-arrow {
  opacity: 1;
  right: -50px;
}
.systems__text {
  margin-top: 40px;
  padding: 0 40px;
  display: flex;
  justify-content: center;
}
.systems__text p {
  margin-bottom: 20px;
}
.systems__text .avatars-text {
  max-width: 513px;
}
.avatars-text_left {
  text-align: left;
  margin-right: 30px;
}
.avatars-text_right {
  text-align: right;
}
.road {
  padding-top: 40px;
  position: relative;
  z-index: 3;
  background-color: #000;
}
.slide-enter-active {
  transition: all 0.3s ease-in-out;
  left: 0;
}
.slide-leave-active {
  transition: all 0.3s ease-in-out;
  right: 0;
}

.slide-enter-from {
  opacity: 0;
  left: -10%;
}
.slide-leave-to {
  opacity: 0;
  right: -100px;
}
.systems__img .gradient-top,
.systems__img .gradient-bottom {
  display: none;
}
.avatars-text.single {
  padding: 0 40px;
  margin-bottom: 20px;
}
.system__controls.tablet {
  display: none;
}
@media (max-width: 1200px) {
  .systems__text .avatars-text {
    max-width: 45%;
  }
  .systems__item {
    margin-right: 40px;
  }
  .systems__about {
    width: 400px;
    margin-left: 40px;
  }
}
@media (max-width: 992px) {
  .system__controls.desktop {
    display: none;
  }
  .system__controls.tablet {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-right: 0;
    z-index: 3;
    position: relative;
    background-color: #000;
    padding-bottom: 20px;
  }
  .system__controls.tablet .control__item:not(:last-child) {
    margin-right: 40px;
  }
  .systems__item {
    margin-right: 0;
  }
}
@media (max-width: 768px) {
  .system__coins {
    display: none;
  }
  .systems__img {
    position: relative;
    height: 750px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    /* width: 100%; */
    z-index: 0;
  }
  .systems__about {
    margin-left: 0;
    position: absolute;
    bottom: -550px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    transition: all 0.7s ease 0s;
  }
  .systems__about.active {
    bottom: 0;
  }
  .about__title {
    z-index: 2;
    position: relative;
  }
  .systems__item {
    position: relative;
  }
  .systems__img .gradient-top {
    display: block;
    height: 100px;
    top: -1px;
  }
  .systems__img .gradient-bottom {
    display: block;
    height: 100px;
    z-index: 4;
    bottom: -1px;
  }
  .systems__about::after {
    border-radius: 40px 40px 0 0;
    top: 1px;
    left: 1px;
    width: calc(100% - 2px);
    bottom: auto;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 15%,
      rgba(0, 0, 0, 0)
    );
    height: 100%;
  }

  .systems__about.active::before {
    position: absolute;
    content: '';
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(138.69deg, #25e6d9 0%, #6ecde8 100%);
    box-shadow: 14px 14px 40px rgba(0, 0, 0, 0.75), -7px -7px 30px #1f2021;
    border-radius: 56px;
    width: 160px;
    height: 10px;
    z-index: 3;
    animation: none;
  }
  .systems__about::before {
    position: absolute;
    content: '';
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(138.69deg, #25e6d9 0%, #6ecde8 100%);
    box-shadow: 14px 14px 40px rgba(0, 0, 0, 0.75), -7px -7px 30px #1f2021;
    border-radius: 56px;
    width: 160px;
    height: 10px;
    z-index: 3;
    transform-origin: center center;
    animation: bounce 1.4s infinite;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0) translateX(-50%);
    }
    10% {
      transform: translateY(0) translateX(-50%);
    }
    30% {
      transform: translateY(-10px) translateX(-50%);
    }
    50% {
      transform: translateY(0) translateX(-50%);
    }
    100% {
      transform: translateY(0) translateX(-50%);
    }
  }
  .about__body {
    background: none;
    border-radius: 40px 40px 0 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease 0s;
  }
  .about__body.active {
    opacity: 1;
    visibility: visible;
  }
  .systems__text {
    overflow-x: scroll;
    overflow-y: hidden;
    padding-left: 32vw;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    z-index: 3;
    background-color: #000;
    position: relative;
  }
  .systems__text::-webkit-scrollbar {
    display: none;
  }
  .systems__text .avatars-text {
    max-width: none;
    flex: 0 0 60vw;
    z-index: 3;
  }
  .avatars-text_left {
    margin-right: 270px;
    padding-left: 500px;
    position: relative;
  }
  .avatars-text_right {
    margin-right: 100px;
    position: relative;
  }
  .avatars-text_left:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -140px;
    transform: translateY(-50%);
    background: linear-gradient(138.69deg, #25e6d9 0%, #6ecde8 100%);
    box-shadow: 14px 14px 40px rgba(0, 0, 0, 0.75), -7px -7px 30px #1f2021;
    border-radius: 56px;
    width: 10px;
    height: 160px;
  }
  .systems__text p {
    white-space: normal;
  }
}
@media (max-width: 556px) {
  .about__title {
    margin-bottom: 10px;
  }
  .systems__img {
    height: 600px;
    width: 100vw;
    position: relative;
    margin-top: -50px;
  }
  .systems__img .gradient-top {
    top: 49px;
  }
  .systems__img img {
    object-position: center top;
  }
  .systems__about {
    width: 90%;
    max-width: 400px;
  }
  .systems__about {
    bottom: -460px;
    /* bottom: -80%; */
  }
  .about__body {
    height: 490px;
    /* height: auto; */
    padding: 30px 20px;
  }
  .systems__text {
    overflow-x: scroll;
    overflow-y: hidden;
    padding-left: 32vw;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  .systems__text::-webkit-scrollbar {
    display: none;
  }
  .systems__text .avatars-text {
    max-width: none;
    flex: 0 0 80vw;
  }
  .avatars-text_left {
    margin-right: 70px;
    padding-left: 300px;
    position: relative;
  }
  .avatars-text_right {
    margin-right: 0px;
    position: relative;
  }
  .avatars-text_left:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -40px;
    transform: translateY(-50%);
    background: linear-gradient(138.69deg, #25e6d9 0%, #6ecde8 100%);
    box-shadow: 14px 14px 40px rgba(0, 0, 0, 0.75), -7px -7px 30px #1f2021;
    border-radius: 56px;
    width: 10px;
    height: 160px;
  }
  .systems__text p {
    white-space: normal;
  }
}
</style>
