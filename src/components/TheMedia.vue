<template>
  <section class="media">
    <div class="gradient-top"></div>
    <div class="gradient-bottom"></div>
    <h2 class="section-title">Moovy in media</h2>
    <div class="media__list">
      <a
        v-for="media in mediaList"
        :key="media.url"
        :href="media.url"
        target="_blank"
        class="media__item"
      >
        <img :src="media.img" :alt="media.title" class="image" />
      </a>
    </div>
  </section>
</template>
<script setup>
const mediaList = [
  {
    url: 'https://www.marketwatch.com/press-release/moovy-a-drive2earn-app-is-set-to-help-its-users-earn-using-their-cars-2023-01-23',
    img: '/img/media/MarketWatchLogo.svg',
    title: 'MarketWatch',
  },
  {
    url: 'https://www.benzinga.com/pressreleases/23/01/ab30536854/moovy-a-drive2earn-app-is-set-to-help-its-users-earn-using-their-cars',
    img: '/img/media/BenzingaLogo.svg',
    title: 'Benzinga',
  },
  {
    url: 'https://www.digitaljournal.com/pr/news/an-insider-look-into-bbsoft-s-launch-of-gate-to-web3-with-bogatiy-borya',
    img: '/img/media/DigitalJournalLogo.png',
    title: 'DigitalJournal',
  },
];
</script>
<style scoped>
.media {
  padding: 60px 40px;
  position: relative;
}
.media::after {
  content: '';
  width: 100%;
  position: absolute;
  top: -100px;
  left: 0;
  height: 100px;
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  z-index: 3;
}
.section-title {
  width: fit-content;
  margin: 0 auto;
  z-index: 2;
  position: relative;
}
.media__list {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
}
.media__item {
  width: 234px;
  margin: 30px 20px;
}
</style>
