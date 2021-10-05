const InitState = {
  information: []
}

const getInformation = (state = InitState, action) => {
  switch (action.type) {
    case 'GET_INFO':
      return {
        ...state,
        information: action.payload
      }

    default:
      return state
  }
}

export default getInformation
