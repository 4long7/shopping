<template>
  <div class="order-end">
    <div>完成订单</div>
  </div>
</template>
<script>
export default {
  name: 'orderEnd',
  mounted () {
    this.$emit('timelineStatus', 4)
  }
}
</script>
<style lang="scss" scoped>
.order-end {
  @include container;
  font-size: 2rem;
  font-weight: 900;
  line-height: 500px;
}
</style>
