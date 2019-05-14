<template>
  <div class="write-message">
    <h1>填写信息</h1>
    <form @submit.prevent="createOrder()">
      <div>
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="输入Email"
          v-validate="'required|email'"
          v-model="form.user.email"
        >
        <div v-if="errors.has('email')" class="form-prompt">{{errors.first('email')}}</div>
      </div>
      <div>
        <label for="name">名字</label>
        <input
          type="text"
          name="name"
          placeholder="收件人姓名"
          v-validate="'required'"
          v-model="form.user.name"
        >
        <div v-if="errors.has('name')" class="form-prompt">请输入姓名</div>
      </div>
      <div>
        <label for="iPhone">电话</label>
        <input
          type="text"
          name="ipone"
          id
          placeholder="输入您的电话"
          v-model="form.user.tel"
          v-validate="'required'"
        >
        <div v-if="errors.has('ipone')" class="form-prompt">输入您的电话</div>
      </div>
      <div>
        <label for="iPhone">地址</label>
        <input
          type="text"
          name="ipone"
          id
          placeholder="收件人地址"
          v-model="form.user.address"
          v-validate="'required'"
        >
        <div v-if="errors.has('ipone')" class="form-prompt">输入您的地址</div>
      </div>
      <div>
        <label for="message">留言</label>
        <textarea
          name="message"
          id
          cols="30"
          rows="10"
          placeholder="留言"
          v-model="form.message"
          v-validate="'required'"
        ></textarea>
        <div v-if="errors.has('message')" class="form-prompt">你的留言</div>
      </div>
      <button class="btn">提交</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'writeMessage',
  data () {
    return {
      form: {
        user: {},
        message: ''
      }
    }
  },
  methods: {
    async createOrder () {
      this.$store.commit('IS_LOADING', true)
      let api = `${process.env.VUE_APP_LOC}/api/${process.env.VUE_APP_API}/order`
      const isValid = await this.$validator.validate()
      if (!isValid) {
        this.$store.commit('IS_LOADING', false)
        return
      }
      this.axios.post(api, { data: this.form }).then(response => {
        this.$store.commit('IS_LOADING', false)
        this.$emit('timelineStatus', 2)
        this.$store.commit('GET_CART', '')
        this.$router.push(`/order/checkout/${response.data.orderId}`)
      })
      requestAnimationFrame(() => {
        this.$validator.reset()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.write-message {
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 50px;
  div {
    margin-bottom: 30px;
  }
  form {
    width: 50%;
    @include media(xs) {
      width: 80%;
    }
    margin: auto;
    .form-prompt {
      color: color(warning);
    }
  }
  input,
  textarea {
    @include col(20, 3);
  }
}
</style>
