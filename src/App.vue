<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <!-- header -->
      <HeaderSite></HeaderSite>
      <!-- /header -->

      <!-- content -->
      <main>
        <RouterView />
      </main>
      <!-- /content -->

      <!-- footer -->
      <FooterSite></FooterSite>
      <!-- /footer -->
    </div>
  </div>
</template>
