<template>
  <div class="card" :class="{ safari: isSafari }">
    <div class="card__bg">
      <img src="/img/firework.png" alt="firework" />
    </div>
    <div class="card__body">
      <p class="card__name">{{ data.name }}</p>
      <div class="card__socials">
        <a
          :href="data.instagram"
          target="_blank"
          class="card__socials-link"
          v-if="data.instagram"
        >
          <img src="/img/instagram.svg" alt="instagram" />
        </a>
        <a
          :href="data.linkedin"
          target="_blank"
          class="card__socials-link"
          v-if="data.linkedin"
        >
          <img src="/img/linkedIn.svg" alt="linkedIn" />
        </a>
        <a
          :href="data.twitter"
          target="_blank"
          class="card__socials-link"
          v-if="data.twitter"
        >
          <img src="/img/twitter.svg" alt="twitter" />
        </a>
      </div>
    </div>
    <div class="card__role">
      <div class="card__role-wrapper">
        <div v-if="isSafari" class="on-safari">
          <span>{{ data.role }}</span>
        </div>
        <div v-else>
          <img src="/img/info.svg" alt="info" />
          <span>{{ data.role }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    isSafari: {
      type: Boolean,
      required: false,
      default: false,
    },
  });
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
    padding: 11px 20px;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-bottom: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card__name {
    max-width: 140px;
    font-weight: 400;
    font-size: 20px;
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
    font-size: 22px;
    white-space: nowrap;
    text-align: center;
    color: #000;
    position: absolute;
    top: 22%;
    left: 50%;
    transform: translateX(-50%);
  }
  .on-safari {
    width: 100%;
    height: 60px;
    background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
    border-radius: 54px;
    position: relative;
  }
  .on-safari span {
    font-weight: 700;
    font-size: 22px;
    white-space: nowrap;
    text-align: center;
    color: #000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

  @media (max-width: 767px) {
    .card.safari {
      width: 100%;
    }
  }
</style>