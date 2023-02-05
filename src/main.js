import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { MotionPlugin } from '@vueuse/motion';
import VueLazyLoad from 'vue3-lazyload';

import './assets/css/index.css';

const app = createApp(App);

app.use(router);
app.use(VueLazyLoad);

app.use(MotionPlugin);
app.mount('#app');
