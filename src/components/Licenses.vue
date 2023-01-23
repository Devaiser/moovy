<template>
  <div class="licenses">
    <Transition mode="out-in" class="licenses__titles">
      <h2 v-if="isFirstTitleVisible" class="big-title">licenses</h2>
      <h2 v-else class="big-title">talents</h2>
    </Transition>
    <div class="licenses__video" id="licenses-section">
      <!-- <video
        id="license-video"
        tabindex="0"
        autobuffer="autobuffer"
        preload="preload"
      >
        <source type="video/webm" src="/video/licenses.webm" />
      </video> -->
      <video preload="auto" autoplay muted loop playsinline id="license-video">
        <source type="video/webm" src="/video/licenses.webm" />
        <source type="video/mp4" :src="movVideo" />
      </video>
    </div>
    <p class="section-text">
      During the registration process you will have to get your driver's
      license, personalized avatar-character and will be able to create a name
      for it.
    </p>
    <p class="section-text">
      A Moovy’s maturity, degree of evolution, and (in the future) combat
      strength are tracked via a system of Talents and Levels.
    </p>
  </div>
</template>
<script setup>
  import { onMounted, ref } from 'vue';
  const movVideo = '/video/licensesMov.mov';
  const isFirstTitleVisible = ref(true);
  onMounted(() => {
    const video = document.getElementById('license-video');
    let duration;
    video.addEventListener('loadedmetadata', () => {
      duration = video.duration;
    });
    video.addEventListener('timeupdate', () => {
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
  // import { onMounted } from 'vue';
  // onMounted(() => {
  //   const frameNumber = 0;
  //   const playbackConst = 500;
  //   const setHeight = document.getElementById('licenses-section');
  //   const vid = document.getElementById('license-video');
  //   vid.addEventListener('loadedmetadata', () => {
  //     setHeight.style.height = Math.floor(vid.duration) * playbackConst + 'px';
  //   });
  //   const scrollPlay = () => {
  //     const frameNumber = window.pageYOffset / playbackConst;
  //     vid.currentTime = frameNumber;
  //   };
  //   window.requestAnimationFrame(scrollPlay);
  // });
</script>
<style scoped>
  .licenses {
    margin-top: 150px;
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
  }
  @media (max-width: 768px) {
    .licenses__video {
      margin-top: -190px;
    }
  }
  @media (max-width: 556px) {
    .licenses__video {
      margin-top: -80px;
    }
    .licenses {
      padding: 0 20px;
    }
  }
  @media (max-width: 420px) {
    .licenses__video {
      margin-top: -70px;
    }
  }
</style>