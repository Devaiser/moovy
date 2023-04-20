<template>
  <Transition>
    <div class="modal" v-if="isPopupVisible">
      <div class="modal__wrapper">
        <div class="modal__body" ref="target">
          <div class="modal__close" @click="closePopup">
            <img src="/img/close-icon.png" alt="close" class="image" />
          </div>
          <div class="modal__img">
            <img
              :src="`/img/promo-modal-${activePromo}.jpg`"
              alt="promo-modal"
              class="image"
              fetchpriority="high"
            />
          </div>
          <div class="modal__link">
            <ButtonLink
              href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=0xA0a4C12AA90Fe439b07b16657Cd2C12E4d41e25f"
              value="Buy MOIL now"
            />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { ButtonLink } from '@/components';
import { onClickOutside } from '@vueuse/core';

const target = ref(null);

const isPopupVisible = ref(false);

const activePromo = ref(1);

const showPopup = () => {
  if (!window.sessionStorage.getItem('done')) {
    setTimeout(() => {
      isPopupVisible.value = true;
      // document.body.classList.add('lock');
      sessionStorage.setItem('done', 1);
    }, 2000);
  }
};
onMounted(() => {
  showPopup();
  if (localStorage.promo === '2' || !localStorage.promo) {
    activePromo.value = 1;
    localStorage.setItem('promo', 1);
  } else {
    activePromo.value = 2;
    localStorage.setItem('promo', 2);
  }
});

const closePopup = () => {
  isPopupVisible.value = false;
  // document.body.classList.remove('lock');
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
  background: rgba(0, 0, 0, 0.75);
  z-index: 19;
  overflow-y: scroll;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px;
}
.modal__body {
  margin: 100px 0;
  padding: 100px 35px 75px 35px;
  border: 1px solid #88cad5;
  border-radius: 30px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    linear-gradient(315.3deg, #88cad5 -15.36%, rgba(0, 0, 0, 0.12) 133.97%);
  backdrop-filter: blur(10px);
  position: relative;
}
.modal__close {
  position: absolute;
  top: 15px;
  right: 20px;
  width: 48px;
  box-shadow: 7.375px 11.0625px 29.5px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
}
.modal__img {
  max-width: 1092px;
  width: 120vh;
  max-height: 575px;
}
.modal__img img {
  border-radius: 30px;
}
.modal__link {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
}
@media (max-width: 768px) {
  .modal__body {
    padding: 50px 10px 40px 10px;
  }
  .modal__close {
    width: 30px;
  }
}
@media (max-width: 556px) {
  .modal__wrapper {
    padding: 20px;
  }
  .modal__img img {
    border-radius: 20px;
  }
}
</style>
