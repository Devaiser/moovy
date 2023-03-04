<template>
  <section class="main">
    <div class="main__video">
      <video preload="metadata" autoplay muted playsinline loop class="video">
        <source type="video/mp4" src="/video/avatars-main.mp4" />
      </video>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
.main {
  /* min-height: 100vh; */
  position: relative;
}
.main__video {
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
@media (max-width: 768px) {
  .main {
    margin-top: 76px;
  }
}
</style>
