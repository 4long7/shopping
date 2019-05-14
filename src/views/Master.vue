<template>
  <div class="master">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <SideLeft></SideLeft>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import SideLeft from './SideLeft'
import Footer from './Footer'
export default {
  name: 'master',
  mounted () {
    if (this.$store.state.products.length <= 0) {
      this.$store.dispatch('getProducts')
    }
  },
  components: {
    Navbar,
    Sidebar,
    SideLeft,
    Footer
  }
}
</script>
<style lang="scss" >
.master {
  position: relative;
  overflow: hidden;
}
</style>
