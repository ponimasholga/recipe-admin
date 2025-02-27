<template>
    <AppLayout>
      <template #title>
        Новый статья
      </template>
      <template #inner>
        <AppArticleCreate />
      </template>
    </AppLayout>
  </template>
    
  <script setup>
    import { ref, onMounted } from 'vue'
    import AppLayout from '../../layout/AppLayout.vue';
    import AppButton from '../../components/AppButton.vue';
    import AppArticleCreate from '../../components/AppArticleCreate.vue';
    import { useRootStore }  from '../../stores/root';
    import { storeToRefs } from 'pinia'
    
  </script>
    
  <style lang="less" scoped>
    @import '../assets/styles/main'; 
  </style>
    