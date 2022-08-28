<template>
  <div ref="proxyRef" style="background: gray;" :style="context.attrs.style">
    <slot/>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { metaData, proxyEl } from '../composables/metaData'
export default {
  inheritAttrs: false,
  setup (props, context) {
    // 每个Proxy代理组件：需要将当前组件状态同步给全局的metaData，来控制跨路由组件
    metaData.props = props
    metaData.attrs = context.attrs
    // 每次注册proxy容器的位置，同步给proxyEl
    const proxyRef = ref(null)
    // 注册proxy容器位置到全局变量
    onMounted(() => {
      proxyEl.value = proxyRef.value
    })
    
    return {
      proxyRef,
      context
    }
  }
}
</script>

<style lang="scss" scoped>

</style>