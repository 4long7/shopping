<template>
  <div class="cart">
    <img :src="cart.product.imageUrl">
    <ul class="clear-cart">
      <li>{{cart.product.title}}</li>
      <!-- <li v-if="cart.product.origin_price">原价{{cart.product.origin_price}}元</li> -->
      <li>现价{{cart.product.price}}元</li>
      <li>
        总价{{cart.final_total}}
        <span>{{cart.coupon?'已经使用优惠卷':''}}</span>
      </li>
      <li>
        <button @click="deleteCart(cart.id)" :disabled="isStatus">
          <i class="fas fa-trash-alt"></i>
        </button>
      </li>
    </ul>
    <div class="num-cart">
      <i class="fas fa-chevron-up">
        <div>{{cart.qty}}</div>
        <i class="fas fa-chevron-down"></i>
      </i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shopCart',
  data () {
    return {
      isStatus: false
    }
  },
  props: {
    cart: {
      type: Object
    }
  },
  methods: {
    deleteCart (id) {
      this.isStatus = true
      let api = `${process.env.VUE_APP_LOC}/api/${process.env.VUE_APP_API}/cart/${id}`
      this.axios.delete(api).then(response => {
        if (response.data.success) {
          this.$bus.$emit('message', response.data.message, 'warning')
          this.$store.dispatch('getCart')

          this.isStatus = false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.cart {
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  margin-bottom: 20px;
  i {
    cursor: pointer;
  }
  img {
    @include wh(90px, 90px);
    @include col(6, 2);
  }
  .clear-cart {
    @include col(8, 2);
    font-weight: 900;
    font-size: 0.7rem;

    li {
      margin-left: 15px;
      margin-bottom: 10px;
      text-align: left;
      span {
        color: color(primary);
      }
    }
  }
  .num-cart {
    @include col(6, 2);
    color: color(primary);
    div {
      color: color(dark);
      width: 0.8rem;
    }
  }
}
</style>
