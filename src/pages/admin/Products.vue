<template>
  <div class="products">
    <div class="products-top">
      <button class="btn" @click="moduleProduct({})">建立新的产品</button>
    </div>
    <CreateAlert :isDisplay="isRemove" @isDisplay="isRemove= $event">
      <div class="remove-product">
        <h3>是否删除</h3>
        <div class="remove-body">您真的不需要这个产品了吗？ 考虑好在删除</div>
        <button class="btn" @click="isRemove = false">取消</button>
        <button class="btn" @click="deleteHandler()">删除</button>
      </div>
    </CreateAlert>
    <CreateAlert :isDisplay="isDisplay" @isDisplay="isDisplay= $event">
      <createProduct :item="item" @isDisplay="isDisplay= $event"></createProduct>
    </CreateAlert>
    <div class="products-body">
      <table>
        <thead>
          <!-- 产品 -->
          <tr>
            <th>分类</th>
            <th>产品名称</th>
            <th>原价</th>
            <th>售价</th>
            <th>是否可用</th>
            <th>编辑</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{item.category}}</td>
            <td>{{item.title}}</td>
            <td>{{item.origin_price | currency}}</td>
            <td>{{item.price | currency}}</td>
            <td>{{item.is_enabled}}</td>
            <td>
              <button class="btn" @click="removeDisplay(item)">
                <i class="fas fa-spinner fa-spin" v-if="status.isDisplay && status.isId ==item.id"></i>
                删除
              </button>
              <button class="btn" @click="moduleProduct(item)">编辑</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :pagination="pagination" @pageNum="pageNum"></Pagination>
  </div>
</template>
<script>
import CreateAlert from '@/components/CreateAlert'
import createProduct from '@/pages/admin/products/createProduct'
import Pagination from '@/components/pagination'
export default {
  name: 'Products',
  data () {
    return {
      isDisplay: false,
      isRemove: false,
      removeItem: {},
      status: {
        isDisplay: false,
        isId: ''
      },
      item: {}
    }
  },
  mounted () {
    this.$store.dispatch('getProducts', 1)
  },
  computed: {
    pagination () {
      return this.$store.state.pagination
    },
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    pageNum (page) {
      this.$store.dispatch('getProducts', page)
    },
    removeDisplay (item) {
      this.removeItem = item
      this.isRemove = true
    },
    deleteHandler () {
      let item = this.removeItem
      this.status.isDisplay = true
      this.status.isId = item.id
      this.$store.dispatch('updateProduct', { method: 'delete', item, status: this.status })
      this.isRemove = false
    },
    moduleProduct (item) {
      this.isDisplay = true
      this.item = Object.assign({}, item)
    }
  },
  components: {
    CreateAlert,
    createProduct,
    Pagination
  }
}
</script>
<style lang="scss" scoped>
.products {
  max-height: calc(100vh - 50px);
  .remove-product {
    h3 {
      background-color: colorA(warning);
      margin: 0;
      padding: 10px;
    }
    width: 600px;
    height: 200px;
    .remove-body {
      line-height: 100px;
    }
    .btn {
      margin-left: 20px;
    }
  }
  min-height: calc(100vh - 50px);
  width: 100%;
  .products-body {
    margin: 30px;
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
  }
  .products-top {
    width: 100%;
    margin-top: 10px;
    text-align: right;
    .btn {
      margin-right: 30px;
    }
  }
}
</style>
