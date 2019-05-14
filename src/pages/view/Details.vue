<template>
  <div class="contarner">
    <div class="banner" :style="`background:url(${product.imageUrl}) center/cover no-repeat`">
      <div class="content">
        <span>{{product.title}}</span>
      </div>
    </div>
    <div class="details">
      <div class="detail-img">
        <img src="@/assets/image/product-4.jpeg" alt>
        <img src="@/assets/image/product-3.jpeg" alt>
        <img src="@/assets/image/product-2.jpeg" alt>
      </div>
      <div class="details-content">
        <div class="details-detail">
          <h2>详情</h2>
          <p>{{product.description}}</p>
        </div>
        <div class="details-info">
          <h2>信息</h2>
          <ul>
            <li v-if="product.price">原价: {{product.price}}</li>
            <li>现价: {{product.origin_price}}</li>
            <li>是否可以定： {{product.is_enabled ? '可以' :"不行"}}</li>
            <li>类别:{{product.category}}</li>
            <li>数量:{{product.num}} {{product.unit}}</li>
            <li>
              <label for>要几套</label>
              <select v-model="itemNum">
                <option value disabled>请选择</option>
                <option :value="item" v-for="item in 8" :key="item">{{item}}</option>
              </select>
            </li>
            <li>
              <btnLoading :product="{id:product.id,qty:itemNum}">
                添加购物车
                <i class="fas fa-cart-plus"></i>
              </btnLoading>
            </li>
          </ul>
        </div>
        <div class="details-extras">
          <h2>其他</h2>
          <div>{{product.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import btnLoading from '@/components/btnLoading'
export default {
  name: 'detail',
  data () {
    return {
      itemNum: ''
    }
  },
  mounted () {
    this.$store.dispatch('getProduct', this.$route.params.id)
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  components: {
    btnLoading
  }
}
</script>
<style lang="scss" scoped>
.contarner {
  .banner {
    @include wh(100%, 350px);
    background: url("../../assets/image/home.jpeg") center/cover no-repeat;
    white-space: nowrap;
    overflow: hidden;
    @include before {
      display: inline-block;
      height: 100%;
      width: 0px;
      background-color: #000;
      vertical-align: middle;
    }
    .content {
      @include wh(500px, 150px);
      display: inline-block;
      line-height: 150px;
      letter-spacing: fun(spacing);
      font-size: 1.5rem;
      color: color(light);
      background: rgba(color(dark), 0.5);
    }
  }
  .details {
    max-width: 1100px;
    margin: auto;
    margin-top: 30px;
    .detail-img {
      overflow: hidden;
      @include card($num: 3);
      img {
        @include col(8);
      }
    }
    .details-content {
      display: flex;
      flex-wrap: wrap;
      text-align: left;
      .details-detail {
        @include col(12, 3);
      }
      .details-info {
        @include col(12, 3);
        font-weight: 900;
        ul {
          li:first-child {
            text-decoration: line-through;
          }
          li {
            margin-top: 1rem;
          }
        }
      }
      .details-extras {
        @include col(24, 3);
      }
    }
  }
}
</style>
