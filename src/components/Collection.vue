<template>
  <div class="collection">
    <div>
      <div class="collection-control">
        <img
          src="/img/arrow.png"
          class="control-left nav-button collection-button-prev"
          alt="arrow"
        />
        <h2 class="section-title">collection</h2>
        <img
          src="/img/arrow.png"
          class="control-right nav-button collection-button-next"
          alt="arrow"
        />
      </div>
      <swiper
        class="slider"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :space-between="-100"
        :speed="700"
        :navigation="navigation"
        :modules="modules"
        :breakpoints="breakpoints"
      >
        <swiper-slide class="slide" v-for="(car, idx) in carsList" :key="idx">
          <div class="car-image">
            <img
              :alt="`car-${idx + 1}`"
              v-lazy="{ src: car.img, loading: car.thumb }"
            />
          </div>
          <div class="car-model">
            <img :src="car.logo" :alt="car.logo" v-if="car.logo" />
            <p class="car-model-text">{{ car.model }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';

const breakpoints = ref({
  1400: {
    spaceBetween: -270,
  },
  768: {
    spaceBetween: -200,
  },
  768: {
    spaceBetween: -120,
  },
});

const navigation = ref({
  enabled: true,
  nextEl: '.collection-button-next',
  prevEl: '.collection-button-prev',
});

const modules = ref([Navigation]);

const carsList = [
  {
    img: '/img/cars-collection/FolkVoyage.png',
    thumb: '/img/cars-collection/thumb/FolkVoyage.png',
    logo: '/img/cars-collection/logos/MoovyFolkLogo.png',
    model: 'Folk Voyage',
  },
  {
    img: '/img/cars-collection/Hector.png',
    thumb: '/img/cars-collection/thumb/Hector.png',
    logo: '/img/cars-collection/logos/MoovyHectorLogo.png',
    model: 'Hector',
  },
  {
    img: '/img/cars-collection/ShumanCrystal_Moovy.png',
    thumb: '/img/cars-collection/thumb/ShumanCrystal_Moovy.png',
    logo: '/img/cars-collection/logos/MoovyShumanLogo.png',
    model: 'Shuman Crystal',
  },
  {
    img: '/img/cars-collection/Katsu_Gold.png',
    thumb: '/img/cars-collection/thumb/Katsu_Gold.png',
    logo: '/img/cars-collection/logos/MoovyDaitanaLogo.png',
    model: 'Daitana Katsu',
  },
  {
    img: '/img/cars-collection/DaitanaX1_Moovy.png',
    thumb: '/img/cars-collection/thumb/DaitanaX1_Moovy.png',
    logo: '/img/cars-collection/logos/MoovyDaitanaLogo.png',
    model: 'Daitana X2',
  },
  {
    img: '/img/cars-collection/GarageLumia.png',
    thumb: '/img/cars-collection/thumb/GarageLumia.png',
    logo: '/img/cars-collection/logos/MoovyAvattiLogo.png',
    model: 'Avatti Lumia',
  },
  {
    img: '/img/cars-collection/Astor_Moovy.png',
    thumb: '/img/cars-collection/thumb/Astor_Moovy.png',
    logo: '/img/cars-collection/logos/MoovyAstorLogoX.png',
    model: 'Astor Wizard',
  },
  {
    img: '/img/cars-collection/moovyAvaSuits.png',
    thumb: '/img/cars-collection/thumb/moovyAvaSuits.png',
    logo: '/img/cars-collection/logos/MoovyAvattiLogo.png',
    model: 'Avatti Valkyrie',
  },
  {
    img: '/img/cars-collection/HSerpantBlueL.png',
    thumb: '/img/cars-collection/thumb/HSerpantBlueL.png',
    logo: '/img/cars-collection/logos/MoovyHodgeLogo.png',
    model: 'Hodge Model X',
  },
  {
    img: '/img/cars-collection/Katsu.png',
    thumb: '/img/cars-collection/thumb/Katsu.png',
    logo: '/img/cars-collection/logos/MoovyDaitanaLogo.png',
    model: 'Daitana Katsu',
  },
  {
    img: '/img/cars-collection/ShumanCrystal.png',
    thumb: '/img/cars-collection/thumb/ShumanCrystal.png',
    logo: '/img/cars-collection/logos/MoovyShumanLogo.png',
    model: 'Shuman Crystal',
  },
  {
    img: '/img/cars-collection/ThorT7.png',
    thumb: '/img/cars-collection/thumb/ThorT7.png',
    logo: '/img/cars-collection/logos/MoovyTrorLogo.png',
    model: 'Tror T7',
  },
  {
    img: '/img/cars-collection/FolkVoyage_Gray.png',
    thumb: '/img/cars-collection/thumb/FolkVoyage_Gray.png',
    logo: '/img/cars-collection/logos/MoovyFolkLogo.png',
    model: 'Folk Voyage',
  },
  {
    img: '/img/cars-collection/GarageLumia_Moovy.png',
    thumb: '/img/cars-collection/thumb/GarageLumia_Moovy.png',
    logo: '/img/cars-collection/logos/MoovyAvattiLogo.png',
    model: 'Avatti Lumia',
  },
  {
    img: '/img/cars-collection/DaitanaX1_Yellow.png',
    thumb: '/img/cars-collection/thumb/DaitanaX1_Yellow.png',
    logo: '/img/cars-collection/logos/MoovyDaitanaLogo.png',
    model: 'Daitana X2',
  },
  {
    img: '/img/cars-collection/VVS6.png',
    thumb: '/img/cars-collection/thumb/VVS6.png',
    logo: '/img/cars-collection/logos/MoovyVVSLogo.png',
    model: 'VVS 6',
  },
  {
    img: '/img/cars-collection/Astor_Violete.png',
    thumb: '/img/cars-collection/thumb/Astor_Violete.png',
    logo: '/img/cars-collection/logos/MoovyAstorLogoX.png',
    model: 'Astor Wizard',
  },
  {
    img: '/img/cars-collection/Katsu_Moovy.png',
    thumb: '/img/cars-collection/thumb/Katsu_Moovy.png',
    logo: '/img/cars-collection/logos/MoovyDaitanaLogo.png',
    model: 'Daitana Katsu',
  },
  {
    img: '/img/cars-collection/ShumanCrystal_Suit.png',
    thumb: '/img/cars-collection/thumb/ShumanCrystal_Suit.png',
    logo: '/img/cars-collection/logos/MoovyShumanLogo.png',
    model: 'Shuman Crystal',
  },
  {
    img: '/img/cars-collection/FolkVoyage_Moovy.png',
    thumb: '/img/cars-collection/thumb/FolkVoyage_Moovy.png',
    logo: '/img/cars-collection/logos/MoovyFolkLogo.png',
    model: 'Folk Voyage',
  },
  {
    img: '/img/cars-collection/Hector_Moovy.png',
    thumb: '/img/cars-collection/thumb/Hector_Moovy.png',
    logo: '/img/cars-collection/logos/MoovyHectorLogo.png',
    model: 'Hector',
  },
  {
    img: '/img/cars-collection/Western.png',
    thumb: '/img/cars-collection/thumb/Western.png',
    logo: '/img/cars-collection/logos/MoovyFolkLogo.png',
    model: 'Folk Westen',
  },
  {
    img: '/img/cars-collection/HSerpantMoovy.png',
    thumb: '/img/cars-collection/thumb/HSerpantMoovy.png',
    logo: '/img/cars-collection/logos/MoovyHodgeLogo.png',
    model: 'Hodge Model X',
  },
  {
    img: '/img/cars-collection/MoreToCome.png',
    thumb: '/img/cars-collection/thumb/MoreToCome.png',
    // logo: '/img/cars-collection/logos/MoovyFolkLogo.png',
    model: 'More to come',
  },
];
</script>
<style scoped>
.collection {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.collection-control {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
}
.control-left {
  transform: rotate(180deg);
}
.section-title {
  margin: 0 7vw;
}
.slider {
  margin-top: 60px;
}
.slide {
  width: fit-content;
  display: flex;
  height: 100%;
}
.slide.swiper-slide-active {
  transform: scale(1);
  opacity: 1;
}
.slide {
  /* width: 940px; */
  width: 54vw;
  transform: scale(0.7);
  opacity: 0.5;
  transition: transform 0.5s ease-in-out 0s, opacity 0.5s ease-in-out 0s;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.car-image {
  width: 100%;
}
.car-image img,
.car-model img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.car-model {
  margin-top: 0px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.car-model-text {
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.25;
  background: linear-gradient(98.27deg, #21e7d6 0%, #83daff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
}
.slide.swiper-slide-active .car-model {
  opacity: 1;
  visibility: visible;
}
.nav-button {
  cursor: pointer;
  transition: opacity 0.3s ease-in-out 0s;
}
.nav-button.swiper-button-disabled {
  opacity: 0.4;
  cursor: auto;
}
@media (max-width: 1200px) {
  .slide {
    width: 75vw;
  }
  .collection {
    min-height: auto;
    padding-bottom: 40px;
  }
}

@media (max-width: 992px) {
  .collection {
    margin-top: 100px;
  }
  .collection {
    min-height: auto;
    padding-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .slide {
    width: 85vw;
  }
  .collection {
    min-height: auto;
    padding-bottom: 40px;
  }
  .car-model {
    margin-top: 20px;
    width: 100px;
  }
  .car-model-text {
    margin-top: 10px;
    font-size: 24px;
  }
}
@media (max-width: 556px) {
  .car-image .media {
    display: block;
  }
  .slide {
    width: 100vw;
  }
  .car-model {
    width: 25%;
    margin-top: 20px;
  }
  .collection-control {
    justify-content: space-between;
  }
  .collection-button-prev {
    order: 2;
  }
  .section-title {
    order: 1;
  }
  .collection-button-next {
    order: 3;
  }
  .car-model {
    margin-top: 20px;
    width: 70px;
  }
  .car-model-text {
    margin-top: 10px;
    font-size: 20px;
  }
}
</style>
