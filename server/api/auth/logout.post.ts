export default defineEventHandler(async (event) => {
    try {
      const cookies = getCookie(event, 'refresh_token')
      const refreshToken = cookies

      console.log('refreshToken', cookies)

    } catch (error) { 

    }

    return { 
      message: 'Done' 
    }
})