import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:svg-icons-register'
import i18n from './i18n'
import MasonryWall from '@yeger/vue-masonry-wall'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
app.use(MasonryWall)
