<template>
  <AppLayout>
    <AppHeading
      :title="title"  
      description="Категории товаров"
    >
      <template #action>
        <AppButton
          text="Удалить категорию"
          class="btn btn--primary"
          @click="toggleAlertDialog(true)"
        />
      </template>
    </AppHeading>
    <template #inner>
      <AppCategoryForm/>
    </template>
    <AppAlertDialog 
      @on-corfirm="deleteCategory"
    />
  </AppLayout>
</template>
  
<script setup>
  import AppLayout from '../../layout/AppLayout.vue'
  import AppHeading from '../components/AppELement/AppHeading.vue'
  import AppButton from '../components/AppELement/AppButton.vue'
  import AppCategoryForm from '../components/AppCategories/AppCategoryForm.vue'
  import AppAlertDialog from '../components/AppELement/AppAlertDialog.vue';

  const title="Редактировать категорию"

  const route = useRoute()
  const idPage = Number(route.params.id)

  const { isLoading, toggleLoading, toggleAlertDialog } = useStore();

  /*Удаление категории*/
  const deleteCategory = async () => {    
    try {
      toggleLoading(true)
      console.log('Удаление категории под номером № ', idPage);

    } catch (error){

    } finally {
      toggleLoading(false)
    }
  }

</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main';
</style>
  