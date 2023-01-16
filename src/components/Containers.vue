<template>
  <div class="containers">
    <h2 class="big-title">Containers</h2>
    <div class="conteiners__video">
      <video preload="auto" autoplay muted loop playsinline>
        <source type="video/webm" src="/video/containers.webm" />
      </video>
    </div>
    <p class="section-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</template>
<script setup>
</script>
<style scoped>
  .containers {
    margin-top: 250px;
    padding: 0 40px;
  }
  .big-title {
    text-align: center;
  }
  .conteiners__video {
    margin: 0 auto;
    margin-top: -440px;
    width: 64%;
  }
  .conteiners__video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>