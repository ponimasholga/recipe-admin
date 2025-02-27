

// export default defineEventHandler(async () => {
//   const users = await prisma.user.findMany()
//   return users;
// })


import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()



export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  console.log('body', body.id)

  if (body.id) {
    const deletedUser = await prisma.user.delete({
        where: {
        id: body.id,
      },
    })

    return {
      deletedUser
    }
  }
})
