<template>

  <div>
    <HomeComponent></HomeComponent>
    <Home></Home>
    <FooterComponent></FooterComponent>
  </div>
  
</template>

<script>

import HomeComponent from './components/HomeComponent.vue';
import FooterComponent from './components/FooterComponent.vue'
import Home from './views/home.vue'


export default {
  name: 'App',
  components: {
  HomeComponent,
  FooterComponent,
  Home
  }
}
</script>

<style>

</style>
