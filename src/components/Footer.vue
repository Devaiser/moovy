<template>
  <footer class="footer">
    <div class="footer__containers">
      <div class="footer__item footer__item_top">
        <div class="footer__top_left">
          <div class="footer__top__info">
            <div class="footer__logo">
              <router-link to="/">
                <img src="/img/logo.svg" alt="logo" class="image" />
              </router-link>
            </div>
            <div class="footer__top__subscribe">
              <p class="footer__text_bold mb-5">SUBSCRIBE</p>
              <p class="footer__text">
                Be the first to know about upcoming projects. Subscribe to the
                news by email.
              </p>
            </div>
          </div>
          <form class="footer__form" @submit.prevent="onSubmit">
            <input
              name="email"
              type="email"
              class="footer__form__input"
              placeholder="@email"
              v-model.trim="email"
            />
            <button type="submit" class="footer__form__submit-button">
              subscribe
            </button>
          </form>
        </div>
        <div class="footer__top_right">
          <a
            href="https://github.com/Defimoonorg/Audit-Report/blob/main/Moovy.pdf"
          >
            <img src="/img/Defimoon.png" alt="Defimoon" class="image" />
          </a>
        </div>
      </div>
      <div class="footer__line"></div>
      <div class="footer__item footer__item_bottom">
        <div class="footer__about">
          <p class="footer__text">
            Stake MOIL, drive2earn MGAS and receive multiple rewards in BBSoft
            Ecosystem!
          </p>
          <router-link class="footer__agreement-link" to="/agreements"
            >User Agreement</router-link
          >
        </div>
        <div class="footer__links">
          <div class="footer__Links_list">
            <div class="footer__links-item">
              <router-link to="/" class="footer__links-link">Home</router-link>
              <a
                href="https://bbsoft.io/"
                target="_blank"
                class="footer__links-link"
                >BBSoft</a
              >
              <span class="footer__links-link">Dashboard</span>
              <span to="/" class="footer__links-link">Ambassador</span>
            </div>
            <div class="footer__links-item">
              <a href="/" target="_blank" class="footer__links-link"
                >Tokenomics</a
              >
              <a href="/" target="_blank" class="footer__links-link">Staking</a>
              <a href="/" target="_blank" class="footer__links-link"
                >Earn MOIL</a
              >
            </div>
            <div class="footer__links-item">
              <a
                href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/avatars"
                target="_blank"
                class="footer__links-link"
                >Avatar System</a
              >
              <a
                href="https://moovy-io.gitbook.io/moovy.io-whitepaper/gamefi-elements/cars/car-types-and-rarity"
                target="_blank"
                class="footer__links-link"
                >Car System</a
              >
              <a href="/" target="_blank" class="footer__links-link"
                >Garage System</a
              >
              <a href="/" target="_blank" class="footer__links-link"
                >How To Start</a
              >
            </div>
          </div>
          <p class="footer__text copyright">
            Copyright © 2023 MOOVY GEM FZE. All rights reserved
          </p>
        </div>
        <div class="footer__social">
          <p class="footer__text_semibold">Join Moovy Community</p>
          <div class="footer__social__list">
            <a
              href="https://t.me/moovyglobal"
              target="_blank"
              class="footer__social-item"
            >
              <IconTelegram />
            </a>
            <a
              href="https://twitter.com/moovy_io"
              target="_blank"
              class="footer__social-item"
            >
              <IconTwitter :width="23" :height="18" />
            </a>
            <a
              href="https://instagram.com/moovy_io"
              target="_blank"
              class="footer__social-item"
            >
              <IconInstagram :width="23" :height="23" />
            </a>
            <a
              href="https://moovy-io.medium.com/"
              target="_blank"
              class="footer__social-item"
            >
              <IconMedium />
            </a>
          </div>
          <a href="mailto:office@moovy.io" class="footer__email-link"
            >office@moovy.io</a
          >
        </div>
      </div>
      <p class="footer__text copyright_media">
        Copyright © 2023 MOOVY GEM FZE. All rights reserved
      </p>
    </div>
  </footer>
</template>
<script setup>
import { ref } from 'vue';
import {
  // IconDiscord,
  IconMedium,
  IconTelegram,
  IconTwitter,
  IconInstagram,
} from '@/components/icons';

const email = ref('');

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
        email.value = '';
      })
      .catch((error) => console.log(error));
  }
};
</script>
<style scoped>
.footer {
  background-color: #000;
  position: relative;
  top: -2px;
}
.footer__containers {
  margin: 0 auto;
  padding: 60px 60px 30px 60px;
}
.footer__item_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer__top_left {
}
.footer__top__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer__logo {
  display: block;
  width: 260px;
  margin-right: 20px;
}

