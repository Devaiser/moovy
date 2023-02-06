<template>
  <div class="licenses">
    <div class="licenses__body" v-if="browserName !== 'safari'">
      <Transition mode="out-in" class="licenses__titles">
        <h2 v-if="isFirstTitleVisible" class="big-title">licenses</h2>
        <h2 v-else class="big-title">talents</h2>
      </Transition>
      <div class="licenses__video" id="licenses-section">
        <video
          preload="metadata"
          autoplay
          muted
          loop
          playsinline
          id="license-video"
        >
          <source type="video/webm" src="/video/licenses.webm" />
          <source type="video/mp4" :src="movVideo" />
        </video>
      </div>
    </div>
    <div class="licenses__body_safari" v-else>
      <div class="licenses__video">
        <video preload="metadata" autoplay muted loop playsinline>
          <source type="video/mp4" src="/video/licenses.mp4" />
        </video>
      </div>
    </div>
    <p class="section-text">
      Register with Moovy and create your personalized avatar character,
      complete with a unique driver's license and name. As you progress through
      our app's Talents system of Levels, you can unlock potent abilities that
      will catapult your gaming character into exciting new dimensions.
    </p>
  </div>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  const movVideo = '/video/licensesMov.mov';

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

  const isFirstTitleVisible = ref(true);
  onMounted(() => {
    fnBrowserDetect();
    const video = document.getElementById('license-video');
    let duration;
    video?.addEventListener('loadedmetadata', () => {
      duration = video.duration;
    });
    video?.addEventListener('timeupdate', () => {
      if (video.currentTime > duration * 0.4) {
        isFirstTitleVisible.value = false;
      } else {
        isFirstTitleVisible.value = true;
      }
      if (video.currentTime > duration * 0.85) {
        isFirstTitleVisible.value = true;
      }
    });
  });
</script>
<style scoped>
  .licenses {
    margin-top: 150px;
  }
  .licenses__body {
    padding: 0 40px;
  }
  .licenses__body_safari {
    margin-top: 500px;
    padding: 0 40px;
    background: #000;
    position: relative;
  }
  .licenses__body_safari::before {
    content: '';
    width: 100%;
    height: 200px;
    top: -200px;
    left: 0;
    position: absolute;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }

  .licenses__body_safari::after {
    content: '';
    width: 100%;
    height: 200px;
    bottom: -200px;
    left: 0;
    position: absolute;
    background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
  }
  .section-text {
    z-index: 3;
    position: relative;
    margin-top: 40px;
    padding: 0 40px;
  }
  .licenses__titles {
    z-index: 0;
    position: relative;
  }
  .big-title {
    text-align: center;
  }
  .licenses__video {
    margin: 0 auto;
    z-index: 1;
    position: relative;
    margin-top: -270px;
    width: 66vw;
    /* position: sticky; */
  }
  .licenses__video video {
    /* position: sticky; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1400px) {
    .licenses__video {
      margin-top: -270px;
      width: 100%;
    }
  }
  @media (max-width: 1200px) {
    .licenses__video {
      margin-top: -230px;
    }
  }
  @media (max-width: 992px) {
    .licenses__video {
      margin-top: -200px;
    }
    .licenses__body_safari {
      margin-top: 400px;
    }
  }
  @media (max-width: 768px) {
    .licenses__video {
      margin-top: -190px;
    }
    .licenses__body_safari {
      margin-top: 300px;
    }
  }
  @media (max-width: 556px) {
    .licenses__video {
      margin-top: -80px;
    }
    .licenses__body {
      padding: 0 20px;
    }
    .licenses__body_safari {
      padding: 0 20px;
      margin-top: 250px;
    }
    .section-text {
      padding: 0 20px;
    }
  }
  @media (max-width: 420px) {
    .licenses__video {
      margin-top: -70px;
    }
  }
</style>