<template>
  <AppLayout>
    <AppHeading
      :title="title"  
      description="Категории товаров"
    >
      <template #action>
        <button class="btn btn--primary" to="/categories/new">
          Удалить категорию
        </button>
      </template>
    </AppHeading>
    <template #inner>
     <AppCategoryEditForm 
      :idPage="idPage"
      />
    </template>
  </AppLayout>
</template>
  
<script setup>
  import AppLayout from '../../layout/AppLayout.vue'
  import AppHeading from '../components/AppELement/AppHeading.vue'
  import AppCategoryEditForm from '../components/AppCategories/AppCategoryEditForm.vue'

  const title="Ркдактировать категорию"

  const route = useRoute()
  const idPage = Number(route.params.id)
</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main';


</style>
  