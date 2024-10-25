<template>
  <div>
    <!-- banner -->
    <section class="">
      <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :pagination="{
  clickable: true,
}" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
          <img src="@/assets/images/banner/banner-2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/banner/pexels-andrea-piacquadio-789822.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/banner/banner-4.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/banner/banner-3.jpg" />
        </swiper-slide>
      </swiper>
    </section>


    <section class="section" data-aos="fade-up" data-aos-duration="1500">
      <div class="container">
        <div class="row justify-content-center text-center">
          <h3>
            Alantour unterstützt Unternehmen mit der Kreation außergewöhnlicher Websites dabei, neue
            Kunden
            zu finden und nachhaltig zu begeistern.
          </h3>
          <p class="mt-3">
            Von der ersten Konzeption bis zur Fertigstellung der Website begleiten wir Sie, optimieren einen bestehenden
            Online-Auftritt
            oder erstellen eine zielgerichtete individuelle Projektlösung. Profitieren Sie von der langjährigen
            Erfahrung unserer Entwickler, Webdesigner und Mediengestalter. Erfahren Sie mehr über unsere
            Webentwicklungs- und Webdesign-Dienstleistungen
          </p>
        </div>
      </div>
    </section>

    <!-- services -->
    <section class="section" data-aos="zoom-in" data-aos-duration="1500">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <h5 class="section-title-sm">Lösungen</h5>
            <h2 class="section-title section-title-border">
              Unsere Development Services
            </h2>
          </div>
          <!-- service item -->
          <div v-for="service in services" :key="service.id" class="col-lg-6 col-sm-6 mt-4 mb-4 mb-lg-4">
            <b-card class="text-center" body-class="p-0">
              <b-card-title class="pt-3">{{ service.title }}</b-card-title>
              <b-card-img :src="service.img" style="width: 100%" :alt="service.title" class="mb-4">
              </b-card-img>
              <b-card-text class="mb-0">
                {{ service.content.substring(0, 250) }}
              </b-card-text>
              <b-button :href="service.url" variant="primary" class="btn btn-secondary translateY-25">Read More
              </b-button>
            </b-card>
          </div>
        </div>
      </div>
    </section>

    <section class="about section-sm overlay" data-aos="fade-up" data-aos-duration="1500"
      style="background-image: url(./src/assets/images/background/about-bg.jpg)">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ml-auto">
            <div class="rounded p-sm-5 px-3 py-5 bg-secondary">
              <h3 class="section-title section-title-border-half text-white" data-aos="zoom-in-down"
                data-aos-duration="2500">
                Wer wir sind?
              </h3>
              <p class="text-white mb-40">
                <strong>ALNATOUR</strong> ist eine Digital Agentur Seit 2016 realisieren wir
                Applikationen, Onlineshops und Webseiten für grosse und kleine
                Unternehmen, Agenturen sowie für öffentlich-rechtliche
                Organisationen. Wir sind ein über 5-köpfiges Team aus Front- und
                Backend-Entwicklern,
              </p>
              <div>
                <ul class="d-inline-block pl-0 mr-5">
                  <li class="font-secondary mb-10 text-white" data-aos="fade-right" data-aos-duration="400">
                    <i class="text-primary mr-2 ti-arrow-circle-right"></i>
                    Individuelle Software-Entwicklung
                  </li>
                  <li class="font-secondary mb-10 text-white" data-aos="fade-right" data-aos-duration="700">
                    <span><i class="text-primary mr-2 ti-arrow-circle-right"></i>
                      API Entwicklung & Integration</span>
                  </li>
                  <li class="font-secondary mb-10 text-white" data-aos="fade-right" data-aos-duration="1000">
                    <i class="text-primary mr-2 ti-arrow-circle-right"></i>
                    Agile Projekt­manage­ment-Methoden
                  </li>
                </ul>
                <ul class="d-inline-block pl-0">
                  <li class="font-secondary mb-10 text-white" data-aos="fade-right" data-aos-duration="1300">
                    <i class="text-primary mr-2 ti-arrow-circle-right"></i>
                    Business Services
                  </li>
                  <li class="font-secondary mb-10 text-white" data-aos="fade-right" data-aos-duration="1600">
                    <i class="text-primary mr-2 ti-arrow-circle-right"></i>
                    DevOps Automatisierung
                  </li>
                  <li class="font-secondary mb-10 text-white" data-aos="fade-right" data-aos-duration="1900">
                    <i class="text-primary mr-2 ti-arrow-circle-right"></i>
                    Software Moderni­sierung und Weiter­entwicklung
                  </li>
                </ul>
              </div>
              <RouterLink to="/service" class="btn btn-primary mt-4">Explore More</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Die Steps zu Ihrer Corporate Website -->
    <section class="section">
      <div class="container text-center">
        <h2>Die Steps zu Ihrer Corporate Website</h2>
        <p>
          Wir begleiten Ihr digitales Projekt und setzen es in drei Hauptphasen um – Strategie und Beratung, Umsetzung
          Ihres Projekts und laufende Wartung und Instandhaltung. Unser professionelles Team steht Ihnen zur Verfügung.
        </p>

        <!-- Steps 1  -->
        <div class="row" data-aos="fade-up" data-aos-duration="1500">
          <div class="col-lg-7 order-2 order-lg-1 mx-auto text-center">
            <div class="d-flex justify-content-center">
              <img src="@/assets/images/icons/softwaretechnische-beratung-2.png" class="img-fluid"
                alt="Webprogrammierung und Design" />
            </div>
            <h3 class="section-title">
              1. Strategie & Beratung für Ihre Website
            </h3>
            <p>
              In einem gemeinsamen Launch-Workshop mit Ihnen evaluieren wir Ihre Anforderungen an Ihre Business-Website,
              um die perfekte Lösung für Ihre Business-Website zu finden. Deshalb können wir das perfekte System für
              Ihre Bedürfnisse auswählen und damit eine personalisierte Website für Sie erstellen.
            </p>
            <hr />
          </div>
        </div>
        <!-- /Steps 1  -->

        <!-- Steps 2  -->
        <div class="row" data-aos="fade-up-left" data-aos-duration="1500">
          <div class="col-lg-7 order-2 order-lg-1 mx-auto text-center">
            <div class="d-flex justify-content-center">
              <img src="@/assets/images/icons/webprogrammierung-und-design.png" class="img-fluid"
                alt="Webprogrammierung und Design" />
            </div>
            <h3 class="section-title">2. Umsetzung</h3>
            <p>
              Unsere zertifizierten Entwicklungsteams aus den Bereichen TYPO3 und WordPress setzen Ihre
              digitalen Projekte mit schnellem Projektmanagement nahtlos um. Agiles Projektmanagement zielt auf einen
              effizienten Einsatz von Aufwand und Ressourcen aus konzeptioneller und technischer Sicht.
            </p>
            <hr />
          </div>
        </div>
        <!-- /Steps 2  -->

        <!-- Steps 3  -->
        <div class="row" data-aos="fade-up-right" data-aos-duration="1500">
          <div class="col-lg-7 order-2 order-lg-1 mx-auto text-center">
            <div class="d-flex justify-content-center">
              <img src="@/assets/images/icons/webprogrammierung-und-design.png" class="img-fluid"
                alt="Webprogrammierung und Design" />
            </div>
            <h3 class="section-title">3. Wartung & Optimierung</h3>
            <p>
              Gemeinsam mit Ihnen werten wir kontinuierlich den Status Ihrer Website aus, um Funktionen rechtzeitig zu
              identifizieren und zu implementieren. Darüber hinaus führen wir ständige Aktualisierungen und
              Wartungsarbeiten durch, um sicherzustellen, dass Besucher auf Ihrer Website immer ein sicheres Erlebnis
              haben und Ihr Unternehmen wettbewerbsfähig bleibt, und wir beheben potenzielle Sicherheitslücken auf Ihrer
              Website, sobald wir sie entdecken.
            </p>
            <hr />
          </div>
        </div>
        <!-- /Steps 3  -->
      </div>
    </section>
    <!-- /Die Steps zu Ihrer Corporate Website -->

    <!-- skill -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12" data-aos="zoom-in" data-aos-duration="1800">
            <h5 class="section-title-sm">Beste Dienstleistungen</h5>
            <h2 class="section-title section-title-border-half">
              Warum Alnatour?
            </h2>
          </div>
          <div class="col-lg-7" data-aos="fade-up" data-aos-duration="2500">
            <div class="mb-40">
              <p class="text-dark">
                Es gibt viele Gründe, warum Unternehmen uns für hochwertiges Webdesign wählen. Einige davon beschreiben
                wir im Folgenden im Detail. Aber am Ende des Tages, aus welchem ​​Grund auch immer Sie sich für unser
                Webdesign entschieden haben – wir garantieren eines für jedes Projekt – ist es ein tolles Produkt, das
                Sie und Ihre Kunden nachhaltig begeistern wird und ganz im Einklang mit Persönlichkeit und Liebe zu
                Ihrem Unternehmen steht. Ausführliche Entwicklung.
              </p>
            </div>
            <!-- fun-fact -->
            <div class="mb-md-50">
              <div class="row">
                <div class="col-4">
                  <div class="d-flex flex-column flex-sm-row align-items-center">
                    <i class="round-icon mr-sm-3 ti-server"></i>
                    <div class="text-center text-sm-left">
                      <h2 class="count mb-0" data-count="95">95</h2>
                      <p class="mb-0">Projekte erledigt</p>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="d-flex flex-column flex-sm-row align-items-center">
                    <i class="round-icon mr-sm-3 ti-face-smile"></i>
                    <div class="text-center text-sm-left">
                      <h2 class="count mb-0" data-count="75">75</h2>
                      <p class="mb-0">Zufriedene Kunden</p>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="d-flex flex-column flex-sm-row align-items-center">
                    <i class="round-icon mr-sm-3 ti-thumb-up"></i>
                    <div class="text-center text-sm-left">
                      <h2 class="count mb-0" data-count="580">580</h2>
                      <p class="mb-0">Tasse Kaffee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- progressbar -->
          <div class="col-lg-4 offset-lg-1">
            <div class="progressbar">
              <h5 class="progressbar-title">PHP/Laravel, Symfony oder Zend Framework </h5>
              <div class="progress" data-percent="95%">
                <div class="progress-bar progress-bar-striped" style="width: 95%">
                  <div class="progress-bar-value">95%</div>
                </div>
              </div>
            </div>
            <div class="progressbar">
              <h5 class="progressbar-title">MYSQL, SQLLITE, MQL</h5>
              <div class="progress" data-percent="95%">
                <div class="progress-bar progress-bar-striped" style="width: 95%">
                  <div class="progress-bar-value">95%</div>
                </div>
              </div>
            </div>
            <div class="progressbar">
              <h5 class="progressbar-title">Vue & JavaScript/JQuery & React</h5>
              <div class="progress" data-percent="95%">
                <div class="progress-bar progress-bar-striped" style="width: 95%">
                  <div class="progress-bar-value">95%</div>
                </div>
              </div>
            </div>
            <div class="progressbar">
              <h5 class="progressbar-title">
                HTML & CSS & SCSS & LESS & WordPress
              </h5>
              <div class="progress" data-percent="95%">
                <div class="progress-bar progress-bar-striped" style="width: 95%">
                  <div class="progress-bar-value">95%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /skill -->

    <!-- mission -->
    <section class="mission section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-title section-title-border-half">
              Warum uns wählen
            </h2>
            <div class="row">
              <div class="col-lg-6">
                <p class="mb-40">
                  ({{ accordion.length ? accordion.length : 3 }}) gute Gründe,
                  warum Sie sich für unsere ALNATOUR®-Leistungen entscheiden
                  sollten
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <!-- accordion -->
            <div id="accordion" class="accordion" role="tablist">
              <b-card no-body class="border-0 mb-4" v-for="(item, index) in accordion" :key="item.id">
                <b-card-header header-tag="header" class="bg-gray border p-0" role="tab">
                  <b-button block v-b-toggle="`accordion-${item.id}`" variant="info"
                    class="card-link h5 d-block text-dark mb-0 py-10 px-4">
                    {{ item.title }}
                  </b-button>
                </b-card-header>
                <b-collapse :id="`accordion-${item.id}`" accordion="accordion" role="tabpanel" :visible="index == 0">
                  <b-card-body class="font-secondary text-color pl-0 pb-0">
                    <b-card-text class="p-3">{{ item.content }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
            <!-- /accordion -->
          </div>
          <!-- chart -->
          <div class="col-lg-6">
            <!-- <img src="@/assets/images/chart.png" alt="chart" class="img-fluid w-100"> -->
          </div>
        </div>
      </div>
    </section>
    <!-- /mission -->
  </div>
</template>




<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      services: {
        0: {
          id: 1,
          title: "Backend-Entwicklung",
          img: "/src/assets/images/service-1.jpg",
          content:
            "wir programmieren alle unsere Websites selbst - mit Programmierern, die nicht in Fernost, sondern in unserer Agentur - unmittelbar neben den Designern - sitzen. Für eine nahtlose Zusammenarbeit, die es zulässt, dass man sich gemeinsam um jene feinen Details kümmert, die letztendlich den Unterschied zwischen Standard und Perfektion ausmachen.",
          url: "/service",
        },
        1: {
          id: 2,
          title: "Frontend-Entwicklung",
          img: "/src/assets/images/service-2.jpg",
          content:
            "In der Entwicklung werden wir die Ideen und Spezifikationen der Arbeit verkörpern. Mit modernsten Frameworks und Systemen programmieren wir Apps und Websites, auf die Sie und Ihre Kunden sich täglich verlassen können.",
          url: "/service",
        },
        2: {
          id: 3,
          title: "Content-Management-Systeme (CMS)",
          img: "/src/assets/images/service-3.jpg",
          content:
            "Wir entwickeln viele unserer Web-Projekte auf Basis der Content-Management-Systeme (CMS) wie WordPress... ",
          url: "/service",
        },
      },
      accordion: {
        0: {
          id: 1,
          title: "Die Sicherheit zahlreicher zufriedener Kunden",
          content:
            "Alle Neukunden kaufen Produkte aus unserem Bereich, ohne vorher zu sehen, was sie bekommen. Deshalb wissen wir, dass Vertrauen das höchste Gut ist, das wir von unseren Kunden bekommen können. Wir haben viele detaillierte Projekte von Unternehmen, die uns bereits auf unserer Website vertrauen, damit neue Kunden uns vertrauen können. Zu unseren Kunden zählen Unternehmen aller Größen und Branchen. ",
        },
        1: {
          id: 2,
          title:
            "Faire Festpreisangebote für Kunden, die das Besondere suchen und schätzen",
          content:
            "Wenn Sie auf der Suche nach einer möglichst billige Website sind, sind wir nicht der richtige Partner für Sie. Wir achten bei jedem Projekt sehr auf Details, aber nicht jeder weiß das zu schätzen. Das ist für uns völlig verständlich und akzeptabel und wir wollen uns auf Kunden konzentrieren, die eine einfache Verarbeitung und hervorragende Qualität erreichen.",
        },
        2: {
          id: 3,
          title:
            "Ganzheitliche Denkweise vom Konzept bis zum individuellen Webdesign",
          content:
            "Wir betrachten immer das große Ganze. Wir wollen von Anfang an ein tiefes Verständnis für Ihr Unternehmen und Ihr Geschäft haben, um Ihnen den bestmöglichen Service bieten zu können.",
        },
      },
    };
  },
};
</script>


<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.card-body {
  padding: 0px !important;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>

