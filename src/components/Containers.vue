<template>
  <div class="containers">
    <h2 class="big-title">Containers</h2>
    <div class="conteiners__video">
      <video preload="auto" autoplay muted loop playsinline>
        <source type="video/webm" src="/video/containers.webm" />
      </video>
    </div>
    <p class="section-text">
      Minting is the process of creating a new digital car from two existing NFT
      cars.
    </p>
    <p class="section-text">
      In the Moovy metaverse, you choose two NFT parent cars that may have
      different levels. You start minting to get a container with a new car
      after minting.
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