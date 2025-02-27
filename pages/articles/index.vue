<template>
    <AppLayout>
      <template #title>
        Статьи
      </template>
      <template #controls>
        <nuxt-link  class="btn btn--default" to="/articles/new-articles">Добавить статью</nuxt-link>
      </template>
      <template #inner>
        <AppArticles />
      </template>
    </AppLayout>
  </template>
    
  <script setup>
    import { ref, onMounted } from 'vue'
    import AppLayout from '../../layout/AppLayout.vue';
    import AppButton from '../../components/AppButton.vue';
    import AppArticles from '../../components/AppArticles.vue';
    import { useRootStore }  from '../../stores/root';
    import { storeToRefs } from 'pinia'
    
  </script>
    
  <style lang="less" scoped>
    @import '../assets/styles/main'; 
  </style>
    