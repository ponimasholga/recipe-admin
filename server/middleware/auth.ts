import UrlPattern from "url-pattern"
import { getAdminById } from "../db/admin"

export default defineEventHandler(async (event) => {
  try {
    const admin = await getAdminById(2)
    event.context.auth = { admin }
} catch (error) {
    return
}
})
