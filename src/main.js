import { createApp } from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from '../router'
import App from './App.vue'

const app = createApp(App)
  app.use(Vant).use(router)
  app.mount('#app')
