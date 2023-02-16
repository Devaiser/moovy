<template>
  <svg
    width="1389"
    height="428"
    viewBox="0 0 1389 428"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="347"
      y="69"
      width="242"
      height="207"
      fill="black"
      fill-opacity="0.01"
      @click="onSelect('rare')"
    />
    <rect
      x="596"
      y="69"
      width="228"
      height="207"
      fill="transparent"
      fill-opacity="0.00"
      @click="onSelect('epic')"
    />
    <rect
      x="838"
      y="69"
      width="218"
      height="207"
      fill="black"
      fill-opacity="0.01"
      @click="onSelect('legendary')"
    />
    <rect
      x="1065"
      y="58"
      width="234"
      height="207"
      fill="black"
      fill-opacity="0.01"
      @click="onSelect('insane')"
    />
    <rect
      x="83"
      y="69"
      width="252"
      height="207"
      fill="black"
      fill-opacity="0.01"
      @click="onSelect('classic')"
    />
  </svg>
</template>
<script setup>
const emit = defineEmits(['click']);

const onSelect = (rarity) => {
  emit('click', rarity);
};
</script>
<style scoped></style>
