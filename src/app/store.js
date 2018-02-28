import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import weatherDataReducer from './reducers/weatherDataReducer'

export default createStore(weatherDataReducer, {}, applyMiddleware(thunk))
