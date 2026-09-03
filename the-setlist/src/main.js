import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/layout.css'
import './assets/css/tokens.css'
import './assets/css/style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
