<template>
  <div class="containers">
    <h2 class="big-title">Containers</h2>
    <div class="conteiners__video">
      <video preload="auto" autoplay muted loop playsinline>
        <source type="video/webm" src="/video/containers.webm" />
        <source type="video/mp4" src="/video/containers.mov" />
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