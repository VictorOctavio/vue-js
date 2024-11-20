import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './ui/App.vue'
import router from './ui/router'

const app = createApp(App)

// config handler store & router
app.use(createPinia())
app.use(router)

app.mount('#app')
