<template>
  <div class="faq">
    <h2 class="section-title">faq</h2>
    <div class="faq__wrapper">
      <div class="faq__accordion">
        <div
          v-for="(question, idx) in questions"
          :key="question.title"
          class="faq__item"
        >
          <button
            :class="['faq__title', { active: question.isExpanded }]"
            @click="() => handleAccordion(idx)"
          >
            {{ question.title }}
          </button>
          <Collapse as="div" :when="question.isExpanded" class="faq__body">
            <div
              :class="['faq__body-wrapper', { active: question.isExpanded }]"
            >
              <p
                class="faq__text"
                v-for="(item, id) in question.description"
                :key="id"
              >
                {{ item }}
              </p>
            </div>
          </Collapse>
        </div>
      </div>
      <div class="faq__model">
        <!-- <Transition mode="out-in"> -->
        <video
          v-for="(video, idx) in videoData"
          :key="idx"
          :class="{ active: activeVideo === video.title }"
          preload="auto"
          autoplay
          muted
          playsinline
          class="video"
        >
          <source type="video/webm" :src="video.src" />
        </video>
        <div class="faq__img" :class="{ active: activeVideo === null }">
          <img src="/img/faq-model.png" alt="car-model" />
        </div>
        <!-- </Transition> -->
      </div>
    </div>
  </div>
</template>
<script setup>
  import { Collapse } from 'vue-collapsed';
  import { reactive, ref, watch, onMounted } from 'vue';

  const videoData = [
    {
      src: '/video/faq/faq-video-1-in.webm',
      title: 'video-1-in',
    },
    {
      src: '/video/faq/faq-video-1-out.webm',
      title: 'video-1-out',
    },
    {
      src: '/video/faq/faq-video-2-in.webm',
      title: 'video-2-in',
    },
    {
      src: '/video/faq/faq-video-3-in.webm',
      title: 'video-3-in',
    },
    {
      src: '/video/faq/faq-video-3-out.webm',
      title: 'video-3-out',
    },
    {
      src: '/video/faq/faq-video-4-in.webm',
      title: 'video-4-in',
    },
    {
      src: '/video/faq/faq-video-4-out.webm',
      title: 'video-4-out',
    },
    {
      src: '/video/faq/faq-video-5-in.webm',
      title: 'video-5-in',
    },
    {
      src: '/video/faq/faq-video-5-out.webm',
      title: 'video-5-out',
    },
  ];

  const faqData = [
    {
      title: 'WHAT IS MOOVY?',
      description: [
        'Moovy is a large-scale GameFi project that will immerse you in a universe of the future, opening up new opportunities for growth within the crypto industry. Participate in rally, complete daily missions with other players while claiming prizes and tokens. With the help of NFTs, players can raise their status and improve their in-game stats by unlocking various new leveling mechanics.',
      ],
    },
    {
      title: 'WHAT DO THE MOOVY NFTs LOOK LIKE?',
      description: [
        'The Moovy NFT collection includes the coolest hyper-realistic cars, number plates, containers, boxes, garages, land (TBA), gas stations (TBA), service stations (TBA), and more! Buy, develop and earn together with Moovy',
      ],
    },
    {
      title: 'WHAT MODES ARE THERE IN MOOVY?',
      description: [
        '	We offer multiple play modes with different opportunities:',
        '• Solo Ride;',
        '• Rally;',
        '• Free (Freeride);',
        '• Raids (TBA).',
        'All players can earn, but your earnings depend not only on your driving skills, but also on the class, type and characteristics of the NFT you own.',
      ],
    },
    {
      title: 'HOW CAN I GET AN NFT?',
      description: [
        'In order to become a proud owner of one of Moovy’s NFTs right now, you need to get onto the Whitelist, which we will open in the near future. Then, you will have the opportunity to purchase Moovy’s very first utility-NFTs.',
      ],
    },
    {
      title: 'HOW CAN I BUY $MOIL?',
      description: [
        'You can purchase $MOIL at our IDO. But remember, you’ll need to be on the Whitelist to do so.',
      ],
    },
  ];

  const activeAccordion = ref(null);
  const activeVideo = ref(null);
  const videos = ref(null);

  watch(activeAccordion, (newValue, oldValue) => {
    for (const item of videos.value) {
      item.currentTime = 0;
    }
    let duration;
    if (oldValue === 4) {
      duration = 1200;
    } else {
      duration = 700;
    }
    if (newValue === 0 && oldValue !== null) {
      setTimeout(() => {
        activeVideo.value = 'video-1-in';
      }, duration);
    } else if (oldValue === 0) {
      activeVideo.value = 'video-1-out';
    } else if (newValue === 0) {
      activeVideo.value = 'video-1-in';
    }
    if (newValue === 1 && oldValue !== null) {
      setTimeout(() => {
        activeVideo.value = 'video-2-in';
      }, duration);
    } else if (newValue === 1) {
      activeVideo.value = 'video-2-in';
    }
    if (newValue === 2 && oldValue !== null) {
      setTimeout(() => {
        activeVideo.value = 'video-3-in';
      }, duration);
    } else if (oldValue === 2) {
      activeVideo.value = 'video-3-out';
    } else if (newValue === 2) {
      activeVideo.value = 'video-3-in';
    }
    if (newValue === 3 && oldValue !== null) {
      setTimeout(() => {
        activeVideo.value = 'video-4-in';
      }, duration);
    } else if (oldValue === 3) {
      activeVideo.value = 'video-4-out';
    } else if (newValue === 3) {
      activeVideo.value = 'video-4-in';
    }
    if (newValue === 4 && oldValue !== null) {
      setTimeout(() => {
        activeVideo.value = 'video-5-in';
      }, duration);
    } else if (oldValue === 4) {
      activeVideo.value = 'video-5-out';
    } else if (newValue === 4) {
      activeVideo.value = 'video-5-in';
    }
  });

  const questions = reactive(
    faqData.map(({ title, description }, index) => ({
      title,
      description,
      isExpanded: index == 999,
    }))
  );

  const handleAccordion = (selectedIndex) => {
    activeAccordion.value = selectedIndex;
    questions.forEach((_, index) => {
      questions[index].isExpanded =
        index === selectedIndex ? !questions[index].isExpanded : false;
    });
  };

  onMounted(() => {
    videos.value = document.getElementsByClassName('video');
  });
