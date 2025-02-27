import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const createAdmin = (userData: any) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10)
  }
  return prisma.admin.create({
    data: finalUserData
  })  
}

export const createUser = (userData: any) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10)
  }
  return prisma.user.create({
    data: finalUserData
  })  
}

export const getAdmin = (username:string) => {
  return prisma.admin.findUnique({
    where: {
      username: username
    }
  })  
}

export const getAdminById = (userId:number) => {
  return prisma.admin.findUnique({
    where: {
      id: userId
    }
  })  
}