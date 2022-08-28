<template>
  <div class="home">
    <Topnav />
    <div class="home__title">Home Page</div>
    <div>
      <Button class="home__routerBtn"  size="big">
        <router-link to="/detail">Go</router-link>
      </Button>
    </div>
    <div class="home__proxyWrap">
      <Proxy style="width:300px;height:300px;"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { onMounted, ref } from "vue"
  import Topnav from '../components/TopNav.vue'
  import Button from '../components/Button.vue'
  import Proxy from '../components/Proxy.vue'

  export default {
    components: {
      Topnav,
      Button,
      Proxy,
    },
  }


</script>

<style lang="scss" scoped>
.home {
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
      width: 100%;
      height: 100%;
      padding: 0 16px;
      color: #fff;
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
    width: 100%;
    // justify-content: flex-start;
    // transform:translateX(100%)
  }
}

</style>