import { PrismaClient } from "@prisma/client"
import { getAdmin } from '../../db/admin'
import { createRefreshToken } from '../../db/refreshToken'
import { generateTokens, sendRefreshToken } from '../../utils/jwt'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  
  const { username, password } = body

  if (!username || !password) {
    return sendError(event , createError({
      statusCode: 400,
      statusMessage: 'Некорректные параметры'
    }))
  }

  // Получение админа
  const admin = await getAdmin(username)

  if (!admin) {
    return sendError(event , createError({
      
      statusCode: 400,
      statusMessage: 'Такого пользователя не существует'
    }))
  }

  // Сравнение пароля
  const doesThePasswordMatch = await bcrypt.compare(password, admin.password)

  if (!doesThePasswordMatch) {
    return sendError(event , createError({
      
      statusCode: 400,
      statusMessage: 'Неверный пароль'
    }))
  }

  const { accessToken, refreshToken } = generateTokens(admin)


  // Создаем Refresh токен
  await createRefreshToken({
    token: refreshToken,
    adminId: admin.id
  })

  // Создаем Refresh токен
  sendRefreshToken(event, refreshToken)

  // Save it inside db

  return {
    access_token: accessToken,
    refresh_token: refreshToken,
    admin: admin,
    doesThePasswordMatch
  }

  // Generate Token
})
