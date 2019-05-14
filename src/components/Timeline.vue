<template>
  <ul class="timeline">
    <li data-value="添加">1</li>
    <li :class="{'active':isStatus===1}" data-value="填写信息">2</li>
    <li :class="{'active':isStatus===2}" data-value="查看账单">3</li>
    <li :class="{'active':isStatus===3}" data-value="付款">4</li>
    <li :class="{'active':isStatus===4}">完</li>
  </ul>
</template>
<script>
export default {
  name: 'Timeline',
  props: {
    isStatus: {
      type: Number,
      default: 1
    }
  }
}
</script>
<style lang="scss" scoped>
.timeline {
  max-width: 500px;
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0 auto;
  li {
    border-radius: 50%;
    line-height: 30px;
    width: 30px;
    background-color: color(primary);
    list-style: none;
    position: relative;
    text-align: center;
    color: color(light);
    &::after {
      content: attr(data-value);
      position: absolute;
      color: color(primary);
      font-size: 0.6rem;
      font-weight: 600;
      white-space: nowrap;
      top: 10px;
      left: 150%;
      right: 0;
      margin: auto;
    }
  }
  li + li::before {
    content: "";
    display: block;
    width: 295%;
    /*( 500 - 40*6)/5/40 */
    height: 6px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 98%;
    background-color: color(primary);
    z-index: -2;
  }

  li.active {
    background-color: color(secondary);
    &::before {
      z-index: -1;
    }
  }
  li.active ~ li,
  li.active ~ li::before {
    background-color: color(dark, 2);
  }
}
</style>
