import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './ui/App.vue'

const app = createApp(App)

// config handler store & router
app.use(createPinia())


app.mount('#app')
