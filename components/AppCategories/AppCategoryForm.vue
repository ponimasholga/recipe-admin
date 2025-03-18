<template>
  <div class="page-edit">
    <div class="page-edit__block">

      <form @submit.prevent="onSubmit" class="category-form">
        <div class="category-form__row">
          <AppInput
            type="text"
            label="Название"
            placeholder="Пример: Бакалея"
            name="title"
            class="category-form__input"
            :disabled="isLoading"
          />
        </div>
        <div class="category-form__add">
        </div>
        <AppButton 
          text="Сохранить"
          :disabled="isLoading"
          type="submit"
          class="btn btn--primary"
        />
      </form>
    </div>
    <div class="page-edit__aside">
      <h2>Подкатегории</h2>
      <div class="page-edit__aside-list page-edit__aside-list--column">
          <div class="category-form__list" v-if="currentCategory.subCategory.length">
            <div 
              v-for="(subCategory, index) in currentCategory.subCategory"
              :key="index"
            >
              <input type="text" v-model="subCategory.item">
            </div>
          </div>
          <div v-else class="category-form__info">
            В текущий момент не добавлено под категорий
          </div>
      </div>
      <AppButton 
          text="Добавить подкатегорию"
          :disabled="isLoading"
          type="submit"
          class="btn btn--primary category-form__btn"
          @click="addSubCategory"
        />
    </div>
    <!-- <AppToast
      v-if="errorApi"
      title="Ошибка"
      :message="errorApi.message"
    /> -->

    <AppToaster />
  </div>
</template>
    
<script setup>
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
  import AppInput from '../components/AppForm/AppFormElement/AppInput.vue';
  import AppToaster from '../components/AppELement/AppToaster.vue';
  import AppButton from '../components/AppELement/AppButton.vue';
  import { useProductsStore }  from '../stores/products';
  import { useToastStore } from "@/stores/toast";

  const toastStore = useToastStore();

  const route = useRoute()
  const idPage = Number(route.params.id)
  const isEdit = ref(true)
  const errorApi = ref()

  /*Получение данных по категории*/
  const storeCaterogies = useProductsStore()
  const { fetchCurrentCategory } = storeCaterogies
  const { currentCategory } = storeToRefs(storeCaterogies)

  await fetchCurrentCategory(idPage)


  const { isLoading, showMessage, showError , toggleLoading, isError } = useStore();

  /*Валидация формы*/
  const form = useForm({
    validationSchema: yup.object({
      title: yup.string().required('Поле «Название» обязательно для заполнения').max(1000000),
    }),
    initialValues:currentCategory.value || {
      name: ''
    }
  })

  //const { values, errors , handleSubmit} =  useForm({
    //validationSchema: yup.object({
      //title: yup.string().required('Поле «Название» обязательно для заполнения').max(1000000),
    //}),
  //});

   const addSubCategory = () => {
    //recipeIgredients.value.push(CommonService.getEmptyIngredient())
  }

  /*Отправка формы*/
  const onSubmit = form.handleSubmit(async (values) => {

    if (isEdit.value) {
      console.log('Редактирование категории', values)

      try {
        console.log('currentCategory.value.id', currentCategory.value.id)
        toggleLoading(true)

        await $fetch('/api/category/category', {
          method: 'PUT',
          body: {
            id: currentCategory.value.id,
            title: values.title
          }
        })

      } catch (error) {
        errorApi.value = handleError(error)
        console.log(handleError(errorApi))
      } finally {
        toastStore.success({ text: "Данные успешно сохранены" });
        toggleLoading(false)
      }

    } else {
      try {
        console.log('Добавление категории', values)

        await $fetch('/api/product/category', {
          method: 'POST',
          body: {
            title: values.title,
          }
        }) 
        
      } catch (error) {
        errorApi.value = handleError(error)
        console.log(handleError(errorApi))
        toastStore.success({ text: "Такая категория существует" });
      } finally {
        toggleLoading(false)
      }
    } 
  })


  

  async function onSubmit2() {
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
  
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .category-form {
    &__add {
      margin-bottom: 20px;
    }

    &__info {
      font-weight: bold;
      font-size: 17px;
    }

    &__btn {
      margin: 20px 0 0;
    }
  }
</style>
    