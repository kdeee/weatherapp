import React from 'react'



const Weather extends Component {
	dateConverter (unixTime){
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

		  render(){
		    const {data} = this.props;
		    if (data.message === "City not found")
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
				    				<h4 className="card-title">{data.message}, please enter a city name!</h4>
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
									<li className="list-group-item temperature"><span>Temperature:</span><span>{data.temperature}<i>&#x2103;</i></span></li>
									<li className="list-group-item longitude"><span>Longitude:</span><span>{data.longitude}</span></li>
								  	<li className="list-group-item latitude"><span>Latitude:</span><span>{data.latitude}</span></li>
								  	<li className="list-group-item humidity"><span>Humidity:</span><span>{data.humidity} <i>%</i></span></li>
								 	<li className="list-group-item pressure"><span>Pressure:</span><span>{data.pressure} <i>hPa</i></span></li>
								  	<li className="list-group-item wind"><span>Wind:</span><span>{data.wind} <i>km/h</i></span></li>
								  	<li className="list-group-item wind"><span>Sunrise:</span><span>{this.dateConverter(data.sunrise * 1000)}</span></li>
								  	<li className="list-group-item wind"><span>Sunset:</span><span>{this.dateConverter(data.sunset * 1000)}</span></li>
								  </ul>
						</div>
					</div>
		        )
	    	}

		}
	}

export default Weather
