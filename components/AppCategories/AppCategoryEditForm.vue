<template>
  <div class="page-edit">
    <div class="page-edit__block">
      <form class="category-form">
        values - {{values }}
        currentCategory - {{ currentCategory }}

        initialValues - {{ initialValues }}
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
    <div class="page-edit__aside">
      <h2>Подкатегории</h2>
      {{ currentCategory.subCategory }}
      <div class="page-edit__aside-list page-edit__aside-list--column">
        <div 
          v-for="(subCategory, index) in currentCategory.subCategory"
          :key="index"
        >
        {{ subCategory }}
        <AppTag 
            :number="index+1"
            :item="subCategory"
            type="full"
          />
        </div>  
      </div>
    </div>
  </div>     
</template>
    
<script setup>
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
  import Input from '../components/AppForm//Input.vue'
  import AppTag from '../../components/AppELement/AppTag.vue';
  import { useProductsStore }  from '../stores/products';

  const props = defineProps({
    idPage: {
      type: Number,
      required: true
    },
  })

  const store = useProductsStore()
  const { fetchCurrentCategory } = store
  const { currentCategory } = storeToRefs(store)

  const initialValues = ref ({
    name: currentCategory.value.name,
  })

  const { values, errors } =  useForm({
    initialValues,
    validationSchema: yup.object({
      name: yup.string().required('Поле «Назваие» обязательно для заполнения').max(100),
    }),
  });

  await fetchCurrentCategory(props.idPage)
</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main';
</style>
    