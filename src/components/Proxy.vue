<template>
  <div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { metaData } from '../composables/metaData'
export default {
  inheritAttrs: false,
  setup (props, context) {
    // 每个Proxy代理组件：需要将当前组件状态同步给全局的metaData，来控制跨路由组件
    metaData.props = props
    metaData.attrs = context.attrs
    
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>