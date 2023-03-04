<template>
  <router-link :to="to" v-if="to" class="link" :class="{ link_small: small }">
    <span>
      {{ value }}
    </span>
  </router-link>
  <button
    type="submit"
    v-else-if="submit"
    class="link"
    :class="{ link_small: small }"
  >
    <span>
      {{ value }}
    </span>
  </button>
  <a
    :href="href"
    v-else
    class="link"
    target="_blanc"
    :class="{ link_small: small }"
  >
    <span>
      {{ value }}
    </span>
  </a>
</template>
<script setup>
defineProps({
  to: {
    type: String,
  },
  value: {
    type: String,
  },
  small: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
  },
  submit: {
    type: Boolean,
  },
});
</script>
<style scoped>
.link {
  padding: 15px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(138.69deg, #25e6d9 0%, #6ecde8 100%);
  box-shadow: 14px 14px 40px rgba(0, 0, 0, 0.75), -7px -7px 30px #1f2021;
  border-radius: 56px;
  width: fit-content;
  cursor: pointer;
  border: none;
}
.link_small {
  padding: 10px 40px;
}
.link span {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #000;
  width: fit-content;
}
.link_small span {
  font-size: 18px;
}
@media (max-width: 556px) {
  .link {
    padding: 10px 40px;
  }
  .link span {
    font-size: 18px;
  }
}
</style>
