<template>
  <div class="secured">
    <div class="secured__title">
      <div class="secured__title-img">
        <img src="/img/secured.png" alt="secured" />
      </div>
      <h2>
        <span>secured</span> <br />
        in-game tokens
      </h2>
    </div>
    <Transition mode="out-in">
      <div class="secured__video" v-if="isVideoVisible">
        <video preload="auto" autoplay muted playsinline id="secured-video">
          <source type="video/webm" src="/video/secured.webm" />
          <source type="video/mp4" :src="movVideo" />
        </video>
      </div>
      <div class="coin__wrapper" v-else>
        <div class="coin" @click="onCoinClick">
          <div
            class="coin__left-text coin__text-wrapper"
            :class="{ hidden: isTokenOnStart }"
          >
            <h3 class="coin__title">$MGAS</h3>
            <p class="coin__text">
              $MGAS is an unlimited-emission utility token that functions as a
              user reward.
            </p>
            <p class="coin__text">
              It can be used to cover some of the cost of minting and leveling
              up vehicles. $MGAS tokens can also be used as partial payment for
              opening new garages and gift boxes.
            </p>
          </div>
          <div class="token__arrows" :class="{ rotated: !isTokenOnStart }">
            <video
              autoplay
              muted
              preload="auto"
              playsinline
              loop
              id="token-arrows"
            >
              <source type="video/webm" src="/video/token-arrows.webm" />
              <source type="video/mp4" :src="arrowsMov" />
            </video>
          </div>
          <div
            class="coin__right-text coin__text-wrapper"
            :class="{ hidden: !isTokenOnStart }"
          >
            <h3 class="coin__title">$moil</h3>
            <p class="coin__text">
              Take control of the Moovy ecosystem with the $MOIL token - the
              ultimate governance tool. Use it to manage transactions on
              BBPlace, upgrade your vehicles, and more.
            </p>
            <p class="coin__text">
              The token has a limited supply - 1,000,000,000 $MOIL.
            </p>
          </div>
          <div class="token-video" :class="isTokenOnStart ? 'start' : 'end'">
            <video
              preload="auto"
              muted
              :autoplay="width <= 556"
              playsinline
              class="token-video-item"
              :class="{ hidden: !isStartVideoTokenVisible }"
            >
              <source type="video/webm" src="/video/token-in.webm" />
              <source type="video/mp4" :src="tokenInMov" />
            </video>
            <video
              preload="auto"
              muted
              playsinline
              :autoplay="width <= 556"
              class="token-video-item"
              :class="{ hidden: isStartVideoTokenVisible }"
            >
              <source type="video/webm" src="/video/token-out.webm" />
              <source type="video/mp4" :src="tokenOutMov" />
            </video>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
  import { useWindowSize } from '@vueuse/core';

  import { onMounted, ref, watch } from 'vue';
  const movVideo = '/video/secured.mov';
  const arrowsMov = '/video/token-arrows.mov';
  const tokenOutMov = '/video/token-out.mov';
  const tokenInMov = '/video/token-in.mov';
  const { width, height } = useWindowSize();

  const isVideoVisible = ref(true);
  const tokenVideos = ref(null);

  onMounted(() => {
    tokenVideos.value = document.getElementsByClassName('token-video-item');
    const securedVideo = document.getElementById('secured-video');
    securedVideo.addEventListener(
      'ended',
      () => {
        isVideoVisible.value = false;
      },
      false
    );
  });
  const isStartVideoTokenVisible = ref(true);
  const isTokenOnStart = ref(true);
  const onCoinClick = () => {
    for (const video of tokenVideos.value) {
      if (!video.classList.contains('hidden')) {
        video.play();
        isTokenOnStart.value = !isTokenOnStart.value;
        setTimeout(() => {
          isStartVideoTokenVisible.value = !isStartVideoTokenVisible.value;
        }, video.duration * 1000);
      }
      video.currentTime = 0;
    }
  };
