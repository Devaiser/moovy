<template>
  <svg viewBox="0 0 2560 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g
      @mouseover="onMouseOver('Boris')"
      @mouseleave="onMouseLeave"
      @click="onClick('Boris')"
    >
      <foreignObject
        v-if="!isTouchScreen && browserName !== 'safari'"
        width="250"
        height="250"
        x="985"
        y="-113"
      >
        <Transition>
          <TeamAbout :data="BorisData" v-if="activeItem === 'Boris'" />
        </Transition>
      </foreignObject>
      <rect
        x="985"
        y="97"
        width="219"
        height="769"
        fill="black"
        fill-opacity="0.01"
      />
    </g>
    <g
      @mouseover="onMouseOver('Egor')"
      @mouseleave="onMouseLeave"
      @click="onClick('Egor')"
    >
      <foreignObject
        v-if="!isTouchScreen && browserName !== 'safari'"
        width="250"
        height="250"
        x="1590"
        y="280"
      >
        <Transition>
          <TeamAbout :data="EgorData" v-if="activeItem === 'Egor'" />
        </Transition>
      </foreignObject>
      <rect
        x="1574"
        y="477"
        width="301"
        height="437"
        fill="black"
        fill-opacity="0.01"
      />
    </g>
    <g
      @mouseover="onMouseOver('Kirill')"
      @mouseleave="onMouseLeave"
      @click="onClick('Kirill')"
      v-if="isKirillVisible"
    >
      <foreignObject
        v-if="!isTouchScreen && browserName !== 'safari'"
        width="250"
        height="250"
        x="1640"
        y="-128"
      >
        <Transition>
          <TeamAbout :data="KirillData" v-if="activeItem === 'Kirill'" />
        </Transition>
      </foreignObject>
      <rect
        x="1660"
        y="82"
        width="229"
        height="373"
        fill="black"
        fill-opacity="0.01"
      />
    </g>
    <g
      @mouseover="onMouseOver('Dima')"
      @mouseleave="onMouseLeave"
      @click="onClick('Dima')"
    >
      <foreignObject
        v-if="!isTouchScreen && browserName !== 'safari'"
        width="250"
        height="250"
        x="1905"
        y="-113"
      >
        <Transition>
          <TeamAbout :data="DimaData" v-if="activeItem === 'Dima'" />
        </Transition>
      </foreignObject>
      <rect
        x="1905"
        y="97"
        width="241"
        height="745"
        fill="black"
        fill-opacity="0.01"
      />
    </g>
    <g
      @mouseover="onMouseOver('Max')"
      @mouseleave="onMouseLeave"
      @click="onClick('Max')"
    >
      <foreignObject
        v-if="!isTouchScreen && browserName !== 'safari'"
        width="250"
        height="250"
        x="1424"
        y="-113"
      >
        <Transition>
          <TeamAbout :data="MaxData" v-if="activeItem === 'Max'" />
        </Transition>
      </foreignObject>
      <rect
        x="1424"
        y="97"
        width="213"
        height="358"
        fill="black"
        fill-opacity="0.01"
      />
    </g>
    <g
      @mouseover="onMouseOver('Victor')"
      @mouseleave="onMouseLeave"
      @click="onClick('Victor')"
    >
      <foreignObject
        v-if="!isTouchScreen && browserName !== 'safari'"
        width="250"
        height="250"
        x="397"
        y="78"
      >
        <Transition>
          <TeamAbout :data="VictorData" v-if="activeItem === 'Victor'" />
        </Transition>
      </foreignObject>
      <rect
        x="397"
        y="288"
        width="275"
        height="597"
        fill="black"
        fill-opacity="0.01"
      />
    </g>
    <g
      @mouseover="onMouseOver('Olya')"
      @mouseleave="onMouseLeave"
      @click="onClick('Olya')"
    >
      <foreignObject
        v-if="!isTouchScreen && browserName !== 'safari'"
        width="250"
        height="250"
        x="740"
        y="17"
      >
        <Transition>
          <TeamAbout :data="OlyaData" v-if="activeItem === 'Olya'" />
        </Transition>
      </foreignObject>
      <rect
        x="722"
        y="227"
        width="235"
        height="345"
        fill="black"
        fill-opacity="0.01"
      />
    </g>
    <g
      @mouseover="onMouseOver('Roman')"
      @mouseleave="onMouseLeave"
      @click="onClick('Roman')"
    >
      <foreignObject
        v-if="!isTouchScreen && browserName !== 'safari'"
        width="250"
        height="250"
        x="1170"
        y="-113"
      >
        <Transition>
          <TeamAbout :data="RomanData" v-if="activeItem === 'Roman'" />
        </Transition>
      </foreignObject>
      <rect
        x="1218"
        y="97"
        width="184"
        height="749"
        fill="black"
        fill-opacity="0.01"
      />
    </g>
  </svg>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { TeamAbout } from '@/components';

const emit = defineEmits(['hover', 'safari', 'click']);

const browserName = ref(null);

function fnBrowserDetect() {
  let userAgent = navigator.userAgent;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName.value = 'chrome';
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName.value = 'firefox';
  } else if (userAgent.match(/safari/i)) {
    browserName.value = 'safari';
  } else if (userAgent.match(/opr\//i)) {
    browserName.value = 'opera';
  } else if (userAgent.match(/edg/i)) {
    browserName.value = 'edge';
  } else {
    browserName.value = 'No browser detection';
  }
}

onMounted(() => {
  fnBrowserDetect();
});

const isTouchScreen = ref(null);

const CheckTouchScreen = () => {
  isTouchScreen.value =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
};
CheckTouchScreen();

const activeItem = ref(null);

const isKirillVisible = ref(true);

const onClick = (item) => {
  if (isTouchScreen.value || browserName.value === 'safari') {
    // тач ИЛИ сафари
    activeItem.value = item;
    emit('click', item);
    emit('safari');
  }
};

const onMouseOver = (item) => {
  activeItem.value = item;
  if (!isTouchScreen.value) {
    activeItem.value === 'Egor'
      ? (isKirillVisible.value = false)
      : (isKirillVisible.value = true);
  }
  if (browserName.value === 'safari') {
    // === safari
    emit('safari');
    emit('hover', item);
  } else {
    emit('hover', item);
    emit('click', item);
  }
};
const onMouseLeave = () => {
  if (browserName.value !== 'safari') {
    // НЕ сафари
    emit('hover', null);
    activeItem.value = null;
    isKirillVisible.value = true;
  }
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
g {
  display: block;
  position: relative;
  z-index: 2;
}
</style>
