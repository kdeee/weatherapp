import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'

class WeatherMap extends Component{


	render(){
		return(
		<Map
        google={this.props.google}
        zoom={15}
        center={{
          lat: this.props.data.latitude,
          lng: this.props.data.longitude
        }}>
        <Marker title={this.props.data.cityname}
			    name={this.props.data.cityname}
			    position={
			    	{lat: this.props.data.latitude, lng: this.props.data.longitude}
			    } />
     	</Map>
      )
	}
	
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyA2g3QeaJ16yYPrXFwAlTLW0ypJPLeR_V0'
})(WeatherMap)