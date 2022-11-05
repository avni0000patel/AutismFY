import {combineReducers, createStore} from 'redux'

import profileReducer from './profileReducer'

let reducers = combineReducers({
    profileStore: profileReducer 
})

let store = createStore(reducers)

export default store