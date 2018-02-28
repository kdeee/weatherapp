import React, {Component} from 'react'
import {connect} from 'react-redux'
import SearchCity from '../components/search_city'
import Weather from '../components/weather'
import WeatherMap from '../components/map'
import {fetchCity} from '../actions/weatherDataAction'


class App extends Component {


	// componentWillMount() {
	//      console.log(this.props);
	// }

	render(){
		return(
			<div>
				<section id="info">
					<SearchCity cityInfo={(city) => this.props.fetchCity(city)}/>
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
		//console.log(state)
		return {
			weatherData: state
		}
	}

	const mapDispatchToProps = (dispatch) => {
		return {
			fetchCity : (city) => {
				dispatch(fetchCity(city))
			}
		}
	}

	export default connect(mapStateToProps, mapDispatchToProps)(App);
