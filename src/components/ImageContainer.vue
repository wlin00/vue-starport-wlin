<template>
  <div :style="computeStyle" class="ImageContainer">
    <slot v-bind="metaData.attrs"/>
  </div>
</template>

<script lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { metaData, proxyEl } from '../composables/metaData'
export default {
  setup () {
    // 创建一个proxyElStyle变量用于记录proxy容器的所在位置
    const proxyElStyle = ref<DOMRect | null>()
    // 通过watch侦听proxyEl容器的位置改变，同步给当前位置变量，用于给当前图片容器正确定位
    watch(proxyEl, (el) => {
      proxyElStyle.value = el.getBoundingClientRect()
    })
    const computeStyle = computed(() => {
      return {
        left: `${proxyElStyle.value?.left ?? 0}px`,
        top: `${proxyElStyle.value?.top ?? 0}px`,
        width: `${proxyElStyle.value?.width ?? 0}px`,
        height: `${proxyElStyle.value?.height ?? 0}px`,
        transition: `all .3s linear`
      }
    })

    return {
      metaData,
      proxyElStyle,
      computeStyle,
    }
  }
}
</script>

<style lang="scss" scoped>
.ImageContainer {
  display: flex;
  position: fixed;
}

</style>