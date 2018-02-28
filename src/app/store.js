import {createStore} from 'redux'
import weatherDataReducer from './reducers/weatherDataReducer'

export default createStore(weatherDataReducer)
