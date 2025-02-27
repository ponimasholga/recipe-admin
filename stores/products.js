import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useProductsStore = defineStore('countries', () => {

  const categories = ref(null)
  const currentCategory = ref(null)

  const fetchCategories = async () => {
    try {
      const data = await $fetch('/api/product/categories', {
        method: 'GET',
      })

      if (data) {
        categories.value = data
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  const fetchCurrentCategory = async (code) => {
    const data = await $fetch(`/api/product/get-category-by-id/${Number(code)}`, {
      method: 'GET',
    })
    
    if (data) {
      currentCategory.value = data
    }
  }


  return {
    categories,
    fetchCategories,
    currentCategory,
    fetchCurrentCategory,
  }
})