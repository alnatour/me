<template>
    <div>
        <Breadcrumb>
            <template v-slot:heading>Über uns</template>
        </Breadcrumb>

        <div class="container">
            <!-- about me -->
            <section class="section" data-aos="fade-up" data-aos-duration="1500">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 order-2 order-lg-1">
                            <h5 class="section-title-sm">Wofür wir stehen</h5>
                            <h2 class="section-title section-title-border-half">Über uns</h2>

                            <h5>Seit 2016 arbeiten wir</h5>
                            <p> im Bereich Website-Design und -Programmierung </p>

                            <h5>Wir bieten Website-Design und -Programmierung</h5>
                            <p>
                                an - Programmierung privater Webanwendungen auf Kundenwunsch-Entwicklung
                                und Pflege von Websites - Entwicklung, Pflege und Lokalisierung von WordPress-Sites,

                                Wir bieten auch Hosting-Dienste an, verwalte Werbekampagnen und konfiguriere die Website
                                für Suchmaschinen (SEO).
                            </p>
                        </div>

                        <!-- my image -->
                        <div class="col-lg-5 align-self-center order-1 order-lg-2 mb-md-50">
                            <img class="img-fluid w-100" src="../assets/images/business-6.jpg" alt="philosophy-image">
                        </div>
                    </div>
                </div>
            </section>
            <div style="height:30px"></div>
            <!-- /about me -->

            <!-- philosophy -->
            <section class="section" data-aos="fade-up" data-aos-duration="1500">
                <div class="container">
                    <div class="row">

                        <!-- philosophy image -->
                        <div class="col-lg-5 align-self-center order-2 order-lg-1 mb-md-50">
                            <img class="img-fluid w-100" src="../assets/images/business-5.jpg" alt="philosophy-image">
                        </div>
                        <div class="col-lg-7 order-1 order-lg-2">
                            <h5 class="section-title-sm">Philosophie</h5>
                            <h2 class="section-title section-title-border-half">Unsere Philosophie</h2>

                            <h5> Fokus auf das Wesentliche</h5>
                            <p>
                                Unabhängig davon, ob wir einen Shop gestalten oder eine Applikation programmieren,
                                mit dem richtigen Fokus erzielen wir nachhaltig mehr Wirkung.
                            </p>
                            <br><br>
                            <h5>Langfristige und partnerschaftliche Zusammenarbeit</h5>
                            <p>
                                Eine spannende Zusammenarbeit auf Augenhöhe macht beiden Seiten mehr Spass.
                            </p>
                            <a href="service.html" class="btn btn-primary">Explore More</a>
                        </div>
                    </div>
                </div>
            </section>
            <div style="height:30px"></div>
            <!-- /philosophy -->

            <!-- ceo section -->
            <section>
                <div class="container">
                    <div class="row rounded bg-secondary">
                        <!-- ceo image -->
                        <div class="col-lg-5 rounded-left ceo-image" data-aos="fade-right" data-aos-duration="1500"
                            style="background-image: url(../src/assets/images/ceo.jpg);"></div>
                        <div class="col-lg-7" data-aos="fade-left" data-aos-duration="1500">
                            <!-- ceo content -->
                            <div class="p-5">
                                <h2 class="section-title section-title-border-half-white text-white"> Erstellen Sie Ihre
                                    Profi-Website
                                </h2>
                                <p class="text-white">
                                    Ihre Website ist Ihre ganz persönliche digitale Visitenkarte. Heute ist es visuelle
                                    Ikone, Informationsquelle und interaktive Plattform. Stellen Sie also sicher, dass
                                    Ihre Online-Präsenz den Anforderungen Ihres Unternehmens entspricht. Wir helfen
                                    Ihnen gerne, ein positives Kundenerlebnis zu schaffen. Unsere personalisierten und
                                    auf Ihre Bedürfnisse zugeschnittenen Website-Lösungen sichern Ihren digitalen
                                    Erfolg.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style="height:30px"></div>
            <!-- /ceo section -->

            <!-- skill -->
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-12"  data-aos="fade-right" data-aos-duration="1000">
                            <h5 class="section-title-sm">Beste Dienstleistungen</h5>
                            <h2 class="section-title section-title-border-half">
                                Warum uns wählen
                            </h2>
                        </div>

                        <div id="accordion" class="col-lg-12 accordion" role="tablist">
                            <!-- accordion -->
                            <b-card no-body class="border-0 mb-4" data-aos="fade-right" data-aos-duration="1500">
                                <b-card-header header-tag="header" class="bg-gray border p-0" role="tab">
                                    <b-button block v-b-toggle.accordion-1 variant="info"
                                        class="card-link h5 d-block text-dark mb-0 py-10 px-4">
                                        <i class="ti-plus text-primary mr-2"></i>
                                        Die Sicherheit zahlreicher zufriedener Kunden
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-1" role="tabpanel" visible>
                                    <b-card-body class="font-secondary text-color pl-0 pb-0">
                                        <b-card-text class="p-3">
                                            Jeder neue Kunde kauft in unserem Bereich ein Produkt, bei dem
                                            er vorher nicht sieht, was er bekommt. Deshalb wissen wir,dass
                                            Vertrauen das höchste Gut ist, das wir von unseren Kunden bekommen
                                            können. Um neuen Kunden die Sicherheit zu geben, uns dieses Vertrauen
                                            schenken zu
                                            können, präsentieren wir auf unserer Website zahlreiche detailliert
                                            beschriebene
                                            Projekte von Unternehmen, die uns bereits das Vertrauen schenkten. Zu
                                            unseren Kunden zählen
                                            Unternehmen aus den unterschiedlichsten Branchen und in den
                                            unterschiedlichsten Größenordnungen.
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <!-- /accordion -->

                            <!-- accordion -->
                            <b-card no-body class="border-0 mb-4" data-aos="fade-right" data-aos-duration="2000">
                                <b-card-header header-tag="header" class="bg-gray border p-0" role="tab">
                                    <b-button block v-b-toggle.accordion-2 variant="info"
                                        class="card-link h5 d-block text-dark mb-0 py-10 px-4">
                                        <i class="ti-plus text-primary mr-2"></i>
                                        Faire Festpreisangebote für Kunden, die das Besondere suchen und schätzen
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-2" role="tabpanel" visible>
                                    <b-card-body class="font-secondary text-color pl-0 pb-0">
                                        <b-card-text class="p-3">
                                            Wenn Sie in erster Linie eine möglichst billige Website suchen, dann
                                            sind
                                            wir nicht der richtige Partner für Sie. Wir stecken in jedes Projekt
                                            viel
                                            Liebe zu Details, die nicht jeder zu schätzen weiß. Das ist für uns auch
                                            vollkommen verständlich und in Ordnung und wir stehen dazu, dass wir uns
                                            auf
                                            jene Kunden konzentrieren wollen, die die unkomplizierte Abwicklung und
                                            die
                                            besondere Qualität erkennen.
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <!-- /accordion -->

                            <!-- accordion -->
                            <b-card no-body class="border-0 mb-4" data-aos="fade-right" data-aos-duration="2500">
                                <b-card-header header-tag="header" class="bg-gray border p-0" role="tab">
                                    <b-button block v-b-toggle.accordion-3 variant="info"
                                        class="card-link h5 d-block text-dark mb-0 py-10 px-4">
                                        <i class="ti-plus text-primary mr-2"></i>
                                        Ganzheitliche Denkweise vom Konzept bis zum individuellen Webdesign.
                                    </b-button>
                                </b-card-header>
                                <b-collapse id="accordion-3" role="tabpanel" visible>
                                    <b-card-body class="font-secondary text-color pl-0 pb-0">
                                        <b-card-text class="p-3">
                                            Wir betrachten immer das große Ganze. Von Beginn an möchten wir Ihr
                                            Unternehmen und Ihr Business genau verstehen, um Ihnen die bestmögliche
                                            Leistung bieten zu können
                                        </b-card-text>
                                    </b-card-body>
                                </b-collapse>
                            </b-card>
                            <!-- /accordion -->
                        </div>

                    </div>
                </div>
            </section>
            <div style="height:30px"></div>
            <!-- /skill -->

            <section class="section fun-facts overlay-dark"
                style="background-image: url(../src/assets/images/cta.jpg);">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                            <div
                                class="d-flex flex-sm-row flex-column justify-content-lg-center align-items-center text-center text-sm-left">
                                <i class="round-icon ti-server mr-sm-3 mr-0 mb-3 mb-sm-0"></i>
                                <div class="text-center text-sm-left">
                                    <h2 class="count text-white mb-0" data-count="95">95</h2>
                                    <p class="text-white mb-0">Projekte erledigt</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                            <div
                                class="d-flex flex-sm-row flex-column justify-content-lg-center align-items-center text-center text-sm-left">
                                <i class="round-icon ti-face-smile mr-sm-3 mr-0 mb-3 mb-sm-0"></i>
                                <div class="text-center text-sm-left">
                                    <h2 class="count text-white mb-0" data-count="75">75</h2>
                                    <p class="text-white mb-0">Zufriedene Kunden</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                            <div
                                class="d-flex flex-sm-row flex-column justify-content-lg-center align-items-center text-center text-sm-left">
                                <i class="round-icon ti-thumb-up mr-sm-3 mr-0 mb-3 mb-sm-0"></i>
                                <div class="text-center text-sm-left">
                                    <h2 class="count text-white mb-0" data-count="580">580</h2>
                                    <p class="text-white mb-0">Tasse Kaffee</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                            <div
                                class="d-flex flex-sm-row flex-column justify-content-lg-center align-items-center text-center text-sm-left">
                                <i class="round-icon ti-cup mr-sm-3 mr-0 mb-3 mb-sm-0"></i>
                                <div class="text-center text-sm-left">
                                    <h2 class="count text-white mb-0" data-count="5">5</h2>
                                    <p class="text-white mb-0">Auszeichnungen gewinnen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style="height:30px"></div>

            <!-- client logo swiper-slide -->
            <hr>
            <section class="section mb-4 mt-4" style="height:250px">
                <h2 class="mt-4 text-center">Unsere zufriedenen Kunden</h2>
                <swiper :centeredSlides="true" :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,}" :slidesPerView="4" :spaceBetween="30" :loop="true"
                    :loopFillGroupWithBlank="true" :pagination="{
                            clickable: true,}" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <div>
                            <img src="@/assets/images//client-logo/client-logo-1.png" />
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <img src="@/assets/images//client-logo/client-logo-2.png" />
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <img src="@/assets/images//client-logo/client-logo-3.png" />
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <img src="@/assets/images//client-logo/client-logo-4.png" />
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <img src="@/assets/images//client-logo/client-logo-5.png" />
                        </div>
                    </swiper-slide>
                </swiper>
            </section>
            <hr>
            <!-- /client logo slider -->
        <br>
        </div>
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
import { Autoplay, Pagination } from "swiper";

export default {
  
    components: {
    Swiper,
    SwiperSlide,
    },

    setup() {
        return {
            modules: [Autoplay, Pagination],
        };
    },

  data() {
    return { }
    },

    mounted() {
       
    },

    created() {
    },

    methods: {
    },    
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

</style>
