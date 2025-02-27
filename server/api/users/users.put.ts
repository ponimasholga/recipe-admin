import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  if (body.id) {
    const updatedUser = await prisma.user.update({
      where: {
        id: body.id,
      },
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    })

    return {
      updatedUser
    }
  }
})
