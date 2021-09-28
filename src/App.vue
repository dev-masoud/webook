<template>
<div class="main">


  <Main/>
  <router-view/>
</div>
</template>

<script>
import Main from "./components/main.vue"

export default {
    name: 'App',
  components: {
    Main,
    
}
}
</script>




<style scoped>
body,.main{
  margin:0 !important;
  padding:0 !important;
}


</style>
