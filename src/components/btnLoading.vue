<template>
  <button class="btn" :disabled="isStatus===product.id" @click="addCard(product.id)">
    <i class="fas fa-spinner fa-spin" v-if="isStatus===product.id"></i>
    <slot>添加</slot>
  </button>
</template>
<script>
export default {
  name: 'btnLoading',
  data () {
    return {
      isStatus: ''
    }
  },
  props: {
    product: {
      type: Object
    }
  },
  methods: {
    alert () {
      let cart = this.$store.state.isAddCart
      if (cart.prevId === this.product.id && cart.message !== '') {
        this.$bus.$emit('message', cart.message, 'warning')
      }
    },
    addCard (id) {
      this.isStatus = id
      let qty = this.product.qty >= 1 ? this.product.qty : 1
      let api = `${process.env.VUE_APP_LOC}/api/${process.env.VUE_APP_API}/cart`
      this.axios.post(api, { data: { 'product_id': id, 'qty': qty } }).then(response => {
        if (response.data.success) {
          this.isStatus = ''
          this.$bus.$emit('message', response.data.message, 'warning')
          this.$store.dispatch('getCart')
        }
      })
    }
  }
}
</script>
