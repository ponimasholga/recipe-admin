

// export default defineEventHandler(async () => {
//   const users = await prisma.user.findMany()
//   return users;
// })


import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()



export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  let user = null

  if  (body.name) {
    user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      }
    })
  }

  return {
    user
  }
})
