<template>
  <div class="ImageContainer">
    <slot v-bind="metaData.attrs"/>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { metaData } from '../composables/metaData'
export default {
  setup () {
    return {
      metaData,
    }
  }
}
</script>

<style lang="scss" scoped>
.ImageContainer {
  display: flex;
}

</style>