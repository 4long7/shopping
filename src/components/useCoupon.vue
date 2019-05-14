<template>
  <div>
    <input type="text" placeholder="code5" v-model="coupon">
    <button class="btn mr-1" @click="useCoupon()">使用优惠卷</button>
  </div>
</template>
<script>
export default {
  name: 'useCoupon',
  data () {
    return {
      coupon: ''
    }
  },
  methods: {
    useCoupon () {
      let coupon = this.coupon
      let api = `${process.env.VUE_APP_LOC}/api/${process.env.VUE_APP_API}/coupon`
      this.axios.post(api, { 'data': { 'code': coupon } }).then(response => {
        if (response.data.success) {
          this.$bus.$emit('message', response.data.message, 'warning')
          this.$store.dispatch('getCart')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
