<template>
  <div class="page-edit">
    <div class="page-edit__block">
      <form class="category-form">
       
        <div class="category-form__row">
          <Input
            type="text"
            label="Название"
            placeholder="Пример: Бакалея"
            name="title"
            class="category-form__input"
          />
        </div>
        <div class="category-form__add">
          <div class="category-form-list">

          </div>
         
        </div>
        <div class="btn btn--primary" @click="onSubmit">
          Сохранить
        </div>
      </form>
    </div>
    <div class="page-edit__aside">
      <h2>Подкатегории</h2>
      <div class="page-edit__aside-list page-edit__aside-list--column">
          
      </div>
      <div class="btn btn--primary btn--small" @click="addSubCategory">
        Добавить подкатегорию
      </div>
    </div>

    <AppToast
      v-if="errorApi"
      title="Ошибка"
      :message="errorApi.message"
    />
  </div>
</template>
    
<script setup>
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
  import Input from '../components/AppForm//Input.vue';
  import AppToast from '../components/AppELement/AppToast.vue';

  const { isLoading, showMessage, showError , toggleLoading, isError } = useStore();
  const errorApi = ref();

  const { values, errors , handleSubmit} =  useForm({
    validationSchema: yup.object({
      title: yup.string().required('Поле «Название» обязательно для заполнения').max(1000000),
    }),
  });

  // const addSubCategory = () => {
    //recipeIgredients.value.push(CommonService.getEmptyIngredient())
  //}

  async function onSubmit() {
    console.log('Click !!!!!!!!!!!', values)

    try {
      toggleLoading(true)

      await $fetch('/api/product/category', {
        method: 'POST',
        body: {
          title: values.title,
        }
      })

      //navigateTo('/categories')

    } catch (error) {
      errorApi.value = handleError(error)
    } finally {
      toggleLoading(false)
    }
  }

</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main';
  
  .category-form {
    &__add {
      margin-bottom: 20px;
    }
  }
</style>
    