import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// uno css
import 'virtual:uno.css'
import 'uno.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
