import Vue from 'vue'
import './plugins/axios'
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VeeValidate from 'vee-validate'
import VueI18n from 'vue-i18n'
import zhCN from 'vee-validate/dist/locale/zh_CN'
import currencyFilter from './filters/currency'

import App from './App.vue'
import router from './router'
import store from './store'
import './bus'
Vue.filter('currency', currencyFilter)
axios.defaults.withCredentials = true
Vue.component('Loading', Loading)
Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zhCN'
})
Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zhCN
  }
})
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log('be')

  if (to.meta.requiresAuth) {
    let api = `${process.env.VUE_APP_LOC}/api/user/check`
    axios.post(api).then(response => {
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/admin/login'
        })
      }
    })
  } else {
    next()
  }
})