</script>
<style scoped>
  .secured {
    min-height: 100vh;
    margin-top: 60px;
  }
  .secured__title {
    display: flex;
    align-items: center;
  }
  .secured__title h2 {
    background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 900;
    font-size: 120px;
    line-height: 0.9;
    text-transform: uppercase;
  }
  .secured__title span {
    font-size: 58px;
  }
  .secured__title-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .secured__video {
    width: 100%;
    margin-top: -300px;
    position: relative;
  }
  .secured__video::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
  .secured__video::before {
    content: '';
    position: absolute;
    bottom: -200px;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
  }
  .secured__video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .coin__wrapper {
    padding: 0 40px;
    margin-top: 100px;
  }
  .coin {
    /* margin: 0 40px; */
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    height: 38%;
    background: linear-gradient(
      270.41deg,
      rgba(33, 231, 214, 0.72) 0.33%,
      rgba(0, 0, 0, 0.12) 99.65%
    );
    border-radius: 329px;
    border: 1px solid rgba(255, 255, 255, 0.342);
    padding: 100px 172px;
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .coin__title {
    font-weight: 900;
    font-size: 58px;
    color: #fff;
    position: relative;
    width: fit-content;
    padding-bottom: 40px;
    text-transform: uppercase;
  }
  .coin__title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 150%;
    height: 5px;
    background: #fff;
  }
  .coin__text {
    margin-top: 20px;
    color: #fff;
    font-size: 20px;
    line-height: 1.25;
    max-width: 376px;
  }
  .token-video {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 1.341s ease-in-out 0s;
  }
  .token-video.start {
    left: 0;
  }
  .token-video.end {
    left: 1000px;
  }
  .token-video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.12);
  }
  .token-video-item.hidden {
    display: none;
  }
  .coin__text-wrapper {
    position: relative;
    top: 0;
    left: 0;
    opacity: 1;
    visibility: visible;
    transition: all 0.7s ease 0.2s;
  }
  .coin__text-wrapper.hidden {
    transform: translateY(50%);
    opacity: 0;
    visibility: hidden;
  }
  .token__arrows {
    height: fit-content;
    transition: all 0s ease 0.6s;
  }
  .token__arrows.rotated {
    transform: rotate(180deg);
  }
  @media (max-width: 1600px) {
    .coin {
      padding: 80px 80px;
      width: 1190px;
      height: 18%;
    }
    .token-video.end {
      left: 715px;
    }
  }
  @media (max-width: 1400px) {
    .coin {
      padding: 80px 80px;
      width: 1020px;
      height: 18%;
    }
    .token-video.end {
      left: 530px;
    }
    .token__arrows {
      transform: scale(0.7);
      display: none;
    }
  }
  @media (max-width: 1200px) {
    .coin {
      width: 900px;
    }
    .token-video video {
      height: 440px;
      width: 440px;
    }
    .token-video.end {
      left: 460px;
    }
    .coin__text {
      margin-top: 20px;
      color: #fff;
      font-size: 16px;
      line-height: 1.25;
      max-width: 300px;
    }
    .coin__title::after {
      width: 130%;
    }
    .secured__video {
      margin-top: -200px;
    }
  }
  @media (max-width: 992px) {
    .secured__video {
      margin-top: -100px;
    }
    .secured {
      min-height: auto;
      margin-top: 150px;
      margin-bottom: 200px;
    }
    .token-video video {
      height: auto;
      width: 100%;
    }
    .token-video {
      position: absolute;
      left: 0;
      width: 100%;
      transition: all 1.341s ease-in-out 0s;
    }
    .token-video.start {
      top: 0;
      left: 0;
    }
    .token-video.end {
      top: 47%;
      left: 0;
    }
    .coin {
      box-sizing: border-box;
      width: fit-content;
      height: 50%;
      background: linear-gradient(
        0.41deg,
        rgba(33, 231, 214, 0.72) 10.33%,
        rgba(0, 0, 0, 0.12) 90.65%
      );
      border-radius: 329px;
      padding: 50px 50px;
      flex-direction: column;
      align-items: center;
    }
    .coin__text {
      margin-top: 20px;
      max-width: 376px;
      text-align: center;
    }
    .coin__title {
      margin: 0 auto;
    }
    .coin__title::after {
      left: -12.5%;
    }
    .secured__title {
      display: flex;
      align-items: center;
    }
    .secured__title h2 {
      font-size: 100px;
    }
    .secured__title span {
      font-size: 58px;
    }
    .token__arrows {
      display: block;
      transform: rotate(90deg) scale(0.5);
      margin: 160px 0 60px 0;
      transition: all 0.3s ease 0s;
    }
    .token__arrows.rotated {
      transform: rotate(-90deg) scale(0.5);
      margin: 60px 0 60px 0;
    }
  }
  @media (max-width: 768px) {
    .coin {
      padding: 70px 70px;
      flex-direction: column;
      align-items: center;
    }
    .token-video.end {
      top: 44%;
    }
    .secured__title h2 {
      font-size: 70px;
    }
    .secured__title span {
      font-size: 48px;
    }
    .token__arrows {
      margin: 70px 0;
      transition: all 0s ease 0.6s;
    }
    .token__arrows.rotated {
      margin: 70px 0;
    }
  }
  @media (max-width: 556px) {
    .secured {
      margin-top: 100px;
    }
    .coin__wrapper {
      padding: 0 20px;
      margin-top: 20px;
    }
    .coin {
      width: 360px;
      padding: 50px 20px;
      flex-direction: column;
      align-items: center;
    }
    .token-video.end {
      top: 420px;
    }
    .secured__title h2 {
      font-size: 31px;
    }
    .secured__title span {
      font-size: 31px;
    }
    .secured__title-img {
      width: 240px;
      margin-left: -20px;
    }
    .secured__video {
      margin-top: -70px;
    }
    .token__arrows {
      margin: 40px 0 20px 0;
      transform: rotate(90deg) scale(0.5);
      transition: all 0s ease 0.6s;
    }
    .token__arrows.rotated {
      transform: rotate(-90deg) scale(0.5);
      margin: 40px 0 20px 0;
    }
    .coin__title {
      padding-bottom: 20px;
    }
  }
  @media (max-width: 420px) {
    .coin__title {
      font-size: 50px;
    }
    .coin {
      width: 300px;
    }
    .token__arrows {
      margin: 0px 0;
    }
    .token__arrows.rotated {
      transform: rotate(-90deg) scale(0.5);
      margin: 0;
    }

    .token-video.end {
      top: 460px;
    }
  }
  @media (max-width: 360px) {
    .coin {
      width: 260px;
      transition: all 0.3s ease 0s;
    }
    .token__arrows {
      margin: 0px 0;
    }
    .token__arrows.rotated {
      transform: rotate(-90deg) scale(0.5);
      margin: 0;
    }

    .token-video.end {
      top: 450px;
    }
    .coin__text-wrapper.hidden {
      transform: translateY(50%);
      opacity: 0;
      visibility: hidden;
      height: 200px;
      transition: all 0.3s ease 0s;
    }
  }
</style>