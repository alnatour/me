<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
<!-- footer -->
<footer class="bg-secondary">
    <div class="py-100 border-bottom" style="border-color: #454547 !important">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="mb-5 mb-md-0 text-center text-md-left">
              <!-- logo -->
              <img class="mb-30" src="@/assets/images/logo-footer.png" alt="logo">
              <p class="text-white mb-30">Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt
                labore dolore magna aliqua enim.</p>
              <!-- social icon -->
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="social-icon-outline" href="#">
                    <i class="ti-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-icon-outline" href="#">
                    <i class="ti-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-icon-outline" href="#">
                    <i class="ti-vimeo"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-icon-outline" href="#">
                    <i class="ti-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- footer links -->
          <div class="col-lg-2 col-md-4 col-6">
            <ul class="footer-links">

            </ul>
          </div>
          <!-- footer links -->
          <div class="col-lg-2 col-md-4 col-6">
            <h4 class="text-white mb-4">Quick Link</h4>
            <ul class="footer-links">
              <li>
                <a href="#">Company History</a>
              </li>
              <li>
                <RouterLink class="nav-link" to="/about" >Über uns</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link" to="/contact" >Kontakt</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link" to="/service" >Leistungen</RouterLink>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <!-- subscribe form -->
          <div class="col-lg-3 offset-lg-1">
            <div class="mt-5 mt-lg-0 text-center text-md-left">
              <h4 class="mb-4 text-white">Subscribe Us</h4>
              <p class="text-white mb-4">Lorem ipsum dolor sit amet, consect etur adipisicing. elit sed do
                eiusmod. </p>
              <form action="#" class="position-relative">
                <input type="text" class="form-control subscribe" name="subscribe" id="Subscribe" placeholder="Enter Your Email">
                <button class="btn-subscribe" type="submit" value="send">
                  <i class="ti-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- copyright -->
    <div class="pt-4 pb-3 position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-5">
            <p class="text-white text-center text-md-left">
              <span class="text-primary">Alnatour</span> © 2022 All Right Reserved</p>
          </div>
          <div class="col-lg-6 col-md-7">
            <ul class="list-inline text-center text-md-right">
              <li class="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                <a class="font-secondary text-white" href="#">Legal</a>
              </li>
              <li class="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                <a class="font-secondary text-white" href="#">Sitemap</a>
              </li>
              <li class="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                <a class="font-secondary text-white" href="#">Privacy Policy</a>
              </li>
              <li class="list-inline-item ml-lg-3 my-lg-0 ml-2 my-2 ml-0">
                <RouterLink class="font-secondary text-white" to="/terms-and-conditions">Terms and Conditions</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- back to top -->
      <a href="#" class="back-to-top" style="font-size: 30px;">
          <font-awesome-icon icon="fa-angle-up" />
      </a>
    </div>
  </footer>
  <!-- /footer -->

  </template>

  <style scoped>
  .social-icon-outline {
    font-size: 24px!important;
    color: #ffffff ;
  }
  </style>