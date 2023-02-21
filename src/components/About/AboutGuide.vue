<template>
  <section class="guide">
    <div class="guide__coins coins">
      <div class="coins__image_media">
        <img src="/img/about/coins-media.png" alt="coins" class="image" />
      </div>
      <div class="coins__image coins__image_left">
        <img src="/img/about/coins.jpg" alt="coins" class="image" />
        <div class="gradient-bottom"></div>
        <div class="gradient-top"></div>
        <div class="gradient-left"></div>
        <div class="gradient-right"></div>
      </div>
      <div class="about__text-item about__text-item_center">
        <h2 class="about-title">
          A Comprehensive Guide <br class="media-br" />
          to MOIL Tokenomics
        </h2>
        <p class="about-text about-text_media">
          learn about the unique tokenomics behind MOIL, including how the token
          is distributed, its use cases, and the benefits of holding MOIL for
          both short-term and long-term investment strategies
        </p>
        <div class="coins__links">
          <ButtonLink
            href="/"
            value="Tokenomics"
            :small="true"
            class="coins__link"
          />
          <ButtonLink
            href="/"
            value="Vesting"
            :small="true"
            class="coins__link"
          />
          <ButtonLink
            href="/"
            value="Events"
            :small="true"
            class="coins__link"
          />
        </div>
      </div>
      <div class="coins__image coins__image_right">
        <img src="/img/about/coins.jpg" alt="coins" class="image" />
        <div class="gradient-bottom"></div>
        <div class="gradient-top"></div>
        <div class="gradient-left"></div>
        <div class="gradient-right"></div>
      </div>
    </div>
    <div class="guide__how-to-play how-to-play">
      <div class="how-to-play__images">
        <div class="how-to-play__image">
          <img src="/img/about/mobile.png" alt="mobile-app" class="image" />
        </div>
        <div class="how-to-play__image">
          <img src="/img/about/mobile.png" alt="mobile-app" class="image" />
        </div>
        <div class="how-to-play__image">
          <img src="/img/about/mobile.png" alt="mobile-app" class="image" />
        </div>
      </div>
      <p>
        HOW TO PLAY HOW TO PLAY HOW TO PLAY HOW TO PLAY HOW TO PLAY HOW TO PLAY
      </p>
      <p>
        HOW TO PLAY HOW TO PLAY HOW TO PLAY HOW TO PLAY HOW TO PLAY HOW TO PLAY
      </p>
    </div>
    <div class="guide__button">
      <ButtonLink value="How to Moovy" href="/" />
    </div>
  </section>
</template>
<script setup>
import { ButtonLink } from '@/components';
</script>
<style scoped>
.guide {
  padding: 224px 0 200px 0;
  overflow-x: hidden;
}
.guide__coins {
  position: relative;
  display: flex;
  justify-content: center;
}
.coins__image {
  position: relative;
  width: 40vw;
  height: 40vw;
}
.coins__image_left {
  transform: rotate(8deg);
}
.coins__links {
  display: flex;
  justify-content: center;
  align-items: center;
}
.coins__link:not(:last-child) {
  margin-right: 20px;
}
.gradient-bottom,
.gradient-top {
  height: 70px;
}
.gradient-left,
.gradient-right {
  width: 70px;
}
.about__text-item {
  position: relative;
  z-index: 2;
}
.guide__how-to-play {
  margin-top: 100px;
  position: relative;
}
.how-to-play p {
  color: #000;
  font-weight: 900;
  font-size: 128px;
  line-height: 1.25;
  text-shadow: -1px -1px 0 #21e7d6, 1px -1px 0 #21e7d6, -1px 1px 0 #21e7d6,
    1px 1px 0 #21e7d6;
  white-space: nowrap;
  margin-left: -100px;
}
.how-to-play p:last-child {
  margin-left: -250px;
}
.how-to-play__images {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.guide__button {
  margin: 0 auto;
  width: fit-content;
  margin-top: 20px;
}
.coins__image_media {
  display: none;
}
@media (max-width: 992px) {
  .gradient-bottom,
  .gradient-top {
    height: 20px;
  }
  .gradient-left,
  .gradient-right {
    width: 20px;
  }
  .guide {
    padding: 60px 20px 100px 20px;
  }
  .how-to-play__image {
    display: none;
  }
  .how-to-play__image:first-child {
    display: block;
  }
}
@media (max-width: 768px) {
  .media-br {
    display: none;
  }
  .coins__image {
    display: none;
  }
  .coins__image_media {
    display: block;
    position: absolute;
    top: 30%;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.3);
  }
  .about-text_media {
    display: none;
  }
  .coins__links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
  }
  .coins__link:not(:last-child) {
    margin-right: 0px;
    margin-bottom: 20px;
  }

  .guide__how-to-play {
    margin-top: 200px;
  }
}
@media (max-width: 556px) {
  .coins__image_media {
    transform: scale(1.5);
  }
}
</style>
