<template>
  <div class="detail">
    <Topnav />
    <div class="detail__title">Detail Page</div>
    <div>
      <Button class="detail__routerBtn" size="big">
        <router-link to="/">Back</router-link>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Topnav from '../components/TopNav.vue'
  import Button from '../components/Button.vue'

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

