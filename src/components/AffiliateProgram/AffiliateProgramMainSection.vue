<template>
  <section class="main">
    <div class="main__bg">
      <img src="/img/affiliate-program/main.jpg" alt="main-bg" class="image" />
    </div>
    <h1 class="main__text">
      <span class="main__text_big">Drive & Represent:</span> <br />
      <span class="main__text_small"
        ><span class="main__text_white">The Moovy</span> Ambassador
        Program</span
      >
    </h1>
  </section>
</template>
<script setup></script>
<style scoped>
.main {
  min-height: 100vh;
  position: relative;
}
.main__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  user-select: none;
  pointer-events: none;
}
.main__text {
  font-weight: 900;
  line-height: 106.5%;
  font-size: 70px;
  text-transform: uppercase;
  background: linear-gradient(180deg, #21e7d6 0%, #88cad5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  z-index: 1;
  position: absolute;
  bottom: 64px;
  left: 120px;
}
.main__text_big {
  font-size: 80px;
}
.main__text_small {
  font-size: 64px !important;
}
.main__text_white {
  color: #fff !important;
  background: none;
  -webkit-background-clip: initial;
  -webkit-text-fill-color: initial;
  background-clip: initial;
  text-fill-color: initial;
}
@media (max-width: 1200px) {
  .main__text {
    padding-right: 40px;
    line-height: 1;
  }
  .main__text_big {
    font-size: 60px;
  }
  .main__text_small {
    font-size: 48px !important;
  }
}
@media (max-width: 992px) {
  .main__text {
    padding-right: 40px;
    line-height: 0.8;
    left: 60px;
  }
  .main__text_big {
    font-size: 50px;
  }
  .main__text_small {
    font-size: 38px !important;
  }
}
@media (max-width: 992px) {
  .main__text {
    padding: 0 40px;
    line-height: 0.8;
    left: 60px;
    position: static;
    text-align: center;
  }
  .main__text_big {
    font-size: 50px;
  }
  .main__text_small {
    font-size: 38px !important;
  }
  .main {
    min-height: auto;
    position: relative;
  }
  .main__bg {
    position: relative;
    z-index: 0;
    user-select: none;
    pointer-events: none;
    margin-top: 75px;
  }
}
@media (max-width: 768px) {
  .main__text_big {
    font-size: 40px;
    display: inline-block;
    line-height: 1.1;
  }
  .main__text_small {
    font-size: 28px !important;
    display: inline-block;
    line-height: 1.1;
  }
}
@media (max-width: 556px) {
  .main__text {
    padding: 0 20px;
  }
  .main__text_big {
    font-size: 32px;
  }
  .main__text_small {
    font-size: 32px !important;
  }
}
</style>
