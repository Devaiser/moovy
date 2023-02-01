<template>
  <div class="social">
    <div class="social__container">
      <div class="social__content">
        <h2 class="section-title">
          Moovy <br />
          by bbsoft
        </h2>
        <div class="social__link">
          <a href="https://bbsoft.io/" target="_blank">
            <img src="/img/bbsoft-logo.png" alt="bbsoft" />
          </a>
        </div>
      </div>
    </div>
    <div class="video-wrapper">
      <video
        preload="metadata"
        autoplay
        loop
        muted
        playsinline
        class="bg-video"
      >
        <source type="video/webm" src="/video/bbsoft.webm" />
        <source type="video/mp4" :src="movVideo" />
      </video>
      <div class="gradient"></div>
    </div>
    <div class="subscribe">
      <p class="subscribe__text">Subscribe to our newsteller</p>
      <div class="subscribe__button">
        <span>subscribe</span>
      </div>
      <!-- <button class="subscribe__button">
        <img src="/img/subscribe-button.png" alt="subscribe-button" />
      </button> -->
    </div>
  </div>
</template>
<script setup>
  const movVideo = '/video/bbsoftMov.mov';
</script>
<style scoped>
  .social {
    /* margin-top: 100px; */
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    z-index: 2;
  }
  .social::after {
    content: '';
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 200px;
    background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
  }
  .social::before {
    content: '';
    width: 100%;
    position: absolute;
    top: -200px;
    left: 0;
    height: 200px;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    z-index: 3;
  }
  .social__container {
    margin: 0 auto;
    max-width: 80%;
    padding: 50px 40px;
  }
  .social__content {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
  .social__content h2 {
    margin-right: 20px;
  }
  .video-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -30px;
    left: 0;
    z-index: 0;
  }
  .video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .social__link img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .gradient {
    position: relative;
  }
  .gradient::after {
    content: '';
    width: 100%;
    height: 200px;
    bottom: 0px;
    left: 0;
    position: absolute;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
  .gradient::before {
    content: '';
    width: 100%;
    height: 200px;
    bottom: -200px;
    left: 0;
    position: absolute;
    background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
  }
  @media (max-width: 1400px) {
    .social__container {
      max-width: 100%;
    }
    .video-wrapper {
      width: 200%;
      transform: translateX(-25%);
      height: 100%;
    }
  }
  @media (max-width: 1200px) {
    .social__container {
      max-width: 100%;
    }
    .section-title {
      font-size: 50px;
    }
  }
  @media (max-width: 992px) {
    .social__link {
      width: 300px;
    }
  }
  @media (max-width: 768px) {
    .social__container {
      padding: 50px 20px;
    }
    .social__content h2 {
      margin-right: 0;
    }
    .section-title {
      font-size: 40px;
      text-align: center;
    }
    .social__content {
      flex-direction: column;
      align-items: center;
    }
    .social__link {
      width: 200px;
    }
    .video-wrapper {
      position: relative;
      width: 200%;
      transform: translateX(-25%);
      height: 100%;
    }
    .video-wrapper {
      position: relative;
      margin-top: -100px;
    }
    .video-wrapper::after {
      content: '';
      width: 100%;
      position: absolute;
      top: -30px;
      left: 0;
      height: 200px;
      background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
    }
    .video-wrapper::before {
      content: '';
      width: 100%;
      position: absolute;
      top: -200px;
      left: 0;
      height: 200px;
      background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
    .social::after {
      content: '';
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 200px;
      background: none;
    }
    .social::before {
      content: '';
      width: 100%;
      position: absolute;
      top: -200px;
      left: 0;
      height: 200px;
      background: none;
    }
  }
  @media (max-width: 556px) {
    .section-title {
      font-size: 36px;
      text-align: center;
    }
  }
  .subscribe {
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
    padding: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  .subscribe__text {
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 33px;
    line-height: 1.25;
    text-shadow: 0px 0px 2.61896px #ffffff;
    margin-right: 33px;
  }
  .subscribe__button {
    width: 262px;
    height: 55px;

    background: radial-gradient(
      100% 100% at 0% 0%,
      rgba(63, 63, 63, 0.7) 0%,
      rgba(167, 167, 167, 0) 100%
    );
    filter: drop-shadow(0px 1.16591px 14.3444px rgba(0, 0, 0, 0.5));
    backdrop-filter: blur(7.1722px);
    border-radius: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.342);
  }
  .subscribe__button span {
    color: #fff;
    font-weight: 700;
    font-size: 28px;
    line-height: 1.25;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    text-shadow: 0.673997px 0.673997px 1.34799px rgba(255, 255, 255, 0.3),
      -0.673997px -0.673997px 1.34799px rgba(102, 102, 102, 0.5);
  }
  @media (max-width: 992px) {
    .subscribe {
      flex-direction: column;
      padding: 20px;
      padding-bottom: 0;
    }
    .subscribe__text {
      font-size: 26px;
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 556px) {
    .subscribe {
      margin-top: -100px;
      z-index: 2;
      position: relative;
    }
    .subscribe__text {
      font-size: 20px;
      text-align: center;
    }
    .subscribe__button {
      width: 200px;
    }
    .subscribe {
      position: relative;
    }
    .subscribe::after {
      content: '';
      width: 100%;
      position: absolute;
      bottom: -150px;
      left: 0;
      height: 200px;
      background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
      z-index: -1;
    }
  }
</style>