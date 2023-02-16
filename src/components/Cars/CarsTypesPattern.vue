<template>
  <svg
    width="1536"
    height="591"
    viewBox="0 0 1536 591"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="181"
      y="70"
      width="279"
      height="362"
      fill="black"
      fill-opacity="0.01"
      @click="onSelect('a')"
    />
    <rect
      x="512"
      y="70"
      width="263"
      height="362"
      fill="black"
      fill-opacity="0.01"
      @click="onSelect('b')"
    />
    <rect
      x="808"
      y="70"
      width="265"
      height="362"
      fill="black"
      fill-opacity="0.01"
      @click="onSelect('c')"
    />
    <rect
      x="1092"
      y="70"
      width="265"
      height="362"
      fill="black"
      fill-opacity="0.01"
      @click="onSelect('d')"
    />
  </svg>
</template>
<script setup>
const emit = defineEmits(['click']);

const onSelect = (type) => {
  emit('click', type);
};
</script>
<style scoped></style>
