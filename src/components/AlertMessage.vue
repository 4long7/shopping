<template>
  <div class="alert-message" :class="{'is-alert':messages.length}">
    <div class="alert" :class="item.status" v-for="(item,i) in messages" :key="i">
      {{item.message}}
      <button @click="removeMessage(i)" class="btn">×</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'alertMessage',
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
    this.$bus.$on('message', (message, status = '') => {
      this.updateMessage(message, status)
      // vm.$bus.$emit('message:push')
    })
  },
  methods: {
    updateMessage (message, status) {
      const timestamp = Math.floor(new Date() / 1000)
      this.messages.push({
        message,
        status,
        timestamp
      })
      this.removeMessageWithTiming(timestamp)
    },
    removeMessage (num) {
      this.messages.splice(num, 1)
    },
    removeMessageWithTiming (timestamp) {
      setTimeout(() => {
        this.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            this.messages.splice(i, 1)
          }
        })
      }, 5000)
    }
  }
}
</script>
<style lang="scss" scoped>
.alert-message {
  position: fixed;
  width: 0;
  opacity: 0;
  overflow: hidden;
  z-index: -100;
  .alert {
    width: 200px;
    height: 50px;
    z-index: 100;
    margin: auto;
    color: color(light);
  }
  .btn {
    background: transparent;
    font-size: 1.5rem;
    color: color(secondary);
  }
  .warning {
    background-color: rgba(color(warning, 2), 0.7);
  }
  .close {
    width: 40px;
  }
}

.is-alert {
  width: 300px;
  z-index: 100;
  opacity: 1;
}
</style>
