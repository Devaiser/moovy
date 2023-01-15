<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        @click="selectedTitle = title"
        v-for="title in tabTitles"
        :key="title"
        class="tabs__item"
        :class="{ selected: title === selectedTitle }"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>
<script setup>
  import { ref, useSlots, provide } from "vue";

  const props = defineProps({});
  const slots = useSlots();

  const tabTitles = ref(slots.default().map((tab) => tab.props.title));
  const selectedTitle = ref(tabTitles.value[0]);

  provide("selectedTitle", selectedTitle);
</script>
<style scoped>
  .tabs {
    min-width: 60vw;
    margin: 0 auto;
  }
  .tabs__header {
    display: flex;
  }
  .tabs__item {
    width: 100%;
    background: rgba(0, 0, 0, 0.56);
    border: 1px solid #fff;
    /* border-image: linear-gradient(to bottom, #fff, transparent) 1; */
    border-radius: 25px;
    height: 200px;
    padding: 20px 10px 0 10px;
    color: #fff;
    font-weight: 700;
    font-size: 27px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out 0s;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .tabs__item:not(:last-child) {
    margin-right: 2px;
  }
  .tabs__item::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out 0s;
    opacity: 0;
  }
  .tabs__item.selected {
    transform: translateY(-30px);
    z-index: 0;
  }
  .tabs__item.selected::after {
    opacity: 1;
    background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 70.42%);
    z-index: -1;
  }
</style>