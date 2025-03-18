<template>
  <AppLayout>
    <AppHeading
      :title="titlePage"  
      description="Управление категориями"
    >
    <template #action>
      <nuxt-link class="btn btn--primary" to="/categories/new">
        Добавить категорию
      </nuxt-link>
    </template>
    </AppHeading>
    <template #inner>
      <AppCategories 
        :categories="categories"
      />
    </template>  
  </AppLayout>
</template>

<script setup>
  import AppLayout from '../layout/AppLayout.vue';
  import AppHeading from '../components/AppELement/AppHeading.vue'
  import AppCategories from '../components/AppCategories/AppCategories.vue'
  import { useProductsStore }  from '../stores/products';


  const store = useProductsStore()
  const { fetchCategories } = store
  const { categories } = storeToRefs(store)

  const titlePage = computed(() => {
    return `Категории (${categories.value.length})`
  })

  await fetchCategories()
</script>

<style lang="less" scoped>
  @import '../assets/styles/main';
</style>
