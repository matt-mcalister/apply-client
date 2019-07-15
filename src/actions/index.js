import * as actions from './types'

import * as adapter from "../adapter"

export const signUp = ({first_name, last_name, email, password}, push) => {
  return (dispatch) => {
    dispatch(clearErrors())
    adapter.signUp({user: {first_name, last_name, email, password}})
      .then(json => {
        if (json.errors_array){
          dispatch(setErrors(json))
        } else if (json.user && json.token) {
          localStorage.setItem("jwt-app.ly", json.token)
          dispatch(setUser(json))
          push("/")
        }
      })
      .catch(errs => dispatch(setErrors(errs)))
  }
}

export const login = ({email, password}, push) => {
  return (dispatch) => {
    dispatch(clearErrors())
    adapter.login({email, password})
      .then(json => {
        if (json.errors_array){
          dispatch(setErrors(json))
        } else if (json.user && json.token) {
          localStorage.setItem("jwt-app.ly", json.token)
          dispatch(setUser(json))
          push("/")
        }
      })
      .catch(errs => dispatch(setErrors(errs)))
  }
}

export const getUser = () => {
  return (dispatch) => {
    adapter.getUser()
      .then(json => {
        if (json.errors_array){
          dispatch(setErrors(json))
        } else if (json.user) {
          dispatch(setUser({...json, token: localStorage.getItem("jwt-app.ly")}))
        }
      })
  }
}

export const getRecentOrgs = () => {
  return (dispatch) => {
    adapter.getRecentOrgs().then(recents => {
      dispatch(setRecentOrgs(recents))
    })
  }
}

export const signOut = () => {
  localStorage.removeItem("jwt-app.ly")
  return {
    type: actions.SIGN_OUT
  }
}

const setRecentOrgs = (recents) => {
  return {
    type: actions.SET_RECENT_ORGS,
    payload: recents
  }
}

const setUser = (userObj) => {
  return (dispatch) => {
    dispatch(getRecentOrgs())
    return {
      type: actions.SET_USER,
      payload: userObj
    }
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
