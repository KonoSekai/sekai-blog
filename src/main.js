import Vue from 'vue'
import iView from 'iview'
import App from './App'
import store from './store'
import router from './router'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {App},
  render: h => h(App),
  mounted() {
    if (this.$store.getters.status) this.$store.dispatch('init')
  }
}).$mount('#app')
