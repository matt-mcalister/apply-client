import * as actions from '../actions/types'


const initialState = {
  recents: [],
}

const organizationsReducer = (state = initialState, action) => {
  switch (action.type){
    case actions.SET_RECENT_ORGS:
    console.log(action.payload);
      return {...state, recents: action.payload}
    default:
    return state

  }
}

export default organizationsReducer
