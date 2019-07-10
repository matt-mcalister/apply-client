import { BASE_URL, HEADERS, AUTH_HEADERS } from "./constants"

export const signUp = (user_info) => {
  return postRequest("/signup", user_info)
}

export const login = (user_info) => {
  return postRequest("/login", user_info)
}

export const getUser = () => {
  return getRequest("/getuser")
}


const postRequest = (route, body) => {
  return fetch(BASE_URL + route, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(body)
  }).then(res => res.json())
}

const getRequest = (route) => {
  return fetch(BASE_URL + route, {headers: AUTH_HEADERS}).then(res => res.json())
}
