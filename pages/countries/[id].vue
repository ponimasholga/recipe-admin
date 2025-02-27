<template>
  <AppLayout>
    <template #title>
    </template>
    <template #controls>
    </template>
    <template #inner>
      <AppCountryEdit 
        :id="idPage"
      />
    </template>
  </AppLayout>
</template>
    
<script setup>
  import AppLayout from '../../layout/AppLayout.vue';
  
  const route = useRoute()
  const idPage = Number(route.params.id)

</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main'; 
</style>
  