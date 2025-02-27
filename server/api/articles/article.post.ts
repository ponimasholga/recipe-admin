import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  let { title, banner, text, user_id, tag } = body
  console.log('body' , body)
  console.log('data' , title, banner, text, user_id, tag)
  console.log('title' , title)
  console.log('banner' , banner)
  console.log('text' , text)
  console.log('user_id' , user_id)
  console.log('tag' , tag)

  let article = null

  if (!user_id) {
    user_id = null
  }

  const myStringArray = ['Здоровая еда', 'Пикник'];

  console.log('user_id' , user_id)

  article = await prisma.article.create({
    data: {
      banner: banner,
      text: text,
      UserId: user_id,
      tags: {
        create: [
          {
            title: myStringArray[0],
          },
          {
            title: myStringArray[1],
          },
        ],
      },
      title: title,
    },
  })

  console.log('article', article)

  return {
    article,
  }
})
