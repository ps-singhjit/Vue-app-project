import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*
Font Awesome CSS
*/
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

/*
Vue Bootstrap and JS
*/
// import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
// import '../node_modules/bootstrap-vue/dist/bootstrap-vue.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
createApp(App).use(store).use(router).mount('#app')
