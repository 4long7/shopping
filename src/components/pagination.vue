<template>
  <nav>
    <ul class="pagination" v-if="pagination">
      <li :class="{'disabled':!pagination.has_pre}">
        <a href="javascript:;" @click.prevent="setPage(pagination.current_page-1)">上一页</a>
      </li>
      <li
        v-for="page in pagination.total_pages"
        :key="page"
        :class="{'active':page==pagination.current_page}"
      >
        <a href="javascript:;" @click="setPage(page)">{{page}}</a>
      </li>
      <li :class="{'disabled': !pagination.has_next}">
        <a href="javascript:;" @click.prevent="setPage(pagination.current_page+1)">下一页</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'pagination',
  props: {
    pagination: {
      type: Object
    }
  },
  methods: {
    setPage (page) {
      this.$emit('pageNum', page)
    }
  }
}
</script>
<style lang="scss" scoped>
.pagination {
  font-size: 15px;
  li {
    display: inline-block;
    border: 1px solid color(dark, 3);
    a {
      color: color(dark, 2);
      padding: 10px 20px;
      display: block;
    }
    margin-left: 10px;
  }
  .active {
    background: color(secondary);
    a {
      color: color(light);
    }
  }
}
</style>