</script>
<style scoped>
  .faq {
    margin-top: 140px;
    margin-left: 8vw;
  }
  .faq__accordion {
    margin-top: 60px;
  }
  .faq__wrapper {
    display: flex;
  }
  .faq__item {
    width: 32vw;
    border: 1px solid;
    border-image: linear-gradient(to bottom, #fff, transparent) 1;
  }
  .faq__item:not(:last-child) {
    margin-bottom: 25px;
  }
  .faq__title {
    width: 100%;
    cursor: pointer;
    padding: 20px 32px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.25;
    background: rgba(35, 35, 35, 0.17);
    border: none;
    text-align: start;
    backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
    /* transition: all 0.3s ease-in-out 0s; */
    position: relative;
  }
  .faq__title::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    /* transition: opacity 0.3s ease-in-out 0s; */
    background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
    z-index: -1;
  }
  .faq__title.active::after {
    opacity: 1;
  }
  .faq__title.active {
    color: #000;
  }
  .faq__body {
    transition: height 0.3s cubic-bezier(0.37, 0, 0.63, 1);
  }
  .faq__body-wrapper {
    padding: 0px 32px 20px 32px;
    background: rgba(35, 35, 35, 0.17);
    backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
    position: relative;
  }
  .faq__body-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 105.42%);
    opacity: 0;
    transition: opacity 0.3s ease-in-out 0s;
    z-index: -1;
  }
  .faq__body-wrapper.active::after {
    opacity: 1;
  }
  .faq__text {
    color: #000;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.25;
  }
  .faq__model {
    width: 100%;
    /* height: 700px; */
    /* margin: 20px 80px 0 -80px; */
    margin: 20px 80px 0 0;
  }
  .faq__img {
    width: 100%;
    height: 900px;
    display: none;
    margin-top: -100px;
  }
  .faq__img.active {
    display: block;
  }
  .faq__img img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .faq__model video {
    width: 100%;
    height: 900px;
    object-fit: cover;
    margin-top: -100px;
  }
  .video {
    display: none;
  }
  .video.active {
    display: block;
  }
</style>