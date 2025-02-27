import { PrismaClient } from "@prisma/client"
import { createAdmin } from '../../db/admin'
import { userTransformer } from "~/server/transformers/user"


const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  console.log('Title!!!!' , body.title)
  
  return prisma.tag.create({
    data: {
      title: body.title,
    }
  })
})
