import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueMq from 'vue-mq'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Button, Select, Option, Input } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import FullWidthWrapper from '@/components/common/FullWidthWrapper'

// CSS
import './assets/scss/element.scss'
import './assets/scss/app.scss'
import './assets/tailwind.css'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false

Vue.use(vueMq, {
  breakpoints: {
    mobile: 768,
    desktop: Infinity
  },
  defaultBreakpoint: 'mobile'
})
Vue.use(VueAwesomeSwiper)

// Custom components
locale.use(lang)
Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(Option)
Vue.component('fw-wrapper', FullWidthWrapper) // Wrapper component to keep things centered

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
