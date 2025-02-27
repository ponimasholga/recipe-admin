import { countryTransformer } from "~/server/transformers/country"
import { PrismaClient } from "@prisma/client"
import ref from 'vue'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  
  const country = await prisma.kitchen.findUnique({
    where: {
      id: 1
    },
    include: {
      recipes: true,
    }
  })

  console.log('country Where', country)

  return countryTransformer(country)
})