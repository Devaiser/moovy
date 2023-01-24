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
    <!-- <Transition mode="out-in">
      <div class="secured__video" v-if="isVideoVisible">
        <video preload="auto" autoplay muted playsinline id="secured-video">
          <source type="video/webm" src="/video/secured.webm" />
          <source type="video/mp4" :src="movVideo" />
        </video>
      </div> -->
    <div class="coin__wrapper">
      <div class="coin">
        <div class="coin__left-text">
          <h3 class="coin__title">$MGAS</h3>
          <p class="coin__text">
            $MGAS is an unlimited-emission utility token that functions as a
            user reward.
          </p>
          <p class="coin__text">
            It can be used to cover some of the cost of minting and leveling up
            vehicles. $MGAS tokens can also be used as partial payment for
            opening new garages and gift boxes.
          </p>
        </div>
        <div class="coin__right-text">
          <h3 class="coin__title">$moil</h3>
          <p class="coin__text">
            The $MOIL token performs the functions of a governance token. It was
            created to manage the ecosystem, users will be able to use $MOIL to
            make transactions on the BBPlace, upgrade their vehicles, etc.
          </p>
          <p class="coin__text">
            The token has a limited supply - 1,000,000,000 $MOIL.
          </p>
        </div>
      </div>
    </div>
    <!-- </Transition> -->
  </div>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  const movVideo = '/video/secured.mov';

  const isVideoVisible = ref(true);

  // onMounted(() => {
  //   const securedVideo = document.getElementById('secured-video');
  //   securedVideo.addEventListener(
  //     'ended',
  //     () => {
  //       isVideoVisible.value = false;
  //     },
  //     false
  //   );
  // });
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
  @media (max-width: 1600px) {
    .coin {
      padding: 80px 80px;
      width: 90%;
      height: 18%;
    }
  }
  @media (max-width: 1200px) {
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
      padding: 100px 100px;
      flex-direction: column;
      align-items: center;
    }
    .coin__text {
      margin-top: 20px;
      max-width: 276px;
      text-align: center;
    }
    .coin__title {
      margin: 0 auto;
    }
    .coin__title::after {
      left: -25%;
    }
  }
</style>