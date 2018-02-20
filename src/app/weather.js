import React, {Component} from 'react'
import {Button, Card, CardActions, CardText, CardTitle, List, ListItem} from 'react-md'



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
		    			<div className="card" style={{width: '20rem', marginTop: '80px'}}>
		    				<div className="card-header">
								ERROR!
							</div>
			    			<img className="card-img-top" src="./app/img/error.png"/>
				    			<div className="card-block">
				    				<h4 className="card-title">City not found, please enter a city name!</h4>
				    			</div>
			    		</div>
		    		</div>
		    		);
		    else{
		    	return(
		    			
					<div className='col-md-12 row'>
		    			<div className="card" style={{width: '20rem'}}>
		    				<div className="card-header">
								Weather Information
							</div>
							  	<img className="card-img-top" src={`http://www.countryflags.io/${data.country}/shiny/64.png`} alt={data.country}/>
								  <div className="card-block">
									    <h4 className="card-title">{data.cityname}</h4>
									    <p className="card-text">{data.country} <img src={`http://openweathermap.org/img/w/${data.icon}.png`} />{data.description}</p>
								  </div>
								  <ul className="list-group list-group-flush">
									<li className="list-group-item temperature"><span>Temperature:</span> {data.temperature}<i>&#x2103;</i></li>
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