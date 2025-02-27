import { PrismaClient } from "@prisma/client"
import { createUser } from '../../db/admin'
import { userTransformer } from "~/server/transformers/user"


const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const { username, email, password, repeatPassword, name } = body

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(event , createError({
      statusCode: 400,
      statusMessage: 'Некорректные параметры'
    }))
  }

  if ( password !== repeatPassword ) {
    return sendError(event , createError({
      statusCode: 400,
      statusMessage: 'Пароли не совпадают'
    }))
  }


  const userData = {
    username,
    email,
    password,
    name,
    profileImage: 'https://fastly.picsum.photos/id/55/200/200.jpg?hmac=bZJlDgjT6ZbhsSE405Cdmv7eIH2M2P8FjGnOJwvryB8',
  }

  const admin = await createUser(userData)

  return {
    body: userTransformer(admin)
  }
})
