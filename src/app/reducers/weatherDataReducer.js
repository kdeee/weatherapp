//this is the initial state
const weatherState = {
  cityname: '',
  country: '',
  longitude: '',
  latitude: '',
  temperature: '',
  humidity: '',
  pressure: '',
  wind: '',
  icon: '',
  description: '',
  sunrise: '',
  sunset: '',
  message: 'City not found'
}
const weatherDataReducer = (state = weatherState, action) => {
  switch (action.type) {
    case 'SEARCH_CITY':
        return {...state}
      break;
    default:

  }
}

export default weatherDataReducer
