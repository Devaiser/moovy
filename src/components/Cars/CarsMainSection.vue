<template>
  <section class="main">
    <h1 class="cars__title">Cars in moovy</h1>
    <div class="main__video">
      <video preload="metadata" autoplay muted playsinline loop class="video">
        <source type="video/mp4" src="/video/cars-main.mp4" />
      </video>
      <div class="gradient-bottom"></div>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
.main {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
.main__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main__video video {
  object-position: left;
}
.cars__title {
  font-weight: 900;
  font-size: 96px;
  line-height: 106%;
  text-transform: uppercase;
  color: #cfcfce;
  position: absolute;
  top: 30%;
  left: 10vw;
  transform: translateY(-50%);
  z-index: 2;
  padding: 0 20px;
  box-sizing: border-box;
}
.gradient-bottom {
  height: 200px;
  bottom: -1px;
}
@media (max-width: 992px) {
  .cars__title {
    font-size: 72px;
  }
}
@media (max-width: 768px) {
  .cars__title {
    font-size: 70px;
    left: 6vw;
  }
}
</style>
