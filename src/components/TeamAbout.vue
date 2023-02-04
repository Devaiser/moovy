<template>
  <div class="card">
    <div class="card__bg">
      <img src="/img/firework.png" alt="firework" />
    </div>
    <div class="card__body">
      <p class="card__name">Roman Shramko</p>
      <div class="card__socials">
        <a href="/" class="card__socials-link">
          <img src="/img/linkedIn.svg" alt="linkedIn" />
        </a>
        <a href="/" class="card__socials-link">
          <img src="/img/twitter.svg" alt="twitter" />
        </a>
      </div>
    </div>
    <div class="card__role">
      <div class="card__role-wrapper">
        <img src="/img/info.svg" alt="info" />
        <span>COO</span>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
  .card {
    position: relative;
    z-index: 5;
    width: 250px;
  }
  .card__body {
    background: rgba(7, 7, 7, 0.62);
    border-radius: 11px;
    width: 250px;
    backdrop-filter: blur(2.5px);
    padding: 11px 20px;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-bottom: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card__name {
    max-width: 30px;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.25;
    color: #fff;
  }
  .card__socials {
    display: flex;
    align-items: center;
  }
  .card__socials-link {
    cursor: pointer;
  }
  .card__socials-link:not(:last-child) {
    margin-right: 10px;
  }
  .card__role {
    margin-top: 20px;
  }
  .card__role-wrapper {
    position: relative;
    width: 100%;
  }
  .card__role-wrapper img {
    width: 100%;
    height: 100%;
  }
  .card__role-wrapper span {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #000;
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translateX(-50%);
  }
  .card__bg {
    position: absolute;
    top: -20px;
    left: -50px;
    width: 100%;
    z-index: -1;
  }
  .card__bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
</style>