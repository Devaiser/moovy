<template>
  <div class="social">
    <div class="social__container">
      <div class="social__content">
        <h2 class="section-title">
          Moovy is endorsed <br />
          by bbsoft
        </h2>
        <div class="social__link">
          <a href="https://bbsoft.io/" target="_blank">
            <img src="/img/bbsoft-logo.svg" alt="bbsoft" />
          </a>
        </div>
      </div>
    </div>
    <video preload="auto" autoplay loop muted playsinline class="bg-video">
      <source type="video/webm" src="/video/bbsoft.webm" />
    </video>
  </div>
</template>
<script setup>
</script>
<style scoped>
  .social {
    margin-top: 100px;
    min-height: 100vh;
    position: relative;
  }
  .social__container {
    margin: 0 auto;
    max-width: 80%;
    padding: 0 40px;
  }
  .social__content {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
  .social__content h2 {
    margin-right: 20px;
  }
  .bg-video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -30px;
    left: 0;
    z-index: 0;
  }
</style>