export const BASE_URL = "http://localhost:3001"
export const HEADERS = {
  "Content-Type": "application/json"
}

export const AUTH_HEADERS = {
  ...HEADERS,
  "Authorization": localStorage.getItem("jwt-app.ly")
}
