<template>
  <div class="side" :class="{'show-side':isSide}">
    <div class="sidebar" :class="{'show-sidebar':isSide}">
      <div class="cross">
        <i class="fas fa-times" @click="hideSide()"></i>
      </div>
      <div class="shop-cart" v-if="getCarts">
        <h2 class="cart-title">你的购物车</h2>
        <ShopCart v-for="cart in getCarts.carts" :key="cart.id" :cart="cart"></ShopCart>
        <div class="total">
          <useCoupon></useCoupon>
          <p>总价：{{getCarts.total}}</p>
          <p v-if="getCarts.final_total">折扣价{{getCarts.final_total}}</p>
          <router-link to="/order">
            <button class="btn" @click="hideSide()">结算</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShopCart from '@/components/ShopCart'
import useCoupon from '@/components/useCoupon'

export default {
  name: 'sidebar',
  data () {
    return {
    }
  },
  computed: {
    isSide () {
      return this.$store.state.isSide
    },
    getCarts () {
      return this.$store.state.carts
    }
  },
  methods: {
    hideSide () {
      this.$store.commit('IS_SIDEBAR')
    }
  },
  components: {
    ShopCart,
    useCoupon
  }
}
</script>
<style lang="scss" scoped>
@include sidebar {
  overflow-y: auto;
  right: -100%;
  &.show-sidebar {
    right: 0;
    transition: fun(transition);
  }
  .cross {
    padding-top: 1.5rem;
    padding-left: 1.5rem;
  }
  .shop-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
