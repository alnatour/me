<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <!-- navigation -->
    <header>
        <!-- top header -->
        <div class="top-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex justify-content-end">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a href="mailto:aaa.alnatour@gmail.com">aaa.alnatour@gmail.com</a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="callto:+4368110868566">Call Us Now:
                                        <span class="ml-2"> +43 681 10 86 85 66</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- nav bar -->
        <div class="navigation">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <RouterLink to="/" class="navbar-brand"  data-aos="flip-up" data-aos-duration="2500">
                        <img src="@/assets/images/logo.png" alt="logo" width="60" height="60">
                    </RouterLink>
                    <button v-b-toggle.collapse-navbar class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <b-collapse id="collapse-navbar" class="collapse navbar-collapse">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link">Startseite</RouterLink>
                            </li>
                            <li class="nav-item ">
                                <RouterLink class="nav-link" to="/about">Über uns</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/service">Leistungen</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/our-technologies">Unsere Technologien</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/contact">Kontakt uns</RouterLink>
                            </li>
                        </ul>
                    </b-collapse>
                </nav>
            </div>
        </div>
    </header>
</template>
<!-- /navigation -->

<style>
@media (min-width: 650px) {
  .nav-item .mobile {
    display: none!important;
  }
}
@media (max-width: 650px) {
  .nav-item .desktop {
    display: none!important;
  }
}
</style>