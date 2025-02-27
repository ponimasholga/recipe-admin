import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createRefreshToken = (refreshToken: any) => {
  return prisma.refreshToken.create({
    data: refreshToken
  })  
}

export const getRefreshTokenByToken = (token:any) => {
  return prisma.refreshToken.findUnique({
    where: {
      token: token
    }
  })  
}