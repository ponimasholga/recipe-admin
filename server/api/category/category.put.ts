import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  console.log('updatedCategory', body, body.title)

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
