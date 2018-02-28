import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import weatherDataReducer from './reducers/weatherDataReducer'

export default createStore(weatherDataReducer, applyMiddleware(thunk,createLogger()))
