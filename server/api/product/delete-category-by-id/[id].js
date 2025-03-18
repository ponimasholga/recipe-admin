import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const deletedCategory = await prisma.category.deleteMany({
    where: {
      id: Number(event.context.params.id)
    }
  })
  
  return deletedCategory;
});