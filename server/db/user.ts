import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getUser = (email:string) => {
  return prisma.admin.findUnique({
    where: {
      email: email
    }
  })  
}