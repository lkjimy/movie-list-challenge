import router from "~/router";
import { createApp } from 'vue'
import App from './App.vue'

import 'assets/styles/index.scss'

createApp(App)
  .use(router)
  .mount('#app')
