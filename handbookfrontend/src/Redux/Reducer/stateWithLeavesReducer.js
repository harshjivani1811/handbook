const InitState = {
  stateAndLeaves: []
}

const addAllStateAndLeaves = (state = InitState, action) => {
  switch (action.type) {
    case 'ADD_ALL_STATE_AND_LEAVES':
      return {
        ...state,
        stateAndLeaves: action.payload
      }
    default:
      return state
  }
}

export default addAllStateAndLeaves
