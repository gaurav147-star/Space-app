import React from 'react';
import './isspos.css';
import GoogleMapReact from 'google-map-react'

const ISS_URL = "http://api.open-notify.org/iss-now.json"
const MAP_KEY = "AIzaSyDjx71MZXvkmArFrs3V89raHMPfsi2Wn9o"
const img = <img src={require("./components/iss.png").default}  alt = "ISS" height = "30px"/>

const SpaceStation = ({ img }) => <div>{img}</div>


class Map extends React.Component{
    state = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 1
    }

    componentDidMount(){
        this.getCoordinates()
        this.interval = setInterval(this.getCoordinates, 3000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    getCoordinates = () => {
        fetch(ISS_URL)
            .then(res => res.json())
            .then(data => this.setState({
                center: {
                    lat: data.iss_position.latitude,
                    lng: data.iss_position.longitude
                }
            }))
    }

    render(){
        console.log("LAT:", this.state.center.lat)
        console.log("LNG:", this.state.center.lng)
        return(
            <div className= "main_iss">
                <p>Latitude: {this.state.center.lat}</p>
                <p>Longitude: {this.state.center.lng}</p>
                <div className = "map" style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact className = "map"
                        bootstrapURLKeys={{key: MAP_KEY }}
                        center={this.state.center}
                        zoom={this.state.zoom}
                    >
                    <SpaceStation

                        lat = {this.state.center.lat}
                        lng = {this.state.center.lng}
                        img = {img}
                    />
                    </GoogleMapReact>
                </div>
            </div>
        )
    }
}

export default Map;


// import Map from './components/Map'
// import './App.css';
// import { useState, useEffect } from 'react'
// import axios from 'axios'

// function IssPos() {
  
//   const [loading, setLoading] = useState(true);
//   const [longitude, setLongitude] = useState([]);
//   const [latitude, setLatitude] = useState([]);
//   const [toggle, setToggle] = useState(false);

//   const getLocation = async () => {
    
//     const res = await axios.get('http://api.open-notify.org/iss-now.json')
   
//     const { longitude, latitude } = await res.data.iss_position;
//     setLongitude(parseFloat(longitude));
//     setLatitude(parseFloat(latitude));
    
//   }
 

//   useEffect(() =>{
//       getLocation();
//       setTimeout(() => setToggle((prevToggle)=> !prevToggle),3000);
//   },[toggle]);

//   return (

//     <div className="App">
       
//       {(<Map center={{ lat: latitude, lng: longitude }} />)  }
//     </div>
//   );
// }

// export default IssPos;

