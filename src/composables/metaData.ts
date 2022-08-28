import { reactive, ref } from 'vue'
export const metaData = reactive({
  props: {},
  attrs: {}
})

// 用于注册proxy容器位置，便于将跨路由组件正确定位
export const proxyEl = ref<HTMLElement | null>(null)