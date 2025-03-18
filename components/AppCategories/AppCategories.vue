<template>
  <div class="table">
    <div class="table__head">
      <div class="table__id">
        Id
      </div>
      <div class="table__td table__td--banner">
        Изображение
      </div>
      <div class="table__td">
        Название
      </div>
      <div class="table__td">
        Количество подкатегорий
      </div>
    </div>
    <div class="table__body">
      <div class="table__section"
        v-for="category in categories"
        :key="category.id"
      >
        <AppCategoriesItem 
          :category=category
        />
      </div>
    </div>
  </div>
</template>

<script setup >
  import AppCategoriesItem from '../components/AppCategories/AppCategoriesItem.vue';
  
  const props = defineProps({
    categories: {
      type: Object,
      required: true
    },
  })
</script>

<style lang="less">
  @import '../assets/styles/main';
</style>
