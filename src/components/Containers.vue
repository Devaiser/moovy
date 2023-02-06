<template>
  <div class="containers">
    <div v-if="browserName !== 'safari'" class="containers__body">
      <h2 class="big-title">Containers</h2>
      <div class="conteiners__video">
        <video preload="metadata" autoplay muted loop playsinline>
          <source type="video/webm" src="/video/containers.webm" />
          <source type="video/mp4" :src="movVideo" />
        </video>
      </div>
    </div>
    <div class="containers__body_safari" v-else>
      <div class="conteiners__video">
        <video preload="metadata" autoplay muted loop playsinline>
          <source type="video/mp4" src="/video/containers.mp4" />
        </video>
      </div>
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
  import { ref, onMounted } from 'vue';

  const movVideo = '/video/containersMov.mov';

  const browserName = ref(null);

  function fnBrowserDetect() {
    let userAgent = navigator.userAgent;

    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName.value = 'chrome';
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName.value = 'firefox';
    } else if (userAgent.match(/safari/i)) {
      browserName.value = 'safari';
    } else if (userAgent.match(/opr\//i)) {
      browserName.value = 'opera';
    } else if (userAgent.match(/edg/i)) {
      browserName.value = 'edge';
    } else {
      browserName.value = 'No browser detection';
    }
  }

  onMounted(() => {
    fnBrowserDetect();
  });
</script>
<style scoped>
  .containers {
    margin-top: 450px;
  }
  .containers__body_safari {
    background: #000;
    padding: 0 40px;
    position: relative;
  }
  .containers__body {
    padding: 0 40px;
  }

  .containers__body_safari::before {
    content: '';
    width: 100%;
    height: 200px;
    top: -200px;
    left: 0;
    position: absolute;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }

  .containers__body_safari::after {
    content: '';
    width: 100%;
    height: 200px;
    bottom: -200px;
    left: 0;
    position: absolute;
    background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
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
  .section-text {
    position: relative;
    z-index: 3;
    padding: 0 40px;
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
    .section-text {
      padding: 0 20px;
    }
    .containers__body_safari {
      padding: 0 20px;
    }
    .containers__body {
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