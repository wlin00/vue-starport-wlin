<template>
  <div :style="computeStyle" class="ImageContainer">
    <slot v-bind="metaData.attrs"/>
  </div>
</template>

<script lang="ts">
import { computed, reactive, ref, StyleValue, watch } from 'vue'
import { metaData, proxyEl } from '../composables/metaData'
import { useElementBounding } from '@vueuse/core'
export default {
  setup () {
    // 创建一个proxyElStyle变量用于记录proxy容器的所在位置
    // const proxyElStyle = ref<DOMRect | null>()
    // 通过watch侦听proxyEl容器的位置改变，同步给当前位置变量，用于给当前图片容器正确定位
    // watch(proxyEl, (el) => {
    //   proxyElStyle.value = el.getBoundingClientRect()
    // })

    // 改良：解决watch无法侦听到proxy容器的动态改变
    // 用vue/use - getElementBounding获取到proxy容器可能动态改变的位置
    // 在赋予给一个响应式变量，以便于计算出一个当前图片容器的宽、高、位置
    const rect = reactive(useElementBounding(proxyEl))
    const computeStyle = computed((): StyleValue => {
      return {
        left: `${rect?.left ?? 0}px`,
        top: `${rect?.top ?? 0}px`,
        width: `${rect?.width ?? 0}px`,
        height: `${rect?.height ?? 0}px`,
        transition: `all .3s linear`
      }
    })

    return {
      metaData,
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