import React from 'react'

function dateConverter (unixTime){
const date = new Date(unixTime);
	let hours = date.getHours();
	let minutes= date.getMinutes();
	let ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? '0'+minutes : minutes;
	const dateString = hours+ ':' +minutes+ ' ' +ampm;

	return dateString;
}



const Weather = (props) => {
	console.log(props)
		    if(props.data.message === "City not found")
		    	return (
		    		<div className="notFound">
		    			<div className="alert alert-warning" role="alert" style={{marginLeft: '25px', width: '450px'}}>
					  		<strong>Warning!</strong> Check the spelling or add a city after the name.
					  		Example: <strong>"Cebu City"</strong>.
						</div>
		    			<div className="card" style={{width: '20rem', marginTop: '50px'}}>
		    				<div className="card-header">
								ERROR!
							</div>
			    			<img className="card-img-top" src="./app/img/error.png"/>
				    			<div className="card-block">
				    				<h4 className="card-title">{props.data.message}, please enter a city name!</h4>
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
							  	<img className="card-img-top" src={`http://www.countryflags.io/${props.data.country}/shiny/64.png`} alt={props.data.country}/>
								  <div className="card-block">
									    <h4 className="card-title">{props.data.cityname}</h4>
									    <p className="card-text">{props.data.country} <img src={`http://openweathermap.org/img/w/${props.data.icon}.png`} />{props.data.description}</p>
								  </div>
								  <ul className="list-group list-group-flush">
									<li className="list-group-item temperature"><span>Temperature:</span><span>{props.data.temperature}<i>&#x2103;</i></span></li>
									<li className="list-group-item longitude"><span>Longitude:</span><span>{props.data.longitude}</span></li>
								  	<li className="list-group-item latitude"><span>Latitude:</span><span>{props.data.latitude}</span></li>
								  	<li className="list-group-item humidity"><span>Humidity:</span><span>{props.data.humidity} <i>%</i></span></li>
								 	<li className="list-group-item pressure"><span>Pressure:</span><span>{props.data.pressure} <i>hPa</i></span></li>
								  	<li className="list-group-item wind"><span>Wind:</span><span>{props.data.wind} <i>km/h</i></span></li>
								  	<li className="list-group-item wind"><span>Sunrise:</span><span>{dateConverter(props.data.sunrise * 1000)}</span></li>
								  	<li className="list-group-item wind"><span>Sunset:</span><span>{dateConverter(props.data.sunset * 1000)}</span></li>
								  </ul>
						</div>
					</div>
					)
				}
	}

export default Weather
