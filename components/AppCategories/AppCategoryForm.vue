<template>
  <div>
    <form class="category-form">
      values - {{values }}
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
        <div class="btn btn--primary btn--small" @click="addSubCategory">
          Добавить подкатегорию
        </div>
      </div>
      <div class="btn" @click="onSubmit">
        Сохранить
      </div>
    </form>
  </div>   
</template>
    
<script setup>
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
  import Input from '../components/AppForm//Input.vue'

  const { values, errors , handleSubmit} =  useForm({
    validationSchema: yup.object({
      title: yup.string().required('Поле «Название» обязательно для заполнения').max(1000000),
    }),
  });

  const addSubCategory = () => {
    recipeIgredients.value.push(CommonService.getEmptyIngredient())
  }

  async function onSubmit() {
    console.log('Click !!!!!!!!!!!', values)
    await $fetch('/api/product/category', {
      method: 'POST',
      body: {
        title: values.title,
      }
    })

    return false
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
    