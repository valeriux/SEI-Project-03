import React from 'react'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_TOKEN
})

class IndexMap extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      data: null
    }
  }


  render() {
    console.log(this.props, 'THIS.PROPS')
    if (!this.props.cabins) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="location">
          <Map
            style='mapbox://styles/mapbox/streets-v9'
            center={[-1, 51.1010]}
            zoom={[6.5]}
            containerStyle={{
              height: '80vh',
              width: '80vw'
            }}
          >

            {this.props.cabins.map(cabin =>
              <Marker className="marker"
                key={cabin._id}
                coordinates={[cabin.longitude, cabin.latitude]}
                anchor="bottom">
                <img src={'../images/pin.png'}/>
              </Marker>
            )}

            {this.props.cabins.map(cabin =>
              <Popup className="popup"
                key={cabin._id}
                coordinates={[cabin.longitude, cabin.latitude]}
                offset={{
                  'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                }}>
                <h3>{cabin.title}</h3>
                <img className="popupimage"src={cabin.image} alt={cabin.name}/>
              </Popup>
            )}

          </Map>
        </div>
      )
    }
  }
}

export default IndexMap
