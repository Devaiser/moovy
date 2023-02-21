<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__logo">
        <router-link to="/"
          ><img src="/img/logo-new.png" alt="logo"
        /></router-link>
      </div>
      <div class="menu">
        <div
          class="menu__icon"
          @click="toggleMenu"
          :class="{ active: isMenuVisible }"
        >
          <span></span>
        </div>
        <nav class="menu__body" :class="{ active: isMenuVisible }">
          <ul class="menu__list">
            <li @click="toggleMenu">
              <router-link class="menu__link" to="/about">about</router-link>
              <!-- <a
                class="menu__link"
                target="_blank"
                href="https://moovy-io.gitbook.io/moovy.io-whitepaper/"
                >about</a
              > -->
            </li>
            <li>
              <a
                href="https://moovy-io.gitbook.io/moovy.io-whitepaper/"
                target="_blank"
                class="menu__link"
                >whitepaper</a
              >
            </li>
            <li>
              <!-- <a class="menu__link" target="_blank" href="https://t.me/moovy_io"
                >wallet connect</a
              > -->
              <w3m-core-button></w3m-core-button>
            </li>
          </ul>
          <div class="header__social">
            <a
              href="https://t.me/moovyglobal"
              target="_blank"
              class="header__social-item"
            >
              <IconTelegram :width="33" :height="25" />
            </a>
            <a
              href="https://twitter.com/moovy_io"
              target="_blank"
              class="header__social-item"
            >
              <IconTwitter />
            </a>
            <a
              href="https://instagram.com/moovy_io"
              target="_blank"
              class="header__social-item"
            >
              <IconInstagram :width="30" :height="30" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue';
import { IconTwitter, IconTelegram, IconInstagram } from '@/components/icons';
import { configureChains, createClient } from '@wagmi/core';

import { arbitrum, mainnet, polygon } from '@wagmi/core/chains';

import { Web3Modal } from '@web3modal/html';

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from '@web3modal/ethereum';

const PROJECT_ID = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

const chains = [arbitrum, mainnet, polygon];

// Wagmi Core Client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: PROJECT_ID }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: PROJECT_ID,
    version: '2',
    appName: 'web3Modal',
    chains,
  }),
  provider,
});

// Web3Modal and Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
new Web3Modal({ projectId: PROJECT_ID }, ethereumClient);

const isMenuVisible = ref(false);

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
  if (isMenuVisible.value) {
    document.body.classList.add('lock');
  } else {
    document.body.classList.remove('lock');
  }
};
</script>
<style scoped>
.header {
  position: fixed;
  z-index: 10;
  top: -2px;
  left: 0;
  width: 100%;
  height: 94px;
  background: linear-gradient(
    98.27deg,
    rgba(33, 231, 214, 0.16) 0%,
    rgba(131, 218, 255, 0.16) 105.42%
  );
  backdrop-filter: blur(29px);
  -webkit-backdrop-filter: blur(29px);
}
.header__container {
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
.menu__list > li {
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.25;
  font-size: 15px;
}
.menu__list > li:not(:last-child) {
  margin-right: 120px;
}
.menu__list > li a {
  color: inherit;
}
.header__social {
  display: flex;
  align-items: center;
}
.header__social-item:not(:last-child) {
  margin-right: 20px;
}
.menu__icon {
  display: none;
}
@media (min-width: 767px) {
  .menu__body {
    display: flex;
  }
  .menu__list {
    display: flex;
    align-items: center;
    margin-right: 100px;
  }
}
@media (max-width: 1200px) {
  .menu__list li:not(:last-child) {
    margin-right: 60px;
  }
}
@media (max-width: 992px) {
  .menu__list li:not(:last-child) {
    margin-right: 40px;
  }
  .menu__list {
    margin-right: 40px;
  }
}
@media (max-width: 768px) {
  .header__container {
    padding: 0 20px;
  }
  .header {
    height: 78px;
  }
  .menu__icon {
    z-index: 15;
    display: block;
    position: relative;
    width: 37px;
    height: 26px;
    cursor: pointer;
  }
  .menu__icon::before,
  .menu__icon::after,
  .menu__icon span {
    left: 0;
    position: absolute;
    width: 100%;
    height: 3px;
    transition: all 0.3s ease-in-out 0s;
    background-color: #fff;
  }
  .menu__icon::before,
  .menu__icon::after {
    content: '';
  }
  .menu__icon::before {
    top: 0;
  }
  .menu__icon::after {
    bottom: 0;
  }
  .menu__icon span {
    top: 50%;
    transform: scale(1) translate(0, -50%);
  }

  .menu__icon.active span {
    transform: scale(0) translate(0, -50%);
  }
  .menu__icon.active::before {
    top: 50%;
    transform: rotate(-45deg) translate(0, -50%);
  }
  .menu__icon.active::after {
    bottom: 50%;
    transform: rotate(45deg) translate(0, 50%);
  }
  .menu__body {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    padding: 100px 74px 160px 55px;
    box-sizing: border-box;
    transition: left 0.5s ease-in-out 0s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto;
  }
  .menu__body.active {
    left: 0;
  }
  .menu__list {
    margin-right: 0;
  }
  .menu__list li:not(:last-child) {
    margin-right: 0;
  }
  .menu__list li {
    margin-bottom: 32px;
    text-align: end;
    font-size: 20px;
  }
  .header__social {
    justify-content: flex-end;
  }
}
</style>
