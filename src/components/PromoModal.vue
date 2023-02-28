<template>
  <Transition>
    <div class="modal" v-if="isPopupVisible">
      <div class="modal__wrapper">
        <div class="modal__body" ref="target">
          <div class="modal__title">
            <span class="modal__title_blue">moovy</span> <br />
            <span class="modal__title_white">beta </span>
            <span class="modal__title_blue">launch</span>
          </div>
          <div class="modal__road">
            <video preload="metadata" autoplay muted loop playsinline>
              <source type="video/mp4" src="/video/modal-road.mp4" />
            </video>
            <div class="gradient-left"></div>
            <div class="gradient-right"></div>
          </div>
          <div class="modal__content">
            <div class="modal__content-item modal__list">
              <div class="modal__list-item">
                <div class="modal__list-point">
                  <span>1</span>
                  <div class="gradient-bottom"></div>
                </div>
                <div class="modal__list-text modal__list-text_big">
                  <span>go to </span>
                  <span class="modal__list-text_blue">beta.moovy.io</span>
                </div>
              </div>
              <div class="modal__list-item">
                <div class="modal__list-point">
                  <span>2</span>
                  <div class="gradient-bottom"></div>
                </div>
                <div class="modal__list-text">
                  <span>register and reffer your friends</span>
                </div>
              </div>
              <div class="modal__list-item">
                <div class="modal__list-point">
                  <span>3</span>
                  <div class="gradient-bottom"></div>
                </div>
                <div class="modal__list-text">
                  <span>wait for your code and launch on feb 28</span>
                </div>
              </div>
            </div>
            <div class="modal__content-item modal__links">
              <ButtonLink href="http://beta.moovy.io" value="Register" />
              <div class="modal__link_small" @click="closePopup">
                <span>Dismiss</span>
              </div>
            </div>
          </div>
          <div class="modal__img">
            <img src="/img/cars.png" alt="cars" class="image" />
            <div class="gradient-bottom"></div>
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
import { ref, onMounted } from 'vue';
import { ButtonLink } from '@/components';
import { IconTelegram, IconTwitter } from '@/components/icons';
import { onClickOutside } from '@vueuse/core';

const target = ref(null);

const isPopupVisible = ref(false);

const showPopup = () => {
  if (!window.sessionStorage.getItem('done')) {
    setTimeout(() => {
      isPopupVisible.value = true;
      document.body.classList.add('lock');
      sessionStorage.setItem('done', 1);
    }, 2000);
  }
};
onMounted(() => {
  showPopup();
});

const closePopup = () => {
  isPopupVisible.value = false;
  document.body.classList.remove('lock');
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
  overflow-y: scroll;
  box-sizing: border-box;
}
.modal__wrapper {
  height: 100%;
  width: fit-content;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
}
.modal__body {
  background: #000;
  max-width: 1000px;
  padding-bottom: 40px;
  padding-top: 40px;
  position: relative;
  -webkit-box-shadow: 0px 0px 17px 16px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 17px 16px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 17px 16px rgba(0, 0, 0, 1);
  transform: scale(0.9);
  height: fit-content;
  box-sizing: border-box;
}
.modal__title {
  font-weight: 900;
  line-height: 78.5%;
  letter-spacing: -4.5px;
  text-transform: uppercase;
  font-size: 100px;
  margin: 0px 124px 0 35px;
}
.modal__title_blue {
  background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.modal__title_white {
  color: #fff;
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
.modal__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 169px 0 127px;
}
.modal__list-item {
  display: flex;
  align-items: center;
}
.modal__list-item:not(:last-child) {
  margin-bottom: 30px;
}
.modal__list {
  max-width: 480px;
  margin-right: 40px;
}
.modal__list-point {
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  border-radius: 60.4782px;
  /* width: 54px; */
  flex: 0 0 54px;
  height: 54px;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 20px;
}
.modal__list-point .gradient-bottom {
  height: 30px;
  bottom: -2px;
}
.modal__list-point span {
  font-weight: 800;
  font-size: 24px;
  line-height: 106%;
  text-transform: uppercase;
  color: #fff;
}
.modal__list-text {
  font-weight: 600;
  font-size: 24px;
  line-height: 106%;
  text-transform: uppercase;
  color: #fff;
}
.modal__list-text_big {
  font-size: 32px;
}
.modal__list-text_blue {
  background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.modal__links {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal__link_small {
  margin-top: 30px;
  background: linear-gradient(138.69deg, #e0edf5 0%, #6ecde8 100%);
  box-shadow: 10.5px 10.5px 30px rgba(0, 0, 0, 0.75),
    -5.25px -5.25px 22.5px #1f2021;
  border-radius: 42px;
  padding: 7px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}
.modal__link_small span {
  font-weight: 500;
  font-size: 20px;
  line-height: 1.25;
  color: #000;
}
.modal__img {
  width: 70%;
  margin: 0 auto;
  position: relative;
}
.modal__img .gradient-bottom {
  height: 50px;
  bottom: -2px;
}
.modal__img .gradient-right,
.modal__img .gradient-left {
  width: 50px;
}
.modal__social {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
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
@media (max-width: 1400px) {
  .modal__body {
    transform: scale(0.8);
  }
}
@media (max-width: 1200px) {
  .modal__body {
    transform: scale(0.7);
  }
}
@media (max-width: 992px) {
  .modal__body {
    max-width: 100vw;
    height: 100%;
    /* max-width: 90vw; */
    transform: scale(1);
  }
  .modal__content {
    padding: 0 100px 0 80px;
  }
  .modal__list-text {
    font-size: 20px;
  }
  .modal__list-text_big {
    font-size: 26px;
  }
  .modal__title {
    margin: 0px 40px 0 35px;
  }
}
@media (max-width: 768px) {
  .modal__content {
    flex-direction: column;
    justify-content: center;
    padding: 0 40px 0 40px;
  }
  .modal__links {
    margin-top: 40px;
  }
  .modal__title {
    letter-spacing: 1px;
    font-size: 68px;
  }
  .modal__img {
    width: 100%;
  }
}
@media (max-width: 556px) {
  .modal__title {
    font-size: 50px;
    margin: 0px 20px 0 20px;
  }
  .modal__list-text {
    font-size: 18px;
  }
  .modal__list-text_big {
    font-size: 22px;
  }
  .modal__list-item:not(:last-child) {
    margin-bottom: 10px;
  }
  .modal__content {
    padding: 0 20px 0 20px;
  }
}
</style>
