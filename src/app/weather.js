import React, {Component} from 'react'


class Weather extends Component {
	dateConverter (unixTime){
	let date = new Date(unixTime);
		let hours = date.getHours();
		let minutes= date.getMinutes();
		let ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var dateString = hours+ ':' +minutes+ ' ' +ampm;

		return dateString;
	}

		  render(){
		    let data = this.props.data;
		    if (data.notFound === 'Not Found')
		    	return (
		    		<div className="notFound">
		    			<h1>Oops!!</h1>
		    			<h2>City not found, please enter a city name!</h2>
		    		</div>
		    		);
		    else{
		    	return(
		    			
					<div className='col-md-12 row'>
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
								  <li className="list-group-item temperature"><span>Temperature:</span> {data.temperature} <i>&#x2103;</i></li>
								  <li className="list-group-item longitude"><span>Longitude:</span> {data.longitude}</li>
								  <li className="list-group-item latitude"><span>Latitude:</span> {data.latitude}</li>
								  <li className="list-group-item humidity"><span>Humidity:</span> {data.humidity} <i>%</i></li>
								  <li className="list-group-item pressure"><span>Pressure:</span> {data.pressure} <i>hPa</i></li>
								  <li className="list-group-item wind"><span>Wind:</span> {data.wind} <i>km/h</i></li>
								  <li className="list-group-item wind"><span>Sunrise:</span> {this.dateConverter(data.sunrise * 1000)}</li>
								  <li className="list-group-item wind"><span>Sunset:</span> {this.dateConverter(data.sunset * 1000)}</li>
								</ul>
							</div>
					</div>		          		
		        );
	    	}
		       		
		}
	}

export default Weather