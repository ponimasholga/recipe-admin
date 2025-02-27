<template>
  <AppLayout>
    <template #title>
      Кухни стран
    </template>
    <template #controls>
      <nuxt-link  class="btn btn--default" to="/articles/new-articles">Добавить страну (кухню)</nuxt-link>
    </template>
    <template #inner>
      <AppCountries />
    </template>
  </AppLayout>
</template>
    
<script setup>
  import AppLayout from '../../layout/AppLayout.vue';
  import AppButton from '../../components/AppButton.vue';
  import AppCountries from '../../components/AppCountry/AppCountries.vue';
  
</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main'; 
</style>
  