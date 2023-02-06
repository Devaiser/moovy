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
        <div class="gradient"></div>
        <video preload="metadata" autoplay muted playsinline id="secured-video">
          <source type="video/webm" src="/video/secured.webm" />
          <source type="video/mp4" :src="movVideo" />
        </video>
      </div>
      <div class="token__wrapper" v-else>
        <div
          class="token__video"
          @mouseover="setVideo(true)"
          @mouseleave="setVideo(false)"
          @click="onClick"
        >
          <video
            preload="auto"
            muted
            autoplay
            playsinline
            :loop="!isTouchScreen"
            id="token-video"
          >
            <source
              type="video/mp4"
              src="/video/token.mp4"
              v-if="width > 992"
            />
            <source type="video/mp4" src="/video/token-media.mp4" v-else />
          </video>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
  import { useWindowSize } from '@vueuse/core';

  import { onMounted, ref, watch } from 'vue';
  const movVideo = '/video/secured.mp4';
  const arrowsMov = '/video/token-arrows.mov';
  const tokenOutMov = '/video/token-out.mov';
  const tokenInMov = '/video/token-in.mov';
  const { width, height } = useWindowSize();

  const isVideoVisible = ref(true);

  watch(isVideoVisible, (newValue) => {
    if (!newValue) {
      setTimeout(() => {
        tokenVideo.value = document.getElementById('token-video');
        if (!isTouchScreen.value) {
          setTimeout(() => {
            tokenVideo.value?.pause();
          }, 20);
        }
      }, 400);
    }
  });
  const tokenVideos = ref(null);

  const isTouchScreen = ref(null);

  const CheckTouchScreen = () => {
    isTouchScreen.value =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
  };
  CheckTouchScreen();

  const isVideoPlayed = ref(false);

  const setVideo = (value) => {
    if (!isTouchScreen.value) {
      isVideoPlayed.value = value;
    }
  };

  const tokenVideo = ref(null);

  const onClick = () => {
    if (isTouchScreen.value) {
      isVideoPlayed.value = !isVideoPlayed.value;
    }
  };

  onMounted(() => {
    const securedVideo = document.getElementById('secured-video');
    securedVideo.addEventListener(
      'ended',
      () => {
        isVideoVisible.value = false;
      },
      false
    );
  });

  watch(isVideoPlayed, (newValue) => {
    if (newValue) {
      tokenVideo.value.play();
    } else {
      tokenVideo.value.pause();
    }
  });
</script>
<style scoped>
  .secured {
    min-height: 100vh;
    margin-top: 60px;
  }
  .secured__title {
    display: flex;
    align-items: center;
    z-index: 2;
    position: relative;
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
    z-index: 1;
  }
  .secured__video .gradient {
    position: relative;
    width: 100%;
  }

  .secured__video .gradient::after {
    content: '';
    position: absolute;
    top: -200px;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    z-index: 0;
  }
  .secured__video .gradient::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
    z-index: 0;
  }
  .secured__video::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    z-index: 1;
  }
  .secured__video::before {
    content: '';
    position: absolute;
    bottom: -200px;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
    z-index: 1;
  }
  .secured__video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    position: relative;
  }
  .token__video {
    width: 70vw;
    margin: 0 auto;
  }
  .token__wrapper {
    margin-top: 100px;
    background: #000;
    padding: 0 40px;
    position: relative;
  }

  .token__wrapper::before {
    content: '';
    width: 100%;
    height: 200px;
    top: -200px;
    left: 0;
    position: absolute;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }

  .token__wrapper::after {
    content: '';
    width: 100%;
    height: 200px;
    bottom: -200px;
    left: 0;
    position: absolute;
    background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
  }
  .token__video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    .token__video {
      width: 80vw;
    }
    .secured__video {
      margin-top: -200px;
    }
  }
  @media (max-width: 992px) {
    .secured__video {
      margin-top: -100px;
    }
    .token__video {
      width: 40vw;
    }
    .secured {
      min-height: auto;
      margin-top: 150px;
      margin-bottom: 200px;
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
  }
  @media (max-width: 768px) {
    .secured__title h2 {
      font-size: 70px;
    }
    .secured__title span {
      font-size: 48px;
    }
  }
  @media (max-width: 556px) {
    .token__video {
      width: 60vw;
    }
    .secured {
      margin-top: 100px;
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
  }

  @media (max-width: 360px) {
    .token__video {
      width: 70vw;
    }
  }
</style>