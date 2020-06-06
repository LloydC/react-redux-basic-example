import { createStore, combineReducers, applyMiddleware } from 'redux';// first argument is a reducer function, second argument is the state
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import math from './reducers/mathReducer'
import user from './reducers/userReducer'

export default createStore(
    combineReducers({math, user}), 
    {}, 
    applyMiddleware(createLogger(), thunk, promise())// multiple middlewares can be passed
) 