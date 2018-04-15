import React, { Component } from "react";
import GoogleMapReact from 'google-map-react'

import { connect } from "react-redux";
import { getFrontrunner } from "../redux/frontrunnerReducer";



class Train extends Component {
    constructor(props){
        super(props);
        this.state={
            lat:0,
            lng:0
        }
        this.onGeolocateError= this.onGeolocateError.bind(this);
        this.onGeolocateSuccess= this.onGeolocateSuccess.bind(this);
        this.geolocate = this.geolocate.bind(this)
    }
    componentDidMount() {
        this.props.getFrontrunner();
        setInterval(()=>{this.props.getFrontrunner()}, 15000)
       
        
    }
    onGeolocateSuccess(coordinates) {
        const { latitude, longitude } = coordinates.coords;
        console.log('Found coordinates: ', latitude, longitude);
        this.setState(() => {
            return {
                lat: latitude,
                lng: longitude
            };
          });
    }

    onGeolocateError(error) {
        console.warn(error.code, error.message);

        if (error.code === 1) {
            console.log("they said no")
        } else if (error.code === 2) {
            console.log("position unavailable")
        } else if (error.code === 3) {
            console.log("timeout")
        }
    }
    geolocate() {
        if (window.navigator && window.navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.onGeolocateSuccess, this.onGeolocateError);
        }
      }


    render() {
        const vehiclesArr = this.props.data.map((vehicleObj, index) => {
            let temp = null;
            if (vehicleObj.DirectionRef[0] !== "") {
                const direction = vehicleObj.DirectionRef[0].charAt(0)
                temp = <div key={index} lat={vehicleObj.VehicleLocation["0"].Latitude["0"]} lng={vehicleObj.VehicleLocation["0"].Longitude["0"]} text={direction}><i class="fas fa-train fa-2x"></i>{direction}</div>;

            }
            return temp
        })
        
       

        return <div>
            <div className='google-map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAp_gcAL9g64umPJUNU10vjP3Y-MHbmmQo" }}
                    center={{ lat: 40.7, lng: -111.80 }}
                    zoom={9}>
                    {vehiclesArr}
                    <div lat={this.state.lat} lng={this.state.lng}><i class="fas fa-map-marker fa-2x"></i></div>


                </GoogleMapReact><button onClick={this.geolocate}>Find ME</button>

            </div>




        </div>
    }
}

const mapStateToProps = state => {
    return state.frontrunner;
}

export default connect(mapStateToProps, { getFrontrunner })(Train);

