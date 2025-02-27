import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const countries = await prisma.kitchen.findMany()
  return countries;
})