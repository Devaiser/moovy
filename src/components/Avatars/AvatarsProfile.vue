<template>
  <section class="profile">
    <div class="profile__body">
      <div class="profile__buttons buttons">
        <div
          class="buttons__item buttons__item_header"
          :class="{ active: activeItem === 'header' }"
          @click="setActiveItem('header')"
        >
          <div class="buttons__body">
            <span>header</span>
          </div>
        </div>
        <div
          class="buttons__item buttons__item_license"
          :class="{ active: activeItem === 'license' }"
          @click="setActiveItem('license')"
        >
          <div class="buttons__body">
            <span>Driving licence</span>
          </div>
        </div>
        <div
          class="buttons__item buttons__item_TPS"
          :class="{ active: activeItem === 'TPS' }"
          @click="setActiveItem('TPS')"
        >
          <div class="buttons__body">
            <span>TPS</span>
          </div>
        </div>
      </div>
      <div class="profile__images" @click="setActiveItem(null)">
        <div class="profile__image" :class="{ active: !activeItem }">
          <img src="/img/avatars/profile.png" alt="profile" class="image" />
        </div>
        <div
          class="profile__image"
          :class="{ active: activeItem === 'license' }"
        >
          <img src="/img/avatars/license.png" alt="license" class="image" />
        </div>
        <div class="profile__image" :class="{ active: activeItem === 'TPS' }">
          <img src="/img/avatars/TPS.png" alt="TPS" class="image" />
        </div>
        <div
          class="profile__image"
          :class="{ active: activeItem === 'header' }"
        >
          <img src="/img/avatars/header.png" alt="header" class="image" />
        </div>
      </div>
      <div class="profile__info">
        <Transition mode="out-in" name="slide">
          <div class="profile__info-item" v-if="!activeItem">
            <h2 class="profile__title">Avatar profile</h2>
            <div class="profile__text">
              <p>
                All details about your Avatar and activity you can find on the
                profile screen in Moovy App. It showcases the player's personal
                information, including their username, avatar type, TPS values,
                Driving License and information about wallet and its activity.
              </p>
              <p>
                It serves as a hub for players to manage and view their progress
                in the game.
              </p>
              <p>
                This screen is a key feature of the Moovy app, providing players
                with a comprehensive overview of their progress and performance
                within the metaverse.
              </p>
            </div>
          </div>
          <div class="profile__info-item" v-else-if="activeItem === 'header'">
            <h2 class="profile__title">header</h2>
            <div class="profile__text">
              <p>
                The Gaming Header in Moovy's app is your one-stop-shop for all
                your gaming information.
              </p>
              <p>
                It displays your avatar picture, which showcases your style and
                personality in the game. Additionally, you can see your avatar's
                level, which represents your progress and experience in the
                game.
              </p>
              <p>
                The header also displays the amount of gas in your garage, so
                you can keep track of your fuel supply.
              </p>
              <p>
                You can view your MOIL and MGAS Token balances, allowing you to
                track your in-game wealth and investment.
              </p>
              <p>
                Finally, the header features a special line that displays your
                actual amount of XP, allowing you to see how close you are to
                leveling up and unlocking new rewards.
              </p>
            </div>
          </div>
          <div class="profile__info-item" v-else-if="activeItem === 'license'">
            <h2 class="profile__title">Driving license</h2>
            <div class="profile__text">
              <p>
                The Driving License in Moovy is a unique and special document
                that serves as proof of your Avatar's progress in the game.
              </p>
              <p>
                This document displays important information such as your
                Avatar's name, picture, and level, as well as your in-game
                progress, and the current amount of XP you have earned.
              </p>
              <p>
                The Driving License is a valuable tool for tracking your
                Avatar's progress and showcasing your achievements within the
                Moovy Metaverse.
              </p>
            </div>
          </div>
          <div class="profile__info-item" v-else-if="activeItem === 'TPS'">
            <h2 class="profile__title">TPS</h2>
            <div class="profile__text">
              <p>
                TPS, or Total Performance Score, is a unique attribute system in
                Moovy that measures the Versatility, Fame, and Mastery of each
                avatar type.
              </p>
              <p>
                The TPS system is designed to reflect the skills and abilities
                of each avatar, allowing players to track their progress and
                improvement over time.
              </p>
              <div class="p">
                The TPS score is comprised of three components:
                <ul>
                  <li>
                    &#8226; &nbsp; Versatility, which measures a player's
                    ability to adapt to different driving conditions and
                    challenges;
                  </li>
                  <li>
                    &#8226; &nbsp; Fame, which reflects the prestige and status
                    of the avatar within the Moovy community;
                  </li>
                  <li>
                    &#8226; &nbsp; Mastery, which gauges a player's ability to
                    control and fine-tune their car for optimal performance.
                  </li>
                </ul>
              </div>
              <p>
                With TPS, Moovy offers a comprehensive and dynamic system that
                allows players to fully customize and optimize their avatar and
                gaming experience.
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const activeItem = ref(null);
const setActiveItem = (item) => {
  activeItem.value = item;
};
</script>
<style scoped>
.profile {
  padding: 60px 40px 200px 6vw;
}
.profile__body {
  display: flex;
  align-items: center;
}
.profile__images {
  position: relative;
}
.profile__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s ease 0s;
}
.profile__image.active {
  position: static;
  opacity: 1;
  visibility: visible;
}
.profile__buttons {
  margin-right: 44px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  /* justify-content: space-evenly; */
  /* margin-bottom: 6%; */
}
.buttons__item {
  position: relative;
  cursor: pointer;
}
.buttons__item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(to top, #000 15%, rgba(0, 0, 0, 0));
  z-index: 1;
}
.buttons__body {
  width: 200px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-bottom: none;
  position: relative;
  border-radius: 40px;
}
.buttons__item span {
  font-weight: 900;
  font-size: 15px;
  line-height: 106%;
  text-transform: uppercase;
  color: #e0edf5;
  text-shadow: 1px 0px 1px rgba(33, 231, 214, 0.7);
  z-index: 2;
  opacity: 0.5;
  transition: all 0.3s ease 0s;
}
.buttons__item.active span {
  opacity: 1;
}
.buttons__item_header {
  margin-top: 25%;
}
.buttons__item_license {
  margin-top: 70%;
}
.buttons__item_TPS {
  margin-top: 76%;
}
.profile__info {
  margin-left: 152px;
}
.profile__title {
  font-weight: 900;
  font-size: 40px;
  line-height: 106%;
  text-transform: uppercase;
  color: #e0edf5;
  text-shadow: 1px 0px 5px rgba(33, 231, 214, 0.7);
  margin-bottom: 25px;
}
.profile__text {
  max-width: 572px;
}
.p ul {
  margin-left: 20px;
}
.profile__text p,
.p {
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  color: #fff;
}
.profile__text p:not(:last-child),
.p {
  margin-bottom: 15px;
}
</style>
