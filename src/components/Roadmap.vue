<template>
  <div class="roadmap">
    <div class="roadmap__video">
      <video preload="metadata" autoplay muted playsinline loop>
        <source type="video/webm" src="/video/roadmap.webm" />
        <source type="video/mp4" :src="movVideo" />
      </video>
    </div>
    <div class="roadmap__video-media">
      <video preload="metadata" autoplay muted playsinline loop>
        <source type="video/webm" src="/video/roadmap-media.webm" />
        <source type="video/mp4" :src="movVideoMedia" />
      </video>
      <div class="gradient"></div>
    </div>
    <div class="roadmap__title">
      <div class="roadmap__title-logo">
        <img src="/img/logo.svg" alt="moovy-logo" />
      </div>
      <h2 class="title__title-text">ROADMAP</h2>
    </div>
    <div class="stage stage-1">
      <div
        v-motion
        :initial="{
          opacity: 0,
          x: width > 992 ? 500 : 200,
        }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
          transition: {
            duration: width > 992 ? 1000 : 700,
          },
        }"
      >
        <div class="stage-1__body">
          <div class="stage-1__banner">
            <span>open beta version</span>
          </div>
          <div class="stage-1__element">
            <span>for Moovy closed test drive</span>
          </div>
        </div>
      </div>
      <div class="stage-1__date"><span>Q1 2023</span></div>
      <div
        class="roadmap__arrow"
        v-motion
        :initial="{
          opacity: 0,
          y: -50,
          rotate: 90,
        }"
        :visibleOnce="{
          rotate: 90,
          opacity: 1,
          y: 0,
          transition: {
            duration: 700,
            delay: 400,
          },
        }"
      >
        <img src="/img/arrow.png" alt="arrow" />
      </div>
    </div>
    <div class="stage stage-2">
      <div class="stage-2__date"><span>Q1 2023</span></div>
      <div
        class="stage-2__body"
        v-motion
        :initial="{
          opacity: 0,
          x: width > 992 ? 500 : 0,
          y: width <= 992 ? -100 : 0,
        }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: width > 992 ? 1000 : 500,
          },
        }"
      >
        <div class="stage__date_media"><span>Q1 2023</span></div>
        <img src="/img/border.png" class="stage__border" alt="border" />
        <div class="stage-2__banner">
          <span>Ready - Steady - Earn</span>
        </div>
        <div class="stage__body-title">
          Get ready to be blown away by the next generation of gaming with our
          latest release.
        </div>
        <ul class="stage__list">
          <li class="stage__list-item">
            <img src="/img/list-point.svg" alt="list-point" />
            <p class="stage__list-text">
              <span class="stage__list-text_bold">Drive2Earn</span> - Main
              mechanics for earning $MGAS tokens by driving a car.
            </p>
          </li>
          <li class="stage__list-item">
            <img src="/img/list-point.svg" alt="list-point" />
            <p class="stage__list-text">
              <span class="stage__list-text_bold">Car Merge</span> - Users will
              be able to use their 2 cars to get more cars.
            </p>
          </li>
          <li class="stage__list-item">
            <img src="/img/list-point.svg" alt="list-point" />
            <p class="stage__list-text">
              <span class="stage__list-text_bold">Rallies</span> - Special
              Gaming modes for Group Ridings with specific goals. Includes
              leaderboard and special benefits for participants
            </p>
          </li>
          <li class="stage__list-item">
            <img src="/img/list-point.svg" alt="list-point" />
            <p class="stage__list-text">
              <span class="stage__list-text_bold">BBPlace integration</span> -
              Moovy Secondary Market is built on BBPlace.
            </p>
          </li>
          <li class="stage__list-item">
            <img src="/img/list-point.svg" alt="list-point" />
            <p class="stage__list-text">
              <span class="stage__list-text_bold">BBid integration</span> -
              simple technology of login system into BBWallet and BBPlace.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="stage stage-3">
      <div class="stage-3__date"><span>Q2 2023</span></div>
      <div
        class="stage-3__body"
        v-motion
        :initial="{
          opacity: 0,
          x: width > 992 ? -300 : 0,
          y: width <= 992 ? -100 : 0,
        }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: width > 992 ? 1000 : 500,
          },
        }"
      >
        <div class="stage__date_media"><span>Q2 2023</span></div>
        <img src="/img/border.png" class="stage__border rotate" alt="border" />
        <div class="stage-3__banner">
          <span>Individualization</span>
        </div>
        <div class="stage__body-title">
          Transform your ride and elevate your status with our latest update!
          Our groundbreaking graphic editor lets you give your car a unique look
          that will make heads turn.
        </div>
        <ul class="stage__list">
          <li class="stage__list-item">
            <img src="/img/list-point.svg" alt="list-point" />
            <p class="stage__list-text">Car Customization launch</p>
          </li>
          <li class="stage__list-item">
            <img src="/img/list-point.svg" alt="list-point" />
            <p class="stage__list-text">Hall of Fame launch</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="stage stage-4">
      <div class="stage-4__date"><span>Q3 2023</span></div>
      <div
        class="stage-4__body"
        v-motion
        :initial="{
          opacity: 0,
          x: width > 992 ? -300 : 0,
          y: width <= 992 ? -100 : 0,
        }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: width > 992 ? 1000 : 500,
          },
        }"
      >
        <div class="stage__date_media"><span>Q3 2023</span></div>
        <img src="/img/border.png" class="stage__border rotate" alt="border" />
        <div class="stage-4__banner">
          <span>Socializing</span>
        </div>
        <div class="stage__body-title">
          Revolutionize the way you travel with our brand new rental system! Say
          goodbye to the hassle and expense of owning a car - with our
          innovative sharing economy platform, you can easily earn money on the
          go, all with the convenience of your BBApp.
        </div>
        <ul class="stage__list">
          <li class="stage__list-item">
            <img src="/img/list-point.svg" alt="list-point" />
            <p class="stage__list-text">
              <span class="stage__list-text_bold">Raid launch</span>
            </p>
          </li>
          <li class="stage__list-item">
            <img src="/img/list-point.svg" alt="list-point" />
            <p class="stage__list-text">
              <span class="stage__list-text_bold">BBChat Integration</span> - To
              achieve dominance in the Raid system, teamwork and communication
              is key. Utilize BBChat for your advantage by forming powerful
              guilds with unified goals! Together success awaits.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="space"></div>
  </div>
