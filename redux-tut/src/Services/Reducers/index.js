//this is rootReducer which combines various reducers
import {combineReducers } from 'redux'
import cartItems from './reducer'

export default combineReducers({
    cartItems,
})