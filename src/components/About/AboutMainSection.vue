<template>
  <section class="main">
    <div class="main__bg">
      <img src="/img/about/main-bg.jpg" alt="main-bg" class="image" />
    </div>
    <div class="main__text">
      <h1 class="main__title">
        Learn more <br />
        about moovy
      </h1>
      <p>
        Drive Your Way to Success with Moovy: <br />
        The Ultimate Virtual Car Experience
      </p>
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
.main {
  min-height: 100vh;
  position: relative;
  display: flex;
}
.main__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  user-select: none;
  pointer-events: none;
}
.main__text {
  position: relative;
  z-index: 1;
  margin: 58vh 0 0 8vw;
  display: flex;
  align-items: center;
}
.main__title {
  font-weight: 900;
  font-size: 64px;
  line-height: 106%;
  text-align: right;
  text-transform: uppercase;
  color: #cfcfce;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.main__text p {
  font-weight: 500;
  font-size: 20px;
  line-height: 106%;
  text-transform: capitalize;
  color: #fff;
  margin-left: 25px;
}
@media (max-width: 992px) {
  .main__text {
    margin: 58vh 20px 0 8vw;
    flex-direction: column;
    justify-content: center;
  }
  .main__title {
    font-size: 60px;
    width: fit-content;
    margin-bottom: 20px;
  }
}
@media (max-width: 768px) {
  .main__title {
    font-size: 50px;
    width: fit-content;
    margin-bottom: 20px;
  }
  .main__text p {
    font-size: 16px;
  }
}
@media (max-width: 556px) {
  .main__title {
    font-size: 36px;
    margin-bottom: 12px;
  }
  .main__text {
    margin: 58vh auto 0 auto;
  }
}
</style>
