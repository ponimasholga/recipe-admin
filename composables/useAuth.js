
export default () => {
  const useAuthToken = () => useState('auth_token')
  const useAuthAdmin = () => useState('auth_admin')

  const setToken = (newToken) => {
    const authToken = useAuthToken()
    authToken.value = newToken
  }

  const setAdmin = (newAdmin) => {
    const authAdmin = useAuthAdmin()
    authAdmin.value  = newAdmin
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

  const initAuth = () => {
    return new Promise (async (resolve, reject) => {
      try {
        await refreshToken()
        resolve(true)
      } catch(error) {
        reject(error)
      }
    })
  }

  return {
    login, 
    useAuthAdmin,
    useAuthToken,
    initAuth,
  }
}