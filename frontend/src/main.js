import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import router from './router'
import CoreuiVue from '@coreui/vue'
import {iconsSet as icons} from './assets/icons/icons.js'
import store from './store'

Vue.use(VueI18n);

// // Create VueI18n instance with options
const i18n = new VueI18n({
                             locale: document.documentElement.lang, // set locale
                             fallbackLocale: 'en',
                             messages: {
                                 'cs': require('./locales/cs.json'),
                                 'de': require('./locales/de.json'),
                                 'en': require('./locales/en.json'),
                                 'es': require('./locales/es.json'),
                                 'el': require('./locales/el.json'),
                                 'fr': require('./locales/fr.json'),
                                 'hu': require('./locales/hu.json'),
                                 'id': require('./locales/id.json'),
                                 'it': require('./locales/it.json'),
                                 'nl': require('./locales/nl.json'),
                                 'nb': require('./locales/nb.json'),
                                 'pl': require('./locales/pl.json'),
                                 'fi': require('./locales/fi.json'),
                                 'pt-br': require('./locales/pt-br.json'),
                                 'ro': require('./locales/ro.json'),
                                 'ru': require('./locales/ru.json'),
                                 'zh-tw': require('./locales/zh-tw.json'),
                                 'zh-cn': require('./locales/zh-cn.json'),
                                 'sv': require('./locales/sv.json'),
                                 'vi': require('./locales/vi.json'),
                             }
                         });

Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.prototype.$log = console.log.bind(console);

new Vue(
    {
        i18n,
        router,
        store,
        icons,
        template: '<App/>',
        components: {
            App
        }
    }
).mount('#app');
