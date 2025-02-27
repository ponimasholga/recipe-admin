import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {

  const users = ref({})

  const fetchUsers = async () => {
    const data = await $fetch('/api/users/users', {
      method: 'GET',
    })

    console.log('data ============= ', data)

    if (data) {
      users.value = data
    }

    console.log('usersFecth ========', users.value)
  }

  return {
    users,
    fetchUsers,
  }
})