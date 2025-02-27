import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const adminInfo = ref({
    token: '',
    email: '',
    username: '',
    adminId: '',
    refreshToken: '',
    profileImage: ''
  })

  const authLoading = ref(true)

  const setToken = (newToken) => {
    adminInfo.value.token = newToken
  }

  const setAdmin = (newAdmin) => {
    adminInfo.value.adminId = newAdmin.id
    adminInfo.value.profileImage = newAdmin.profileImage
    adminInfo.value.email = newAdmin.email
    adminInfo.value.username = newAdmin.username

    console.log('newAdmin', newAdmin)
  }

  const setIsAuthLoading = (value) => {
    authLoading.value = value
  }

  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('/api/auth/refresh')
        setToken(data.access_token)

        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  const loginPinia = async ({username, password}) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('/api/auth/login', {
          method: 'POST',
          body: {
            username,
            password
          }
        })

        adminInfo.value.username = data.admin.username
        adminInfo.value.email = data.admin.email
        adminInfo.value.profileImage  = data.admin.profileImage

        setToken(data.access_token)
        setAdmin(data.admin)

        resolve()

      } catch (error) {
        reject(error)
      }
    }) 
  }

  const getAdmin = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch('/api/auth/admin')

        setAdmin(data.admin)

        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  const initAuthPinia = () => {
    return new Promise(async (resolve, reject) => {
      setIsAuthLoading(true)
        try {
          await refreshToken()
          await getAdmin()

          resolve(true)
        } catch (error) {
          reject(error)
      } finally {
          setIsAuthLoading(false)
      }
    })
  }

  const logoutPinia = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await $fetch('/api/auth/logout', {
          method: 'POST'
        })
        setToken(null)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }

  
  return {
    adminInfo,
    loginPinia,
    initAuthPinia,
    logoutPinia,
  }
})