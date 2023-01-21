<template>
  <div class="subscribe">
    <p class="subscribe__text">Subscribe to our newsteller</p>
    <button class="subscribe__button">
      <img src="/img/subscribe-button.png" alt="subscribe-button" />
    </button>
  </div>
</template>
<script setup>
</script>
<style scoped>
  .subscribe {
    padding: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, #75928e 0%, #1fe5d3 49.27%, #75928e 100%);
  }
  .subscribe__text {
    color: #fff;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 33px;
    line-height: 1.25;
    text-shadow: 0px 0px 2.61896px #ffffff;
    margin-right: 33px;
  }
  .subscribe__button {
    border: none;
    background: none;
    cursor: pointer;
  }
  .subscribe__button img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
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
  }
</style>