import InformationReducer from './infoReducer'
import stateWithLeavesReducer from './stateWithLeavesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  InformationReducer: InformationReducer,
  stateWithLeavesReducer: stateWithLeavesReducer
})

export default rootReducer
