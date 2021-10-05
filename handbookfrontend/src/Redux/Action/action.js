export const getInformation = data => {
  return {
    type: 'GET_INFO',
    payload: data
  }
}

export const addAllStateAndLeaves = data => {
  return {
    type: 'ADD_ALL_STATE_AND_LEAVES',
    payload: data
  }
}
