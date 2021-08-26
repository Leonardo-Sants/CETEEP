<template>

  <div>
    <HomeComponent></HomeComponent>
    <FooterComponent></FooterComponent>
  </div>
  
</template>

<script>

import HomeComponent from './components/HomeComponent.vue';
import FooterComponent from './components/FooterComponent.vue'


export default {
  name: 'App',
  components: {
  HomeComponent,
  FooterComponent
  }
}
</script>

<style>

</style>
