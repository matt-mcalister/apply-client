import authReducer from '../reducers/authReducer'
import * as actions from '../actions/types'
import expect from 'expect'

describe('authReducer', () => {
  it('should return the initial state when passed an empty action', () => {
    expect(
      authReducer(undefined, {})
    ).toEqual({
      user: null,
      token: null,
      errors: null
    })
  })

  it('should handle the SET_USER action', () => {
    let payload = {user: {name: "Matt" }, token: "some_token" }
    expect(
      authReducer(undefined, {type: actions.SET_USER, payload: payload})
    ).toEqual({
      user: payload.user,
      token: payload.token,
      errors: null
    })
  })

  it('should handle the SIGN_OUT action', () => {

    let beforeState = {
      user: {name: "Matt"},
      token: "some_token",
      errors: null
    }

    expect(
      authReducer(beforeState, {type: actions.SIGN_OUT})
    ).toEqual({
      user: null,
      token: null,
      errors: null
    })
  })

  it('should handle the AUTH_ERRORS action', () => {
    let messages = [{message: "Invalid email or password"}]
    expect(
      authReducer(undefined, {type: actions.AUTH_ERRORS, payload: messages})
    ).toEqual({
      user: null,
      token: null,
      errors: messages
    })
  })

  it('should handle the CLEAR_ERRORS action', () => {
    expect(
      authReducer(undefined, {type: actions.CLEAR_ERRORS})
    ).toEqual({
      user: null,
      token: null,
      errors: null
    })
  })
})
