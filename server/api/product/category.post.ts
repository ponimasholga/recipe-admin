import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  console.log('body' ,body)
  let newCategory = null

  if  (body.title) {
    newCategory = await prisma.category.create({
      data: {
        title: body.title,
      }
    })
  }

  console.log('newCategory' ,newCategory)
  return {
    newCategory
  }
})
