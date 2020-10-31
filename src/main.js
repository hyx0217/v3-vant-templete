import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import './permission';
import router from './router';
import store from './store';
import App from './App.vue';
import '../node_modules/animate.css/animate.compat.css'
const app = createApp(App);
app
  .use(router)
  .use(store)
  .use(Vant);
app.mount('#app');
