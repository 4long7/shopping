<template>
  <div class="login">
    <form class="login-form" @submit.prevent="loginHandler()">
      <h1>登录</h1>
      <div class="username">
        <i class="fas fa-user"></i>
        <input type="username" name="username" placeholder="输入账号" v-model="userData.username">
      </div>
      <div class="password">
        <i class="fas fa-key"></i>
        <input type="password" name="password" placeholder="输入密码" v-model="userData.password">
      </div>
      <button class="btn">登录</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      userData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    loginHandler () {
      this.$store.commit('IS_LOADING', true)
      let api = `${process.env.VUE_APP_LOC}/admin/signin`
      this.axios.post(api, this.userData).then(response => {
        console.log(response.data)
        if (response.data.success) {
          this.$router.push('/admin/products')
          console.log('admin', response.data)
        } else {
          this.$bus.$emit('message', response.data.message, 'warning')
        }
        this.$store.commit('IS_LOADING', false)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  position: relative;
  $spacing: 20px;
  @include wh(100%, 100vh);
  background-color: colorA(dark, 2);
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    padding: $spacing;
    @include wh(400px, 300px);
    background-color: colorA(light);
    box-shadow: 1px 1px 2px colorA(light);
    border-radius: 5px;

    input {
      width: 70%;
      border-radius: 0 $spacing $spacing 0;
      margin-bottom: $spacing;
      box-shadow: none;
      border-left: 0px solid transparent;
      // border-right: none;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset !important;
      }
    }
    i {
      display: inline-block;
      vertical-align: top;
      width: 40px;
      line-height: 32px;
      border-radius: $spacing 0 0 $spacing;
      border-top: 1px solid colorA(primary);
      border-left: 1px solid colorA(primary);
      border-bottom: 1px solid colorA(primary);
    }
    .btn {
      width: 100px;
    }
    .username {
    }
    .password {
    }
  }
}
</style>
