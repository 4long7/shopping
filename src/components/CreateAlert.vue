<template>
  <div class="create-alert" :class="{'is-display':isDisplay}">
    <transition name="fade">
      <div class="alert-main" v-show="isDisplay">
        <button @click=" $emit('isDisplay', !isDisplay)" class="alert-btn">
          <i class="fas fa-times"></i>
        </button>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'createAlert',
  data () {
    return {
    }
  },
  props: {
    isDisplay: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.create-alert {
  display: none;

  &.is-display {
    display: block;
  }
  @include before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(colorA(dark, 2), 0.5);
  }
  .alert-main {
    max-height: 90vh;
    overflow: auto;
    left: 50%;
    top: 10%;
    position: absolute;
    transform: translateX(-50%);
    background-color: colorA(light);
    border-radius: 5px;
    .alert-btn {
      position: absolute;
      right: 0;
      font-size: 1.5rem;
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
