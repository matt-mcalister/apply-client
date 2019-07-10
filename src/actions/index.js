import * as actions from './types'

import * as adapter from "../adapter"

export const signUp = ({first_name, last_name, email, password}, push) => {
  return (dispatch) => {
    dispatch(clearErrors())
    adapter.signUp({user: {first_name, last_name, email, password}})
      .then(json => {
        if (json.errors){
          dispatch(setErrors(json))
        } else {
          dispatch(setUser(json))
          localStorage.setItem("jwt-app.ly", json.token)
        }
        push("/")
      })
      .catch(errs => dispatch(setErrors(errs)))
  }
}

const setUser = (userObj) => {
  return {
    type: actions.SET_USER,
    payload: userObj
  }
}

const setErrors = (errs) => {
  return {
    type: actions.SET_ERRORS,
    payload: errs
  }
}

const clearErrors = () => {
  return {
    type: actions.CLEAR_ERRORS
  }
}
