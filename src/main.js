import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/fonts.css"
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

createApp(App).use(store).use(router).mount('#app')
