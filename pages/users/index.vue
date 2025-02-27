<template>
  <AppLayout>
    <template #title>
      Пользователи
    </template>
    <template #controls>
      <nuxt-link to="/userы/new-user">Добавить пользователя</nuxt-link>>
    </template>
    <template #inner>
      <AppUser />
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
  