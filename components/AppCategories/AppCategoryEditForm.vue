<template>
  <div class="page-edit">
    <div class="page-edit__block">
      <form class="category-form">
        values - {{ values }}<br>
        initialValues.title - {{ initialValues.title }}<br>
        currentCategory.title - {{ currentCategory.title }}
        <div class="category-form__row">
          <Input
            type="text"
            label="Название"
            placeholder="Пример: Бакалея"
            :name="currentCategory.title"
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
      <div class="page-edit__aside-list page-edit__aside-list--column">
        <div 
          v-for="(subCategory, index) in currentCategory.subCategory"
          :key="index"
        >
          <AppTag 
            :number="index+1"
            :item="subCategory"
            :link="isLink"
            mode="full"
            type="active"
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

  const { isLoading, showMessage, showError , toggleLoading } = useStore();

  const isLink = ref(false)

  const props = defineProps({
    idPage: {
      type: Number,
      required: true
    },
  })

  const storeCaterogies = useProductsStore()
  const { fetchCurrentCategory } = storeCaterogies
  const { currentCategory } = storeToRefs(storeCaterogies)

  const initialValues = ref ({
    title: currentCategory.title,
  })

  const { values, errors } =  useForm({
    initialValues,
    validationSchema: yup.object({
      title: yup.string().required('Поле «Назваие» обязательно для заполнения').max(100),
    }),
  });

  await fetchCurrentCategory(props.idPage)
</script>
  
<style lang="less" scoped>
  @import '../assets/styles/main';
</style>
    