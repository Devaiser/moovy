<template>
  <Transition>
    <div class="modal" v-if="isPopupVisible">
      <div class="modal__wrapper">
        <div class="modal__body" ref="target">
          <div class="modal__content">
            <div class="modal__title">
              <span class="modal__title_blue">coming</span> <br />
              <span class="modal__title_white">Soon...</span>
            </div>
            <div class="modal__img">
              <img src="/img/daitana-popup.png" alt="car" class="image" />
              <div class="gradient-right"></div>
            </div>
          </div>
          <div class="modal__road">
            <video preload="metadata" autoplay muted loop playsinline>
              <source type="video/mp4" src="/video/modal-road.mp4" />
            </video>
            <div class="gradient-left"></div>
            <div class="gradient-right"></div>
          </div>
          <div class="modal__social">
            <a
              href="https://t.me/moovyglobal"
              target="_blanc"
              class="modal__social-link"
            >
              <IconTelegram :width="16" :height="14" />
              <span>@moovyglobal</span>
            </a>
            <a
              href="https://twitter.com/moovy_io"
              target="_blanc"
              class="modal__social-link"
            >
              <IconTwitter :width="17" :height="14" /> <span>@moovy_io</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { ref, watch } from 'vue';
import { IconTelegram, IconTwitter } from '@/components/icons';
import { onClickOutside } from '@vueuse/core';

const emit = defineEmits(['close']);

const props = defineProps({
  isVisible: {
    type: Boolean,
  },
});

watch(
  () => props.isVisible,
  (newValue) => {
    if (newValue) {
      isPopupVisible.value = true;
      document.body.classList.add('lock');
    }
  }
);

const target = ref(null);

const isPopupVisible = ref(false);

const closePopup = () => {
  isPopupVisible.value = false;
  document.body.classList.remove('lock');
  emit('close');
};

onClickOutside(target, closePopup);
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 19;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  overflow-y: scroll;
  box-sizing: border-box;
}
.modal__wrapper {
  height: 100%;
  width: fit-content;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__body {
  background: #000;
  max-width: 800px;
  position: relative;
  padding-bottom: 20px;
  -webkit-box-shadow: 0px 0px 17px 16px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 17px 16px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 17px 16px rgba(0, 0, 0, 1);
  height: fit-content;
  box-sizing: border-box;
  border-radius: 32px;
  /* overflow: hidden; */
}
.modal__content {
  display: flex;
}
.modal__title {
  font-weight: 900;
  font-size: 100px;
  line-height: 78.5%;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  margin: 20px 0 0 35px;
}
.modal__title_blue {
  background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.modal__title_white {
  background: linear-gradient(98.27deg, #fff 0%, #83daff 105.42%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.modal__img {
  margin-top: -20px;
  width: 400px;
}
.modal__img .gradient-right {
  width: 50px;
}
.modal__road {
  width: 100%;
  position: relative;
}
.modal__road video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.modal__social {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.modal__social-link {
  display: flex;
  align-items: center;
}
.modal__social-link:not(:last-child) {
  margin-right: 10px;
}
.modal__social-link span {
  font-weight: 600;
  font-size: 12px;
  line-height: 106%;
  text-transform: lowercase;
  color: #fff;
  margin-left: 5px;
}
@media (max-width: 1200px) {
  .modal__body {
    transform: scale(0.9);
  }
}
@media (max-width: 992px) {
  .modal__body {
    transform: scale(0.8);
    max-width: 700px;
  }
  .modal__title {
    font-size: 80px;
    margin: 20px 0 0 35px;
  }
}
@media (max-width: 778px) {
  .modal__body {
    transform: scale(1);
    max-width: 500px;
  }
  .modal__title {
    font-size: 60px;
    margin: 20px 0 0 20px;
  }
}
@media (max-width: 556px) {
  .modal__body {
    transform: scale(1);
    max-width: 100vw;
  }
  .modal__title {
    font-size: 40px;
    margin: 20px 0 0 20px;
  }
  .modal__road {
    height: 50px;
  }
}
</style>
