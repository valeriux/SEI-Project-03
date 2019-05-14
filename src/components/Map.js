// GET DATA IN INDEX.JS and RENDER INSIDE A DIV
// app.get('/postcode', (req, res) => {
//   rp({
//     method: 'GET',
//     url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${postcode}.json?&access_token=${process.env.access_token}`,
//     qs: {
//       q: req.query.postcode,
//       key: process.env.access_token
//     },
//     json: true
//   })
//
//     .then(response => {
//       const lat = response.features[0].geometry.coordinates[1]
//       const lng = response.features[0].geometry.coordinates[0]
//   }
//
// // CENTER(VIEWPORT) OF OUR MAP: 50.92269,-0.19607
// 
// //*** MAP COMPONENT ***
// import React from 'react'
// import mapboxgl from 'mapbox-gl'
//
// mapboxgl.accessToken = 'pk.eyJ1IjoibGhtdXJwaHkiLCJhIjoiY2p1dTNzcnNhMGRrMjN5cGl2cmFpNmR0bCJ9.dghNRjtlhnn5h6UTeqnrKA' // process.env.MAPBOX_TOKEN
//
// class Map extends React.Component {
// // browser was giving them their long and lat from their browers
//   componentDidMount() {
//     const { lng, lat, zoom } = this.props
//
//     this.map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: 'mapbox://styles/mapbox/streets-v9',
//       center: [lng, lat],
//       zoom
//     })
//     this.map.scrollZoom.disable()
//   }
//
//   componentDidUpdate() {
//     if(this.markers) return false
//
//     this.markers = this.props.cabins.map(cabin => {
//       const el = document.createElement('div')
//       el.className = 'marker'
//
//       new mapboxgl.Marker(el)
//         .setLngLat([cabin.lon, cabin.lat])
//         .addTo(this.map)
//     })
//   }
//
//   render() {
//
//     return (
//       <div ref={el => this.mapContainer = el} className="map" />
//     )
//   }
// }
//
// export default Map

// https://api.mapbox.com/geocoding/v5/mapbox.places/{postcode}.json?&access_token=pk.eyJ1IjoibGhtdXJwaHkiLCJhIjoiY2p1dTNzcnNhMGRrMjN5cGl2cmFpNmR0bCJ9.dghNRjtlhnn5h6UTeqnrKA

// API ARRAY POSITION : features[0].geometry.coordinates
