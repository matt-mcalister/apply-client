import * as actions from '../actions/types'


const initialState = {
  user: null,
  token: null,
  errors: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type){
    case actions.SET_USER:
      return {...state, user: action.payload.user, token: action.payload.token}
    case actions.SET_ERRORS:
      return {...state, errors: action.payload}
    case actions.CLEAR_ERRORS:
      return {...state, errors: null}
    case actions.SIGN_OUT:
      return initialState
    default:
    return state

  }
}

export default authReducer
