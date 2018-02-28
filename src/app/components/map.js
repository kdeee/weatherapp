import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react'

const WeatherMap = (props) => {
		const {cityData} = props
		if(cityData.message === 'City not found')
		return(
			<Map
		        google={props.google}
		        zoom={15}
		        center={{
		          lat: cityData.latitude,
		          lng: cityData.longitude
		        }}>
				<InfoWindow
		          visible={false}>
		            <div>
		              <h5>You are in {cityData.cityname}</h5>
		            </div>
		        </InfoWindow>
     		</Map>
     	)
     	else{
     		return(
     			<Map
			        google={props.google}
			        zoom={15}
			        center={{
			          lat: cityData.latitude,
			          lng: cityData.longitude
			        }}>
					<InfoWindow
			        visible={true}
			        position={
						    	{lat: cityData.latitude, lng: cityData.longitude}
						    }>
			            <div>
			              <h5>You are in {cityData.cityname}</h5>
			            </div>
			        </InfoWindow>
		     	</Map>
     		)}

			}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA2g3QeaJ16yYPrXFwAlTLW0ypJPLeR_V0'
})(WeatherMap)
