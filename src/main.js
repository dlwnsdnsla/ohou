import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import '@/assets/css/reset.css'
import '@mdi/font/css/materialdesignicons.min.css'
import AOS from 'aos';
import "aos/dist/aos.css";

import { rtdbPlugin } from 'vuefire'
Vue.use(rtdbPlugin)

import firebase from 'firebase/compat/app'
import '@/assets/firebase'
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,

  created() {
    AOS.init();
    // 사용자가 로그아웃, 비밀번호 변경 등의 변경을 했을 때 처리
    firebase.auth().onAuthStateChanged(pUserInfo => {
      if (pUserInfo !== null) {
        // 이미 로그인 되어있었는지 등의 상태를 파악하여 처리함
        store.dispatch('fnDoLoginAuto', pUserInfo)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
