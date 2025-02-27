import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useTagsStore = defineStore('tags', () => {

  const tags = ref({})

  const fetchTags = async () => {
    const data = await $fetch('/api/tags/tag', {
      method: 'GET',
    })

    console.log('data ============= ', data)

    if (data) {
      tags.value = data
    }

    console.log('fetchTags ========', tags.value)
  }

  return {
    tags,
    fetchTags,
  }
})