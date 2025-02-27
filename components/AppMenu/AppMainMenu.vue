<template>
  <div class="main-menu">
    <nuxt-link class="main-menu__item">
      Рецепты
    </nuxt-link>
    <nuxt-link class="main-menu__item">
      Разделы<br> (тип блюда)
    </nuxt-link>
    <nuxt-link class="main-menu__item">
      Разделы (Время)
    </nuxt-link>
    <nuxt-link to="countries" class="main-menu__item">
      Страны
    </nuxt-link>
    <nuxt-link to="users" class="main-menu__item">
      Пользователи
    </nuxt-link>
    <nuxt-link to="articles" class="main-menu__item">
      Статьи
    </nuxt-link>
    <nuxt-link to="categories" class="main-menu__item">
      Категории
    </nuxt-link>
  </div>
</template>
  
    
<script setup>
  const props = defineProps({

  })
</script>
    
  <style lang="less" scoped>
    @import '../assets/styles/main';
  
    .main-menu {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 25px;

      &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 250px;
        height: 250px;
        font-size: 22px;
        font-weight: bold;
        border-radius: 20px;
        border: 1px solid @border;
        padding: 30px;
        border-radius: 20px;
        background-color: fade(@violet, 10);
        -webkit-box-shadow: 0px 0px 8px 0px rgba(220, 223, 230, 0.8);
        -moz-box-shadow: 0px 0px 8px 0px rgba(220, 223, 230, 0.8);
        box-shadow: 0px 0px 8px 0px rgba(220, 223, 230, 0.8);
      }
      
  
      &:hover {
        --button-hover-bg-color: fade(@violet, 70);
      }
    }
  
  </style>