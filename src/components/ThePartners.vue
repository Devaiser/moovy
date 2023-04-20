<template>
  <section class="partners">
    <div class="gradient-top"></div>
    <div class="gradient-bottom"></div>
    <h2 class="section-title">Official Partners</h2>
    <div class="partners__list">
      <a
        v-for="partners in partnersList"
        :key="partners.url"
        :href="partners.url"
        target="_blank"
        class="partners__item"
      >
        <img :src="partners.img" :alt="partners.title" class="image" />
      </a>
    </div>
  </section>
</template>
<script setup>
const partnersList = [
  {
    url: 'https://gotbit.io',
    img: '/img/partners/GotbitLogo.svg',
    title: 'Gotbit',
  },
  {
    url: 'https://gagarin.world',
    img: '/img/partners/GagarinLogo.png',
    title: 'GagarinWorld',
  },
  {
    url: 'https://daolaunch.net',
    img: '/img/partners/DAOLaunchLogo.png',
    title: 'DAOLaunch',
  },
  {
    url: 'https://www.defimoon.org/',
    img: '/img/partners/DefimoonLogo.svg',
    title: 'Defimoon',
  },
  {
    url: 'http://gate.io',
    img: '/img/partners/GateLogo.png',
    title: 'Gate',
  },
];
</script>
<style scoped>
.partners {
  padding: 60px 0px;
  position: relative;
}
.section-title {
  z-index: 2;
  position: relative;
  max-width: 80%;
  margin: 0 auto;
}
.partners__list {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
  /* max-width: 1200px; */
  /* margin: 0 auto; */
  padding: 0 40px;
}
.partners__item {
  width: 234px;
  margin: 30px 20px;
  /* flex: 0 1 20%; */
}
@media (max-width: 556px) {
  .section-title {
    padding: 0 20px 0 40px;
    max-width: 100%;
    /* text-align: center; */
  }
}
</style>
