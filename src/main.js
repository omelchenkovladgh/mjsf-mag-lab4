import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import plugin from './plugins';

const app = createApp(App);
app.use(plugin);
app.mount('#app');