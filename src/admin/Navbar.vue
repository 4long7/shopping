<template>
  <div class="navbar">
    <div class="nav-title">
      <i class="fas fa-heading"></i>
    </div>
    <div class="nav-body">Home</div>
    <div class="nav-footer">
      <button class="btn" @click="signout()">登出</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    signout () {
      let api = `${process.env.VUE_APP_LOC}/logout`
      this.$store.commit('IS_LOADING', true)
      this.axios.post(api).then(response => {
        if (response.data.success) {
          this.$store.commit('IS_LOADING', false)
          this.$router.push('/admin/login')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  @include wh(100%);
  line-height: 50px;
  @include clear-float;
  background-color: colorA(dark, 2);
  color: colorA(light);
  .nav-title {
    @include col(6);
  }
  .nav-body {
    @include col(12);
  }
  .nav-footer {
    @include col(6);
    .btn {
      @include wh(100%);
      background: colorA(light);
      color: colorA(secondary);
    }
  }
}
</style>
