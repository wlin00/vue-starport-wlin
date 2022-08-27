<template>
  <div class="detail">
    <Topnav />
    <div class="detail__title">Detail Page</div>
    <div>
      <Button class="detail__routerBtn" size="big">
        <router-link to="/">Back</router-link>
      </Button>
    </div>
    <Proxy style="width:400px;height:400px;border-radius:50%;margin: 50px 0 50px 350px;" />
  </div>
</template>

<script lang="ts">
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
.detail {
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

