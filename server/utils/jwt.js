import jwt from "jsonwebtoken"

const generateAccessToken = (admin) => {
  const config = useRuntimeConfig()

  return jwt.sign({ adminId: admin.id }, config.jwtAccessSecret, {
    expiresIn: '10m'
  })
}

const generateRefreshToken = (admin) => {
  const config = useRuntimeConfig()

  return jwt.sign({ adminId: admin.id }, config.jwtRefreshSecret, {
    expiresIn: '4h'
  })
}

export const decodeRefreshToken = (token) => {
  const config = useRuntimeConfig()

  try {
    return jwt.verify(token, config.jwtRefreshSecret)
  } catch (error) {
    return null
  }
}

export const decodeAccessToken = (token) => {
  const config = useRuntimeConfig()

  try {
    return jwt.verify(token, config.jwtAccessSecret)
  } catch (error) {
    return null
  }
}


export const generateTokens = (admin) => {
  const accessToken = generateAccessToken(admin)
  const refreshToken = generateRefreshToken(admin)

  return {
    accessToken: accessToken,
    refreshToken: refreshToken
  }
}

export const sendRefreshToken = (event, token) => {
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    sameSite: true
  })
} 