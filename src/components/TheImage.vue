<template>
  <div class="theImage"  @click="toggleFlag=!toggleFlag">
   <img
      v-if="!toggleFlag" 
      src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1657299156791-44140a28a518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" 
      alt=""
    />
    <img
      v-else
      src="https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1661539238083-b13e014b0bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2651&q=80" 
      alt=""
    />
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
export default {
  setup (props, context) {
    const toggleFlag = ref(false)

    onMounted(() => {
    })
    return {
      toggleFlag,

    }
  }
}
</script>

<style lang="scss" scoped>
.theImage {
  overflow: hidden;
  display: inline-flex;
  transition: all .2s linear;
  img {
    display: inline-flex;
    width: 100%;
    height: 100%;
  }
}
</style>