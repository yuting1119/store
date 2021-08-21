<template>
  <div id="app">
    <Menu/>
    <div id="nav"></div>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  }
}
</script>
<style lang="scss">
@import './src/assets/all.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

</style>
