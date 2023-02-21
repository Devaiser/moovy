<template>
  <div class="card">
    <div class="card__body">
      <div class="card__title" :class="{ card__title_right: right }">
        <span>{{ title }}</span>
      </div>
      <div class="card__icon" :class="{ card__icon_right: right }">
        <img :src="icon" :alt="title" class="image" />
      </div>
      <div class="card__text" :class="{ card__text_right: right }">
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  right: {
    type: Boolean,
  },
});
</script>
<style scoped>
.card__body {
  border-radius: 32px;
  border: 1px solid #fff;
  border-bottom: none;
  padding: 0 17px 30px 17px;
  width: 362px;
  height: 132px;
  box-sizing: border-box;
  filter: drop-shadow(0px 5.49138px 27.4569px rgba(0, 0, 0, 0.5));
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(250, 250, 250, 0.2) 0%,
    rgba(247, 247, 247, 0) 100%
  );
  position: relative;
  overflow: hidden;
}
.card__title {
  background: linear-gradient(to right, #424242, #0a0a0a);
  filter: drop-shadow(0px 5.49138px 27.4569px rgba(0, 0, 0, 0.5));
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 65%;
  border-radius: 0 0 0 30px;
}
.card__title_right {
  left: 0;
  right: auto;
  border-radius: 0 0 30px 0;
  background: linear-gradient(to right, #0a0a0a, #424242);
}
.card__title span {
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  color: #fff;
}
.card__icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
}

.card__icon_right {
  left: auto;
  right: 10px;
}
.card__text {
  position: absolute;
  top: 60px;
  right: 17px;
  width: 60%;
  text-align: right;
}
.card__text_right {
  right: auto;
  left: 17px;
  text-align: left;
}
.card__text p {
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
}
</style>
