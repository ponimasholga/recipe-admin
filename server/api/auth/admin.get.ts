export default defineEventHandler(async (event) => {
  return {
    admin: event.context.auth?.admin
  }
})