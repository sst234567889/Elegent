<template>
  <div id="app">
   
    
 
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import router from './router';

export default {
  name: 'App',
  components: {
   
    Home,
    router
}
}
</script>

<style>

</style>
