<template>
  <section class="error-page">
    <div class="error-page__bg">
      <img src="/img/page-not-found.jpg" alt="page-not-found" class="image" />
    </div>
    <div class="error-page__body">
      <div class="error-page__logo">
        <img src="/img/logo-new.png" alt="logo" class="image" />
      </div>
      <div class="error-page__text">
        <p class="small">Oops...</p>
        <p class="big">404</p>
        <p class="medium">we can’t find the page you’re looking for</p>
      </div>
      <router-link to="/" class="error-page__button">
        <span>go back home</span>
      </router-link>
    </div>
  </section>
  <Footer />
</template>
<script setup>
  import { Footer } from '@/components';
</script>
<style scoped>
  .error-page {
    min-height: 100vh;
    position: relative;
    background: #000;
  }
  .error-page::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to top, #000 15%, rgba(0, 0, 0, 0));
    z-index: 0;
  }
  .error-page__bg {
    position: absolute;
    width: 100%;
    /* height: 100%; */
    top: 92px;
    left: 0;
    z-index: 0;
  }
  .error-page__body {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 94px 40px 0 40px;
  }
  .error-page__logo {
    width: 709px;
    margin: 0 auto;
    margin-top: 100px;
  }
  .error-page__text {
    margin: 0 auto;
    margin-top: 50px;
    text-transform: uppercase;
    background: linear-gradient(98.27deg, #21e7d6 0%, #059588 105.42%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 900;
    line-height: 1.06;
    max-width: 1000px;
  }
  .error-page__text p.small {
    font-size: 40px;
  }
  .error-page__text p.medium {
    font-size: 48px;
  }
  .error-page__text p.big {
    font-size: 128px;
  }
  .error-page__button {
    margin: 0 auto;
    margin-top: 50px;
    background: linear-gradient(285.8deg, #21e7d6 3.03%, #21e7d6 81.45%);
    border-radius: 8.85px;
    width: 291px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .error-page__button span {
    text-transform: uppercase;
    background: linear-gradient(98.27deg, #046b62 0%, #000000 105.42%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-weight: 900;
    font-size: 20px;
    line-height: 106.5%;
  }
  @media (max-width: 1200px) {
    .error-page__logo {
      width: 500px;
      margin-top: 50px;
    }
  }
  @media (max-width: 992px) {
    .error-page__body {
      padding-bottom: 100px;
    }
    .error-page__text {
      margin-top: 20px;
    }
    .error-page__text p.small {
      font-size: 32px;
    }
    .error-page__text p.medium {
      font-size: 36px;
    }
    .error-page__text p.big {
      font-size: 100px;
    }
  }
  @media (max-width: 768px) {
    .error-page {
      min-height: auto;
    }
    .error-page__logo {
      width: 400px;
      margin-top: 50px;
    }
    .error-page__bg {
      top: 76px;
    }
    .error-page__text p.small {
      font-size: 30px;
    }
    .error-page__text p.medium {
      font-size: 30px;
    }
    .error-page__text p.big {
      font-size: 80px;
    }
    .error-page__button {
      margin-top: 40px;
      width: 250px;
      height: 45px;
    }
    .error-page__button span {
      font-size: 18px;
    }
  }
  @media (max-width: 556px) {
    .error-page__logo {
      display: none;
    }
    .error-page__text {
      margin-top: 200px;
    }
    .error-page__text p.small {
      font-size: 24px;
    }
    .error-page__text p.medium {
      font-size: 22px;
    }
    .error-page__text p.big {
      font-size: 50px;
    }
    .error-page__button {
      margin-top: 40px;
      width: 70%;
      height: 55px;
    }
  }
</style>