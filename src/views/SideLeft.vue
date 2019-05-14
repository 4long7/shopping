<template>
  <div class="side" :class="{'show-side':isSideLeft}">
    <div class="sidebar" :class="{'show-sideleft':isSideLeft}">
      <div class="cross">
        <i class="fas fa-times" @click="hideSide()"></i>
      </div>
      <ul class="sideleft" @click="hideSide(1)">
        <li @click="categoryHandler('all')">
          <router-link to="/">全部</router-link>
        </li>
        <li v-for="item in category" :key="item" @click="categoryHandler(item)">
          <router-link to="/">{{item}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'side-left',
  computed: {
    isSideLeft () {
      return this.$store.state.isSideLeft
    },
    category () {
      let products = this.$store.state.products
      let product = []
      products.forEach(d => {
        if (product.indexOf(d.category) === -1) {
          product.push(d.category)
        }
      })
      return product
    }
  },
  methods: {
    categoryHandler (data) {
      this.$store.commit('FILTER_PRODUCTS', data)
      this.$store.commit('PAGE_NUM', 1)
    },
    hideSide (goShop) {
      this.$store.commit('IS_SIDEBAR', 'left')
      setTimeout(() => {
        if (goShop && document.querySelector('.shop-card')) {
          let shopScroll = document.querySelector('.shop-card')
          window.scrollTo({
            top: shopScroll.offsetTop - 20,
            behavior: 'smooth'
          })
        }
      }, 200)
    }
  }
}
</script>
<style lang="scss" scoped>
@include sidebar {
  left: -100%;
  overflow-y: auto;
  direction: rtl;
  &.show-sideleft {
    left: 0;
    transition: fun(transition);
  }
  .cross {
    padding-top: 1.5rem;
    padding-right: 1.5rem;
    text-align: right;
  }
  .sideleft {
    text-align: center;
    padding-top: 3rem;
    li {
      margin: auto;
      width: 80%;
      font-size: 2rem;
      margin-bottom: 1rem;
      line-height: 3rem;
      box-shadow: 0px 0px 2px color(primary, 2);
      a {
        color: color(dark, 2);
        display: block;
        @include wh;
      }
    }
  }
}
</style>
