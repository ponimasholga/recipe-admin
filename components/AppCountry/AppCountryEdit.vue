<template>
  <div class="page-edit">
    <div class="page-edit__main">
      <div class="page-edit__block">
        <div class="page-edit__top">
          <AppBack />
          <h1 class="form__input">{{ currentCountry.title }}</h1>
        </div> 

        <input v-model="currentCountry.title" />
      
        <div class="page-edit__banner">
          <AppImageInput  
            label="Изменить изображение"
            :urlMedia=currentCountry.image
          />
        </div>
        <div class="page-edit__body">
          <textarea class="text-textarea page-edit__textarea"  v-model="currentCountry.text" />
        </div>
        <div class="page-edit__btn">
          <button class="btn btn--default" @click="Save">Сохранить</button>
        </div>
      </div>
      <div class="page-edit__aside">
        <h2>Рецепты</h2>
        <div class="page-edit__aside-list page-edit__aside-list--column">
          <div 
            v-for="(recipe, index) in currentCountry.recipes"
            :key="index"
          >
          <AppTag 
              :number="index+1"
              :item="recipe"
              type="full"
            />
          </div>  
        </div>  

      </div> 
    </div>
  </div>

</template>

<script setup>
  import { useCountriesStore } from './stores/countries'
  import AppBack from '../../components/AppBack.vue';
  import AppImageInput from '../../components/AppForm/AppFormElement/AppImageInput.vue';
  import AppTag from '../../components/AppELement/AppTag.vue';

  const props = defineProps({
    id: {
      type: Number,
      default: true, 
    },
  })

  const store = useCountriesStore()
  const { fetchCountryById } = store
  const { currentCountry } = storeToRefs(store)

  async function Save() {
    console.log('click')
    await $fetch('/api/countries/country', {
      method: 'PUT',
      body: {
        id: currentCountry.value.id,
        title: currentCountry.value.title,
        image: currentCountry.value.image,
        text: currentCountry.value.text,
      }
    })
  }

  await fetchCountryById(props.id)

</script>

<style lang="less" scoped>
  @import '../assets/styles/main';

</style>  