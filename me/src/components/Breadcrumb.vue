<template>

  <!-- breadcrumb -->
  <section id="breadcrumb" class="page-title overlay fadeIn" 
           :style="{backgroundImage:`url(${styleBreadcrumb.image})`}" >

    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="text-white font-weight-bold">
            <slot name="heading"></slot>
          </h2>
          <ol class="breadcrumb">
            <li>
                <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li><slot name="heading"></slot></li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <!-- /breadcrumb -->
  
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {

  props: ['src'],
  
  components: {
    RouterLink,
    RouterView,
  },

  data() {
    return {
      styleBreadcrumb: {
        image: this.src ?? "../src/assets/images/background/page-title.jpg",
        },
      }
    },

    mounted() {
     // console.log(this.src);
    },

    methods: {},   

};

</script>

<style>

</style>