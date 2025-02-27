import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const category = await prisma.category.findMany({
    include: {
      subCategory: true,
    }
  })
  return category;
})