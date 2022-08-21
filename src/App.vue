<template>
  <div id="app">
    <Herader/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Herader from './components/Herader'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Herader,
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
