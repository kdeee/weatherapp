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
        return {
          //...state,
          cityname: action.payload.cityname,
          country: action.payload.country,
          longitude: action.payload.longitude,
          latitude: action.payload.latitude,
          temperature: action.payload.temperature,
          humidity: action.payload.humidity,
          pressure: action.payload.pressure,
          wind: action.payload.wind,
          icon: action.payload.icon,
          description: action.payload.description,
          sunrise: action.payload.sunrise,
          sunset: action.payload.sunset,
          message: action.payload.message
        }

  }
  return state;
}

export default weatherDataReducer
