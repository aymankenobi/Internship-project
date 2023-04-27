import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css';
import { library} from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './assets/fonts/RazerF5-SemiBold.otf';

library.add(fas);

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
