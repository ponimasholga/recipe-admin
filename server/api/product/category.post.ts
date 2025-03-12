import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

  const body = await readBody(event);

  let newCategory = null;
 
  await prisma.category
    .create({
      data: {
        title: body.title,
      },
    })
    .then((response) => {
      newCategory = response;
    })
    .catch((error) => {
      console.log('errornewCategory', error)
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          error = createError({
            statusCode: 500,
            statusMessage: `Категория с названием '${body.title}' существует`,
          }); 
        }
      }
      throw error;
    });
  return newCategory;
});