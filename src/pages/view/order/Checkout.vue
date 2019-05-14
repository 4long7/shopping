<template>
  <div class="checkout">
    <table>
      <thead>
        <!-- 产品 -->
        <tr>
          <th>品名</th>
          <th>数量</th>
          <th>单价</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <td>{{ item.product.title }}</td>
          <td>{{ item.qty }}/{{ item.product.unit }}</td>
          <td>{{ item.final_total }} 元</td>
        </tr>
        <tr class="total">
          <td>总价</td>
          <td colspan="2">{{ order.total }}元</td>
        </tr>
        <!-- 用户信息 -->
        <tr>
          <th>Email</th>
          <td colspan="2">{{ order.user.email }}</td>
        </tr>
        <tr>
          <th>姓名</th>
          <td colspan="2">{{ order.user.name }}</td>
        </tr>
        <tr>
          <th>电话</th>
          <td colspan="2">{{ order.user.tel }}</td>
        </tr>
        <tr>
          <th>地址</th>
          <td colspan="2">{{ order.user.address }}</td>
        </tr>
        <tr>
          <th>付款状态</th>
          <td colspan="2">
            <span v-if="!order.is_paid">尚未付款</span>
            <span v-else class="order-success">付款完成</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="wrap-btn" v-if="order.is_paid === false">
      <button class="btn" @click="payOrder">确认付款</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'checkout',
  data () {
    return {
      orderId: '',
      order: {
        products: [],
        user: {

        }
      }
    }
  },
  mounted () {
    this.orderId = this.$route.params.id
    this.getOrder(this.ispaid)
  },
  methods: {
    ispaid () {
      if (this.order.is_paid === true) {
        this.$emit('timelineStatus', 3)
      } else {
        this.$emit('timelineStatus', 2)
      }
    },
    getOrder (ispaid) {
      let api = `${process.env.VUE_APP_LOC}/api/${process.env.VUE_APP_API}/order/${this.orderId}`
      this.axios.get(api).then(response => {
        this.order = response.data.order
        if (ispaid) {
          ispaid()
        }
      })
    },
    payOrder () {
      let api = `${process.env.VUE_APP_LOC}/api/${process.env.VUE_APP_API}/pay/${this.orderId}`
      this.axios.post(api).then(response => {
        console.log('完成付款')
        this.$router.push('/order/order_end')
        this.$emit('timelineStatus', 4)
        this.getOrder()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.checkout {
  min-height: 500px;
  max-width: 1200px;
  margin: auto;
  margin-top: 80px;
  padding: 20px;
  .wrap-btn {
    width: 100%;
    .btn {
      margin-top: 30px;
      margin-right: 20px;
      float: right;
    }
  }
  .order-success {
    color: color(secondary);
  }
  table {
    border-collapse: collapse;
    width: 100%;
    tr {
      border-bottom: 1px solid color(dark, 2);
    }
    .total td {
      text-align: right;
      color: color(warning);
    }
    td,
    th {
      height: 50px;
      text-align: left;
    }
  }
}
</style>
