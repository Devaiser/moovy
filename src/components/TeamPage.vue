<template>
  <div class="team">
    <div class="team__container">
      <h2 class="section-title">
        Moovy <br />
        Core Team
      </h2>
    </div>
    <div class="team__body">
      <div class="team__main-img">
        <img src="/img/team/team.jpg" alt="team" class="team__main-img" />
        <img
          src="/img/team/Egor-based.png"
          alt="Egor"
          class="team__item-img-based"
        />
        <img
          src="/img/team/Roman-based.png"
          alt="Roman"
          class="team__item-img-based"
        />
        <img
          src="/img/team/Boris-based.png"
          alt="Boris"
          class="team__item-img-based"
        />
        <img
          :src="item.img"
          :alt="item.name"
          class="team__item-img"
          :class="{ active: activeItem === item.name }"
          v-for="item in team"
          :key="item.name"
        />
      </div>
      <TeamPattern class="team__pattern" @hover="setActiveItem" />
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { TeamPattern } from '@/components';

  const team = [
    {
      name: 'Victor',
      img: '/img/team/Victor.png',
    },
    {
      name: 'Olya',
      img: '/img/team/Olya.png',
    },
    {
      name: 'Max',
      img: '/img/team/Max.png',
    },
    {
      name: 'Roman',
      img: '/img/team/Roman.png',
    },
    {
      name: 'Kirill',
      img: '/img/team/Kirill.png',
    },
    {
      name: 'Dima',
      img: '/img/team/Dima.png',
    },
    {
      name: 'Egor',
      img: '/img/team/Egor.png',
    },
    {
      name: 'Boris',
      img: '/img/team/Boris.png',
    },
  ];

  const activeItem = ref(null);

  const setActiveItem = (item) => {
    activeItem.value = item;
  };
</script>
<style scoped>
  .team {
    position: relative;
    background: #000;
  }
  .section-title {
    margin: 0 auto;
    max-width: 80%;
    padding: 50px 40px;
  }
  .team__body {
    position: relative;
    margin-bottom: 80px;
    padding-top: 210px;
    z-index: 1;
  }
  .team__body::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 200px;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    z-index: 5;
  }
  .team__body::before {
    content: '';
    width: 100%;
    position: absolute;
    bottom: -200px;
    left: 0;
    height: 200px;
    background: #000;
    z-index: 5;
  }
  .team__pattern {
    width: 100%;
    height: 100%;
    z-index: 4;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 100px;
  }

  .team__main-img {
    width: 100%;
    user-select: none;
    pointer-events: none;
    position: relative;
  }
  .team__main-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .team__main-img {
    z-index: 1;
    position: relative;
  }
  .team__item-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out 0s;
  }
  .team__item-img-based {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .team__item-img.active {
    opacity: 1;
    visibility: visible;
  }
</style>