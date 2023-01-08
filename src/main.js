import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue from '@okta/okta-vue'
import sampleConfig from '@/config'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'animate.css'

const oktaAuth = new OktaAuth(sampleConfig.oidc)

createApp(App)
    .use(router)
    .use(OktaVue, {
        oktaAuth,
        onAuthRequired: () => {
            router.push('/login')
        },
        onAuthResume: () => {
            router.push('/login')
        },
    })
    .mount('#app')


