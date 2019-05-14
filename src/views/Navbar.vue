<template>
  <div class="navbar">
    <i class="fas fa-bars" @click="shopShow('left')"></i>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/" class="text-about">About</router-link>
    </div>
    <i class="fas fa-shopping-cart buy-num" @click="shopShow" :data-buy-num="cartNum"></i>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  mounted () {
    if (this.$store.state.carts.length <= 0) {
      this.$store.dispatch('getCart')
    }
  },
  computed: {
    cartNum () {
      if (this.$store.state.carts.carts) {
        if (this.$store.state.carts.carts.length > 9) {
          return '9+'
        } else {
          return this.$store.state.carts.carts.length
        }
      } else {
        return 0
      }
    }
  },
  methods: {
    shopShow (left) {
      this.$store.commit('IS_SIDEBAR', left)
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  font-size: fun(font, 3);
  justify-content: space-around;
  align-items: center;
  background-color: color(light, 2);
  letter-spacing: fun(spacing);
  position: fixed;
  z-index: 1;
  @include wh(100%, 60px);
  .text-about {
    color: color(primary);
    margin-left: 1rem;
  }
  .fas {
    cursor: pointer;
  }
  .buy-num {
    display: block;
    position: relative;
    &::after {
      content: attr(data-buy-num);
      display: block;
      @include wh(15px, 15px);
      line-height: 15px;
      border-radius: 30%;
      position: absolute;
      top: -5px;
      right: -5px;
      background-color: color(primary);
      color: color(light);
      font-size: 0.8rem;
    }
  }
}
</style>
