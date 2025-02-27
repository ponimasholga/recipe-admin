<template>
  <div class="layout">
    <AppMenu class="layout__aside"/>
    <main class="main">
      <header class="header">
        <slot></slot>
      </header>
      <div class="main__inner">
        <slot name="inner"></slot>
      </div>
      
    </main>
  </div> 
</template>
  
<script setup>
import {computed} from 'vue'
import AppMenu from '../components/AppMenu/AppMenu.vue';
import { ROUTES_PATHS } from '../constans'
import { useRoute, useRouter } from 'vue-router'
const props = defineProps({
  title: {
    type: String,
    required: false
  },
  isBackButtonVisible: {
    type: Boolean,
    default: true,   
  },
})

const route = useRoute()
const router = useRouter()
const routeName = computed (() => route.name)

function goForCocktailRandom() {
  router.push(ROUTES_PATHS.COCKTAIL_RANDOM)

  if (routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
    router.go()
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/styles/main';

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
</style>
