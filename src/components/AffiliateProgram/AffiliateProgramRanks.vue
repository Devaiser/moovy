<template>
  <section class="section">
    <h2 class="affiliate-title">Earn BONuses and social status</h2>
    <div class="cards-list">
      <div v-for="card in cards" :key="card.subtitle" class="card-item">
        <AffiliateProgramFlipCard :options="card" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { AffiliateProgramFlipCard } from '@/components/AffiliateProgram';

const cards = [
  {
    subtitle: 'rank1',
    bgTitle: 'rank1',
    title: 'Ambassador',
    text: 'Ambassadors are the foundation of Moovy Ambassadors. They are the frontline of communication between the team and the community, facilitating and coordinating online and offline communication.',
    color1: '#21E7D6',
    color2: '#88CAD5',
  },
  {
    subtitle: 'rank2',
    bgTitle: 'rank2',
    title: 'Champion',
    text: 'As a Champion Moovy Ambassador your main role is to produce content for online, video, threads, and social media.  This involves creating and sharing posts, guiding others, and creating memes.',
    color1: '#7FFF52',
    color2: '#7FFF52',
  },
  {
    subtitle: 'rank3',
    bgTitle: 'rank3',
    title: 'Leader',
    text: 'As a Lead Moovy Ambassador, your main role is not only to generate content, but also to organize and host online and offline events. This includes driving club get-togethers, live events, and social meetups.',
    color1: '#E087FF',
    color2: '#E087FF',
  },
  {
    subtitle: 'rank4',
    bgTitle: 'rank4',
    title: 'Elite',
    text: 'As a Elite Moovy Ambassador, your role is to promote Moovy as a brand worldwide. You will deploy promotional strategies, attend conferences, and run social events to build connections.',
    color1: '#FFA318',
    color2: '#FFA318',
  },
];
</script>
<style scoped>
.section {
  padding: 40px;
  margin-top: 100px;
}
.affiliate-title {
  text-align: center;
}
.cards-list {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  flex-wrap: wrap;
}
.card-item {
  margin: 0 24px 24px 0;
}
@media (max-width: 768px) {
  .cards-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .card-item {
    margin: 0 0 24px 0;
  }
}
</style>
