<template>
    <AppLayout>
      <template #title>
      </template>
      <template #controls>
      </template>
      <template #inner>
        <div class="wrap">
          <AppMainMenu/>
        </div>
      </template>
    </AppLayout>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { RecipeService } from '../services'
  import AppLayout from '../layout/AppLayout.vue';
  import AppMainMenu from '../components/AppMenu/AppMainMenu.vue';
  import { ROUTES_PATHS } from '../constans'
  
  import { useRootStore }  from '../stores/root';
  import { storeToRefs } from 'pinia'
  
  const recipes = ref()
  
  const fetchRecipes = async () => {
    try {
      recipes.value  = await RecipeService.getRecipesByLetter();
    } catch {
  
    }
  }
  
  const getPeciePath = (id) => {
    return `${ROUTES_PATHS.RECIPE.split(':')[0]}${id}` 
  }
  
  onMounted(fetchRecipes)
  
  </script>
  
  <style lang="less" scoped>
    @import '../assets/styles/main';
    
  
    .text {
      font-size: 16px;
      color: #000;
      width: 516px;
      margin-top: 50px;
    }
  
    .image {
      width: 70px;
      height: auto;
    }
      
    .select-wrapper {
      margin-top: 50px;
    }
  
    .img {
      margin: 60px auto 0;
    }
  
    .tag {
      margin: 2px 3px;
    }
  
    .cocktails {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 -30px 0;
      padding-top: 60px;
      overflow-x: auto;
      max-height: 650px;
    }
  
  </style>
  