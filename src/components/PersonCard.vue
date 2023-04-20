<template>
  <div class="card">
    <p class="card__name">@{{ name }}</p>
    <img :src="img" :alt="name" class="card__image" />
  </div>
</template>
<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});
</script>
<style scoped>
.card {
  width: 108px;
  height: 155px;
  background: #d9d9d9;
  border-radius: 10px;
  position: relative;
}
.card__name {
  font-weight: 700;
  font-size: 14px;
  line-height: 1.25;
  text-align: center;
  color: #000;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
.card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
  user-select: none;
}
</style>
