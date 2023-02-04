<template>
  <svg viewBox="0 0 2560 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <foreignObject width="250" height="250" x="985" y="-153">
        <TeamAbout />
      </foreignObject>
      <rect
        x="985"
        y="97"
        width="219"
        height="769"
        fill="black"
        fill-opacity="0.01"
        @mouseover="onMouseOver('Boris')"
        @mouseleave="onMouseLeave"
      />
    </g>
    <rect
      x="1574"
      y="477"
      width="301"
      height="437"
      fill="black"
      fill-opacity="0.01"
      @mouseover="onMouseOver('Egor')"
      @mouseleave="onMouseLeave"
    />
    <rect
      x="1660"
      y="82"
      width="229"
      height="373"
      fill="black"
      fill-opacity="0.01"
      @mouseover="onMouseOver('Kirill')"
      @mouseleave="onMouseLeave"
    />
    <rect
      x="1905"
      y="97"
      width="241"
      height="745"
      fill="black"
      fill-opacity="0.01"
      @mouseover="onMouseOver('Dima')"
      @mouseleave="onMouseLeave"
    />
    <rect
      x="1424"
      y="97"
      width="213"
      height="358"
      fill="black"
      fill-opacity="0.01"
      @mouseover="onMouseOver('Max')"
      @mouseleave="onMouseLeave"
    />
    <rect
      x="397"
      y="288"
      width="275"
      height="597"
      fill="black"
      fill-opacity="0.01"
      @mouseover="onMouseOver('Victor')"
      @mouseleave="onMouseLeave"
    />
    <rect
      x="722"
      y="227"
      width="235"
      height="345"
      fill="black"
      fill-opacity="0.01"
      @mouseover="onMouseOver('Olya')"
      @mouseleave="onMouseLeave"
    />
    <rect
      x="1218"
      y="97"
      width="184"
      height="749"
      fill="black"
      fill-opacity="0.01"
      @mouseover="onMouseOver('Roman')"
      @mouseleave="onMouseLeave"
    />
  </svg>
</template>
<script setup>
  import { TeamAbout } from '@/components';
  const emit = defineEmits(['hover']);

  const onMouseOver = (item) => {
    emit('hover', item);
  };
  const onMouseLeave = () => {
    emit('hover', null);
  };
</script>
<style scoped>
</style>