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
              <img
                alt="how-to-moovy"
                v-lazy="{
                  src: '/img/tabs/how-to-moovy.jpg',
                  loading: '/img/tabs/blured/how-to-moovy.jpg',
                }"
              />

              <div class="pagination">
                <span class="active"></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="slide-img-text">
                <p>
                  Download M<span>oo</span>vy & pave the way to obtaining your
                  driver's license, receive a garage and the opportunity to
                  purchase your very own NFT car. And, earn MGAS while you're at
                  it.
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
              <img
                alt="drive2earn"
                v-lazy="{
                  src: '/img/tabs/drive2earn.jpg',
                  loading: '/img/tabs/blured/drive2earn.jpg',
                }"
              />

              <div class="pagination">
                <span></span>
                <span class="active"></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="slide-img-text">
                <p>
                  Transform your garage into a crypto-maker with NFT Cars &
                  explore Solo Ride, FreeRide or Rally to earn $MGAS Tokens
                </p>
              </div>
            </div>
            <a
              href="https://moovy-io.gitbook.io/moovy.io-whitepaper/"
              target="_blank"
              class="slide-img-link"
            >
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
              <img
                alt="car-metaverse"
                class="desk"
                v-lazy="{
                  src: '/img/tabs/car-metaverse.jpg',
                  loading: '/img/tabs/blured/car-metaverse.jpg',
                }"
              />

              <img
                alt="car-metaverse"
                v-lazy="{
                  src: '/img/car-metaverse-clear.jpg',
                  loading: '/img/tabs/blured/car-metaverse-clear.jpg',
                }"
                class="media"
              />
              <div class="pagination">
                <span></span>
                <span></span>
                <span class="active"></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="slide-content">
              <div class="content-text-item">
                <p class="content-title">Vehicle Specifications</p>
                <p class="content-text">
                  Each car at Moovy boasts a variety of specs that unlocks its
                  true earning potential, mint value and functionality. Dive
                  into the Moovy universe to enjoy the full capabilities of you
                  car.
                </p>
              </div>
              <div class="content-blocks">
                <Transition mode="out-in">
                  <div class="main-block" v-if="activeItem === 'tank'">
                    <img
                      src="/img/tank.svg"
                      alt="tank"
                      class="main-block__icon"
                    />
                    <p class="main-block__title">Tank Capacity</p>
                    <p class="main-block__text">
                      Tank capacity is astonishingly vast, providing remarkable
                      potential for fuel storage.
                    </p>
                  </div>
                  <div class="main-block" v-else-if="activeItem === 'respect'">
                    <img
                      src="/img/respect_.svg"
                      alt="respect"
                      class="main-block__icon"
                    />

                    <p class="main-block__title">Respect</p>
                    <p class="main-block__text">
                      Respect is a marker of prestige when it comes to vehicles.
                      Enhancing respect for your car can enhance its overall
                      performance, providing you with an enriching driving
                      experience.
                    </p>
                  </div>
                  <div class="main-block" v-else-if="activeItem === 'earning'">
                    <img
                      src="/img/earning.svg"
                      alt="earning"
                      class="main-block__icon"
                    />

                    <p class="main-block__title">Earning Capacity</p>
                    <p class="main-block__text">
                      The MGAS tokens earned during the ride are determined by a
                      stunningly intricate combination of car characteristics.
                      Enjoy your journey and reward yourself in Tokens.
                    </p>
                  </div>
                  <div
                    class="main-block"
                    v-else-if="activeItem === 'consumption'"
                  >
                    <img
                      src="/img/consumption.svg"
                      alt="consumption"
                      class="main-block__icon"
                    />

                    <p class="main-block__title">Consumption</p>
                    <p class="main-block__text">
                      Monitoring fuel consumption can provide key insight into
                      the efficiency of your vehicle. Keeping an eye on how much
                      gas you're using for every 100km travelled allows you to
                      maximize its performance and get more out of each journey.
                    </p>
                  </div>
                  <div
                    class="main-block"
                    v-else-if="activeItem === 'efficiency'"
                  >
                    <img
                      src="/img/efficiency.svg"
                      alt="efficiency"
                      class="main-block__icon"
                    />

                    <p class="main-block__title">Efficiency</p>
                    <p class="main-block__text">
                      At a certain mileage, your vehicle may enter an unexpected
                      and undesirable mode which could result in costly repairs.
                      Avoid unpleasant surprises by maintaining regular service
                      checks.
                    </p>
                  </div>
                </Transition>
                <div class="small-blocks">
                  <div
                    class="small-block-item"
                    @click="setActiveItem('earning')"
                    v-if="activeItem !== 'earning'"
                  >
                    <img src="/img/earning.svg" alt="earning" />
                  </div>
                  <div
                    class="small-block-item"
                    @click="setActiveItem('consumption')"
                    v-if="activeItem !== 'consumption'"
                  >
                    <img src="/img/consumption.svg" alt="consumption" />
                  </div>
                  <div
                    class="small-block-item"
                    @click="setActiveItem('efficiency')"
                    v-if="activeItem !== 'efficiency'"
                  >
                    <img src="/img/efficiency.svg" alt="efficiency" />
                  </div>
                  <div
                    class="small-block-item"
                    @click="setActiveItem('respect')"
                    v-if="activeItem !== 'respect'"
                  >
                    <img src="/img/respect_.svg" alt="respect" />
                  </div>
                  <div
                    class="small-block-item"
                    @click="setActiveItem('tank')"
                    v-if="activeItem !== 'tank'"
                  >
                    <img src="/img/tank.svg" alt="tank" />
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/cars"
              target="_blank"
              class="slide-img-link mt-20"
            >
              <span>Learn More about Cars</span>
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-body">
            <div class="slide-title">
              <span>Compete</span>
            </div>
            <div class="slide-img">
              <img
                alt="compete"
                v-lazy="{
                  src: '/img/tabs/compete.jpg',
                  loading: '/img/tabs/blured/compete.jpg',
                }"
              />

              <div class="pagination">
                <span></span>
                <span></span>
                <span></span>
                <span class="active"></span>
                <span></span>
                <span></span>
              </div>
              <div class="slide-img-text">
                <p>
                  Give yourself the edge with a Rally ticket - unlock bonuses,
                  drive away in exclusive cars and collect valuable NFT assets -
                  Take on the competition.
                </p>
              </div>
            </div>
            <a
              href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/game-modes"
              target="_blank"
              class="slide-img-link"
            >
              <span>How to win?</span>
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-body">
            <div class="slide-title">
              <span>GameFi</span>
            </div>
            <div class="slide-img">
              <img
                alt="gamefi"
                v-lazy="{
                  src: '/img/tabs/gamefi.jpg',
                  loading: '/img/tabs/blured/gamefi.jpg',
                }"
              />

              <div class="pagination">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="active"></span>
                <span></span>
              </div>
              <div class="slide-img-text">
                <p>
                  Unleash the full potential of your avatars and cars with our
                  diverse selection of game modes, tailor-made for maximum
                  player enjoyment.
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
              <img
                alt="avatar-system"
                v-lazy="{
                  src: '/img/tabs/avatar-system.jpg',
                  loading: '/img/tabs/blured/avatar-system.jpg',
                }"
              />

              <div class="pagination">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="active"></span>
              </div>
              <div class="slide-img-text">
                <p>
                  Step into the captivating and connected Moovy world through
                  our state-of-the-art Avatar System. Enhance your digital
                  journey with a one-of-a-kind, immersive experience
                </p>
              </div>
            </div>
            <a
              href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/avatars"
              target="_blank"
              class="slide-img-link"
            >
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

  import 'swiper/css/lazy';

  const navigation = ref({
    enabled: true,
    nextEl: '.exp-button-next',
    prevEl: '.exp-button-prev',
  });
  const pagination = ref({
    enabled: true,
    el: '',
  });
  const modules = [Navigation];

  const activeItem = ref('tank');

  const setActiveItem = (item) => {
    activeItem.value = item;
  };
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
    width: 100%;
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
  .pagination {
    display: none;
  }
  .slide-img .media {
    display: none;
  }
  .slide-content {
    display: none;
  }
  @media (max-width: 1400px) {
    .exp-section {
      min-height: auto;
    }
    .slider-wrapper {
      width: 80%;
    }
  }
  @media (max-width: 992px) {
    .mt-20 {
      margin-top: 20px !important;
    }
    .slide-img .media {
      display: block;
    }
    .slide-img .desk {
      display: none;
    }
    .exp-section {
      padding: 0 20px;
    }
    .slider-wrapper {
      width: 100%;
    }
    .nav-button {
      display: none;
    }
    .slide-img-text {
      position: static;
      transform: translateX(0);
      margin: 0 auto;
      margin-top: 20px;
      width: 80%;
      padding: 18px 45px;
      background: none;
    }
    .pagination {
      display: block;
      margin-top: 20px;
      width: 100%;
      height: 8px;
      display: flex;
      justify-content: flex-end;
    }
    .pagination span {
      display: block;
      background: #d9d9d9;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .pagination span.active {
      background: #54d5e2;
      width: 24px;
      height: 10px;
      border-radius: 25px;
    }
    .pagination span:not(:last-child) {
      margin-right: 5px;
    }
    .slide-content {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    }
    .content-text-item {
      text-align: center;
    }
    .content-title {
      font-weight: 900;
      font-size: 24px;
      line-height: 1.06;
      color: #21e7d6;
      text-transform: uppercase;
      text-shadow: 0px 0px 5px #21e7d6;
    }
    .content-text {
      margin-top: 10px;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
      max-width: 580px;
    }
    .content-blocks {
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
    .main-block {
      margin-right: 10px;
      width: calc(60% - 17px);
      max-width: 300px;
      background: radial-gradient(
        100% 100% at 0% 0%,
        rgba(250, 250, 250, 0.2) 0%,
        rgba(247, 247, 247, 0) 100%
      );
      filter: drop-shadow(0px 5.49138px 27.4569px rgba(0, 0, 0, 0.5));
      border-radius: 16px;
      padding: 13px 13px 24px 13px;
      text-align: center;
      border: 0.5px solid #fff;
      position: relative;
    }
    .main-block__icon {
      position: absolute;
      top: 9px;
      left: 13px;
      z-index: 0;
    }
    .main-block__title {
      font-weight: 800;
      font-size: 18px;
      line-height: 22px;
      color: #21e7d6;
      text-align: center;
      mix-blend-mode: normal;
      text-shadow: 0px 0px 5.43333px #21e7d6;
      z-index: 2;
      position: relative;
    }
    .main-block__text {
      margin-top: 10px;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.25;
      text-align: center;
      color: #fff;
    }
    .small-blocks {
      width: calc(40% - 17px);
      max-width: 200px;
      display: flex;
      flex-wrap: wrap;
    }
    .small-block-item {
      margin: 0 7px 7px 0;
      display: flex;
      width: calc(50% - 10px);
      justify-content: center;
      align-items: center;
      background: radial-gradient(
        100% 100% at 0% 0%,
        rgba(250, 250, 250, 0.2) 0%,
        rgba(247, 247, 247, 0) 100%
      );
      border: 0.5px solid #fff;
      filter: drop-shadow(0px 5.49138px 27.4569px rgba(0, 0, 0, 0.5));
      border-radius: 16px;
    }
  }
  @media (max-width: 768px) {
    .slide-img-link {
      width: 70%;
      height: 92px;
    }
    .slide-img-link span {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: #000;
    }
  }
  @media (max-width: 556px) {
    .slide-img-link {
      width: 100%;
      height: 68px;
      margin-top: 100px;
    }
    .slide-img-link span {
      font-size: 20px;
      line-height: 1.25;
    }
    .slide-img-text {
      width: 100%;
      padding: 0;
      margin-top: 50px;
    }
    .slide-img-text p {
      font-weight: 700;
      font-size: 20px;
      line-height: 1.25;
      text-align: center;
      color: #fff;
    }
    .slide-img-text span {
      color: #21e7d6;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.25;
    }
    .slide-title {
      width: 60%;
      height: 62px;
    }
    .slide-title span {
      font-size: 24px;
      line-height: 1.25;
    }
  }
</style>