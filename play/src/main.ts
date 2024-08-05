import { createApp } from 'vue'
import './style.css'
import Icon from '@l-ui/components/icon'
import App from './App.vue'
import '@l-ui/theme-chalk/src/index.scss'

const app = createApp(App)
const plugins = [
  Icon,
]

plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
