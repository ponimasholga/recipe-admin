

// export default defineEventHandler(async () => {
//   const users = await prisma.user.findMany()
//   return users;
// })


import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()



export default defineEventHandler(async (event) => {

  const body = await readBody(event) 
  console.log('POST', body)
  let user = null

  if  (body.id) {
    // Delete an existing user
    const deletedUser = await prisma.user.delete({
        where: {
        id:  2,
        },
    })

    return {
      deletedUser
    }
  }
})
