<template>
  <div class="sidebar">
    <div class="side-box">
      <h6>管理员</h6>
      <router-link to="/admin/products" class="product">
        <i class="fas fa-box-open"></i>
        <span>商品列表</span>
      </router-link>
      <router-link to="/admin/order" class="order">
        <i class="fas fa-hand-holding-usd"></i>
        <span>订单列表</span>
      </router-link>
      <router-link to="/admin/coupon" class="coupon">
        <i class="fas fa-ticket-alt"></i>
        <span>优惠券添加</span>
      </router-link>
      <router-link to="/admin/coupon_list" class="coupon">
        <i class="fas fa-ticket-alt"></i>
        <span>优惠券列表</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidebar'
}
</script>
<style lang="scss" scoped>
.sidebar {
  min-width: 300px;
  background-color: colorA(light, 2);
  height: calc(100vh - 50px);
  box-shadow: 2px 0px 10px -5px colorA(dark);

  @include media(xs) {
    position: absolute;
    left: -200%;
  }
  .side-box {
    h6 {
      margin-top: 70px;
    }
    a {
      display: block;
      margin-bottom: 20px;
      i {
        margin-right: 10px;
      }
    }
    margin: auto;
    width: 150px;
    text-align: left;
  }
}
</style>
