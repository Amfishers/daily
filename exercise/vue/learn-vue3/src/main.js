import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.errorHandler = function (err, vm, info) {
    // handle error
    console.info('errorHandler', err, vm, info)
}

app.mount('#app')
