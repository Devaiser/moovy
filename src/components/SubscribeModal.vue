<template>
  <div class="modal__wrapper" :class="{ active: isModalVisible }">
    <div class="modal__body" ref="target">
      <div class="modal__bg">
        <img src="/img/modal-bg.jpg" alt="modal-bg" />
      </div>
      <div class="modal__content">
        <div class="modal__logo">
          <img src="/img/logo.svg" alt="logo" />
        </div>
        <p class="modal__text">Subscribe to the Moovy app newsteller</p>
        <Transition mode="out-in">
          <form
            class="modal__form"
            @submit.prevent="onSubmit"
            v-if="isFormVisible"
          >
            <input
              name="email"
              type="email"
              placeholder="Your E-Mail"
              v-model="email"
            />
            <button type="submit">Subscribe</button>
          </form>
          <div class="modal__success" v-else>
            <span>Subscribed</span>
          </div>
        </Transition>
      </div>
      <div class="close-icon" @click="onModalClose">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';

const target = ref(null);

const emit = defineEmits(['close']);

const props = defineProps({
  isModalVisible: {
    type: Boolean,
    required: true,
    default: false,
  },
});

watch(
  () => props.isModalVisible,
  (newValue) => {
    newValue
      ? document.body.classList.add('lock')
      : document.body.classList.remove('lock');
  }
);

const isFormVisible = ref(true);

const email = ref('');

const onModalClose = () => {
  email.value = '';
  emit('close');
  isFormVisible.value = true;
};

onClickOutside(target, onModalClose);

const onSubmit = (e) => {
  if (email.value) {
    const formData = new FormData(e.target);
    fetch('https://getform.io/f/5c28fdc4-ee75-43dc-9cee-e5d461d3c8e2', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        isFormVisible.value = false;
        setTimeout(() => {
          onModalClose();
        }, 5000);
      })
      .catch((error) => console.log(error));
  }
};
</script>
<style scoped>
.modal__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 13;
  background: rgba(0, 0, 0, 0.7);
  padding: 40px 80px;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out 0s;
}
.modal__wrapper.active {
  opacity: 1;
  visibility: visible;
}
.modal__body {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  padding: 100px 60px;
  box-sizing: border-box;
}
.modal__bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.modal__bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.modal__content {
  z-index: 2;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal__logo {
  width: 357px;
  margin-bottom: 10px;
}
.modal__logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.modal__text {
  font-weight: 700;
  font-size: 24px;
  line-height: 1.25;
  text-align: center;
  color: #fff;
  margin-bottom: 50px;
}
.modal__form {
  display: flex;
  position: relative;
  max-width: 100%;
}
.modal__form input::placeholder {
  font-weight: 400;
  font-size: 18px;
  line-height: 93%;
  color: #fff;
  mix-blend-mode: normal;
  opacity: 0.2;
}
.modal__form input {
  background: linear-gradient(138.69deg, #141313 0%, #18191b 100%);
  border-radius: 68px;
  color: #fff;
  font-size: 18px;
  padding: 25px 254px 25px 40px;
  width: 40vw;
  outline: transparent;
}
.modal__form button {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 244px;
  background: linear-gradient(285.8deg, #006158 3.03%, #21e7d6 81.45%);
  border-radius: 93.5348px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 26.9613px;
  line-height: 36px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  border: none;
}
.close-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  z-index: 2;
  cursor: pointer;
}
.close-icon span {
  display: block;
  width: 24px;
  height: 3px;
  background-color: #135850;
}
.close-icon span:first-child {
  transform: rotate(45deg) translate(0, 50%);
}
.close-icon span:last-child {
  transform: rotate(-45deg) translate(0, -56%);
}
.modal__success {
  background: linear-gradient(285.8deg, #006158 3.03%, #21e7d6 81.45%);
  border-radius: 94px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 80px;
  -webkit-box-shadow: 12px 13px 17px -3px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 12px 13px 17px -3px rgba(0, 0, 0, 0.37);
  box-shadow: 12px 13px 17px -3px rgba(0, 0, 0, 0.37);
}
.modal__success span {
  font-weight: 700;
  font-size: 26px;
  line-height: 1.25;
  text-transform: uppercase;
  color: #fff;
}
@media (max-width: 1200px) {
  .modal__form input {
    width: 60vw;
  }
  .modal__success {
    width: 60vw;
  }
}
@media (max-width: 768px) {
  .modal__form button {
    width: 154px;
    font-size: 18px;
  }
  .modal__form input {
    padding: 15px 164px 15px 20px;
    width: 60vw;
    box-sizing: border-box;
  }
  .modal__wrapper {
    padding: 40px 60px;
  }
}
@media (max-width: 556px) {
  .modal__form button {
    width: 200px;
    font-size: 20px;
    position: static;
    margin-top: 20px;
    height: 54px;
  }
  .modal__form input {
    padding: 15px 20px;
    width: 80vw;
    box-sizing: border-box;
  }
  .modal__wrapper {
    padding: 40px 20px;
  }
  .modal__logo {
    width: 80%;
    margin-bottom: 10px;
  }
  .modal__text {
    font-size: 20px;
  }
  .modal__body {
    padding: 100px 20px;
  }
  .modal__form {
    flex-direction: column;
    align-items: center;
  }
  .modal__success {
    width: 80vw;
    height: 60px;
  }
  .modal__success span {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.25;
    text-transform: uppercase;
    color: #fff;
  }
}
</style>
