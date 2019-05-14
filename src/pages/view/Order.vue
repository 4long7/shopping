<template>
  <div class="order">
    <Timeline :isStatus="timeline"></Timeline>
    <router-view @timelineStatus="timelineHandler"></router-view>
  </div>
</template>
<script>
import Timeline from '@/components/Timeline'
export default {
  name: 'order',
  data () {
    return {
      timeline: 1
    }
  },
  methods: {
    timelineHandler (num) {
      this.timeline = num
    }
  },
  components: {
    Timeline
  }
}
</script>
<style lang="scss" scoped>
.order {
  margin-top: 70px;
}
</style>