.footer__top__subscribe {
  max-width: 350px;
}
.footer__text_bold {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.25;
  color: #ffffff;
}
.footer__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;
}
.footer__top_right {
  width: 200px;
}
.footer__form {
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.footer__form__input {
  background: #000;
  border: 1px solid #fff;
  border-radius: 7px;
  padding: 10px 30px;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;
  margin-right: 36px;
  width: 250px;
}
.footer__form__input::placeholder {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;
}
.footer__form__submit-button {
  filter: drop-shadow(0px 1.16591px 14.3444px rgba(0, 0, 0, 0.5));
  backdrop-filter: blur(7.1722px);
  border-radius: 23.6682px;
  display: flex;
  justify-content: center;
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(63, 63, 63, 0.7) 0%,
    rgba(167, 167, 167, 0) 100%
  );
  align-items: center;
  text-shadow: 0.673997px 0.673997px 1.34799px rgba(255, 255, 255, 0.3),
    -0.673997px -0.673997px 1.34799px rgba(102, 102, 102, 0.5);
  color: #fff;
  width: 220px;
  height: 48px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.25;
  text-align: center;
  text-transform: uppercase;
  border: 1px solid #fff;
  border-bottom: none;
  cursor: pointer;
}
.footer__line {
  display: block;
  max-width: 1364px;
  background: linear-gradient(90deg, #0a0d0f 0%, #1fe5d3 49.27%, #0a0d0f 100%);
  margin: 0 auto;
  margin-top: 36px;
  height: 3px;
}
.footer__item_bottom {
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
}
.footer__about {
  max-width: 268px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer__agreement-link {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: #1fe5d3;
  width: fit-content;
}
.footer__links {
  justify-content: center;
}
.footer__Links_list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer__links-link {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;
  margin-bottom: 10px;
}
.footer__links-item {
  display: flex;
  flex-direction: column;
}
.footer__links-item:not(:last-child) {
  margin-right: 100px;
}
.footer__links .footer__text {
  text-align: center;
  margin-top: 35px;
}
.footer__social-item:not(:last-child) {
  margin-right: 10px;
}
.footer__text_semibold {
  font-weight: 700;
}
.footer__email-link {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  text-decoration: underline;
  color: #fff;
  margin-top: 17px;
  display: block;
  width: fit-content;
}
.footer__social__list {
  margin-top: 17px;
  display: flex;
  align-items: center;
}
.copyright_media {
  display: none;
}
@media (max-width: 1200px) {
  .footer__links-item:not(:last-child) {
    margin-right: 40px;
  }
  .footer__line {
    max-width: 85%;
  }
}
@media (max-width: 992px) {
  .footer__item_bottom {
    flex-direction: column;
  }
  .footer__links {
    order: 3;
  }
  .footer__about {
    margin-bottom: 20px;
  }
  .footer__agreement-link {
    margin-top: 30px;
  }
  .footer__social {
    margin-bottom: 20px;
  }
  .footer__item_top {
    flex-direction: column;
  }
  .footer__top_right {
    margin-top: 30px;
    align-self: flex-end;
  }
}
@media (max-width: 768px) {
  .footer__containers {
    margin: 0 auto;
    padding: 10px 20px 30px 20px;
  }
  .footer__logo {
    margin-right: 0;
    margin-bottom: 20px;
  }
  .footer__top__info {
    flex-direction: column;
    text-align: center;
  }
  .footer__form {
    flex-direction: column;
  }
  .footer__form__input {
    margin-right: 0;
    margin-bottom: 20px;
  }
  .footer__top_right {
    align-self: center;
  }
  .footer__item_bottom {
    align-items: center;
  }
  .footer__about {
    text-align: center;
    order: 3;
  }
  .footer__links {
    order: 2;
    margin-bottom: 20px;
  }
  .footer__agreement-link {
    margin: 0 auto;
    margin-top: 20px;
  }
  .footer__social__list {
    justify-content: center;
  }
  .footer__social-item:not(:last-child) {
    margin-right: 20px;
  }
  .footer__email-link {
    margin: 0 auto;
    margin-top: 20px;
  }
  .copyright {
    display: none;
  }
  .copyright_media {
    display: block;
    text-align: center;
  }
}
@media (max-width: 556px) {
  .footer__Links_list {
    justify-content: center;
  }
  .footer__form__input {
    width: 100%;
    box-sizing: border-box;
  }
  .copyright_media {
    font-size: 14px;
  }
}
@media (max-width: 400px) {
  .footer__Links_list {
    flex-wrap: wrap;
    justify-content: center;
  }
  .footer__links-item:not(:last-child) {
    margin-right: 0;
  }
  .footer__links-item:first-child {
    margin-right: 74px;
  }
  .footer__links-item:nth-child(2) {
    order: 3;
    margin-top: 10px;
  }
}
</style>
