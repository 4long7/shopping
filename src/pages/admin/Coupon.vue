<template>
  <div class="coupon">
    <h2 v-if="!code.id">添加优惠券</h2>
    <h2 v-else>修改优惠券</h2>
    <form class="coupon-form" @submit.prevent="insertCoupon()">
      <input type="text" placeholder="优惠价名称 超级优惠卷" class="input-coupon" v-model="code.title">
      <div class="checkbox-input">
        <input type="checkbox" id="couponCheck" v-model="code.is_enabled">
        <label for="couponCheck">是否启用</label>
      </div>
      <input type="text" placeholder="折扣" class="input-coupon" v-model="code.percent">
      <input
        type="text"
        placeholder="过期时间格式必须2019/12/11"
        class="input-coupon"
        v-model="code.due_date"
      >
      <input type="text" placeholder="code名称" class="input-coupon" v-model="code.code">
      <div class="form-btn">
        <button class="btn">提交</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Coupon',
  data () {
    return {
      code: this.putCoupon ? this.putCoupon : {}
    }
  },
  props: {
    putCoupon: {
      type: Object
    }
  },
  mounted () {
    console.log(this.$store.state.adminModules.promptCoupon)
  },
  methods: {
    promptHandler () {
      console.log('aaa')
    },
    insertCoupon () {
      let method = 'post'
      if (this.putCoupon) {
        method = 'put'
        this.$emit('isDisplay', false)
      }
      let date = this.code.due_date.split('/')
      let month = (date[1] * 1 - 1)
      this.code.due_date = new Date(date[0] * 1, month, date[2]).getTime()
      this.$store.dispatch('updateCoupon', { method, item: this.code })
      this.code = {}
    }
  }
}
</script>
<style lang="scss" scoped>
.coupon {
  width: 100%;
  .coupon-form {
    margin: auto;
    max-width: 600px;
    min-width: 200px;
    overflow: hidden;
    padding: 20px;
    .form-btn {
      text-align: right;
    }
    .input-coupon {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
    .checkbox-input {
      text-align: left;
      margin-bottom: 20px;

      label {
        margin-left: 10px;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
