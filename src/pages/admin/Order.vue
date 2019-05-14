<template>
  <div style="width:100%">
    <table>
      <thead>
        <!-- 产品 -->
        <tr>
          <th scope="col">购买日期</th>
          <th scope="col">Email</th>
          <th scope="col">购买款项</th>
          <th scope="col">应付金额</th>
          <th scope="col">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(order,index) in orders.orders" :key="order.id">
          <td>{{orderDate(order.create_at)}}</td>
          <td v-if="order.user">{{order.user.email}}</td>
          <td v-else></td>
          <td v-if="productsData[index]">{{productsData[index].length}}笔</td>
          <td>{{order.total | currency}}</td>
          <td>{{order.is_paid ? '已经付款' :'未付款'}}</td>
        </tr>
      </tbody>
    </table>
    <Pagination :pagination="orders.pagination" @pageNum="pageNum"></Pagination>
  </div>
</template>
<script>
import Pagination from '@/components/pagination'

export default {
  name: 'order',
  mounted () {
    this.$store.dispatch('getOrder')
  },
  computed: {
    orders () {
      console.log(this.$store.state.adminModules.orders.pagination)
      return this.$store.state.adminModules.orders
    },
    productsData () {
      return this.$store.getters.productOrder
    }
  },
  methods: {
    pageNum (page) {
      this.$store.dispatch('getOrder', page)
    },
    orderDate (item) {
      let date = new Date(item)
      return (date.getFullYear()) + (date.getMonth() + 1) + (date.getDate())
    }
  },
  components: {
    Pagination
  }
}
</script>
<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;
  tr {
    border-bottom: 1px solid color(dark, 2);
  }
  .btn {
    margin-left: 10px;
  }
  td,
  th {
    height: 50px;
    text-align: center;
  }
}
</style>
