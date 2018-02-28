
export function fetchCity(city){
  const API_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=40dee5755bf5e19eeb29e44603cce6f5&units=metric&q='
		const api = `${API_URL}${city}`
    return (dispatch) => {
			fetch(api)
				.then((res) => res.json())
				.then((data) => {
          dispatch({
            type: 'SEARCH_CITY',
            payload: data
          })

				})
				.catch((error) => {
				this.setState({message: 'City not found', latitude: '', longitude: ''})
			})
			}
}
