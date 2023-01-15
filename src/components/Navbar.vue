<template>
  <header class="header">
    <div class="container header__body">
      <div class="header__logo">
        <router-link to="/"><img src="/img/logo.svg" alt="logo" /></router-link>
      </div>
      <ul class="menu">
        <li class="menu__item"><router-link to="/">about</router-link></li>
        <li class="menu__item">
          <router-link to="/">whitepaper</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/">wallet connect</router-link>
        </li>
      </ul>
      <div class="header__social">
        <a
          href="https://discord.gg/yqkyNFVSZf"
          target="_blank"
          class="header__social-item"
        >
          <IconDiscord />
        </a>
        <a
          href="https://twitter.com/moovy_io"
          target="_blank"
          class="header__social-item"
        >
          <IconTwitter />
        </a>
      </div>
    </div>
  </header>
</template>
<script setup>
  import { IconDiscord, IconTwitter } from "@/components/icons";
</script>
<style scoped>
  .header {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 94px;
    background: linear-gradient(
      98.27deg,
      rgba(33, 231, 214, 0.16) 0%,
      rgba(131, 218, 255, 0.16) 105.42%
    );
    backdrop-filter: blur(29px);
  }
  .header__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 50px;
  }
  .header__logo {
    width: 148px;
    height: 32px;
  }
  .header__logo img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .menu {
    display: flex;
    margin-left: 20%;
  }
  .menu__item {
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.25;
    font-size: 15px;
  }
  .menu__item:not(:last-child) {
    margin-right: 120px;
  }
  .menu__item a {
    color: inherit;
  }
  .header__social {
    display: flex;
    align-items: center;
  }
  .header__social-item:not(:last-child) {
    margin-right: 20px;
  }
</style>