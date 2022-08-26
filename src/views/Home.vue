<template>
  <div>
    <div class="title"></div>
    <div>
      <router-link to="/list">to-list</router-link>
    </div>
    <div>
      <router-link to="/detail">to-detail</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  const a = ref({
    b: 2
  })
  console.log(a?.value?.b)

</script>

<style lang="scss" scoped>
.title {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid;
  background: #fff;
  height: 40px;
  &:hover {
    background: #fafafa;
  }
}

</style>