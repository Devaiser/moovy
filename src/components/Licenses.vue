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
  import { onMounted, ref } from 'vue';
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
</style>