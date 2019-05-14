<template>
  <div class="container">
    <div class="create-title">
      <h3 v-if="product.id">修改产品</h3>
      <h3 v-else>创建产品</h3>
    </div>
    <div class="create-body">
      <form class="create-from">
        <ul class="form-left">
          <li>
            <label>输入图片网址</label>
            <input type="text" v-model="product.imageUrl">
          </li>
          <li>
            <label for="file">或 上传图片</label>
            <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
            <input type="file" ref="files" @change="uploadFile()">
          </li>
        </ul>
        <ul class="form-right">
          <li>
            <label>标题</label>
            <input type="text" placeholder="标题" v-model="product.title">
          </li>
          <li class="sort">
            <div>
              <label>分类</label>
              <input type="text" placeholder="分类" v-model="product.category">
            </div>
            <div>
              <label>单位</label>
              <input type="text" placeholder="单位" v-model="product.unit">
            </div>
          </li>
          <li class="price">
            <div>
              <label>原价</label>
              <input type="text" placeholder="原价" v-model="product.origin_price">
            </div>
            <div>
              <label>售价</label>
              <input type="text" placeholder="售价" v-model="product.price">
            </div>
          </li>
          <li>
            <label>产品描述</label>
            <textarea placeholder="产品描述" v-model="product.description"></textarea>
          </li>
          <li>
            <label>说明内容</label>
            <textarea placeholder="说明内容" v-model="product.content"></textarea>
          </li>
          <li>
            <div class="checkbox-input">
              <input type="checkbox" id="couponCheck" v-model="product.is_enabled">
              <label for="couponCheck">是否启用</label>
            </div>
          </li>
        </ul>
      </form>
    </div>
    <div class="form-btn">
      <button class="btn" @click="$emit('isDisplay', false)">取消</button>
      <button class="btn" @click="updateHandler()" :disabled="status.isDisplay">
        <i class="fas fa-spinner fa-spin" v-if="status.isDisplay"></i>
        确认
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'createProduct',
  data () {
    return {
      status: {
        isDisplay: false,
        fileUploading: false
      }
    }
  },
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    product () {
      return this.item
    }
  },
  methods: {
    updateHandler () {
      let method = 'post'
      if (this.item.id) { method = 'put' }
      this.$store.dispatch('updateProduct', { method, item: this.item, fun: this.promptHandler, status: this.status })
      this.status.isDisplay = true
    },
    promptHandler (message) {
      this.$bus.$emit('message', message, 'warning')
      this.$emit('isDisplay', false)
    },
    uploadFile () {
      console.log(this.$refs)
      this.status.fileUploading = true
      const uploadedFile = this.$refs.files.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const url = `${process.env.VUE_APP_LOC}/api/${process.env.VUE_APP_API}/admin/upload`
      this.axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/for-data'
        }
      }).then(response => {
        if (response.data.success) {
          //   this.tempProduct.imageUrl = response.data.imageUrl
          this.$set(this.product, 'imageUrl', response.data.imageUrl)
          this.status.fileUploading = false
        } else {
          this.$bus.$emit('message', response.data.message, 'warning')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 800px;
  @include mediaWidth;
  .form-btn {
    text-align: right;
    .btn {
      margin: 5px;
    }
  }
  .create-title {
    background-color: colorA(secondary);
    h3 {
      margin: 0;
      line-height: 3rem;
    }
  }
  .create-body {
    .create-from {
      display: flex;
      text-align: left;
      width: 100%;
      ul {
        li {
          margin-bottom: 10px;
          label {
            display: block;
            margin-bottom: 10px;
          }
          input {
            width: 100%;
          }
        }
      }
      .form-left {
        @include col(8, 3);
      }
      .form-right {
        @include col(16, 3);
        .sort,
        .price {
          display: flex;
          div {
            @include col(12, 3);
          }
        }
        .checkbox-input {
          text-align: left;
          input {
            display: inline-block;
            width: 20px;
          }
          label {
            display: inline-block;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
