import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {
  console.log('event.context.params.id', event.context.params.id, event.context.params)
  const deletedCategory = await prisma.category.delete({
    where: {
      id: Number(event.context.params.id)
    },
  })

  return {
    deletedCategory
  }
})
