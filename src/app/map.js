import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react'

class WeatherMap extends Component{
	constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  
  onMarkerClick(props, marker) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

	render(){
		return(
		<Map
		onClick={this.onMapClicked}
        google={this.props.google}
        zoom={15}
        center={{
          lat: this.props.data.latitude,
          lng: this.props.data.longitude
        }}>
        <Marker onClick={this.onMarkerClick}
        		title={this.props.data.cityname}
			    name={this.props.data.cityname}
			    position={
			    	{lat: this.props.data.latitude, lng: this.props.data.longitude}
			    } />
		<InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h4>You are in {this.state.selectedPlace.name}</h4>
            </div>
        </InfoWindow>
     	</Map>
      )
	}
	
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA2g3QeaJ16yYPrXFwAlTLW0ypJPLeR_V0'
})(WeatherMap)