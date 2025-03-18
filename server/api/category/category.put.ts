import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  if (body.id) {
    const updatedCategory = await prisma.category.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
      },
    })

    return {
      updatedCategory
    }
  }
})
