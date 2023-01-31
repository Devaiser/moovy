<template>
  <div class="containers">
    <h2 class="big-title">Containers</h2>
    <div class="conteiners__video">
      <video preload="metadata" autoplay muted loop playsinline>
        <source type="video/webm" src="/video/containers.webm" />
        <source type="video/mp4" :src="movVideo" />
      </video>
    </div>
    <p class="section-text">
      Step into the Moovy metaverse and design your very own unique NFT car. By
      combining two existing cars with varying levels, you enter a minting
      process that results in an excellent new digital vehicle of one-of-a-kind
      value. Forge ahead to create something distinctive - it's waiting for you.
    </p>
  </div>
</template>
<script setup>
  const movVideo = '/video/containersMov.mov';
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
  @media (max-width: 1400px) {
    .conteiners__video {
      margin-top: -400px;
      width: 100%;
      margin-bottom: 60px;
    }
  }
  @media (max-width: 992px) {
    .containers {
      margin-top: 150px;
      padding: 0 40px;
    }
    .conteiners__video {
      margin-top: -300px;
    }
  }
  @media (max-width: 768px) {
    .conteiners__video {
      margin-top: -230px;
    }
  }
  @media (max-width: 556px) {
    .containers {
      padding: 0 20px;
    }
    .conteiners__video {
      margin-top: -130px;
    }
  }
  @media (max-width: 420px) {
    .conteiners__video {
      margin-top: -100px;
    }
  }
</style>