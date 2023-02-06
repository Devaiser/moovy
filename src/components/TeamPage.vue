<template>
  <div class="team">
    <div class="gradient"></div>
    <div class="team__container">
      <h2 class="section-title">
        Moovy <br />
        Core Team
      </h2>
      <div class="on-safari" v-if="isSafari">
        <Transition mode="out-in">
          <TeamAbout
            :data="BorisData"
            v-if="activeItem === 'Boris'"
            :isSafari="true"
          />
          <TeamAbout
            :data="EgorData"
            v-else-if="activeItem === 'Egor'"
            :isSafari="true"
          />
          <TeamAbout
            :data="KirillData"
            v-else-if="activeItem === 'Kirill'"
            :isSafari="true"
          />
          <TeamAbout
            :data="DimaData"
            v-else-if="activeItem === 'Dima'"
            :isSafari="true"
          />
          <TeamAbout
            :data="MaxData"
            v-else-if="activeItem === 'Max'"
            :isSafari="true"
          />
          <TeamAbout
            :data="VictorData"
            v-else-if="activeItem === 'Victor'"
            :isSafari="true"
          />
          <TeamAbout
            :data="OlyaData"
            v-else-if="activeItem === 'Olya'"
            :isSafari="true"
          />
          <TeamAbout
            :data="RomanData"
            v-else-if="activeItem === 'Roman'"
            :isSafari="true"
          />
        </Transition>
      </div>
    </div>
    <div class="team__body" :class="{ 'is-safari': isSafari }">
      <div class="team__main-img">
        <img alt="team" class="team__main-img" src="/img/team/team.jpg" />
        <img
          alt="Egor"
          class="team__item-img-based"
          src="/img/team/Egor-based.png"
        />
        <img
          alt="Roman"
          class="team__item-img-based"
          src="/img/team/Roman-based.png"
        />
        <img
          alt="Boris"
          class="team__item-img-based"
          src="/img/team/Boris-based.png"
        />
        <div v-for="item in team" :key="item.name">
          <Transition>
            <img
              :src="item.img"
              :alt="item.name"
              class="team__item-img"
              v-if="activeItemHover === item.name"
            />
          </Transition>
        </div>
      </div>
      <TeamPattern
        class="team__pattern"
        @hover="setActiveHover"
        @click="setActiveItem"
        @safari="onSafari"
      />
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted } from 'vue';
  import { TeamPattern, TeamAbout } from '@/components';

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

  const isTouchScreen = ref(null);

  const CheckTouchScreen = () => {
    isTouchScreen.value =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
  };
  CheckTouchScreen();

  const isSafari = ref(false);

  const activeItem = ref(null);
  const activeItemHover = ref(null);

  onMounted(() => {
    if (isTouchScreen.value) {
      activeItemHover.value = 'Boris';
      activeItem.value = 'Boris';
    } else {
      activeItem.value = null;
      activeItemHover.value = null;
    }
    isSafari.value = isTouchScreen.value;
  });

  const setActiveHover = (item) => {
    activeItemHover.value = item;
  };
  const setActiveItem = (item) => {
    activeItem.value = item;
  };

  const onSafari = () => {
    isSafari.value = true;
  };

  const BorisData = {
    name: 'Bogatiy Borya',
    role: 'CEO',
    twitter: 'https://twitter.com/bogatiy_borya',
    linkedin: 'https://www.linkedin.com/mwlite/in/bogatiy-borya',
    instagram: 'https://www.instagram.com/bogatiy_borya/',
  };
  const EgorData = {
    name: 'Egor Vasilev',
    role: 'IOS Dev',
    twitter: 'https://twitter.com/leofriskey',
    linkedin: 'https://linkedin.com/in/leofriskey',
  };
  const KirillData = {
    name: 'Kirill Drozdov',
    role: 'IOS Dev',
    twitter: 'https://twitter.com/kirikikoki',
    linkedin:
      'https://www.linkedin.com/in/%D0%BA%D0%B8%D1%80%D0%B8%D0%BB%D0%BB-%D0%B4%D1%80%D0%BE%D0%B7%D0%B4%D0%BE%D0%B2-7ba685227',
  };
  const DimaData = {
    name: 'Dmitriy Spichakov',
    role: 'Head of IOS Dev',
    linkedin: 'https://www.linkedin.com/in/dmitrii-spichakov-7761b623b/',
  };
  const MaxData = {
    name: 'Maxim Khlestkin',
    role: 'CTO',
    twitter: 'https://twitter.com/rendering___/',
    linkedin: 'https://www.linkedin.com/in/max-pavlovich-670874195',
  };
  const VictorData = {
    name: 'Victor Pirozhenko',
    role: 'Head of Design',
    twitter: 'https://twitter.com/pirzhnk',
    linkedin: 'https://www.linkedin.com/in/victor-pirozhenko-158054265/',
  };
  const OlyaData = {
    name: 'Panina Olga',
    role: 'UX/UI Designer',
    linkedin: 'https://www.linkedin.com/in/olga-panina-099073265/',
  };
  const RomanData = {
    name: 'Roman Shramko ',
    role: 'COO',
    twitter: 'https://twitter.com/xlsrio',
    linkedin: 'https://www.linkedin.com/in/roman-shramko-0711a0237/',
  };
</script>
<style scoped>
  .team {
    position: relative;
    background: #000;
  }
  .team__container {
    margin: 0 auto;
    max-width: 80%;
    height: 290px;
    padding: 50px 40px;
    margin-bottom: -300px;
    position: relative;
    z-index: 4;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .team__body {
    position: relative;
    margin-bottom: 80px;
    padding-top: 210px;
    z-index: 5;
  }
  .team__body.is-safari {
    z-index: 1;
  }
  .team__body::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 200px;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    z-index: 5;
  }
  .team__body::before {
    content: '';
    width: 100%;
    position: absolute;
    bottom: -199px;
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
  }
  .team__item-img-based {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .on-safari {
    margin-left: 15%;
  }
  @media (max-width: 992px) {
    .team__body::after {
      height: 100px;
    }
    .team__body::before {
      bottom: -100px;
      height: 100px;
    }
    .team__container {
      justify-content: space-between;
    }
  }
  @media (max-width: 767px) {
    .on-safari {
      transform: scale(0.9);
      margin: 0 auto;
      margin-top: 20px;
    }
    .team__container {
      max-width: 80%;
      height: 200px;
      padding: 50px 40px;
      margin-bottom: -200px;
      flex-direction: column;
    }
    .gradient {
      position: relative;
    }
    .gradient::before {
      content: '';
      width: 100%;
      height: 200px;
      top: -200px;
      left: 0;
      position: absolute;
      background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
  }
  @media (max-width: 556px) {
    .on-safari {
      transform: scale(0.7);
    }
  }
</style>