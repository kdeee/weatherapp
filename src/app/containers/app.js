import React, {Component} from 'react'
import {connect} from 'react-redux'
import SearchCity from './search_city'
import Weather from './weather'
import WeatherMap from './map'

const API_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=40dee5755bf5e19eeb29e44603cce6f5&units=metric&q='
class App extends Component {

	fetchCity(city) {
		const api = `${API_URL}${city}`
			fetch(api)
				.then((res) => res.json())
				.then((data) => {
					console.log(data)
					this.setState({
					 cityname: data.name,
					 country: data.sys.country,
					 longitude: data.coord.lon,
					 latitude: data.coord.lat,
					 temperature: data.main.temp,
					 humidity: data.main.humidity,
					 pressure: data.main.pressure,
					 wind: data.wind.speed,
					 icon: data.weather[0].icon,
					 description: data.weather[0].description,
					 sunrise: data.sys.sunrise,
					 sunset: data.sys.sunset,
					 message: data.message
					})
				})
				.catch((error) => {
				this.setState({message: 'City not found', latitude: '', longitude: ''})
			})
			}
	//componentDidMount() {
	     //this.fetchCity(this.state.cityname);
	//}

	render(){
		return(
			<div>
				<section id="info">
					<SearchCity cityInfo={(city) => this.fetchCity(city)}/>
						<section className="weather-city row">
							<div className="weather-info col-md-4 row">
								<Weather data={this.props.weatherData} />
							</div>
							<div className="weather-map col-md-8 row">
								<WeatherMap cityData={this.props.weatherData} />
							</div>
						</section>
				</section>
			</div>
			)
		}

	}

	const mapStateToProps = (state) => {
		return {
			weatherData: state.weatherDataReducer
		}
	}

	const mapDispatchToProps = (dispatch) => {
		return {
			setData = (weatherData) => {
				dispatch({
					type: "SEARCH_CITY",
					payload: weatherData
				})
			}
		}
	}

	export default connect(mapStateToProps, mapDispatchToProps)(App);
