import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchCity from './search_city'
import Weather from './weather'


const API_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=566701c984b0adfe199fa54416d59112&units=metric&q='
class App extends Component {
	constructor(props){
		super(props)
		this.state = {
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
		 notFound: 'Not Found'
}


	}
	fetchCity(cityname) {
		let api = `${API_URL}${cityname}`
		fetch(api)
			.then((res) => res.json())
			.then((data) => {
				 console.log(data);
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
				 notFound: data.message
				})
			})
			.catch((error) => {
				console.log('City Not Found!')
				this.setState({notFound: 'Not Found'})
			})
		}
	componentDidMount() {
	     this.fetchCity(this.state.cityname);
	}

	render(){
		return(
			<div>
				<section id="info">
					<SearchCity fetchCity={this.fetchCity.bind(this)}/>
					<Weather data={this.state} />
				</section>
			</div>
			)

	}

}

 
ReactDOM.render(<App />, document.getElementById('app-container'));