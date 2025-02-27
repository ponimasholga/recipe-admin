<template>
    <AppLayout>
      <template #title>
        Новый пользователь
      </template>
      <template #inner>
        <AppUserCreate />
      </template>
    </AppLayout>
  </template>
    
  <script setup>
    import { ref, onMounted } from 'vue'
    import AppLayout from '../../layout/AppLayout.vue';
    import AppButton from '../../components/AppButton.vue';
    import AppUser from '../../components/AppUser.vue';
    import { useRootStore }  from '../../stores/root';
    import { storeToRefs } from 'pinia'
    
  </script>
    
  <style lang="less" scoped>
    @import '../assets/styles/main'; 
  </style>
    