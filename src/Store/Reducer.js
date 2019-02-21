const initialState = { currentView: 0 }

function createReducer(state = initialState, action) {
  let nextState
  switch (action.type) {

    case 'TOGGLE_VIEW':
        nextState = {
          ...state,
          currentView: action.value
        }
        return nextState || state
  default:
    return state
  }
}

export default createReducer
