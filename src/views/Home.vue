<template>
  <div class="home">
    <Topnav />
    <div class="home__title">Home Page</div>
    <div>
      <Button class="home__routerBtn"  size="big">
        <router-link to="/detail">Go</router-link>
      </Button>
    </div>
    <Proxy style="width:300px;height:300px;margin: 50px 0 50px 50px;" />
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
    a{
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
}

</style>