import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const deletedAdmins = await prisma.subCategory.deleteMany({
    where: {
      id: Number(event.context.params.id)
    }
  })
  
  return deletedAdmins;
});