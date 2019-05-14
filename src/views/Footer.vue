<template>
  <div class="footer">
    <i class="fab fa-weixin"></i>
    <i class="fab fa-facebook-square"></i>
    <i class="fab fa-qq"></i>
    <i class="fab fa-line"></i>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.footer {
  @include wh(100%, 100px);
  background-color: color(dark, 2);
  color: color(primary);
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    @include col(6);
  }
}
</style>
