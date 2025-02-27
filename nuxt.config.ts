// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    "@prisma/nuxt",
    '@nuxt/image',
    '@nuxt/fonts',
    '@vee-validate/nuxt',
  ],
  css: [
    'normalize.css/normalize.css'
  ],
  fonts: {
    families: [
      { name: 'roboto', provider: 'google' },
    ]
  },
  prisma: {
    autoSetupPrisma: true,
  },
  experimental: {
    componentIslands: true
  },
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET
  }
})