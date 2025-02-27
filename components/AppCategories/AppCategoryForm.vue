<template>
  <div>
    <form class="category-form">
      values - {{values }}
      <div class="category-form__row">
        <Input
          type="text"
          label="Название"
          placeholder="Пример: Бакалея"
          name="name"
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
      text: yup.string().required('Поле «Логин» обязательно для заполнения').max(1000000),
      email: yup.string().required('Поле «E-mail» обязательно для заполнения').email('Поле «E-mail» должно быть действительным электронным адресом').max(100),
      password: yup.string().required('Поле «Пароль» обязательно для заполнения').min(6, 'Поле «Пароль» должно быть не менее 6 символов'),
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
        name: values.name,
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
    