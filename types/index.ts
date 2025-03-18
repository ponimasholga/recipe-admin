export type APIError = {
  statusCode: number,
  statusMessage: string,
  message: string,
  data?: Record<string, string>
}

export type TToastStatus = "success" | "warning" | "error";