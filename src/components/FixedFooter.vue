<template>
  <footer class="footer" :class="{ active: isFooterActive }">
    <div class="footer__item links">
      <a href="" target="_blanc" class="footer__link">
        <div class="footer__icon footer__icon_telegram">
          <img src="/img/socials/telegram.svg" alt="telegram" class="image" />
        </div>
      </a>
      <a href="" target="_blanc" class="footer__link">
        <div class="footer__icon footer__icon_twitter">
          <img src="/img/socials/twitter.svg" alt="twitter" class="image" />
        </div>
      </a>
      <a href="" target="_blanc" class="footer__link">
        <div class="footer__icon footer__icon_medium">
          <img src="/img/socials/medium.svg" alt="medium" class="image" />
        </div>
      </a>
      <a href="" target="_blanc" class="footer__link">
        <div class="footer__icon footer__icon_app-store">
          <img src="/img/socials/app-store.svg" alt="app-store" class="image" />
        </div>
      </a>
      <a href="" target="_blanc" class="footer__link">
        <div class="footer__icon footer__icon_play-market">
          <img
            src="/img/socials/play-market.svg"
            alt="play-market"
            class="image"
          />
        </div>
      </a>
      <a href="" target="_blanc" class="footer__link pos">
        <div class="footer__icon footer__icon_bb-soft">
          <img src="/img/socials/bb-soft.svg" alt="bb-soft" class="image" />
        </div>
      </a>
    </div>
    <div class="footer__item button">
      <div class="subscribe__button-wrapper" @click="setPopupVisibility(true)">
        <div class="subscribe__button">
          <span>subscribe</span>
        </div>
      </div>
    </div>
  </footer>
  <Teleport to="body">
    <SubscribeModal
      :isModalVisible="isModalVisible"
      @close="setPopupVisibility(false)"
    />
  </Teleport>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { SubscribeModal } from '@/components';

const isModalVisible = ref(false);

const setPopupVisibility = (value) => {
  isModalVisible.value = value;
};

const isFooterActive = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset === 0) {
      isFooterActive.value = false;
    } else {
      isFooterActive.value = true;
    }
  });
});
</script>
<style scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 72px;
  background: #000;
  z-index: 30;
  padding: 15px 185px 15px 70px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(100%);
  transition: all 0.5s ease 0s;
}
.footer.active {
  transform: translateY(0);
}
.footer__item {
  display: flex;
  align-items: center;
  height: 100%;
}
.footer__link {
  display: block;
}
.footer__link:not(:last-child) {
  margin-right: 50px;
}
.footer__link.pos {
  margin-top: 5px;
}
.subscribe__button {
  width: 196px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
  border-radius: 23px;
}
.subscribe__button span {
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.25;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-shadow: 0.673997px 0.673997px 1.34799px rgba(255, 255, 255, 0.3),
    -0.673997px -0.673997px 1.34799px rgba(102, 102, 102, 0.5);
  z-index: 2;
  position: relative;
}
.subscribe__button-wrapper {
  position: relative;
  height: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.342);
  border-radius: 23px;
  z-index: 3;
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(63, 63, 63, 0.7) 0%,
    rgba(167, 167, 167, 0) 100%
  );
  filter: drop-shadow(0px 1.16591px 14.3444px rgba(0, 0, 0, 0.5));
  /* overflow: hidden; */
}
.subscribe__button-wrapper::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(to top, #000 15%, rgba(0, 0, 0, 0));
  z-index: 1;
}
.footer__icon_telegram {
  width: 44px;
}
.footer__icon_twitter {
  width: 46px;
}
.footer__icon_medium {
  width: 44px;
}
.footer__icon_app-store {
  width: 44px;
}
.footer__icon_play-market {
  width: 37px;
}
.footer__icon_bb-soft {
  width: 42px;
}
@media (max-width: 1200px) {
  .footer {
    padding: 15px 70px 15px 70px;
  }
}
@media (max-width: 992px) {
  .footer {
    padding: 15px 40px 15px 40px;
  }
  .footer__icon_telegram {
    width: 40px;
  }
  .footer__icon_twitter {
    width: 42px;
  }
  .footer__icon_medium {
    width: 40px;
  }
  .footer__icon_app-store {
    width: 40px;
  }
  .footer__icon_play-market {
    width: 33px;
  }
  .footer__icon_bb-soft {
    width: 38px;
  }
  .footer__link:not(:last-child) {
    margin-right: 40px;
  }
}
@media (max-width: 768px) {
  .footer__item.button {
    display: none;
  }
  .footer__item.links {
    justify-content: space-between;
    width: 100%;
  }
}
@media (max-width: 556px) {
  .footer__link:not(:last-child) {
    margin-right: 20px;
  }
  .footer {
    padding: 10px 20px 10px 20px;
  }
  .footer__icon_telegram {
    width: 30px;
  }
  .footer__icon_twitter {
    width: 32px;
  }
  .footer__icon_medium {
    width: 30px;
  }
  .footer__icon_app-store {
    width: 30px;
  }
  .footer__icon_play-market {
    width: 23px;
  }
  .footer__icon_bb-soft {
    width: 28px;
  }
}
</style>
