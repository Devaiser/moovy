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
          preload="metadata"
          autoplay
          muted
          playsinline
          class="video"
        >
          <source type="video/webm" :src="video.src" />
          <source type="video/mp4" :src="video.srcMov" />
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
      // src: '/video/faq/faq-video-1-in.webm',
      srcMov: '/video/faq/faq-video-1-in.mp4',
      title: 'video-1-in',
    },
    {
      // src: '/video/faq/faq-video-1-out.webm',
      srcMov: '/video/faq/faq-video-1-out.mp4',
      title: 'video-1-out',
    },
    {
      // src: '/video/faq/faq-video-2-in.webm',
      srcMov: '/video/faq/faq-video-2-in.mp4',
      title: 'video-2-in',
    },
    {
      // src: '/video/faq/faq-video-3-in.webm',
      srcMov: '/video/faq/faq-video-3-in.mp4',
      title: 'video-3-in',
    },
    {
      src: '/video/faq/faq-video-3-out.webm',
      srcMov: '/video/faq/faq-video-3-out.mov',
      title: 'video-3-out',
    },
    {
      // src: '/video/faq/faq-video-4-in.webm',
      srcMov: '/video/faq/faq-video-4-in.mp4',
      title: 'video-4-in',
    },
    {
      // src: '/video/faq/faq-video-4-out.webm',
      srcMov: '/video/faq/faq-video-4-out.mp4',
      title: 'video-4-out',
    },
    {
      // src: '/video/faq/faq-video-5-in.webm',
      srcMov: '/video/faq/faq-video-5-in.mp4',
      title: 'video-5-in',
    },
    {
      // src: '/video/faq/faq-video-5-out.webm',
      srcMov: '/video/faq/faq-video-5-out.mp4',
      title: 'video-5-out',
    },
  ];

  const faqData = [
    {
      title: 'WHAT IS MOOVY?',
      description: [
        'Moovy GameFi provides an amazing gaming experience. You can engage in exciting rallies and collaborate with other players to complete daily missions, all while earning valuable prizes. Level up by collecting NFTs that unlock the full potential of crypto technology - bringing an immersive new universe closer than ever before. Take part in this innovative world today and let your imagination run wild.',
      ],
    },
    {
      title: 'WHAT DO THE MOOVY NFTs LOOK LIKE?',
      description: [
        'Indulge your automotive ambitions with the Moovy NFT Collection: a robust portfolio that includes cards, plates, and even garages. In addition to these impressive creations - land packs, gas stations & service stations are coming soon. Hook into this unique community of car lovers where you can purchase, grow and receive rewards.',
      ],
    },
    {
      title: 'WHAT MODES ARE THERE IN MOOVY?',
      description: [
        "Uncover new and thrilling gaming opportunities with Moovy's array of action-packed play modes. From Solo Ride to Rally, Free (Freeride), or upcoming Raids - the NFTs you own can contribute significantly towards your success. Showcase your driving skills on our innovative platform now and take a step closer to unlocking colossal earning potential.",
      ],
    },
    {
      title: 'HOW CAN I GET AN NFT?',
      description: [
        "Take the plunge and secure access to some of Moovy's most coveted utility NFTs. Join our upcoming Whitelist for a limited-time opportunity & become one of the few selected who can purchase these rare digital assets.",
      ],
    },
    {
      title: 'HOW CAN I BUY $MOIL?',
      description: [
        "Secure your access to our exclusive IDO and purchase $MOIL. Don't delay & make sure you're on the Whitelist today for a chance to take part in this unprecedented opportunity.",
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
    padding-left: 8vw;
    /* overflow-x: hidden; */
    background: #000;
    position: relative;
  }
  .faq::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: -200px;
    left: 0;
    height: 200px;
    background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
    /* z-index: 5; */
  }
  .faq::before {
    content: '';
    width: 100%;
    position: absolute;
    top: -200px;
    left: 0;
    height: 200px;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    /* z-index: 5; */
  }
  .faq__accordion {
    margin-top: 60px;
    position: relative;
    z-index: 2;
  }
  .faq__wrapper {
    display: flex;
    overflow: hidden;
  }
  .faq__item {
    width: 32vw;
    border: 1px solid;
    box-sizing: border-box;
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
    margin-top: -2px;
    padding-bottom: 4px;
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
    height: 900px;
    margin: 0px 80px 0 0;
    /* margin-top: -40px; */
    z-index: 1;
    position: relative;
  }
  .faq__model::before {
    content: '';
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    height: 100px;
    background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
    z-index: 5;
  }
  .faq__img {
    width: 100%;
    height: 100%;
    display: none;
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
    height: 100%;
    object-fit: cover;
  }
  .video {
    display: none;
    position: relative;
  }
  .video.active {
    display: block;
  }
  @media (max-width: 1200px) {
    .faq__model {
      margin: 20px 0 0 -100px;
    }
  }
  @media (max-width: 992px) {
    .faq {
      padding: 0 40px;
      margin-left: 0;
      margin-top: 40px;
    }
    .faq__model {
      width: 100%;
      height: 100%;
      margin-top: 0;
    }
    .faq__model {
      margin: 20px 0 0 0;
    }
    .faq__item {
      max-width: 700px;
      width: 100%;
      margin: 0 auto;
    }
    .faq__wrapper {
      flex-direction: column;
    }
    .faq__model {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
  @media (max-width: 556px) {
    .faq__title {
      font-size: 16px;
    }
    .faq {
      padding: 0 20px;
    }
    .faq__model {
      margin-top: 50px;
      transform: scale(1.2);
    }
  }
</style>