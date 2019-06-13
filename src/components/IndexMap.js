import React from 'react'
import { Link } from 'react-router-dom'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_TOKEN
})

class IndexMap extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      pin: {},
      pinClick: false
    }
  }

  handleMarkerClick(cabin) {
    if(cabin === this.state.selectedCabin)  this.setState({ selectedCabin: null })
    else this.setState({ selectedCabin: cabin })
  }


  render() {
    console.log(this.props, 'THIS.PROPS')
    if (!this.props.cabins) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="location">
          <Map
            style='mapbox://styles/mapbox/streets-v8'
            center={[-0.25, 51.1010]}
            zoom={[8]}
            containerStyle={{
              height: '80vh',
              width: '80vw'
            }}
          >

            {this.props.cabins.map(cabin =>
              <Marker className="marker"
                key={cabin._id}
                coordinates={[cabin.longitude, cabin.latitude]}
                anchor="bottom"
                onClick={() => this.handleMarkerClick(cabin)}
              >
                <img src={'../images/pin.png'}/>
              </Marker>
            )}

            {this.state.selectedCabin &&
              <Link to ={`/cabins/${this.state.selectedCabin._id}`} key={this.state.selectedCabin._id}>
                <Popup className="popup"
                  coordinates={[this.state.selectedCabin.longitude, this.state.selectedCabin.latitude]}
                  offset={{
                    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                  }}>

                  <div>
                    <h3 className=" popupname subtitle is-3">{this.state.selectedCabin.title}</h3>
                    <h3 className=" popupname subtitle is-4"> Price: {this.state.selectedCabin.price} | Sleeps: {this.state.selectedCabin.sleeps}</h3>
                    <img className="popupimage"src={this.state.selectedCabin.image} alt={this.state.selectedCabin.name}/>
                  </div>
                </Popup>
              </Link>
            }

          </Map>
        </div>
      )
    }
  }
}

export default IndexMap
