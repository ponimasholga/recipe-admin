<template>
  <div class="menu">
    <div class="menu__logo">
      LOGO
    </div>
    <nav class="menu__list">

      <div class="menu__list-top">
        <nuxt-link class="menu__item" to="kitchen">
          <el-icon :size="24"><Food /></el-icon>
        </nuxt-link>
        <nuxt-link class="menu__item" to="users">
          <el-icon :size="24"><User /></el-icon>
        </nuxt-link>
      </div>

      <div class="menu__list-bottom">
        <nuxt-link class="menu__item" to="settings">
          <el-icon :size="24"><Tools /></el-icon>
        </nuxt-link>
        <div class="menu__item" @click="exit">
          <el-icon :size="24"><SwitchButton /></el-icon>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
  import { computed, onMounted } from 'vue'
  import { Food, Dish, User, Flag, Tools, SwitchButton } from '@element-plus/icons-vue'
  import { useRoute, useRouter } from 'vue-router'
  import {useAuthStore} from './stores/auth'

  const authStore = useAuthStore()
  const { logoutPinia } = authStore



  const props = defineProps({
    isBackButtonVisible: {
      type: Boolean,
      default: true,   
    },
  })

  const route = useRoute()
  const router = useRouter()

  function isPathActive(path) {
    return route.path === path
  }


  function exit() {
    logoutPinia()
  }

  function goForCocktailRandom() {
    router.push(ROUTES_PATHS.COCKTAIL_RANDOM)

    if (routeName.value === ROUTES_PATHS.COCKTAIL_RANDOM) {
      router.go()
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/styles/main';

  .menu {
    height: 100vh;
    border: 1px solid @border;
    width: 70px;
    flex: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 5;

    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: calc(100% - 64px)
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      color: @violet;
      height: 60px;
      width: 100%;

      &:hover {
        color: @pink;
      }

      &.active {
        color: @pink;
        background-color: rgb(235.9,245.3,255);
      }
    }

    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 64px;
      border-bottom: 1px solid @border;
    }

    &__nav {
      border: 0;
    }
  }
  
</style>
