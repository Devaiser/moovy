<template>
  <div class="exp-section">
    <div class="slider-wrapper">
      <img
        src="/img/arrow.png"
        class="control-left nav-button exp-button-prev"
        alt="arrow"
      />
      <swiper
        class="slider"
        :space-between="30"
        :speed="500"
        :navigation="navigation"
        :modules="modules"
      >
        <swiper-slide>
          <div class="slide-body">
            <div class="slide-title">
              <span>How to Moovy?</span>
            </div>
            <div class="slide-img">
              <img src="/img/tabs/how-to-moovy.jpg" alt="how-to-moovy" />
              <div class="slide-img-text">
                <p>
                  Download M<span>oo</span>vy - Get your Driving License - Get
                  your free Garage - buy you NFT Car - Earn MGAS
                </p>
              </div>
            </div>
            <a
              href="https://t.me/moovy_io"
              target="_blank"
              class="slide-img-link"
            >
              <span>Join our Telegram Chat</span>
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-body">
            <div class="slide-title">
              <span>Drive2Earn</span>
            </div>
            <div class="slide-img">
              <img src="/img/tabs/drive2earn.jpg" alt="drive2earn" />
              <div class="slide-img-text">
                <p>
                  Choose NFT Car from your garage - go to Solo Ride or Rally and
                  start earning $MGAS Token
                </p>
              </div>
            </div>
            <a href="/" target="_blank" class="slide-img-link">
              <span>Learn more about Moovy</span>
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-body">
            <div class="slide-title">
              <span>Car Metaverse</span>
            </div>
            <div class="slide-img">
              <img src="/img/tabs/car-metaverse.jpg" alt="car-metaverse" />
            </div>
            <a href="/" target="_blank" class="slide-img-link">
              <span>Learn More about Cars</span>
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-body">
            <div class="slide-title">
              <span>Car Metaverse</span>
            </div>
            <div class="slide-img">
              <img src="/img/tabs/compete.jpg" alt="compete" />
              <div class="slide-img-text">
                <p>
                  Get a Rally ticket and compete with other players to get
                  bonuses, special cars and NFT assets
                </p>
              </div>
            </div>
            <a href="/" target="_blank" class="slide-img-link">
              <span>Tell me who you are</span>
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-body">
            <div class="slide-title">
              <span>GameFi</span>
            </div>
            <div class="slide-img">
              <img src="/img/tabs/gamefi.jpg" alt="gamefi" />
              <div class="slide-img-text">
                <p>
                  We are ready to offer our players a lot of different game
                  modes that allow you to maximize the potential of each avatar
                  and each car
                </p>
              </div>
            </div>
            <a
              href="https://twitter.com/moovy_io"
              target="_blank"
              class="slide-img-link"
            >
              <span>Join our Twitter</span>
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-body">
            <div class="slide-title">
              <span>Avatar System</span>
            </div>
            <div class="slide-img">
              <img src="/img/tabs/avatar-system.jpg" alt="avatar-system" />
              <div class="slide-img-text">
                <p>
                  Immerse yourself in the Moovy ecosystem as much as possible
                  with our Avatar System
                </p>
              </div>
            </div>
            <a href="/" target="_blank" class="slide-img-link">
              <span>Tell me who you are</span>
            </a>
          </div>
        </swiper-slide>
      </swiper>
      <img
        src="/img/arrow.png"
        class="control-right nav-button exp-button-next"
        alt="arrow"
      />
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation } from 'swiper';
  import 'swiper/css';

  const navigation = ref({
    enabled: true,
    nextEl: '.exp-button-next',
    prevEl: '.exp-button-prev',
  });
  const modules = [Navigation];
</script>
<style scoped>
  .exp-section {
    min-height: 100vh;
    padding: 0 40px;
  }
  .slider-wrapper {
    margin: 0 auto;
    width: 70%;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slider {
    width: 100%;
    border-radius: 25px;
  }
  .slide-img {
    position: relative;
  }
  .slide-img img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 25px;
  }
  .slide-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .slide-title {
    width: 330px;
    height: 72px;
    background: rgba(0, 0, 0, 0.56);
    border-radius: 25px 25px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slide-title span {
    font-weight: 700;
    font-size: 32px;
    line-height: 43px;
    background: linear-gradient(180deg, #e087ff 46.35%, rgba(69, 65, 69, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .slide-img-text {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    padding: 18px 45px;
    border-radius: 54px;
    background: rgba(0, 0, 0, 0.9);
  }
  .slide-img-text p {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #fff;
  }
  .slide-img-text span {
    color: #21e7d6;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
  .slide-img-link {
    margin-top: 20px;
    width: 461px;
    height: 92px;
    background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
    border-radius: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slide-img-link span {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #000;
  }
  .control-left {
    transform: rotate(180deg);
  }
  .nav-button {
    cursor: pointer;
    transition: opacity 0.3s ease-in-out 0s;
  }
  .nav-button.swiper-button-disabled {
    opacity: 0.4;
    cursor: auto;
  }
</style>