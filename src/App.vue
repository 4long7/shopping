<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <Alert></Alert>
    <router-view/>
  </div>
</template>
<script>
import Alert from './components/AlertMessage'
export default {
  name: 'app',
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  components: {
    Alert
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
