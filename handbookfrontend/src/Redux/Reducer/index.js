import InformationReducer from './infoReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  InformationReducer: InformationReducer
})

export default rootReducer
