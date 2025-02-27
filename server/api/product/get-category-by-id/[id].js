import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const currentCategory = await prisma.category.findUnique({
    where: {
      id: Number(event.context.params.id)
    },
    include: {
      subCategory: true
    }
  })
  
  return currentCategory;
});