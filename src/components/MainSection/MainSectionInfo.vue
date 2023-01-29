<template>
  <div class="main-section__left">
    <div class="main-section__logo">
      <img src="/img/logo-text-new.png" alt="logo" />
    </div>
    <div class="main-section__store-links">
      <div class="store-link-item-text">coming soon</div>
      <div class="store-link-item store-link-item_blur">
        <img src="/img/app-store.svg" alt="App Store" />
      </div>
      <div class="store-link-item">
        <img src="/img/google-play.svg" alt="Google Play" />
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
  .main-section__left {
    position: relative;
    padding: 190px 20px 0 74px;
    z-index: 2;
    opacity: 1;
    visibility: visible;
    transition: opacity 1s ease-in-out, visibility 0.7s ease-in-out;
  }
  .main-section__left.hidden {
    opacity: 0;
    visibility: hidden;
  }
  .main-section__logo {
    width: 42vw;
    margin-bottom: 80px;
  }
  .main-section__logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .main-section__store-links {
    width: 19vw;
    display: flex;
    flex-direction: column;
    background: rgba(72, 72, 72, 0.26);
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
  }
  .store-link-item-text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 42px 60px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.25;
    white-space: nowrap;
  }
  .store-link-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 32px;
  }
  .store-link-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .store-link-item_blur {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    background: rgba(72, 72, 72, 0.52);
  }
  .main-section__right {
    margin: 0;
    width: 36vw;
    background: linear-gradient(
      174.62deg,
      rgba(8, 119, 119, 0.54) 0.94%,
      rgba(4, 48, 48, 0.54) 99.73%
    );
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 0 44px;
    position: relative;
    z-index: 2;
    transition: transform 1s ease-in-out;
    transform: translateX(0%);
  }

  @media (max-width: 992px) {
    .main-section__store-links {
      position: absolute;
      bottom: 10%;
      width: fit-content;
    }
    .main-section__logo {
      display: none;
    }
  }
  @media (max-width: 556px) {
    .main-section__store-links {
      width: 232px;
    }
    .main-section__left {
      padding-left: 40px;
    }
    .store-link-item-text {
      padding: 24px 28px;
    }
  }
</style>