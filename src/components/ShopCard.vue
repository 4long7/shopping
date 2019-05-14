<template>
  <div class="product-card">
    <router-link :to="{ name: 'Details',  params: { id:product.id}}">
      <div
        class="product-img"
        :style="`background:url(${product.imageUrl}) center/cover no-repeat`"
      >
        <div class="details">详情</div>
      </div>
      <h3 class="product-title">{{product.title}}</h3>
    </router-link>
    <div class="product-price">
      ${{product.origin_price}}元
      <btnLoading :product="{id:product.id,qty:1}"></btnLoading>
    </div>
  </div>
</template>
<script>
import btnLoading from './btnLoading'
export default {
  name: 'shop-card',
  props: {
    product: {
      type: Object
    }
  },
  components: {
    btnLoading
  }
}
</script>
<style lang="scss" scoped>
.product-card {
  @include col(6);
  @include media(xs) {
    @include col(24);
  }
  color: color(dark);
  min-width: 250px;
  cursor: pointer;
  .product-img {
    background: url("../assets/image/product-1.jpeg") center/cover no-repeat;
    @include wh(100%, 250px);
    position: relative;
    .details {
      position: absolute;
      right: 0;
      top: 70%;
      width: 0;
      transition: fun(transition);
      background-color: color(primary);
      color: color(light);
      white-space: nowrap;
    }
    &:hover {
      .details {
        transition: fun(transition);
        width: 100px;
        padding: 0.5rem;
      }
      @include before() {
        position: absolute;
        @include wh;
        top: 0;
        left: 0;
        background: rgba(color(primary), 0.3);
      }
    }
  }
  .product-price {
    color: color(primary);
    margin-bottom: 1.5rem;
  }
}
</style>
