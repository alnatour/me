import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// common header and footer
import HeaderSite from './components/Header.vue'
import FooterSite from './components/Footer.vue'
import Breadcrumb from './components/Breadcrumb.vue'
// end common header and footer

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import {BootstrapVue3} from 'bootstrap-vue-3';

// CSS animation as you scroll down a page


import "./assets/main.css";
import "./assets/style.css";
import "./assets/css/animate/animate.css";
import "./assets/css/themify-icons/themify-icons.css";

// https://github.com/michalsnik/aos
import AOS from 'aos'
import 'aos/dist/aos.css'


/** Icons fortawesome */
    /* import the fontawesome core */
    import { library } from '@fortawesome/fontawesome-svg-core'

    /* import font awesome icon component */
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    /* import specific icons */
    import { faUser, faPhone, faEnvelope, faArrowCircleRight, faServer, faAngleUp, faAngleRight } from '@fortawesome/free-solid-svg-icons'
    import { faBookmark , faMap, faSmile, faThumbsUp} from '@fortawesome/free-regular-svg-icons'
    import { faFacebook, faTwitter, faInstagram, faVimeo, faLinkedin} from '@fortawesome/free-brands-svg-icons'

    /* add icons to the library */
    library.add(faUser, faPhone, faEnvelope, faBookmark, faMap, faFacebook, faTwitter, faInstagram, 
                faVimeo, faLinkedin, faArrowCircleRight, faServer, faSmile, faThumbsUp, faAngleUp, faAngleRight);

/** End Icons fortawesome */
createApp(App)
    .use(router)
    .use(BootstrapVue3)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('HeaderSite', HeaderSite)
    .component('Breadcrumb', Breadcrumb)
    .component('FooterSite', FooterSite)
    .use(AOS.init())
    .mount("#app");

