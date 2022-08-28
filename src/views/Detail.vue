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

      <p>Three hundred and forty-eight years, six months, and nineteen days ago to-day, the parisians awoke to the sound of all the bells in the triple circuit of the city, the university, and the town ringing a full peal.

The sixth of January, 1482, is not, however, a day of which history has preserved the memory.There was nothing notable in the event which thus set the bells and the bourgeois of paris in a ferment from early morning.It was neither an assault by the picards nor the Burgundians, nor a hunt led along in procession, nor a revolt of scholars in the town of Laas, nor an entry of "our much dread lord, monsieur the king," nor even a pretty hanging of male and female thieves by the courts of paris.Neither was it the arrival, so frequent in the fifteenth century, of some plumed and bedizened embassy. It was barely two days since the last cavalcade of that nature, that of the Flemish ambassadors charged with concluding the marriage between the dauphin and Marguerite of Flanders, had made its entry into paris, to the great annoyance of M. le Cardinal de Bourbon, who, for the sake of pleasing the king, had been obliged to assume an amiable mien towards this whole rustic rabble of Flemish burgomasters, and to regale them at his H?tel de Bourbon, with a very "pretty morality, allegorical satire, and farce," while a driving rain drenched the magnificent tapestries at his door.</p>
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
    display: flex;
    color: #fff;
    margin: 20px;
    p {
      display: inline-flex;
      flex: 1;
    }
  }
}
</style>

