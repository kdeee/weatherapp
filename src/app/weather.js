import React, {Component} from 'react'
var moment = require('moment');
//const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december' ];

class Weather extends Component {
  render() {
    let data = this.props.data;
    if (data.notFound === 'Not Found')
    	return (
    		<div className="notFound">
    			<h2>Oops!!</h2>
    			<p>City not found, please enter a city name!</p>
    		</div>
    		);
    else{
    	let date = new Date(data.sunrise * 1000);
		let formatted = moment().format("dd.mm.yyyy hh:MM:ss").toString();
		let hh = date.getHours();
		let MM = date.getMinutes();
		let ss = date.getSeconds();


	    	return(
	    		<section className="weather-city row">
	    			<div className="weather-info col-md-6 row">
	    				{/*display the first column with the city name and picture*/}
	    				<div className="weather-city-name col-md-6">
							<ul className="list-group2">
	    						<li className="list-group-item cityname"><span>City:</span> {data.cityname}</li>
	    						<li className="list-group-item"><img src={`http://www.countryflags.io/${data.country}/shiny/64.png`} /></li>
	    						<li className="list-group-item"><img src={`http://openweathermap.org/img/w/${data.icon}.png`} /><h4>{data.description}</h4></li>
	    					</ul>
	    				</div>
	    				{/*display the second column with the city weather information*/}
	    				<div className="weather-city-info col-md-6">
			           		<ul className="list-group">
							  <li className="list-group-item county"><span>Country:</span> {data.country}</li>
							  <li className="list-group-item temperature"><span>Temperature:</span> {data.temperature} &#x2103;</li>
							  <li className="list-group-item longitude"><span>Longitude:</span> {data.longitude}</li>
							  <li className="list-group-item latitude"><span>Latitude:</span> {data.latitude}</li>
							  <li className="list-group-item humidity"><span>Humidity:</span> {data.humidity}</li>
							  <li className="list-group-item pressure"><span>Pressure:</span> {data.pressure}</li>
							  <li className="list-group-item wind"><span>Wind:</span> {data.wind}</li>
							  <li className="list-group-item wind"><span>Sunrise:</span> {hh + ':' +MM+ ':' + ss}</li>
							  <li className="list-group-item wind"><span>Sunset:</span> {data.sunset}</li>
							</ul>
						</div>
	          		</div>
	       		</section>
	        );
    	}
	}
}

export default Weather