import './assets/main.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { createPinia } from 'pinia'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'

// uno css
import 'virtual:uno.css'
import 'uno.css'

import App from './App.vue'

export const createApp = ViteSSG(App, { routes }, ({ router, app, isClient }) => {
  app.use(createPinia())
  if (isClient) {
    router.beforeEach(() => {
      NProgress.start()
    })
    router.afterEach(() => {
      NProgress.done()
    })
  }
})
