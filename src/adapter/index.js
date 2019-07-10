import { BASE_URL, HEADERS } from "./constants"

export const signUp = (user_info) => {
  return postRequest("/signup", user_info)
}


const postRequest = (route, body) => {
  return fetch(BASE_URL + route, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(body)
  }).then(res => res.json())
}
