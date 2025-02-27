<template>
  <div class="root">
    <div 
      class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button
          v-if="isBackButtonVisible"
          type="primary" :icon="Back" circle 
          class="back"
        />
        <el-button 
          class="btn"
          @click="goForCocktailRandom"
        >
          Get random cocktail</el-button>
      </div>
      <slot />
    </div>
  </div> 
</template>

<script setup>
  import {computed} from 'vue'
  import { ROUTES_PATHS } from '../constans'
  import { Back } from '@element-plus/icons-vue'
  import { useRoute, useRouter } from 'vue-router'
  const props = defineProps({
    title: {
      type: String,
      required: true
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

  .root {
    display: flex;
    width: 100vw;
    height: 100vh;
  }

  .img {
    width: 50%;
    background-size: cover;

  }

  .btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 32px;
    right: 40px;
    left: 40px;
  }

  .main {
    position: relative;
    width: 50%;
    padding: 32px 40px;
  }

  .btn {
    background-color: #000;
    border-color: #000;
    color: #000;
  }

  .back.el-button.is-circle {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: transparent;
  }
  
</style>
