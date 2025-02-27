<template>
  <AppLayout>
    <div>
      <AppHeading
        title="Добавить новую категорию"  
        description=""
      >
      </AppHeading>
      <AppCategoryForm />
    </div>
  </AppLayout>
</template>
  
<script setup>
  import AppLayout from '../layout/AppLayout.vue';
  import AppHeading from '../components/AppELement/AppHeading.vue'
  import AppCategoryForm from '../components/AppCategories/AppCategoryForm.vue'
  
</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main';
</style>
    