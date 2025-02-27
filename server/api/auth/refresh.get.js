import { sendError } from "h3"
import { getRefreshTokenByToken }  from '../../db/refreshToken'
import { decodeRefreshToken, generateTokens } from "../../utils/jwt"
import { getAdminById } from "../../db/admin"

export default defineEventHandler(async (event) => {

        
    const cookies = getCookie(event, 'refresh_token')
    const refreshToken = cookies

    if (!refreshToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid'
        }))
    }

    const rToken = await getRefreshTokenByToken(refreshToken)

    if (!rToken) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid'
        }))
    }

    const token = decodeRefreshToken(refreshToken)

    try {
        const admin = await getAdminById(token.adminId)

        const { accessToken } = generateTokens(admin)

        return { access_token: accessToken }

    } catch (error) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Something went wrong'
        }))
    }
});