import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  let updateCategory = null

  if  (body.name) {
    updateCategory = await prisma.category.create({
      data: {
        name: body.name,
      }
    })
  }

  return {
    updateCategory
  }
})
