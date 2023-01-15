<template>
  <MainSection @isVisible="mainSectionVisibility" />
  <ScrollView
    v-if="isScrollViewVisible"
    :class="{ visible: !isMainSectionVisible }"
  />
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { MainSection } from "@/components/MainSection";
  import { ScrollView } from "@/components";

  const isScrollViewVisible = ref(false);

  const isMainSectionVisible = ref(true);
  const mainSectionVisibility = (value) => {
    isMainSectionVisible.value = value;
  };

  onMounted(() => {
    setTimeout(() => {
      isScrollViewVisible.value = true;
    }, 300);
  });
</script>

