<template>
  <div class="roadmap">
    <div class="roadmap__video">
      <video preload="auto" autoplay muted playsinline>
        <source type="video/webm" src="/video/roadmap.webm" />
      </video>
    </div>
    <div class="roadmap__title">
      <div class="roadmap__title-logo">
        <img src="/img/logo.svg" alt="moovy-logo" />
      </div>
      <h2 class="title__title-text">ROADMAP</h2>
    </div>
    <div class="stage stage-1">
      <div class="stage-1__banner">
        <span>open beta version</span>
      </div>
      <div class="stage-1__element">
        <span>for Moovy Boxowners only</span>
      </div>
      <div class="stage-1__date"><span>December 2022</span></div>
      <div class="roadmap__arrow">
        <img src="/img/arrow.png" alt="arrow" />
      </div>
    </div>
    <div class="stage stage-2">
      <div class="stage-2__body">
        <div class="stage-2__date"><span>January 2023</span></div>
        <img src="/img/border.png" class="stage__border" alt="border" />
        <div class="stage-2__banner">
          <span>Ready - Steady - Earn</span>
        </div>
        <div class="stage__body-title">
          This version will include next core mechanics that will be used as
          base for the next big updates.
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
              <span class="stage__list-text_bold">Marathons</span> - Socialfy
              mechanic that will be used in the future for PvP and Raid Systems.
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
      <div class="stage-3__body">
        <div class="stage-3__date"><span>January 2023</span></div>
        <img src="/img/border.png" class="stage__border rotate" alt="border" />
        <div class="stage-3__banner">
          <span>Individualization</span>
        </div>
        <div class="stage__body-title">
          This version will let our users to upgrade their cars via graphic
          redactor and will include new Socialfy mechanics - hall of fame.
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
      <div class="stage-4__body">
        <div class="stage-4__date"><span>January 2023</span></div>
        <img src="/img/border.png" class="stage__border rotate" alt="border" />
        <div class="stage-4__banner">
          <span>Socializing</span>
        </div>
        <div class="stage__body-title">
          Rental System launch - Have you ever heard about sharing economy? And
          in M2E projects? Literally everyone will be able to earn by driving
          even without owning a car. Just use your BBWallet.
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
              succeed in Raid System users have to be active in BBChat and unite
              in teams guilds.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="space"></div>
  </div>
</template>
<script setup>
</script>
<style scoped>
  .roadmap {
    margin-top: 230px;
    position: relative;
  }
  .roadmap__video {
    position: absolute;
    top: 0;
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
  .stage-1 {
    z-index: 1;
    position: relative;
    /* margin-top: 10px; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5vw;
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
</style>