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
    url: 'https://zelwin.finance',
    img: '/img/partners/ZelwinLogo.png',
    title: 'Zelwin',
  },
  {
    url: 'https://daolaunch.net',
    img: '/img/partners/DAOLaunchLogo.png',
    title: 'DAOLaunch',
  },
];
</script>
<style scoped>
.partners {
  padding: 60px 40px;
  position: relative;
}
.section-title {
  width: fit-content;
  margin: 0 auto;
  z-index: 2;
  position: relative;
}
.partners__list {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
}
.partners__item {
  width: 234px;
  margin: 30px 20px;
}
</style>
