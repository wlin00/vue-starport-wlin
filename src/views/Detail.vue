<template>
  <div class="detail">
    <Topnav />
    <div class="detail__title">Detail Page</div>
    <div>
      <Button class="detail__routerBtn" size="big">
        <router-link to="/">Back</router-link>
      </Button>
    </div>
    
    <div class="detail__proxyWrap">
      <Proxy :style="computeStyle"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/TopNav.vue'
  import Button from '../components/Button.vue'
  import Proxy from '../components/Proxy.vue'
  import { ref, computed } from 'vue'
  import { useStorage } from '@vueuse/core'

  export default {
    components: {
      Topnav,
      Button,
      Proxy,
    },
    setup(props) {
      const size = ref<any>(useStorage('size',300))
      const computeStyle = computed(() => {
        return {
          width: `${size.value ?? 0}px`,
          height: `${size.value ?? 0}px`,
          borderRadius: `50%`,
        }
      })
      return {
        size,
        computeStyle,
      }
    }
  }

</script>

<style lang="scss" scoped>
.detail {
  &__routerBtn {
    background: #5e9889;
    box-sizing: border-box;
    border: 1px solid #5e9889;
    padding: 0;
    a{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 0 16px;
      color: #fff;
      width: 100%;
      height: 100%;
      text-decoration: none;
      user-select: none;
      &:active {
        color: #fff;
      }
    }
  }
  &__title {
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    margin: 20px;
  }
  &__proxyWrap {
    display: inline-flex;
    margin: 20px;
  }
}
</style>

