import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const tags = await prisma.tag.findMany()
  return tags;
})