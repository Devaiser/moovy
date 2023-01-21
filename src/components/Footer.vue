<template>
  <footer class="footer">
    <div class="footer__logo">
      <img src="/img/logo.svg" alt="logo" />
    </div>
    <span class="footer__line"></span>
    <div class="footer__social">
      <p class="footer__social-text">Social media</p>
      <div class="footer__social-list">
        <a
          href="https://t.me/moovy_io"
          target="_blank"
          class="footer__social-item"
        >
          <IconTelegram />
        </a>
        <a
          href="https://discord.gg/yqkyNFVSZf"
          target="_blank"
          class="footer__social-item"
        >
          <IconDiscord :width="24" :height="16" />
        </a>
        <a
          href="https://twitter.com/moovy_io"
          target="_blank"
          class="footer__social-item"
        >
          <IconTwitter :width="23" :height="18" />
        </a>
        <a
          href="https://moovy-io.medium.com/"
          target="_blank"
          class="footer__social-item"
        >
          <IconMedium />
        </a>
      </div>
    </div>
    <span class="footer__line"></span>
    <router-link class="footer__link" to="/">User Agreement</router-link>
    <p class="footer__text">
      Copyright © 2022 MOOVY GEM FZE. All rights reserved
    </p>
  </footer>
</template>
<script setup>
  import {
    IconDiscord,
    IconMedium,
    IconTelegram,
    IconTwitter,
  } from '@/components/icons';
</script>
<style scoped>
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000;
    align-items: center;
    padding: 45px 20px 60px 20px;
  }
  .footer__logo {
    width: 260px;
    height: 58px;
    margin-bottom: 30px;
  }
  .footer__logo img {
    display: block;
    widows: 100%;
    height: 100%;
    object-fit: cover;
  }
  .footer__line {
    width: 80%;
    height: 3px;
    background: linear-gradient(90deg, #0a0d0f 0%, #1fe5d3 49.27%, #0a0d0f 100%);
  }
  .footer__social {
    margin-top: 15px;
    margin-bottom: 26px;
  }
  .footer__social-text {
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 14px;
    text-align: center;
  }
  .footer__social-list {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer__social-item:not(:last-child) {
    margin-right: 17px;
  }
  .footer__link {
    margin-top: 40px;
    color: #1fe5d3;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 5px;
  }
  .footer__text {
    font-size: 16px;
    color: #fff;
    text-align: center;
  }
  @media (max-width: 556px) {
    .footer__logo {
      width: 170px;
      height: 37px;
      margin-bottom: 30px;
    }
  }
</style>