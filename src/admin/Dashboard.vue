<template>
  <div class="dashboard">
    <Navbar>nav</Navbar>
    <div class="admin-main">
      <Sidebar>side</Sidebar>
      <router-view class="main"></router-view>
    </div>
  </div>
</template>
<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
export default {
  name: 'Dashboard',
  mounted () {
    this.loginCheck()
  },
  methods: {
    loginCheck () {
      this.$store.commit('IS_LOADING', true)
      let api = `${process.env.VUE_APP_LOC}/api/user/check`
      this.axios.post(api).then(response => {
        if (!response.data.success) {
          this.$router.push('/admin/login')
        }
        this.$store.commit('IS_LOADING', false)
      })
    }
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  position: relative;

  overflow: hidden;
  .admin-main {
    display: flex;
  }
  .main {
    overflow: auto;
  }
}
</style>
