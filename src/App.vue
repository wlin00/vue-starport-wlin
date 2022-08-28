<template>
  <main class="main">
    <router-view></router-view>
  </main>
  <ImageContainer v-slot="props">
    <!-- 作用域插槽：将全局状态同步给图片 -->
    <TheImage v-bind="props" /> 
  </ImageContainer>
</template>

<script lang="ts">
import ImageContainer from './components/ImageContainer.vue'
import TheImage from './components/TheImage.vue'

export default {
  name: 'App',
  components: {
    ImageContainer,
    TheImage,
  },
  setup(props) {
  }
}
</script>
<style lang="css" scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.main {
  display: flex;
  flex-direction: column;
}
  
</style>