</template>
<script setup>
  import { useWindowSize } from '@vueuse/core';

  const { width, height } = useWindowSize();

  const movVideo = '/video/roadmap.mov';
  const movVideoMedia = '/video/roadmap-media.mov';
</script>
<style scoped>
  .roadmap {
    margin-top: 230px;
    position: relative;
    padding-top: 100px;
  }
  .roadmap::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 200px;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    z-index: 3;
  }
  .roadmap__video {
    position: absolute;
    top: 0;
    /* margin-top: -50px; */
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .roadmap__video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .roadmap__title {
    margin: 0 auto;
    width: fit-content;
    display: flex;
    position: relative;
  }
  .roadmap__video-media {
    display: none;
  }
  .roadmap__title-logo {
    transform: rotate(90deg);
    margin-right: 50px;
    margin-top: -20px;
    width: 153px;
  }
  .title__title-text {
    color: #fff;
    font-weight: 700;
    font-size: 212px;
    font-family: 'Bebas Neue', cursive;
  }
  .roadmap__stage {
    display: flex;
    flex-direction: column;
  }
  .stage {
    overflow: hidden;
  }
  .stage-1 {
    z-index: 1;
    position: relative;
    /* margin-top: 10px; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5vw;
  }
  .stage-1__body {
    display: flex;
    align-items: center;
    position: relative;
  }
  .stage-1__date,
  .stage-2__date {
    height: 281px;
    width: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(9.72deg, #000000 1.33%, #1a1c1f 100%);
    box-shadow: 27.9122px 27.9122px 79.7492px rgba(0, 0, 0, 0.75),
      -13.9561px -13.9561px 59.8119px #1f2021;
    border-radius: 59.8119px 0px 0px 59.8119px;
  }
  .stage-1__date span,
  .stage-2__date span {
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.25;
    transform: rotate(-90deg);
    white-space: nowrap;
  }
  .stage-1__element {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      90deg,
      #ff7a00 1.44%,
      rgba(255, 122, 0, 0) 63.64%
    );
    height: 117px;
    /* width: 904px; */
    width: 47vw;
    border: 3px solid;
    border-image: linear-gradient(to right, #ff7a00, black) 1;
    border-right: none;
  }
  .stage-1__element span {
    color: #fff;
    font-weight: 700;
    font-size: 20px;
  }
  .space {
    height: calc(100vw - 39vw - 5vw - 30vw);
  }
  .stage-1__banner {
    border-radius: 54px;
    /* width: 16vw; */
    width: 275px;
    padding: 40px 15px;
    background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
    margin-right: -10px;
    z-index: 2;
    position: relative;
    text-align: center;
  }
  .stage-1__banner span {
    font-family: 'Bebas Neue', cursive;
    font-weight: 700;
    font-size: 64px;
    line-height: 99.5%;
    color: #000;
  }
  .roadmap__arrow {
    position: absolute;
    bottom: 0;
    left: 69vw;
    margin: 0 auto;
    pointer-events: none;
    transform: rotate(90deg);
    width: fit-content;
    height: fit-content;
  }
  .stage-2 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
    position: relative;
    margin-bottom: 19.36vw;
    /* margin-bottom: 30%; */
  }
  .stage-2__body {
    width: 35vw;
    position: relative;
    padding: 29px 8vw 70px 13vw;
  }
  .stage__border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  .stage__body-title {
    color: #8df6e9;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.25;
    text-align: center;
  }
  .stage__list {
    margin-top: 40px;
  }
  .stage__list-item {
    display: flex;
    align-items: center;
  }
  .stage__list-item:not(:last-child) {
    margin-bottom: 39px;
  }
  .stage__list-item img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .stage__list-text {
    font-weight: 300;
    color: #fff;
    font-size: 20px;
    line-height: 1.25;
  }
  .stage__list-text_bold {
    font-weight: 700;
    color: #fff;
    font-size: 20px;
    line-height: 1.25;
  }
  .stage-2__date {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
  }
  .stage-2__banner {
    position: absolute;
    top: 40%;
    left: -260px;
    /* transform: translateY(50%); */
    padding: 33px 40px;
    background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
    border-radius: 54px;
    transform: rotate(-90deg);
  }
  .stage-2__banner span,
  .stage-3__banner span,
  .stage-4__banner span {
    color: #000;
    font-weight: 700;
    font-size: 60px;
    font-family: 'Bebas Neue', cursive;
    white-space: nowrap;
  }
  .stage-3 {
    display: flex;
    align-items: center;
    z-index: 1;
    position: relative;
    margin-bottom: 6vw;
  }
  .stage-3__body {
    width: 24.31vw;
    position: relative;
    padding: 83px 8vw 116px 11.2vw;
  }
  .stage-3__date span,
  .stage-4__date span {
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.25;
    transform: rotate(90deg);
    white-space: nowrap;
  }
  .stage-3__date,
  .stage-4__date {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 281px;
    width: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(9.72deg, #000000 1.33%, #1a1c1f 100%);
    box-shadow: 27.9624px 27.9624px 79.8926px rgba(0, 0, 0, 0.75),
      -13.9812px -13.9812px 59.9195px #1f2021;
    border-radius: 0px 59.8119px 59.8119px 0px;
    z-index: 3;
  }
  .stage__border.rotate {
    transform: rotate(180deg);
  }
  .stage-3__banner {
    position: absolute;
    top: 36%;
    right: -200px;
    padding: 33px 40px;
    background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
    border-radius: 54px;
    transform: rotate(90deg);
  }
  .stage-4 {
    display: flex;
    align-items: center;
    z-index: 1;
    position: relative;
  }
  .stage-4__body {
    width: 28.23vw;
    position: relative;
    padding: 77px 11vw 89px 11.63vw;
  }
  .stage-4__banner {
    position: absolute;
    top: 36%;
    right: -170px;
    padding: 33px 60px;
    background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
    border-radius: 54px;
    transform: rotate(90deg);
  }

  .stage__date_media {
    display: none;
  }

  @media (max-width: 1200px) {
    .stage-3__body {
      width: 24.31vw;
      position: relative;
      padding: 83px 10vw 116px 11.2vw;
    }
    .stage-3__banner {
      right: -230px;
    }
  }

  @media (max-width: 992px) {
    .roadmap__title-logo {
      transform: rotate(90deg) scale(0.7);
      margin-right: 0px;
      margin-left: -153px;
      margin-top: -15px;
      width: 153px;
    }
    .title__title-text {
      font-size: 150px;
    }
    .stage-2,
    .stage-3,
    .stage-4 {
      justify-content: center;
      align-items: center;
      margin-bottom: 5vw;
      padding: 0 40px;
      overflow: visible !important;
      margin-top: 150px;
    }
    .stage-2 {
      margin-top: 300px;
    }
    .stage-3 {
      margin-top: 500px;
    }
    .stage-4 {
      margin-top: 250px;
    }
    .stage__border {
      display: none;
    }
    .stage-2__banner,
    .stage-3__banner,
    .stage-4__banner {
      position: absolute;
      top: -60px;
      left: 50%;
      padding: 33px 40px;
      transform: rotate(0deg) translateX(-50%);
      z-index: 4;
      text-align: center;
    }
    .stage-2__body,
    .stage-3__body,
    .stage-4__body {
      max-width: 700px;
      width: fit-content;
      padding: 109px 80px 100px 80px;
      box-sizing: border-box;
    }
    .stage-2__date,
    .stage-3__date,
    .stage-4__date {
      display: none;
    }
    .stage__date_media {
      position: absolute;
      top: -110px;
      right: 50%;
      transform: translateX(50%);
      color: #fff;
      font-weight: 700;
      font-size: 24px;
      line-height: 1.25;
      padding: 10px 30px;
      background: linear-gradient(9.72deg, #000000 1.33%, #1a1c1f 100%);
      box-shadow: 14px 14px 40px rgba(0, 0, 0, 0.75), -7px -7px 30px #1f2021;
      border-radius: 20px 20px 0px 0px;
      display: block;
    }
    .roadmap__arrow {
      display: none;
    }
    .roadmap__video {
      display: none;
    }
    .roadmap__video-media {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 83%;
      /* height: auto; */
      z-index: 0;
      margin-top: 350px;
    }
    .roadmap__video-media::after {
      content: '';
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 200px;
      background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
    }
    .roadmap__video-media::before {
      content: '';
      width: 100%;
      position: absolute;
      top: -200px;
      left: 0;
      height: 200px;
      background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
      z-index: 3;
    }
    .roadmap__video-media .gradient {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
    .roadmap__video-media .gradient:after {
      content: '';
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 200px;
      background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
    .roadmap__video-media .gradient:before {
      content: '';
      width: 100%;
      position: absolute;
      bottom: -200px;
      left: 0;
      height: 200px;
      background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
      z-index: 3;
    }
    .roadmap__video-media video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 767px) {
    .roadmap::after {
      content: '';
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 200px;
      background: none;
    }
    .stage-1__date {
      height: 170px;
      width: 50px;
      border-radius: 30px 0px 0px 30px;
    }
    .stage-1__date span {
      font-size: 20px;
    }
    .stage-1__element {
      height: 90px;
      width: 47vw;
      border: 3px solid;
      border-image: linear-gradient(to right, #ff7a00, black) 1;
      border-right: none;
    }
    .stage-1__element span {
      font-size: 18px;
      text-align: center;
      margin-right: -10px;
    }
    .stage-1__banner {
      border-radius: 40px;
      width: 200px;
      padding: 30px 10px;
      margin-right: -10px;
    }
    .stage-2__banner,
    .stage-3__banner,
    .stage-4__banner {
      position: absolute;
      top: -40px;
      left: 50%;
      padding: 20px 30px;
      transform: rotate(0deg) translateX(-50%);
      z-index: 4;
      text-align: center;
    }
    .stage-3__banner,
    .stage-4__banner {
      width: 50vw;
      min-width: fit-content;
    }
    .stage-1__banner span,
    .stage-2__banner span,
    .stage-3__banner span,
    .stage-4__banner span {
      font-size: 40px;
      line-height: 99.5%;
    }
    .stage-2__body,
    .stage-3__body,
    .stage-4__body {
      max-width: 700px;
      width: fit-content;
      padding: 80px 40px 100px 40px;
      box-sizing: border-box;
    }
    .stage-2__body,
    .stage-4__body {
      padding: 80px 0px 50px 90px;
    }
    .stage__list-item:not(:last-child) {
      margin-bottom: 20px;
    }
    .stage-2,
    .stage-3,
    .stage-4 {
      margin-bottom: 20px;
      margin-top: 80px;
    }

    .roadmap__video-media {
      height: 80%;
      /* height: 78%; */
    }
    .stage-2 {
      margin-top: 300px;
    }
    .stage-3 {
      margin-top: 500px;
    }
    .stage-4 {
      margin-top: 180px;
    }
    .stage__body-title {
      font-size: 20px;
    }
    .stage__list-text {
      font-size: 18px;
    }
    .stage__list-text_bold {
      font-size: 18px;
    }
    .roadmap {
      margin-top: 100px;
    }
    .stage__date_media {
      top: -90px;
    }
  }
  @media (max-width: 556px) {
    .roadmap__video-media {
      width: 100%;
      /* height: 60%; */
      height: auto;
      margin-top: 300px;
    }
    .roadmap__title-logo {
      transform: rotate(90deg) scale(0.6);
      margin-right: -20px;
      margin-left: -100px;
      margin-top: -10px;
      width: 153px;
    }
    .title__title-text {
      font-size: 115px;
    }
    .stage-1__banner {
      width: 143px;
    }
    .stage-1__banner span {
      font-size: 30px;
    }
    .stage-1__element span {
      max-width: 150px;
    }
    .stage-2__banner,
    .stage-3__banner,
    .stage-4__banner {
      min-width: 50vw;
    }
    .stage-1__banner span,
    .stage-2__banner span,
    .stage-3__banner span,
    .stage-4__banner span {
      font-size: 30px;
    }
    .stage-2__body,
    .stage-3__body,
    .stage-4__body {
      padding: 60px 20px 80px 20px;
      box-sizing: border-box;
      max-width: 400px;
    }
    .stage-2__body,
    .stage-4__body {
      padding: 60px 0px 80px 30px;
    }
    .stage__body-title {
      font-size: 18px;
    }
    .stage__list-text {
      font-size: 16px;
    }
    .stage__list-text_bold {
      font-size: 16px;
    }
    .stage__date_media {
      font-size: 18px;
    }
    .stage-2,
    .stage-3,
    .stage-4 {
      padding: 0 20px;
    }
    .roadmap__video-media {
      height: 77%;
    }
    .stage-2 {
      margin-top: 200px;
    }
    .stage-3 {
      margin-top: 190px;
    }
    .stage-4 {
      margin-top: 150px;
    }
    .stage__list {
      margin-top: 20px;
    }
    .stage__date_media {
      top: -80px;
    }
    .stage-3__banner,
    .stage-4__banner {
      width: 50vw;
      min-width: fit-content;
    }
  }
  @media (max-width: 420px) {
    .roadmap__title-logo {
      transform: rotate(90deg) scale(0.45);
      margin-right: -35px;
      margin-left: -100px;
      margin-top: -10px;
      width: 153px;
    }
    .title__title-text {
      font-size: 90px;
    }
    .roadmap__video-media {
      height: 75%;
    }
    .stage-2__banner,
    .stage-3__banner,
    .stage-4__banner {
      width: 80%;
      min-width: auto;
    }
    .stage-3__banner,
    .stage-4__banner {
      width: 50vw;
      min-width: fit-content;
    }
    .stage-1__banner {
      width: 120px;
      padding: 30px 10px;
    }
    .stage-1__banner span {
      font-size: 24px;
    }
    .stage-1__element span {
      font-size: 14px;
      max-width: 150px;
    }
    .stage-1__element {
      height: 70px;
      width: 47vw;
      border: 3px solid;
      border-image: linear-gradient(to right, #ff7a00, black) 1;
      border-right: none;
    }
    .stage-1__date {
      height: 130px;
      width: 40px;
    }
    .stage-1__date span {
      font-size: 16px;
    }
    .stage__body-title {
      font-size: 16px;
    }
    .stage__list-text_bold {
      font-size: 14px;
    }
    .stage__date_media {
      font-size: 14px;
    }
  }
</style>