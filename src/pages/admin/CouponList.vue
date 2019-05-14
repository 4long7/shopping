<template>
  <table>
    <tbody>
      <tr>
        <th>优惠券</th>
        <th>优惠日期</th>
        <th>优惠券数目</th>
        <th>优惠折扣</th>
        <th>优惠名称</th>
        <th></th>
      </tr>
      <tr v-for="item in coupons" :key="item.id">
        <td>{{item.code}}</td>
        <td>{{item.due_date}}</td>
        <td>{{item.num}}</td>
        <td>{{item.percent }}</td>
        <td>{{item.title}}</td>
        <td>
          <button class="btn" @click="putCoupon(item)">修改</button>
          <button class="btn" @click="couponHandler('delete',item)">删除</button>
        </td>
      </tr>
    </tbody>
    <CreateAlert :isDisplay="isDisplay" @isDisplay="isDisplay= $event" v-if="isDisplay">
      <putCoupon class="coupon-alert" :putCoupon="couponItem" @isDisplay="isDisplay= $event"></putCoupon>
    </CreateAlert>
  </table>
</template>
<script>
import CreateAlert from '@/components/CreateAlert'
import putCoupon from '@/pages/admin/Coupon'
export default {
  name: 'couponList',
  data () {
    return {
      isDisplay: false,
      couponItem: {}
    }
  },
  computed: {
    coupons () {
      let code = this.$store.state.adminModules.coupons
      code.forEach(d => {
        let date = new Date(d.due_date)
        d.due_date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
      })
      return code
    }
  },
  mounted () {
    this.$store.dispatch('getCoupons')
  },
  methods: {
    putCoupon (item) {
      this.isDisplay = true
      this.couponItem = { ...item }
    },
    couponHandler (method, item) {
      this.$store.dispatch('updateCoupon', { method, item })
    }
  },
  components: {
    CreateAlert,
    putCoupon
  }
}
</script>
<style lang="scss" scoped>
table {
  .coupon-alert {
    width: 500px;
  }
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
