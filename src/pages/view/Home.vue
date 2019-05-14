<template>
  <div class="contarner">
    <div class="banner">
      <div class="content">
        <p>房屋出租</p>
        <button class="btn" @click="goShop">住房</button>
      </div>
    </div>
    <div class="shop-card">
      <h1 class="card-title">Our Products</h1>
      <div class="product">
        <ShopCard v-for=" item in products" :key="item.id" :product="item"></ShopCard>
      </div>
    </div>
    <Pagination :pagination="pagination" @pageNum="pageNum"></Pagination>
  </div>
</template>
<script>
import ShopCard from '@/components/ShopCard.vue'
import Pagination from '@/components/pagination'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  computed: {
    pagination () {
      return this.$store.getters.pageNum
    },
    products () {
      //   if (this.$store.state.filterProduct.length) {
      //     return this.$store.state.filterProduct
      //   } else {
      //     return this.$store.state.products
      //   }
      // }
      return this.$store.getters.filterProduct
    }
  },
  methods: {
    pageNum (page = 1) {
      this.$store.commit('PAGE_NUM', page)
    },
    goShop () {
      let shopScroll = document.querySelector('.shop-card')
      window.scrollTo({
        top: shopScroll.offsetTop - 20,
        behavior: 'smooth'
      })
    }
  },
  components: {
    ShopCard,
    Pagination
  }
}
</script>
<style lang="scss" scoped>
.contarner {
  .banner {
    @include wh(100%, 100vh);
    background: url("../../assets/image/home.jpeg") center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      letter-spacing: fun(spacing);
      font-size: 1.5rem;
      color: color(light);
      padding: 2.4rem 10rem;
      background: rgba(color(dark), 0.5);
    }
  }
  .shop-card {
    .card-title {
      padding: 3rem;
    }
    @include card;
  }
}
</style>
