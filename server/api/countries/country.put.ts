import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  console.log('body', body)

  if (body.id) {
    const updatedCountry = await prisma.kitchen.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        image: body.image,
        text: body.text,
      },
    })

    return {
      updatedCountry
    }
  }
})
